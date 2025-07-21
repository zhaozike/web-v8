import LoginForm from '@/components/LoginForm'

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🌟 魔法绘本世界
          </h1>
          <p className="text-gray-600">
            让每个孩子都能成为故事的主角
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

