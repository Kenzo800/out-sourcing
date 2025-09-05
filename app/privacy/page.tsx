import { Metadata } from 'next';
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  EyeIcon,
  LockClosedIcon,
  UserIcon,
  CogIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '隱私政策',
  description: 'CS課業代寫服務的隱私政策，詳細說明我們如何收集、使用和保護您的個人資料。',
  robots: {
    index: true,
    follow: true,
  },
};

const privacySections = [
  {
    icon: DocumentTextIcon,
    title: '資料收集',
    content: [
      '我們僅收集提供服務所必需的個人資料，包括：',
      '• 姓名和聯絡方式（Telegram帳號、電子郵件）',
      '• 作業相關資訊（課程名稱、作業要求、截止日期）',
      '• 技術需求（程式語言、框架、特殊要求）',
      '• 服務記錄和溝通歷史',
      '我們不會收集與服務無關的敏感個人資料。'
    ]
  },
  {
    icon: CogIcon,
    title: '資料使用',
    content: [
      '收集的資料僅用於以下目的：',
      '• 提供CS課業代寫服務',
      '• 與客戶進行溝通和協調',
      '• 確保服務品質和準時交付',
      '• 提供技術支援和售後服務',
      '• 改善服務品質（匿名化處理後）',
      '我們絕不會將您的資料用於其他商業目的。'
    ]
  },
  {
    icon: LockClosedIcon,
    title: '資料保護',
    content: [
      '我們採用多層次安全措施保護您的資料：',
      '• 加密傳輸和儲存所有敏感資料',
      '• 嚴格的存取控制和權限管理',
      '• 定期安全更新和漏洞修補',
      '• 員工保密協議和培訓',
      '• 安全的資料備份和恢復機制',
      '• 定期安全審計和評估'
    ]
  },
  {
    icon: UserIcon,
    title: '資料分享',
    content: [
      '我們承諾不會與第三方分享您的個人資料，除非：',
      '• 獲得您的明確同意',
      '• 法律要求或法院命令',
      '• 保護我們的合法權益',
      '• 緊急情況下的安全考量',
      '所有資料分享都將遵循最小化原則，僅分享必要資訊。'
    ]
  },
  {
    icon: EyeIcon,
    title: '您的權利',
    content: [
      '您對個人資料享有以下權利：',
      '• 查詢和存取您的個人資料',
      '• 要求更正或更新不正確的資料',
      '• 要求刪除您的個人資料',
      '• 限制或反對資料處理',
      '• 資料可攜權（以結構化格式取得資料）',
      '• 撤回同意（不影響撤回前的合法處理）'
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    title: '資料保留',
    content: [
      '我們根據以下原則保留您的資料：',
      '• 服務期間：完整保留所有相關資料',
      '• 服務結束後：保留6個月用於售後服務',
      '• 法律要求：根據相關法規要求保留',
      '• 匿名化處理：超過保留期限的資料將被匿名化',
      '• 安全刪除：不再需要的資料將被安全刪除'
    ]
  }
];

const contactInfo = {
  telegram: '@payfortimecs',
  responseTime: '24小時內回覆'
};

const legalBasis = [
  '履行合約：提供您要求的CS課業代寫服務',
  '合法權益：改善服務品質和客戶體驗',
  '同意：處理非必要的個人資料',
  '法律義務：遵守相關法律法規要求'
];

const dataTransfers = [
  '所有資料處理均在安全的伺服器環境中進行',
  '使用業界標準的加密技術保護資料傳輸',
  '定期進行安全評估和合規性檢查',
  '與可信賴的技術服務提供商合作'
];

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
          {/* Background Effects */}
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4f46e5] to-[#06b6d4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                隱私
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> 政策</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                我們重視您的隱私權，本政策詳細說明我們如何收集、使用和保護您的個人資料。
                我們承諾以透明、安全的方式處理您的資訊。
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <div className="text-sm text-gray-400">
                  最後更新：{new Date().toLocaleDateString('zh-TW')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                政策概述
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  CS課業代寫服務（以下簡稱「我們」）致力於保護您的隱私權。本隱私政策說明我們如何收集、使用、儲存和保護您在使用我們服務時提供的個人資料。
                </p>
                <p>
                  我們遵循相關的資料保護法律法規，包括但不限於個人資料保護法，並採用業界最佳實踐來確保您的資料安全。
                </p>
                <p>
                  使用我們的服務即表示您同意本隱私政策的條款。如果您不同意本政策的任何部分，請停止使用我們的服務。
                </p>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-16">
              {privacySections.map((section, index) => (
                <div key={section.title} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-6 flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <div className="prose prose-lg text-gray-600">
                        {section.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="mb-3">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Basis */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                法律依據
              </h3>
              <p className="text-gray-600 mb-4">
                我們處理您的個人資料基於以下法律依據：
              </p>
              <ul className="space-y-2">
                {legalBasis.map((basis, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{basis}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Transfers */}
            <div className="mt-16 p-8 bg-blue-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                資料傳輸與安全
              </h3>
              <ul className="space-y-2">
                {dataTransfers.map((transfer, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{transfer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-16 p-8 bg-white border-2 border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                聯絡我們
              </h3>
              <p className="text-gray-600 mb-6">
                如果您對本隱私政策有任何疑問，或希望行使您的資料權利，請透過以下方式聯絡我們：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-blue-600"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telegram</h4>
                    <p className="text-gray-600">{contactInfo.telegram}</p>
                    <p className="text-sm text-gray-500">{contactInfo.responseTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">電子郵件</h4>
                    <p className="text-gray-600">未來會開放電子郵件聯絡</p>
                    <p className="text-sm text-gray-500">敬請期待</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mt-16 p-8 bg-yellow-50 border border-yellow-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                政策更新
              </h3>
              <p className="text-gray-600">
                我們可能會不時更新本隱私政策。重大變更將透過網站公告或直接通知的方式告知您。
                建議您定期查看本政策以了解最新資訊。繼續使用我們的服務即表示您接受更新後的政策。
              </p>
            </div>

            {/* Effective Date */}
            <div className="mt-16 text-center">
              <p className="text-gray-500">
                本隱私政策自 {new Date().toLocaleDateString('zh-TW')} 起生效
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
