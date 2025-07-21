'use client'

import { useAuth } from './AuthProvider'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function UserProfile() {
  const { user, signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut()
      toast.success('已成功登出')
    } catch (error) {
      toast.error('登出失败')
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        {user.user_metadata?.avatar_url && (
          <img
            src={user.user_metadata.avatar_url}
            alt="用户头像"
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user.user_metadata?.full_name || user.email}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">账户信息</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">用户ID:</span> {user.id}</p>
            <p><span className="font-medium">注册时间:</span> {new Date(user.created_at).toLocaleDateString('zh-CN')}</p>
            <p><span className="font-medium">最后登录:</span> {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('zh-CN') : '未知'}</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">我的绘本</h3>
          <p className="text-gray-600 text-sm">您还没有创作任何绘本</p>
          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            开始创作
          </button>
        </div>
        
        <div className="border-t pt-4">
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? '登出中...' : '登出'}
          </button>
        </div>
      </div>
    </div>
  )
}

