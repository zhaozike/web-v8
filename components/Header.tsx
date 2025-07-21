'use client'

import Link from 'next/link'
import { useAuth } from './AuthProvider'
import { useState } from 'react'

export default function Header() {
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌟</span>
            <span className="text-xl font-bold text-gray-800">魔法绘本</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
              首页
            </Link>
            <Link href="/create" className="text-gray-600 hover:text-gray-800 transition-colors">
              创作故事
            </Link>
            <Link href="/stories" className="text-gray-600 hover:text-gray-800 transition-colors">
              故事库
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition-colors">
              订阅计划
            </Link>
            <Link href="/help" className="text-gray-600 hover:text-gray-800 transition-colors">
              帮助中心
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {user.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="用户头像"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                      {user.email?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <span className="hidden md:block">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      个人中心
                    </Link>
                    <Link
                      href="/create"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      创作故事
                    </Link>
                    <Link
                      href="/pricing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      订阅管理
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      退出登录
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  登录
                </Link>
                <Link
                  href="/auth"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  注册
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/create"
                className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                创作故事
              </Link>
              <Link
                href="/stories"
                className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                故事库
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                订阅计划
              </Link>
              <Link
                href="/help"
                className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                帮助中心
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

