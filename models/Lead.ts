
```typescript
// models/Lead.ts
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, lowercase: true },
  // 其他潜在客户信息
  name: { type: String },
  message: { type: String },
  source: { type: String, default: 'website' },
  status: { type: String, enum: ['new', 'contacted', 'converted'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
```

