# AI魔法绘本 - 前端项目

一个基于 Next.js 和 AI 技术的儿童绘本创作平台，让每个孩子都能成为故事的主角。

## 🌟 项目特色

- **AI 智能创作**: 使用 Suna AI 生成独特的儿童故事
- **精美插图**: AI 自动生成高质量的故事插图
- **音频朗读**: 专业的 AI 语音朗读功能
- **互动体验**: 丰富的阅读互动和动画效果
- **用户管理**: 基于 Supabase 的完整用户认证系统
- **订阅付费**: 集成 Stripe 的灵活订阅计划

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + DaisyUI
- **认证**: Supabase Auth
- **数据库**: Supabase PostgreSQL
- **支付**: Stripe
- **AI服务**: Suna AI Agent
- **部署**: Vercel
- **语言**: TypeScript

## 📦 安装和运行

### 环境要求

- Node.js 18+
- npm 或 yarn

### 本地开发

1. 克隆项目
```bash
git clone <repository-url>
cd manus-storybook-frontend
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
复制 `.env.example` 为 `.env.local` 并填入相应的配置：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Suna AI 配置
NEXT_PUBLIC_SUNA_API_URL=your_suna_api_url

# Stripe 配置
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_MONTHLY_PRICE_ID=your_monthly_price_id
STRIPE_YEARLY_PRICE_ID=your_yearly_price_id
STRIPE_FAMILY_PRICE_ID=your_family_price_id

# 网站配置
SITE_URL=http://localhost:3000
```

4. 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 项目结构

```
manus-storybook-frontend/
├── app/                    # Next.js App Router 页面
│   ├── api/               # API 路由
│   ├── auth/              # 认证页面
│   ├── create/            # 故事创作页面
│   ├── stories/           # 故事库页面
│   ├── pricing/           # 订阅计划页面
│   ├── help/              # 帮助中心页面
│   └── profile/           # 用户资料页面
├── components/            # React 组件
│   ├── AuthProvider.tsx   # 认证提供者
│   ├── StoryCreator.tsx   # 故事创作组件
│   ├── StoryReader.tsx    # 故事阅读组件
│   ├── PricingPlans.tsx   # 订阅计划组件
│   └── ...
├── libs/                  # 工具库
│   └── supabase.ts        # Supabase 客户端配置
├── public/                # 静态资源
└── styles/                # 样式文件
```

## 🔧 核心功能

### 用户认证
- 邮箱注册/登录
- 密码重置
- 会话管理
- 用户资料管理

### 故事创作
- AI 故事生成
- 自定义提示词
- 标签系统
- 故事保存和管理

### 故事阅读
- 交互式阅读界面
- 音频朗读
- 收藏功能
- 分享功能

### 订阅管理
- 多种订阅计划
- Stripe 支付集成
- 订阅状态管理
- 使用量统计

## 🚀 部署到 Vercel

### 自动部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

### 环境变量配置

在 Vercel 项目设置中添加以下环境变量：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SUNA_API_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_MONTHLY_PRICE_ID`
- `STRIPE_YEARLY_PRICE_ID`
- `STRIPE_FAMILY_PRICE_ID`
- `SITE_URL`

### 域名配置

1. 在 Vercel 中添加自定义域名
2. 更新 `SITE_URL` 环境变量
3. 配置 DNS 记录

## 🔗 外部服务集成

### Supabase 配置

1. 创建 Supabase 项目
2. 设置认证提供商
3. 创建必要的数据表
4. 配置 RLS 策略

### Stripe 配置

1. 创建 Stripe 账户
2. 设置产品和价格
3. 配置 Webhook 端点
4. 测试支付流程

### Suna AI 配置

1. 获取 Suna AI API 访问权限
2. 配置 API 端点
3. 测试故事生成功能

## 📊 性能优化

- 图片懒加载
- 代码分割
- SEO 优化
- 缓存策略
- Bundle 分析

## 🧪 测试

```bash
# 类型检查
npm run type-check

# 构建测试
npm run build

# 启动生产服务器
npm run start
```

## 📝 开发指南

### 代码规范
- 使用 TypeScript
- 遵循 ESLint 规则
- 组件使用 PascalCase
- 文件使用 kebab-case

### 提交规范
- feat: 新功能
- fix: 修复问题
- docs: 文档更新
- style: 样式调整
- refactor: 代码重构

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。

## 📞 支持

如有问题，请联系：
- 邮箱: support@manus-cloud.space
- 文档: [项目文档](https://docs.manus-cloud.space)
- 问题反馈: [GitHub Issues](https://github.com/your-repo/issues)

