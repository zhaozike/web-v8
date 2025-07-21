'use client'

import { useAuth } from '@/components/AuthProvider'
import StoryCreator from '@/components/StoryCreator'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CreatePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto pt-8">
        <StoryCreator />
      </div>
    </div>
  )
}

