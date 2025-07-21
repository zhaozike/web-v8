import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/libs/supabase'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      )
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    const supabase = createServiceRoleClient()

    // 处理不同的事件类型
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        if (session.mode === 'subscription') {
          const { userId, planId } = session.metadata || {}
          
          if (userId && planId) {
            // 更新用户订阅状态
            const { error } = await supabase
              .from('user_subscriptions')
              .upsert({
                user_id: userId,
                plan_id: planId,
                stripe_customer_id: session.customer,
                stripe_subscription_id: session.subscription,
                status: 'active',
                current_period_start: new Date(),
                current_period_end: new Date(Date.now() + (planId === 'yearly' || planId === 'family' ? 365 : 30) * 24 * 60 * 60 * 1000),
                updated_at: new Date(),
              })

            if (error) {
              console.error('Error updating subscription:', error)
            }
          }
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        if (userId) {
          const { error } = await supabase
            .from('user_subscriptions')
            .update({
              status: subscription.status,
              current_period_start: new Date(subscription.current_period_start * 1000),
              current_period_end: new Date(subscription.current_period_end * 1000),
              updated_at: new Date(),
            })
            .eq('stripe_subscription_id', subscription.id)

          if (error) {
            console.error('Error updating subscription status:', error)
          }
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        
        const { error } = await supabase
          .from('user_subscriptions')
          .update({
            status: 'cancelled',
            updated_at: new Date(),
          })
          .eq('stripe_subscription_id', subscription.id)

        if (error) {
          console.error('Error cancelling subscription:', error)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        
        if (invoice.subscription) {
          const { error } = await supabase
            .from('user_subscriptions')
            .update({
              status: 'past_due',
              updated_at: new Date(),
            })
            .eq('stripe_subscription_id', invoice.subscription)

          if (error) {
            console.error('Error updating failed payment:', error)
          }
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error: unknown) {
    console.error('Webhook error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Webhook处理失败'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

