import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// 簡單的速率限制快取 (在生產環境中建議使用 Redis)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15分鐘
  const maxRequests = 5; // 每個 IP 15分鐘內最多 5 次請求

  const record = rateLimitCache.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitCache.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  // CORS 處理
  const origin = request.headers.get('origin');
  const isProduction = process.env.NODE_ENV === 'production';
  
  // 根據環境動態設定允許的來源
  const allowedOrigins = [
    'https://www.chan-codeguy.com'
  ];

  if (!isProduction) {
    allowedOrigins.push('http://localhost:3000');
  }
  

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: '未授權的來源' },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { name, telegram, subject, urgency, description, budget, deadline } = body;

    // 輸入驗證
    if (!name || !telegram || !subject || !description) {
      return NextResponse.json(
        { error: '缺少必要欄位' },
        { status: 400 }
      );
    }

    // 驗證資料格式
    if (name.length > 100 || telegram.length > 50 || description.length > 2000) {
      return NextResponse.json(
        { error: '資料格式不正確' },
        { status: 400 }
      );
    }

    // 獲取用戶 IP 地址
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const userIp = forwarded?.split(',')[0] || realIp || '未知';

    // 速率限制檢查
    if (!checkRateLimit(userIp)) {
      return NextResponse.json(
        { error: '請求過於頻繁，請稍後再試' },
        { status: 429 }
      );
    }

    // 驗證環境變數
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('缺少必要的環境變數');
      return NextResponse.json(
        { error: '伺服器配置錯誤' },
        { status: 500 }
      );
    }

    // 格式化訊息
    const urgencyLabels = {
      low: '一般 (7天以上)',
      medium: '中等 (3-7天)',
      high: '緊急 (1-3天)',
      urgent: '非常緊急 (24小時內)'
    };

    const budgetLabels = {
      'under-500': '$500 以下',
      '500-1000': '$500 - $1000',
      '1000-1600': '$1000 - $1600',
      '1600-2000': '$1600 - $2000',
      'over-2000': '$2000 以上'
    };

    const message = `🔔 *新的諮詢請求*

👤 *客戶姓名*: ${name}
📱 *Telegram*: ${telegram}
📋 *作業類型*: ${subject}
⚡ *緊急程度*: ${urgencyLabels[urgency as keyof typeof urgencyLabels] || '未指定'}
📅 *截止日期*: ${deadline || '未指定'}
💰 *預算範圍*: ${budget ? budgetLabels[budget as keyof typeof budgetLabels] : '未指定'}

📝 *詳細需求*:
${description}

---
⏰ 提交時間: ${new Date().toLocaleString('zh-HK', { timeZone: 'Asia/Hong_Kong' })}
🌐 來源: 網站表單
🌍 IP 地址: ${userIp}`;

    // 發送到 Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      // 不記錄詳細錯誤資訊，避免洩露敏感資料
      console.error('Telegram API 請求失敗，狀態碼:', telegramResponse.status);
      return NextResponse.json(
        { error: '發送訊息失敗' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    // 不記錄詳細錯誤資訊
    console.error('API 處理錯誤');
    return NextResponse.json(
      { error: '伺服器錯誤' },
      { status: 500 }
    );
  }
}
