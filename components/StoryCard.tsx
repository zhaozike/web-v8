'use client'

import { useState } from 'react'
import AnimatedButton from './AnimatedButton'

interface StoryCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  ageGroup: string
  duration: string
  rating: number
  isNew?: boolean
  isPopular?: boolean
  onRead?: () => void
  onFavorite?: () => void
}

export default function StoryCard({
  id,
  title,
  description,
  image,
  category,
  ageGroup,
  duration,
  rating,
  isNew = false,
  isPopular = false,
  onRead,
  onFavorite
}: StoryCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
    onFavorite?.()
  }

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 故事封面 */}
      <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center overflow-hidden">
        <span className={`text-6xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
          {image}
        </span>
        
        {/* 标签 */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
              新故事
            </span>
          )}
          {isPopular && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              🔥 热门
            </span>
          )}
        </div>

        {/* 收藏按钮 */}
        <button
          onClick={handleFavorite}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFavorited 
              ? 'bg-red-500 text-white scale-110' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:scale-110'
          }`}
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>

        {/* 播放按钮覆盖层 */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={onRead}
            className="bg-white/90 text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:bg-white transition-all transform hover:scale-110 shadow-lg"
          >
            ▶️
          </button>
        </div>

        {/* 魔法粒子效果 */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 left-8 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-12 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-700"></div>
          </div>
        )}
      </div>

      {/* 故事信息 */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 flex-1 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-medium text-gray-600">
              {rating}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-medium">
            {category}
          </span>
          <span className="flex items-center gap-1">
            👶 {ageGroup}
          </span>
          <span className="flex items-center gap-1">
            ⏱️ {duration}
          </span>
        </div>
        
        <div className="flex gap-2">
          <AnimatedButton
            variant="magic"
            size="md"
            onClick={onRead}
            className="flex-1"
          >
            📖 开始阅读
          </AnimatedButton>
          <button
            onClick={handleFavorite}
            className={`px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
              isFavorited
                ? 'bg-red-100 text-red-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {isFavorited ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}

