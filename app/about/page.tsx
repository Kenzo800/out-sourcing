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
  title: '關於我們',
  description: '專業的CS課業代寫團隊，擁有豐富的程式設計經驗和學術背景，致力於提供高品質的作業協助服務。',
};

const team = [
  {
    name: '張工程師',
    role: 'Java/Spring 專家',
    experience: '8年',
    education: '台大資工碩士',
    specialties: ['企業級應用', 'Spring Boot', '微服務架構'],
  },
  {
    name: '李工程師',
    role: 'Python/ML 專家',
    experience: '6年',
    education: '清大資工博士',
    specialties: ['機器學習', '數據分析', 'Django開發'],
  },
  {
    name: '王工程師',
    role: '全端開發專家',
    experience: '7年',
    education: '交大資工碩士',
    specialties: ['React/Vue.js', 'Node.js', '系統架構'],
  },
  {
    name: '陳工程師',
    role: 'C++/演算法專家',
    experience: '9年',
    education: '成大資工博士',
    specialties: ['系統程式', '演算法優化', '競賽程式'],
  },
];

const stats = [
  { label: '完成專案', value: '2000+' },
  { label: '客戶滿意度', value: '99%' },
  { label: '準時交付率', value: '98%' },
  { label: '服務年數', value: '5年' },
];

const values = [
  {
    icon: AcademicCapIcon,
    title: '學術專業',
    description: '團隊成員均具備資工相關學位，深度理解學術要求和評分標準。',
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
    description: '經驗豐富的工程師團隊，涵蓋各種程式語言和技術領域。',
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
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                專業可靠的
                <span className="text-blue-600">CS課業夥伴</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                我們是一群熱愛程式設計的專業工程師，致力於幫助學生在CS學習路上獲得更好的成績和理解。
                憑藉深厚的技術功底和豐富的教學經驗，為每位客戶提供最專業的服務。
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                值得信賴的數據
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                數字說明一切，我們用成果證明專業
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Values Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">我們的價值</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              為什麼選擇我們
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們堅持的核心價值和服務理念，確保每位客戶都能獲得最優質的體驗。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Team Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              專業團隊
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們的核心團隊由經驗豐富的軟體工程師組成，每位成員都在特定領域有深度專精。
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold">經驗：</span>{member.experience}</p>
                  <p><span className="font-semibold">學歷：</span>{member.education}</p>
                  <div>
                    <span className="font-semibold">專長：</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50">
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

        {/* CTA Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              準備開始合作了嗎？
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              聯絡我們獲取免費諮詢，讓專業團隊為您的CS學習之路提供最強支援。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                免費諮詢
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
