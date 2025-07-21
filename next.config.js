/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'standalone' 以支持 Vercel 混合应用部署
  // output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      // 添加 Supabase 存储域名
      "hoxobnyuyugywksztmhr.supabase.co",
    ],
  },
  // 添加环境变量配置
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUNA_API_URL: process.env.NEXT_PUBLIC_SUNA_API_URL,
  },
};

module.exports = nextConfig;

