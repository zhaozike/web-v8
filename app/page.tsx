

import Link from 'next/link'
import Image from 'next/image'
import AnimatedButton from '@/components/AnimatedButton'
import FloatingElements from '@/components/FloatingElements'
import SEOHead from '@/components/SEOHead'

export default function HomePage() {
  return (
    <>
      <SEOHead />
      <FloatingElements />
      <div className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 overflow-hidden">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6 gradient-text animate-pulse">
              让每个孩子都能成为故事的主角
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              使用 AI 魔法为您的孩子创作独一无二的绘本故事。只需输入简单的想法，就能生成精美的插图、动听的音频和富有想象力的故事内容。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <AnimatedButton variant="magic" size="lg" asChild>
                <Link href="/create">
                  🪄 开始创作魔法故事
                </Link>
              </AnimatedButton>
              <AnimatedButton variant="secondary" size="lg" asChild>
                <Link href="/stories">
                  📚 浏览故事库
                </Link>
              </AnimatedButton>
            </div>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <Image src="/avatars/avatar-1.png" alt="User 1" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
                <Image src="/avatars/avatar-2.png" alt="User 2" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
                <Image src="/avatars/avatar-3.png" alt="User 3" width={40} height={40} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
              </div>
              <p className="text-gray-700 font-semibold">
                ⭐⭐⭐⭐⭐ 5.0
                <br />
                已有 <span className="text-purple-600">1000+</span> 家庭在使用
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20 px-4 bg-white bg-opacity-80 backdrop-blur-md rounded-t-3xl shadow-inner-lg">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              AI 魔法让故事创作变得简单
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Feature 1: AI 智能创作 */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3">AI 智能创作</h3>
                <p className="text-lg opacity-90">
                  只需输入简单的想法，AI 就能为您创作完整的绘本故事
                </p>
              </div>
              {/* Feature 2: 精美插图生成 */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-3">精美插图生成</h3>
                <p className="text-lg opacity-90">
                  AI 自动为每个故事场景生成高质量的插图，让故事更加生动
                </p>
              </div>
              {/* Feature 3: 音频朗读 */}
              <div className="bg-gradient-to-br from-green-500 to-lime-500 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold mb-3">音频朗读</h3>
                <p className="text-lg opacity-90">
                  专业的 AI 语音为每个故事提供温暖的朗读体验
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative z-10 py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              三步轻松创作您的魔法绘本
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center text-5xl font-bold text-purple-700 mb-6 shadow-lg float">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">输入故事想法</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  告诉 AI 您想要的故事主题、角色或关键词，越详细越好
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center text-5xl font-bold text-pink-700 mb-6 shadow-lg float delay-200">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">AI 智能创作</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AI 会自动为您生成完整的故事内容、精美插图和音频
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center text-5xl font-bold text-green-700 mb-6 shadow-lg float delay-400">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">享受阅读乐趣</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  与孩子一起沉浸在独特的魔法绘本世界中，随时随地阅读
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10 py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              立即开启您的魔法绘本之旅！
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-10">
              为您的孩子创造一个充满想象力和教育意义的专属故事世界
            </p>
            <AnimatedButton variant="magic" size="lg" asChild>
              <Link href="/create">
                🚀 立即创作
              </Link>
            </AnimatedButton>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-800 text-white py-10 px-4">
          <div className="max-w-6xl mx-auto text-center md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">AI魔法绘本</h3>
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Manus Cloud. All rights reserved.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg">
              <Link href="/stories" className="hover:text-purple-400 transition-colors">故事库</Link>
              <Link href="/pricing" className="hover:text-purple-400 transition-colors">订阅计划</Link>
              <Link href="/help" className="hover:text-purple-400 transition-colors">帮助中心</Link>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">隐私政策</Link>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">服务条款</Link>
            </nav>
            <div className="mt-6 md:mt-0 flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">💬</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📸</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

