import { createClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 浏览器端客户端
export const createBrowserSupabaseClient = () =>
  createBrowserClient(supabaseUrl, supabaseAnonKey)

// 服务器端客户端（用于API路由）
export const createRouteHandlerClient = (request: Request) => {
  const { cookies } = require('next/headers')
  
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.headers.get('cookie')?.split(';')
          .find(c => c.trim().startsWith(`${name}=`))
          ?.split('=')[1]
      },
      set(name: string, value: string, options: any) {
        // 在API路由中设置cookie
      },
      remove(name: string, options: any) {
        // 在API路由中删除cookie
      },
    },
  })
}

// 服务器端客户端（用于服务器组件）
export const createServerSupabaseClient = () => {
  const { cookies } = require('next/headers')
  const cookieStore = cookies()
  
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: any) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: any) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  })
}

// Service Role 客户端（用于管理操作）
export const createServiceRoleClient = () =>
  createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )

// 默认导出浏览器客户端
export default createBrowserSupabaseClient()

