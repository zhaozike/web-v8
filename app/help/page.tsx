import React from 'react'

const faqs = [
  {
    question: "如何开始创作我的第一个故事？",
    answer: "很简单！点击\"开始创作\"按钮，输入您想要的故事主题或关键词，我们的 AI 就会为您生成一个完整的绘本故事，包括文字、插图和音频。"
  },
  {
    question: "AI 生成的故事质量如何？",
    answer: "我们的 AI 经过专业训练，能够创作出适合儿童的高质量故事。每个故事都包含教育意义，语言简洁易懂，插图精美生动。"
  },
  {
    question: "可以自定义故事内容吗？",
    answer: "当然可以！您可以指定故事的主角、场景、主题等元素。我们还支持添加标签来引导 AI 创作符合您期望的故事风格。"
  },
  {
    question: "订阅计划有什么区别？",
    answer: "免费用户每月可创作 3 个故事，付费用户可无限创作，并享受高清插图、音频朗读、故事导出等高级功能。"
  },
  {
    question: "故事适合什么年龄的孩子？",
    answer: "我们的故事主要面向 3-9 岁的儿童，您可以在创作时指定目标年龄，AI 会调整语言复杂度和故事内容。"
  },
  {
    question: "可以分享或打印故事吗？",
    answer: "付费用户可以将故事分享给朋友，或导出为 PDF 格式进行打印。免费用户可以在线阅读和收藏故事。"
  },
  {
    question: "如何取消订阅？",
    answer: "您可以随时在个人中心的订阅管理页面取消订阅。取消后，您仍可使用剩余的订阅期限，到期后自动转为免费计划。"
  },
  {
    question: "故事内容安全吗？",
    answer: "我们非常重视儿童安全，所有 AI 生成的内容都经过安全过滤，确保没有不适宜的内容。我们承诺为孩子们提供健康、积极的故事内容。"
  }
]

const guides = [
  {
    title: "快速入门指南",
    description: "5分钟学会使用我们的平台",
    icon: "🚀",
    steps: [
      "注册并登录账户",
      "点击\"开始创作\"",
      "输入故事想法",
      "等待 AI 生成",
      "享受阅读体验"
    ]
  },
  {
    title: "创作技巧",
    description: "如何获得更好的故事效果",
    icon: "💡",
    steps: [
      "使用具体的描述词",
      "添加相关标签",
      "指定目标年龄",
      "描述主角特征",
      "设定故事场景"
    ]
  },
  {
    title: "功能介绍",
    description: "了解平台的各项功能",
    icon: "⚙️",
    steps: [
      "AI 故事生成",
      "高清插图创作",
      "音频朗读功能",
      "互动阅读体验",
      "故事分享导出"
    ]
  }
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🤝 帮助中心
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们在这里帮助您更好地使用我们的 AI 绘本创作平台
          </p>
        </div>

        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索您的问题..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              🔍
            </button>
          </div>
        </div>

        {/* 快速指南 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            📖 快速指南
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{guide.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                  <p className="text-gray-600 text-sm">{guide.description}</p>
                </div>
                <ol className="space-y-2">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3 text-sm">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            ❓ 常见问题
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            还有其他问题？
          </h2>
          <p className="text-xl mb-6 opacity-90">
            我们的客服团队随时为您提供帮助
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-2xl block mb-2">📧</span>
              <h3 className="font-semibold mb-1">邮件支持</h3>
              <p className="text-sm opacity-90">support@manus-cloud.space</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-2xl block mb-2">💬</span>
              <h3 className="font-semibold mb-1">在线客服</h3>
              <p className="text-sm opacity-90">工作日 9:00-18:00</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-2xl block mb-2">📱</span>
              <h3 className="font-semibold mb-1">微信群</h3>
              <p className="text-sm opacity-90">扫码加入用户群</p>
            </div>
          </div>
        </div>

        {/* 反馈建议 */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            💭 意见反馈
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  反馈类型
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>功能建议</option>
                  <option>问题反馈</option>
                  <option>使用体验</option>
                  <option>其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  详细描述
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="请详细描述您的问题或建议..."
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系邮箱（可选）
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                提交反馈
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

