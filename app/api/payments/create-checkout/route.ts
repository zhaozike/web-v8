import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@/libs/supabase'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

const priceMapping = {
  monthly: process.env.STRIPE_MONTHLY_PRICE_ID || 'price_monthly',
  yearly: process.env.STRIPE_YEARLY_PRICE_ID || 'price_yearly',
  family: process.env.STRIPE_FAMILY_PRICE_ID || 'price_family',
}

export async function POST(request: NextRequest) {
  try {
    const { planId, userId } = await request.json()

    // 验证输入
    if (!planId || !userId) {
      return NextResponse.json(
        { error: '缺少必要参数' },
        { status: 400 }
      )
    }

    if (planId === 'free') {
      return NextResponse.json(
        { error: '免费计划无需支付' },
        { status: 400 }
      )
    }

    // 验证用户认证
    const supabase = createRouteHandlerClient(request)
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user || user.id !== userId) {
      return NextResponse.json(
        { error: '用户未认证' },
        { status: 401 }
      )
    }

    // 获取对应的价格ID
    const priceId = priceMapping[planId as keyof typeof priceMapping]
    if (!priceId) {
      return NextResponse.json(
        { error: '无效的订阅计划' },
        { status: 400 }
      )
    }

    // 创建 Stripe Checkout 会话
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
      metadata: {
        userId: user.id,
        planId: planId,
      },
      subscription_data: {
        metadata: {
          userId: user.id,
          planId: planId,
        },
      },
    })

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    })

  } catch (error: unknown) {
    console.error('Payment checkout error:', error)
    const errorMessage = error instanceof Error ? error.message : '创建支付会话失败'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

