'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = '加载中...', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      {/* 魔法书动画 */}
      <div className="relative">
        <div className={`${sizeClasses[size]} relative`}>
          {/* 书本 */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm transform rotate-12 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm transform -rotate-12 animate-pulse delay-300"></div>
          
          {/* 魔法星星 */}
          <div className="absolute -top-1 -right-1 text-yellow-400 animate-bounce">
            ✨
          </div>
          <div className="absolute -bottom-1 -left-1 text-yellow-400 animate-bounce delay-500">
            ⭐
          </div>
        </div>
      </div>
      
      {text && (
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

