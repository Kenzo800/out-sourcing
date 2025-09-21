import { Metadata } from 'next';
import { 
  AcademicCapIcon, 
  CheckBadgeIcon, 
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon 
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '關於我們 - 香港CS功課代做',
  description: '專業的香港大專CS課業代寫團隊，擁有豐富的程式設計經驗和學術背景，專為High Dip、Degree學生提供高品質的作業協助服務。',
};

const team = [
  {
    name: 'CityU',
    image: '/images/CityU.png',
  },
  {
    name: 'UST',
    image: '/images/UST.png',
  },
  {
    name: 'HKSTP',
    image: '/images/HKSTP.png',
  },
  {
    name: 'IBM',
    image: '/images/IBM.webp',
  },
  
];

const stats = [
  { label: '完成專案', value: '50+' },
  { label: '客戶滿意度', value: '100%' },
  { label: '準時交付率', value: '100%' },
  { label: '服務年數', value: '2年' },
];

const values = [
  {
    icon: AcademicCapIcon,
    title: '學術專業',
    description: '團隊成員均具備香港大專院校資工相關學位，深度理解High Dip、Degree課程的學術要求和評分標準。',
  },
  {
    icon: CheckBadgeIcon,
    title: '品質保證',
    description: '每份作業都經過多重檢查，確保代碼品質和功能完整性。',
  },
  {
    icon: ShieldCheckIcon,
    title: '隱私保護',
    description: '嚴格保護客戶資訊，絕不洩露任何個人或作業相關資料。',
  },
  {
    icon: ClockIcon,
    title: '準時交付',
    description: '承諾在約定時間內交付高品質作業，從不拖延。',
  },
  {
    icon: UserGroupIcon,
    title: '專業團隊',
    description: '經驗豐富的香港工程師團隊，涵蓋各種程式語言和技術領域，熟悉大專院校課程要求。',
  },
  {
    icon: TrophyIcon,
    title: '卓越成果',
    description: '幫助數千名學生獲得優秀成績，建立良好的學習基礎。',
  },
];

const process = [
  {
    step: '01',
    title: '需求分析',
    description: '詳細了解作業要求、評分標準和特殊需求，確保完全理解預期成果。',
  },
  {
    step: '02',
    title: '方案設計',
    description: '根據要求設計最適合的解決方案，選擇合適的技術棧和架構。',
  },
  {
    step: '03',
    title: '程式開發',
    description: '由專業工程師進行程式撰寫，遵循最佳實踐和編碼規範。',
  },
  {
    step: '04',
    title: '測試驗證',
    description: '進行完整的功能測試和代碼審查，確保品質和正確性。',
  },
  {
    step: '05',
    title: '文件編寫',
    description: '提供詳細的註解和說明文件，幫助理解代碼邏輯。',
  },
  {
    step: '06',
    title: '交付支援',
    description: '準時交付完整作業，並提供後續修改和答疑支援。',
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
        {/* Combined Hero & Stats Section */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
          {/* Background Effects - Simplified */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden sm:-top-80 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4f46e5] to-[#06b6d4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] rounded-full"
            />
          </div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
            {/* Hero Content */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                香港大專
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> CS課業夥伴</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                我們是專為香港大專院校學生服務的專業工程師團隊，致力於幫助High Dip、Degree學生在CS學習路上獲得更好的成績和理解。
                憑藉深厚的技術功底和豐富的香港教育經驗，為每位客戶提供最專業的服務。
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                  值得信賴的數據
                </h2>
                <p className="text-gray-400">
                  數字說明一切，我們用成果證明專業
                </p>
              </div>
              
              <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="relative group"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Glow Effect - Simplified */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    {/* Card */}
                    <div className="relative flex flex-col bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-102">
                      <dt className="text-sm font-medium text-gray-300 mb-2">{stat.label}</dt>
                      <dd className="order-first text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {stat.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Bottom Background Effect - Simplified */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden sm:top-[calc(100%-30rem)] pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#06b6d4] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] rounded-full"
            />
          </div>
        </div>

        

        {/* Team Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              專業團隊
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們的核心團隊來自香港各大專院校，每位成員都具備相關學位並在特定領域有深度專精。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex justify-center items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-auto object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              工作流程
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              標準化的六步驟流程，確保每個專案都能獲得最佳成果
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {process.map((step) => (
                <div key={step.step} className="relative bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <h3 className="ml-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Values Section */}
        <div id="value" className="relative py-20 px-6 lg:px-8 overflow-hidden" style={{
          backgroundColor: '#1e3a8a',
          // clipPath: 'polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%)'
        }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: 'url(/images/views.jpg)',
              }}
            ></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-300">我們的價值</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                為什麼選擇我們
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                我們堅持的核心價值和服務理念，確保每位客戶都能獲得最優質的體驗。
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title} className="flex flex-col bg-white/10 rounded-lg p-6 border border-white/20">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                      <value.icon className="h-5 w-5 flex-none text-blue-300" aria-hidden="true" />
                      {value.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-200">
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        
        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              準備開始合作了嗎？
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              聯絡我們獲取免費諮詢，讓專業團隊為您的香港大專CS學習之路提供最強支援。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://t.me/payfortimecs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors inline-flex items-center gap-2"
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
              <a href="/services" className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                查看服務 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
