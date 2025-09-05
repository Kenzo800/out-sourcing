import { Metadata } from 'next';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CircleStackIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CommandLineIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '服務項目',
  description: '專業的CS課業代寫服務，涵蓋Java、Python、C++、Web開發、資料結構與演算法等各種程式設計作業。',
};

const services = [
  {
    id: 'java',
    name: 'Java 程式設計',
    description: '從基礎語法到企業級應用開發，包含Spring Boot、Maven、Gradle等框架。',
    icon: CodeBracketIcon,
    pricing: [
      { level: '基礎作業', price: '$200-500', description: '基本語法、迴圈、陣列、函數' },
      { level: '物件導向', price: '$500-1600', description: '類別設計、繼承、多型、介面' },
      { level: '進階專案', price: '視需求而定', description: 'Spring Boot、資料庫整合、API開發' },
    ],
    features: [
      '基礎語法教學',
      '物件導向設計',
      'Spring Framework',
      'Maven/Gradle 建置',
      '單元測試',
      'GUI 開發',
    ],
  },
  {
    id: 'python',
    name: 'Python 開發',
    description: '全方位Python開發服務，涵蓋web開發、數據分析、機器學習等領域。',
    icon: CommandLineIcon,
    pricing: [
      { level: '基礎作業', price: '$200-500', description: '語法基礎、資料處理、檔案操作' },
      { level: '數據科學', price: '視需求而定', description: '機器學習、數據分析、視覺化' },
      { level: 'Web 開發', price: '視需求而定', description: 'Django/Flask、API設計、資料庫' },
    ],
    features: [
      'Django/Flask 框架',
      '數據分析',
      '機器學習',
      'Web 爬蟲',
      '自動化腳本',
      'API 開發',
    ],
  },
  {
    id: 'cpp',
    name: 'C/C++ 程式',
    description: '系統程式設計專家，精通記憶體管理、效能優化和底層程式開發。',
    icon: CpuChipIcon,
    pricing: [
      { level: '基礎作業', price: '$300-600', description: '語法基礎、指標、陣列、結構' },
      { level: '進階程式', price: '$600-1600', description: 'CLI、模板、物件導向' },
      { level: '系統程式', price: '視需求而定', description: '系統呼叫、多執行緒、網路程式' },
    ],
    features: [
      '指標與記憶體管理',
      'STL 標準函式庫',
      '模板程式設計',
      '多執行緒程式',
      '系統程式設計',
      '效能優化',
    ],
  },
  {
    id: 'web',
    name: 'Web 開發',
    description: '現代化網頁開發，包含前端框架、後端API、資料庫設計和部署。',
    icon: GlobeAltIcon,
    pricing: [
      { level: '前端開發', price: '視需求而定', description: 'React/Vue.js、CSS、JavaScript' },
      { level: '後端開發', price: '視需求而定', description: 'Node.js、Express、資料庫' },
      { level: '全端專案', price: '視需求而定', description: '完整網站、部署、優化' },
    ],
    features: [
      'React/Vue.js 前端',
      'Node.js/Express 後端',
      'RESTful API 設計',
      '資料庫整合',
      'RWD 響應式設計',
      '部署與優化',
    ],
  },
  {
    id: 'algorithms',
    name: '資料結構與演算法',
    description: '深入理解各種資料結構和演算法，包含複雜度分析和最佳化技巧。',
    icon: ChartBarIcon,
    pricing: [
      { level: '基礎結構', price: '$400-800', description: '陣列、串列、堆疊、佇列' },
      { level: '進階結構', price: '視需求而定', description: '樹、圖、雜湊表、堆積' },
      { level: '演算法設計', price: '視需求而定', description: '動態規劃、圖論、最佳化' },
    ],
    features: [
      '基礎資料結構',
      '排序與搜尋演算法',
      '圖論演算法',
      '動態規劃',
      '複雜度分析',
      '演算法優化',
    ],
  },
  {
    id: 'database',
    name: '資料庫設計',
    description: '專業資料庫設計與優化，涵蓋關聯式和非關聯式資料庫。',
    icon: CircleStackIcon,
    pricing: [
      { level: 'SQL 基礎', price: '$400-800', description: 'SQL語法、查詢、正規化' },
      { level: '資料庫設計', price: '視需求而定', description: 'ER圖、索引、效能調校' },
      { level: '進階應用', price: '視需求而定', description: 'NoSQL、分散式、大數據' },
    ],
    features: [
      'MySQL/PostgreSQL',
      'MongoDB/Redis',
      '資料庫正規化',
      '索引優化',
      '查詢效能調校',
      'ORM 框架',
    ],
  },
];

const processSteps = [
  {
    step: '1',
    title: '需求諮詢',
    description: '詳細了解作業要求、時程和特殊需求',
  },
  {
    step: '2',
    title: '報價確認',
    description: '根據複雜度和時程提供詳細報價',
  },
  {
    step: '3',
    title: '開始開發',
    description: '專業工程師開始編寫程式碼',
  },
  {
    step: '4',
    title: '品質檢查',
    description: '代碼審查、測試和文件編寫',
  },
  {
    step: '5',
    title: '準時交付',
    description: '按時交付完整的作業和說明文件',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">專業服務</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              完整的CS課業解決方案
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們提供全面的程式設計課業協助，從基礎語法到複雜專案開發，
              專業團隊確保每份作業都符合學術標準和業界最佳實踐。
            </p>
          </div>

          {/* Services Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">價格方案</h4>
                    <div className="space-y-3">
                      {service.pricing.map((plan) => (
                        <div key={plan.level} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-gray-900">{plan.level}</h5>
                            <span className="text-blue-600 font-bold">{plan.price}</span>
                          </div>
                          <p className="text-sm text-gray-600">{plan.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">服務內容</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                服務流程
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                簡單明瞭的五步驟流程，確保您的作業品質和準時交付
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200 lg:left-1/2 lg:top-4 lg:bottom-4 lg:h-0.5 lg:w-full lg:-translate-x-1/2"></div>
                <ol className="relative space-y-8 lg:flex lg:space-y-0 lg:space-x-8">
                  {processSteps.map((process, index) => (
                    <li key={process.step} className="relative flex-1">
                      <div className="flex items-start lg:block">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm z-10 lg:mx-auto">
                          {process.step}
                        </div>
                        <div className="ml-4 lg:ml-0 lg:mt-4 lg:text-center">
                          <h3 className="text-lg font-semibold text-gray-900">{process.title}</h3>
                          <p className="mt-2 text-sm text-gray-600">{process.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-blue-600 rounded-2xl p-8 lg:p-12 text-center">
            <div className="mx-auto max-w-2xl">
              <AcademicCapIcon className="mx-auto h-12 w-12 text-blue-200 mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-white">
                準備開始您的專案了嗎？
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                聯絡我們獲取免費諮詢和詳細報價，專業團隊將為您提供最適合的解決方案。
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="https://t.me/payfortimecs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  立即查詢
                </a>
                <a href="/about" className="text-lg font-semibold leading-6 text-white hover:text-blue-100 transition-colors">
                  了解更多 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
