# CS課業代寫服務官網

專業的CS課業代寫服務官網，採用Next.js 15建立，包含完整的前台展示和後台管理功能。

## 🚀 功能特色

### 前台功能
- **首頁展示**：吸引人的Hero section和服務介紹
- **服務項目**：詳細的程式設計服務說明和價格方案
- **關於我們**：團隊介紹和公司價值展示
- **聯絡我們**：完整的諮詢表單和聯絡資訊
- **技術文章**：程式設計教學和學習資源
- **響應式設計**：支援所有裝置尺寸

### 後台管理
- **控制台總覽**：業務數據和快速操作
- **文章管理**：完整的CRUD功能和內容管理
- **訂單管理**：客戶訂單追踪和狀態管理
- **客戶管理**：客戶資訊和關係管理
- **數據分析**：業務指標和報表功能

### SEO優化
- **完整的Meta標籤**：title、description、keywords
- **Open Graph支援**：社群媒體分享優化
- **結構化資料**：Schema.org標準實施
- **Sitemap生成**：自動生成XML sitemap
- **語言標籤**：繁體中文SEO支援

## 🛠 技術棧

- **框架**：Next.js 15 (App Router)
- **樣式**：Tailwind CSS 4
- **UI組件**：Heroicons、Lucide React
- **表單處理**：React Hook Form + Zod驗證
- **日期處理**：date-fns
- **TypeScript**：完整類型支援
- **SEO**：內建SEO優化功能

## 📦 安裝與執行

1. 複製專案
\`\`\`bash
git clone [repository-url]
cd out-sourcing
\`\`\`

2. 安裝依賴
\`\`\`bash
npm install
\`\`\`

3. 開發模式執行
\`\`\`bash
npm run dev
\`\`\`

4. 建置專案
\`\`\`bash
npm run build
\`\`\`

5. 生產模式執行
\`\`\`bash
npm start
\`\`\`

## 📁 專案結構

\`\`\`
app/
├── components/          # 共用組件
│   ├── Navigation.tsx   # 導航列
│   ├── Footer.tsx       # 頁腳
│   ├── HeroSection.tsx  # 首頁Hero區塊
│   ├── ServicesSection.tsx # 服務介紹
│   ├── StructuredData.tsx  # SEO結構化資料
│   └── SEOHead.tsx      # SEO頭部組件
├── admin/               # 後台管理
│   ├── layout.tsx       # 後台佈局
│   ├── page.tsx         # 控制台總覽
│   └── articles/        # 文章管理
├── blog/                # 技術文章
│   ├── page.tsx         # 文章列表
│   └── [slug]/          # 單篇文章
├── services/            # 服務頁面
├── about/               # 關於我們
├── contact/             # 聯絡我們
├── layout.tsx           # 根佈局
├── page.tsx             # 首頁
├── sitemap.ts           # Sitemap生成
├── robots.ts            # Robots.txt
└── globals.css          # 全域樣式
\`\`\`

## 🎨 設計特色

### 使用者體驗
- 直觀的導航設計
- 清晰的資訊架構
- 快速的頁面載入
- 無障礙友善設計

### 視覺設計
- 現代化的UI設計
- 一致的色彩系統
- 優雅的動畫效果
- 專業的版面配置

### 響應式設計
- 手機優先設計
- 平板和桌機最佳化
- 流暢的跨裝置體驗

## 🔧 自定義配置

### 品牌設定
在 \`app/layout.tsx\` 中修改：
- 網站標題和描述
- Open Graph設定
- 品牌色彩

### 聯絡資訊
在 \`app/components/Footer.tsx\` 中更新：
- 電子郵件地址
- Line ID
- 社群媒體連結

### 服務項目
在 \`app/components/ServicesSection.tsx\` 中修改：
- 服務類型
- 價格方案
- 服務說明

## 📈 SEO最佳化

本專案已實施完整的SEO策略：

1. **技術SEO**
   - 語意化HTML結構
   - 適當的標題層級
   - 圖片alt屬性
   - 內部連結優化

2. **內容SEO**
   - 關鍵字策略
   - 高品質內容
   - 定期更新機制

3. **性能優化**
   - 圖片優化
   - 代碼分割
   - 快取策略

## 🚀 部署建議

### Vercel部署
1. 連接GitHub倉庫
2. 設定環境變數
3. 自動部署配置

### 其他平台
- Netlify
- AWS Amplify
- Google Cloud Platform

## 📞 技術支援

如需技術支援或客製化開發，請聯絡：
- Email: contact@cs-homework.com
- Line ID: cs-homework-help

## 📄 授權

本專案採用 MIT 授權條款。

---

© 2024 CS課業代寫服務. 版權所有.