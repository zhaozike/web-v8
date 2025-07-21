import React from 'react'

// 模拟故事数据
const stories = [
  {
    id: 1,
    title: "小兔子的彩虹之旅",
    description: "一只勇敢的小兔子踏上了寻找传说中彩虹的冒险之旅",
    image: "🌈",
    category: "冒险",
    ageGroup: "3-6岁",
    duration: "5分钟",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    title: "魔法森林的秘密",
    description: "小女孩发现了一个充满魔法的神秘森林",
    image: "🌲",
    category: "魔法",
    ageGroup: "4-8岁", 
    duration: "7分钟",
    rating: 4.9,
    isPopular: true
  },
  {
    id: 3,
    title: "勇敢的小海豚",
    description: "小海豚帮助迷路的小鱼找到回家的路",
    image: "🐬",
    category: "友谊",
    ageGroup: "3-7岁",
    duration: "6分钟", 
    rating: 4.7
  },
  {
    id: 4,
    title: "星星的愿望",
    description: "一颗小星星想要实现地球上孩子们的愿望",
    image: "⭐",
    category: "梦想",
    ageGroup: "5-9岁",
    duration: "8分钟",
    rating: 4.6
  },
  {
    id: 5,
    title: "小猫咪的烘焙店",
    description: "小猫咪开了一家神奇的烘焙店，每个蛋糕都有魔法",
    image: "🐱",
    category: "生活",
    ageGroup: "3-6岁",
    duration: "5分钟",
    rating: 4.5
  },
  {
    id: 6,
    title: "月亮上的兔子",
    description: "嫦娥的玉兔想要回到地球看看",
    image: "🌙",
    category: "神话",
    ageGroup: "4-8岁",
    duration: "9分钟",
    rating: 4.8
  }
]

const categories = ["全部", "冒险", "魔法", "友谊", "梦想", "生活", "神话"]
const ageGroups = ["全部", "3-6岁", "4-8岁", "5-9岁"]

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📚 魔法故事库
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们精心创作的儿童绘本故事，每一个都充满想象力和教育意义
          </p>
        </div>

        {/* 筛选器 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">故事类型</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === "全部" 
                        ? "bg-blue-600 text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">适合年龄</h3>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      age === "全部"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 故事网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* 故事封面 */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-6xl">{story.image}</span>
                
                {/* 标签 */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {story.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      新故事
                    </span>
                  )}
                  {story.isPopular && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      热门
                    </span>
                  )}
                </div>

                {/* 播放按钮 */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white/90 text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-white transition-colors">
                    ▶️
                  </button>
                </div>
              </div>

              {/* 故事信息 */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">
                    {story.title}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium text-gray-600">
                      {story.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {story.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span>{story.ageGroup}</span>
                  <span>{story.duration}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    开始阅读
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    💝
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 加载更多 */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
            加载更多故事
          </button>
        </div>

        {/* 创作提示 */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            没有找到心仪的故事？
          </h2>
          <p className="text-xl mb-6 opacity-90">
            使用我们的 AI 创作工具，为您的孩子定制专属的绘本故事
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            🪄 开始创作
          </button>
        </div>
      </div>
    </div>
  )
}

