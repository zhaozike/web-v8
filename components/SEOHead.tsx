import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEOHead({
  title = 'AI魔法绘本 - 为孩子创作独特的故事',
  description = '使用AI技术为您的孩子创作独一无二的绘本故事。包含精美插图、音频朗读和互动体验。适合3-9岁儿童。',
  keywords = 'AI绘本,儿童故事,人工智能,绘本创作,儿童教育,故事生成,插图,音频朗读',
  image = '/og-image.jpg',
  url = 'https://storybook.manus-cloud.space',
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title.includes('AI魔法绘本') ? title : `${title} | AI魔法绘本`
  
  return (
    <Head>
      {/* 基础SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Manus Cloud" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="AI魔法绘本" />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* 移动端优化 */}
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AI魔法绘本" />
      
      {/* 图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* 预连接到外部资源 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AI魔法绘本",
            "description": description,
            "url": url,
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "CNY"
            },
            "author": {
              "@type": "Organization",
              "name": "Manus Cloud"
            }
          })
        }}
      />
    </Head>
  )
}

