import React from "react";

const features = [
  {
    title: "AI 智能创作",
    description: "只需输入简单的想法，AI 就能为您创作完整的绘本故事",
    styles: "bg-gradient-to-br from-purple-500 to-pink-500 text-white",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch px-6">
        <div className="w-full bg-white/20 backdrop-blur-sm rounded-t-3xl h-full p-6">
          <p className="font-medium uppercase tracking-wide text-white/80 text-sm mb-3">
            输入您的想法
          </p>
          <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-4 h-32 group-hover:bg-white/40 transition-all">
            <div className="absolute left-4 top-4 group-hover:hidden flex items-center text-white">
              <span>一只小兔子在森林里寻找彩虹</span>
              <span className="w-[2px] h-6 bg-white animate-pulse ml-1"></span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-500 text-white">
              一只勇敢的小兔子踏上了寻找传说中彩虹的冒险之旅...
            </div>
            <button className="btn bg-white text-purple-600 absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 duration-1000 border-0 hover:bg-gray-100">
              🪄 开始创作
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "精美插图生成",
    description: "AI 自动为每个故事场景生成高质量的插图，让故事更加生动",
    styles: "md:col-span-2 bg-gradient-to-br from-blue-400 to-cyan-400 text-white",
    demo: (
      <div className="px-6 flex gap-4 overflow-hidden">
        {[
          {
            image: "🌈",
            title: "彩虹桥",
            description: "小兔子发现了美丽的彩虹桥",
            transition: "group-hover:-translate-y-4 duration-500",
          },
          {
            image: "🏰",
            title: "魔法城堡", 
            description: "城堡里住着友善的魔法师",
            transition: "group-hover:translate-y-2 duration-700",
          },
          {
            image: "🦋",
            title: "蝴蝶花园",
            description: "花园里飞舞着彩色蝴蝶",
            transition: "group-hover:-translate-y-6 duration-300",
          },
        ].map((item, i) => (
          <div
            className={`bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex-1 ${item.transition}`}
            key={i}
          >
            <div className="text-4xl mb-2 text-center">{item.image}</div>
            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-white/80">{item.description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "音频朗读",
    description: "专业的 AI 语音为每个故事提供温暖的朗读体验",
    styles: "md:col-span-2 bg-gradient-to-br from-green-400 to-emerald-500 text-white",
    demo: (
      <div className="px-6 py-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
            <div>
              <h4 className="font-semibold">小兔子的彩虹之旅</h4>
              <p className="text-sm text-white/80">正在播放...</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all">
              <span className="text-lg">⏸️</span>
            </button>
            
            <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full w-1/3 rounded-full group-hover:w-1/2 transition-all duration-1000"></div>
            </div>
            
            <span className="text-sm text-white/80">2:34</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "互动阅读体验",
    description: "支持翻页动画、点击互动，让孩子沉浸在故事世界中",
    styles: "bg-gradient-to-br from-orange-400 to-red-400 text-white",
    demo: (
      <div className="px-6 py-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 h-40 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
              📖
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm group-hover:bg-white/40 transition-all">
              ←
            </button>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
            <button className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm group-hover:bg-white/40 transition-all">
              →
            </button>
          </div>
        </div>
      </div>
    ),
  },
];

const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <div className="text-center">
          <h2 className="max-w-4xl mx-auto font-black text-4xl md:text-6xl tracking-[-0.01em] text-gray-800 mb-6">
            AI 魔法让故事创作
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              变得简单
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们的 AI 技术为每个孩子提供独一无二的绘本创作体验
          </p>
        </div>
        
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-2xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-90 text-sm lg:text-base">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🌟 为什么选择我们的 AI 绘本平台？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-semibold text-gray-800">专业品质</h4>
                  <p className="text-gray-600 text-sm">AI 生成的插图达到专业绘本水准</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold text-gray-800">快速创作</h4>
                  <p className="text-gray-600 text-sm">几分钟内完成一个完整的绘本故事</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💝</span>
                <div>
                  <h4 className="font-semibold text-gray-800">个性定制</h4>
                  <p className="text-gray-600 text-sm">每个故事都是为您的孩子量身定制</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

