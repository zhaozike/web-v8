
```typescript
// models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Supabase Auth 已经管理的核心用户ID，用于关联
  supabaseId: { type: String, unique: true, sparse: true }, 
  name: { type: String, trim: true },
  email: { type: String, trim: true, lowercase: true, unique: true },
  image: { type: String },
  // 与 Stripe 相关的字段
  customerId: { type: String },
  priceId: { type: String },
  // 其他自定义用户数据
  preferences: {
    theme: { type: String, default: 'light' },
    language: { type: String, default: 'en' }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
```


