
```typescript
// libs/gpt.ts
import axios from 'axios';

export const sendSunaAI = async (
  messages: any[], // 根据 Suna AI 的实际消息格式调整
  userId: string, // 用户ID，用于 Suna AI 识别用户
  maxTokens: number = 100,
  temperature: number = 1
) => {
  const sunaApiUrl = process.env.NEXT_PUBLIC_SUNA_API_URL;
  const sunaApiKey = process.env.SUNA_API_KEY; // 假设 Suna AI 使用单独的 API Key

  if (!sunaApiUrl || !sunaApiKey) {
    throw new Error('Suna AI API URL or Key is not configured.');
  }

  const body = {
    model: 'suna-ai-model', // 根据 Suna AI 实际模型名称调整
    messages: messages,
    max_tokens: maxTokens,
    temperature: temperature,
    user: userId, // 传递用户ID给 Suna AI
  };

  const options = {
    headers: {
      'Authorization': `Bearer ${sunaApiKey}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    console.log('Asking Suna AI >>>');
    const response = await axios.post(sunaApiUrl, body, options);
    console.log('Suna AI Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error calling Suna AI:', error.response ? error.response.data : error.message);
    throw error;
  }
};
```
