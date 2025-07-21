'use client'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 浮动的魔法元素 */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce delay-1000">
        🌟
      </div>
      <div className="absolute top-40 right-20 text-3xl animate-pulse delay-2000">
        ✨
      </div>
      <div className="absolute top-60 left-1/4 text-2xl animate-bounce delay-3000">
        🎨
      </div>
      <div className="absolute bottom-40 right-10 text-3xl animate-pulse delay-4000">
        📚
      </div>
      <div className="absolute bottom-20 left-20 text-2xl animate-bounce delay-5000">
        🦄
      </div>
      <div className="absolute top-1/3 right-1/3 text-xl animate-pulse delay-6000">
        🌈
      </div>
      
      {/* 渐变背景球 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-5000"></div>
    </div>
  )
}

