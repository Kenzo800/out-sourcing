import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CircleStackIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Java 程式設計',
    description: '物件導向程式設計、Spring Boot、企業級應用開發',
    icon: CodeBracketIcon,
    price: '從 $800 起',
    features: ['基礎語法', '物件導向', 'Spring Framework', 'Maven/Gradle'],
  },
  {
    name: 'Python 開發',
    description: '機器學習、數據分析、Web 框架、自動化腳本',
    icon: CommandLineIcon,
    price: '從 $600 起',
    features: ['基礎語法', 'Django/Flask', '數據科學', '機器學習'],
  },
  {
    name: 'C/C++ 程式',
    description: '系統程式設計、記憶體管理、效能優化',
    icon: CpuChipIcon,
    price: '從 $900 起',
    features: ['指標操作', '記憶體管理', 'STL', '系統程式'],
  },
  {
    name: 'Web 開發',
    description: 'React、Vue.js、Node.js、全端開發',
    icon: GlobeAltIcon,
    price: '從 $1000 起',
    features: ['前端框架', '後端API', '資料庫整合', 'RWD設計'],
  },
  {
    name: '資料結構與演算法',
    description: '排序、搜尋、圖論、動態規劃',
    icon: ChartBarIcon,
    price: '從 $700 起',
    features: ['基礎結構', '演算法分析', '複雜度計算', '最佳化'],
  },
  {
    name: '資料庫設計',
    description: 'MySQL、PostgreSQL、MongoDB、資料庫優化',
    icon: CircleStackIcon,
    price: '從 $800 起',
    features: ['SQL語法', '正規化', '索引優化', 'NoSQL'],
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
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
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            獲取專屬報價
          </a>
        </div>
      </div>
    </div>
  );
}
