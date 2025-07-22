

```typescript
// app/api/lead/route.ts
import dbConnect from '@/libs/mongoose'; // 导入 MongoDB 连接函数
import Lead from '@/models/Lead'; // 导入 Lead 模型
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await dbConnect(); // 连接 MongoDB
    
    const body = await request.json();
    const { name, email, message } = body;
    
    const lead = new Lead({
      name,
      email,
      message
    });
    
    await lead.save();
    
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect(); // 连接 MongoDB
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
```

