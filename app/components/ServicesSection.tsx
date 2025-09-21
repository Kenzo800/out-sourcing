import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CircleStackIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CommandLineIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Java 程式設計',
    description: '物件導向程式設計、Spring Boot、企業級應用開發',
    icon: CodeBracketIcon,
    slogan: '劏渣華!!!',
    features: ['基礎語法', '物件導向', 'Spring Framework', 'Maven/Gradle'],
  },
  {
    name: 'Python 開發',
    description: '機器學習、數據分析、Web 框架、自動化腳本',
    icon: CommandLineIcon,
    slogan: 'Data Science 必搵我',
    features: ['基礎語法', 'Django/Flask', '數據科學', '機器學習'],
  },
  {
    name: 'C/C++ 程式',
    description: '系統程式設計、記憶體管理、效能優化',
    icon: CpuChipIcon,
    slogan: '世界上最好的程式語言',
    features: ['指標操作', '記憶體管理', 'STL', '系統程式'],
  },
  {
    name: 'Web 開發',
    description: 'React、Vue.js、Node.js、全端開發',
    icon: GlobeAltIcon,
    slogan: '正職就係做Web',
    features: ['前端框架', '後端API', '資料庫整合', 'RWD設計'],
  },
  {
    name: '資料結構與演算法',
    description: '排序、搜尋、圖論、動態規劃',
    icon: ChartBarIcon,
    slogan: '年年肥一半學生',
    features: ['基礎結構', '演算法分析', '複雜度計算', '最佳化'],
  },
  {
    name: '資料庫設計',
    description: 'MySQL、PostgreSQL、MongoDB、資料庫優化',
    icon: CircleStackIcon,
    slogan: 'MongoDB is SCAM!',
    features: ['SQL語法', '正規化', '索引優化', 'NoSQL'],
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-100 py-24 sm:py-32 relative isolate">
      {/* Bottom left blur effect */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 overflow-hidden blur-2xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(40%-5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[-15deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(30%-10rem)] sm:w-[50rem] rounded-full"
        />
      </div>
      {/* Top right blur effect */}
      <div
        className="absolute inset-x-0 top-0 -z-10 overflow-hidden blur-2xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(80%-5rem)] aspect-[1155/678] w-[32rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-15 sm:left-[calc(70%-5rem)] sm:w-[45rem] rounded-full"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">服務項目</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            涵蓋所有CS課程領域
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我們提供全面的程式設計課業協助，從基礎語法到進階專案開發，
            專業團隊確保每份作業都符合學術標準和最佳實踐。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 justify-items-center">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow w-full max-w-sm">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-blue-600">{service.slogan}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="my-32 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center">
            <div className="mx-auto max-w-2xl">
              <AcademicCapIcon className="mx-auto h-12 w-12 text-blue-200 mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-white">
                準備開始您的專案了嗎？
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
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
    </div>
  );
}
