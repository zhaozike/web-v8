/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://storybook.manus-cloud.space',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/auth/*',
    '/payment/*',
    '/server-sitemap.xml'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/auth/',
          '/payment/',
          '/_next/',
          '/static/'
        ]
      }
    ],
    additionalSitemaps: [
      'https://storybook.manus-cloud.space/server-sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // 自定义页面优先级
    const priorities = {
      '/': 1.0,
      '/create': 0.9,
      '/stories': 0.9,
      '/pricing': 0.8,
      '/help': 0.7
    }

    // 自定义更新频率
    const changefreqs = {
      '/': 'daily',
      '/create': 'weekly',
      '/stories': 'daily',
      '/pricing': 'monthly',
      '/help': 'monthly'
    }

    return {
      loc: path,
      changefreq: changefreqs[path] || 'weekly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://storybook.manus-cloud.space${path}`,
          hreflang: 'zh-CN'
        }
      ]
    }
  }
}

