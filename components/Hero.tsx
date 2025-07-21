import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 rounded-3xl mx-4 my-8">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <span className="text-2xl">🌟</span>
          <span className="text-sm font-medium text-gray-700">AI 驱动的儿童绘本创作平台</span>
        </div>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight text-gray-800 leading-tight">
          让每个孩子都能成为
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            故事的主角
          </span>
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          使用 AI 魔法为您的孩子创作独一无二的绘本故事。只需输入简单的想法，就能生成精美的插图、动听的音频和富有想象力的故事内容。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/create"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg text-center"
          >
            🪄 开始创作魔法故事
          </Link>
          
          <Link 
            href="/stories"
            className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gray-200 text-center"
          >
            📚 浏览故事库
          </Link>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>无限创意故事</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>高清AI插图</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>音频朗读</span>
          </div>
        </div>

        {/* 用户评价头像 */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              小
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              明
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              丽
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              华
            </div>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-gray-600">已有 1000+ 家庭在使用</p>
          </div>
        </div>
      </div>

      <div className="lg:w-full relative">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="儿童阅读绘本"
            className="w-full rounded-2xl shadow-2xl"
            priority={true}
            width={500}
            height={500}
          />
          
          {/* 浮动元素 */}
          <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
            <span className="text-2xl">🎨</span>
          </div>
          
          <div className="absolute -top-2 -right-2 bg-white rounded-full p-3 shadow-lg animate-pulse">
            <span className="text-2xl">📖</span>
          </div>
          
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg animate-bounce delay-300">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

