'use client'

import { useState } from 'react'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast'

interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  popular?: boolean
  color: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: '免费体验',
    price: 0,
    period: '永久',
    features: [
      '每月创作 3 个故事',
      '基础故事模板',
      '标准画质插图',
      '社区支持'
    ],
    color: 'gray'
  },
  {
    id: 'monthly',
    name: '月度会员',
    price: 29,
    period: '月',
    features: [
      '无限故事创作',
      '高级故事模板',
      '高清插图生成',
      '音频朗读功能',
      '故事分享功能',
      '优先客服支持'
    ],
    popular: true,
    color: 'blue'
  },
  {
    id: 'yearly',
    name: '年度会员',
    price: 299,
    period: '年',
    features: [
      '无限故事创作',
      '所有高级功能',
      '4K 超清插图',
      '专业音频朗读',
      '故事导出 PDF',
      '家庭账户管理',
      '专属客服支持',
      '新功能抢先体验'
    ],
    color: 'purple'
  },
  {
    id: 'family',
    name: '家庭套餐',
    price: 499,
    period: '年',
    features: [
      '支持 5 个子账户',
      '所有年度会员功能',
      '家长控制面板',
      '学习进度跟踪',
      '教育资源库',
      '专属家庭顾问',
      '线下活动优先权'
    ],
    color: 'green'
  }
]

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const { user } = useAuth()

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      toast.error('请先登录')
      return
    }

    if (planId === 'free') {
      toast.success('您已在使用免费计划')
      return
    }

    setSelectedPlan(planId)
    setIsProcessing(true)

    try {
      const response = await fetch('/api/payments/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          userId: user.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '创建支付会话失败')
      }

      // 重定向到支付页面
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('未收到支付链接')
      }

    } catch (error) {
      console.error('Payment error:', error)
      const errorMessage = error instanceof Error ? error.message : '支付处理失败'
      toast.error(errorMessage)
    } finally {
      setIsProcessing(false)
      setSelectedPlan(null)
    }
  }

  const getColorClasses = (color: string, popular?: boolean) => {
    const baseClasses = {
      gray: 'border-gray-200 bg-white',
      blue: 'border-blue-200 bg-blue-50',
      purple: 'border-purple-200 bg-purple-50',
      green: 'border-green-200 bg-green-50'
    }

    const buttonClasses = {
      gray: 'bg-gray-600 hover:bg-gray-700',
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      green: 'bg-green-600 hover:bg-green-700'
    }

    return {
      card: `${baseClasses[color as keyof typeof baseClasses]} ${popular ? 'ring-2 ring-blue-500 scale-105' : ''}`,
      button: buttonClasses[color as keyof typeof buttonClasses]
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          选择您的魔法计划 ✨
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          为您的孩子选择最适合的创作计划，开启无限想象之旅
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => {
          const colorClasses = getColorClasses(plan.color, plan.popular)
          const isSelected = selectedPlan === plan.id
          const isLoading = isProcessing && isSelected

          return (
            <div
              key={plan.id}
              className={`relative rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg ${colorClasses.card}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    🌟 最受欢迎
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={isLoading}
                className={`w-full text-white py-3 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses.button}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    处理中...
                  </div>
                ) : plan.id === 'free' ? (
                  '开始免费体验'
                ) : (
                  '立即订阅'
                )}
              </button>

              {plan.id === 'yearly' && (
                <p className="text-center text-sm text-green-600 mt-2 font-medium">
                  💰 相比月付节省 ¥49
                </p>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">
            🎁 特别优惠
          </h3>
          <p className="text-yellow-700">
            新用户注册即可获得 7 天免费试用所有高级功能！
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>所有订阅均可随时取消 • 支持支付宝、微信支付 • 7天无理由退款</p>
      </div>
    </div>
  )
}

