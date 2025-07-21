'use client'

import React, { useState } from 'react'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast'
import Image from 'next/image'

interface Story {
  id: string
  title: string
  content: string
  images: string[]
  audio?: string
  created_at: string
}

export default function StoryCreator() {
  const [prompt, setPrompt] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedStory, setGeneratedStory] = useState<Story | null>(null)
  
  const { user } = useAuth()

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  const generateStory = async () => {
    if (!prompt.trim()) {
      toast.error('请输入故事提示词')
      return
    }

    if (!user) {
      toast.error('请先登录')
      return
    }

    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/suna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          tags,
          userId: user.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '生成故事失败')
      }

      setGeneratedStory(data.story)
      toast.success('故事生成成功！')
      
    } catch (error) {
      console.error('Error generating story:', error)
      const errorMessage = error instanceof Error ? error.message : '生成故事时发生错误'
      toast.error(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          🎨 AI 魔法绘本创作
        </h2>
        <p className="text-center text-gray-600">
          输入您的想法，让 AI 为您创作独特的儿童绘本
        </p>
      </div>

      <div className="space-y-6">
        {/* 提示词输入 */}
        <div>
          <label htmlFor="prompt" className="block text-lg font-medium text-gray-700 mb-2">
            故事提示词 ✨
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="例如：一只小兔子在森林里寻找彩虹的故事..."
            className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
            disabled={isGenerating}
          />
          <p className="text-sm text-gray-500 mt-1">
            描述您想要的故事情节、角色或主题
          </p>
        </div>

        {/* 标签输入 */}
        <div>
          <label htmlFor="tags" className="block text-lg font-medium text-gray-700 mb-2">
            故事标签 🏷️
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="text-blue-600 hover:text-blue-800 ml-1"
                  disabled={isGenerating}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              id="tags"
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="添加标签，如：友谊、冒险、动物..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isGenerating}
            />
            <button
              onClick={addTag}
              disabled={isGenerating || !currentTag.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              添加
            </button>
          </div>
        </div>

        {/* 生成按钮 */}
        <div className="text-center">
          <button
            onClick={generateStory}
            disabled={isGenerating || !prompt.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                AI 正在创作中...
              </div>
            ) : (
              '🪄 开始创作魔法故事'
            )}
          </button>
        </div>

        {/* 生成进度提示 */}
        {isGenerating && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="animate-bounce text-2xl">🎭</div>
              <div>
                <p className="text-yellow-800 font-medium">AI 魔法师正在工作中...</p>
                <p className="text-yellow-600 text-sm">正在为您创作独特的故事，请稍候</p>
              </div>
            </div>
          </div>
        )}

        {/* 生成的故事展示 */}
        {generatedStory && (
          <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📖 您的魔法故事
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  {generatedStory.title || '无标题故事'}
                </h4>
                <div className="prose prose-lg max-w-none text-gray-700">
                  {generatedStory.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {generatedStory.images && generatedStory.images.length > 0 && (
                <div>
                  <h5 className="text-lg font-medium text-gray-700 mb-2">故事插图</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {generatedStory.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`故事插图 ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-3 pt-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                  💾 保存故事
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  📱 分享故事
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  📖 阅读模式
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

