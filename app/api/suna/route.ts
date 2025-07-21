import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@/libs/supabase'

export async function POST(request: NextRequest) {
  try {
    const { prompt, tags, userId } = await request.json()
    
    // 验证输入
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: '提示词不能为空' },
        { status: 400 }
      )
    }

    // 获取用户认证信息
    const supabase = createRouteHandlerClient(request)
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: '用户未认证' },
        { status: 401 }
      )
    }

    // 获取用户的访问令牌
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session?.access_token) {
      return NextResponse.json(
        { error: '无法获取访问令牌' },
        { status: 401 }
      )
    }

    // 调用 Suna AI 服务
    const sunaApiUrl = process.env.NEXT_PUBLIC_SUNA_API_URL || 'https://suna-1.learnwise.app/'
    
    const sunaResponse = await fetch(`${sunaApiUrl}api/generate-story`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        prompt,
        tags: tags || [],
        user_id: user.id,
      }),
    })

    if (!sunaResponse.ok) {
      const errorText = await sunaResponse.text()
      console.error('Suna AI API error:', errorText)
      return NextResponse.json(
        { error: 'AI 服务暂时不可用，请稍后重试' },
        { status: 500 }
      )
    }

    const sunaData = await sunaResponse.json()
    
    // 返回生成的故事数据
    return NextResponse.json({
      success: true,
      story: sunaData,
    })

  } catch (error: unknown) {
    console.error('Suna API proxy error:', error)
    const errorMessage = error instanceof Error ? error.message : '发生未知错误'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

