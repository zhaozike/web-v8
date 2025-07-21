'use client'

import { useState, useEffect } from 'react'

interface StoryPage {
  id: string
  content: string
  image?: string
  audio?: string
}

interface Story {
  id: string
  title: string
  pages: StoryPage[]
  totalPages: number
}

interface StoryReaderProps {
  story: Story
  onClose: () => void
}

export default function StoryReader({ story, onClose }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // 清理音频
    return () => {
      if (audio) {
        audio.pause()
        audio.src = ''
      }
    }
  }, [audio])

  const nextPage = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1)
      stopAudio()
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      stopAudio()
    }
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
    stopAudio()
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const playAudio = () => {
    const currentPageData = story.pages[currentPage]
    if (currentPageData?.audio) {
      if (audio) {
        audio.pause()
      }
      
      const newAudio = new Audio(currentPageData.audio)
      newAudio.onended = () => setIsPlaying(false)
      newAudio.onerror = () => {
        setIsPlaying(false)
        console.error('音频播放失败')
      }
      
      setAudio(newAudio)
      newAudio.play()
      setIsPlaying(true)
    }
  }

  const stopAudio = () => {
    if (audio) {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const currentPageData = story.pages[currentPage]

  const readerClass = isFullscreen 
    ? 'fixed inset-0 z-50 bg-white' 
    : 'max-w-4xl mx-auto bg-white rounded-lg shadow-lg'

  return (
    <div className={readerClass}>
      {/* 顶部控制栏 */}
      <div className="flex items-center justify-between p-4 border-b bg-gray-50">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl"
          >
            ← 返回
          </button>
          <h1 className="text-xl font-bold text-gray-800">{story.title}</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {currentPage + 1} / {story.pages.length}
          </span>
          <button
            onClick={toggleFullscreen}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded"
          >
            {isFullscreen ? '🗗' : '⛶'}
          </button>
        </div>
      </div>

      {/* 故事内容区域 */}
      <div className={`flex-1 ${isFullscreen ? 'h-screen' : 'h-96'} relative overflow-hidden`}>
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-2xl mx-auto p-8 text-center">
            {/* 故事图片 */}
            {currentPageData?.image && (
              <div className="mb-6">
                <img
                  src={currentPageData.image}
                  alt={`第 ${currentPage + 1} 页插图`}
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                  style={{ maxHeight: isFullscreen ? '50vh' : '200px' }}
                />
              </div>
            )}
            
            {/* 故事文本 */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 text-lg leading-relaxed">
                {currentPageData?.content}
              </p>
            </div>
            
            {/* 音频控制 */}
            {currentPageData?.audio && (
              <div className="mt-6">
                <button
                  onClick={isPlaying ? stopAudio : playAudio}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  {isPlaying ? '⏸️ 暂停朗读' : '🔊 开始朗读'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 翻页按钮 */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all"
        >
          ←
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === story.pages.length - 1}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-lg transition-all"
        >
          →
        </button>
      </div>

      {/* 底部导航 */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center justify-center gap-2">
          {story.pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            上一页
          </button>
          
          <button
            onClick={nextPage}
            disabled={currentPage === story.pages.length - 1}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  )
}

