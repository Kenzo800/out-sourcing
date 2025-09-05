import { Metadata } from 'next';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '服務條款',
  description: 'CS課業代寫服務的服務條款，詳細說明服務內容、責任範圍、付款條件和使用規範。',
  robots: {
    index: true,
    follow: true,
  },
};

const termsSections = [
  {
    icon: DocumentTextIcon,
    title: '服務定義',
    content: [
      'CS課業代寫服務（以下簡稱「本服務」）提供專業的程式設計作業協助，包括但不限於：',
      '• Java、Python、C++、JavaScript等程式語言作業',
      '• 資料結構與演算法實作',
      '• 網頁開發專案（前端、後端、全端）',
      '• 資料庫設計與實作',
      '• 軟體工程專案',
      '• 系統分析與設計',
      '• 其他CS相關課程作業',
      '本服務僅提供學習輔助，不保證學術成績，客戶需自行承擔學術責任。'
    ]
  },
  {
    icon: ScaleIcon,
    title: '服務責任',
    content: [
      '我們承諾提供以下服務標準：',
      '• 準時交付：在約定時間內完成作業',
      '• 程式碼品質：提供可運行的程式碼和詳細註解',
      '• 原創性：確保所有程式碼為原創，不涉及抄襲',
      '• 技術支援：提供必要的技術說明和修改服務',
      '• 保密性：嚴格保護客戶隱私和作業內容',
      '我們不承擔以下責任：',
      '• 學術成績或評分結果',
      '• 客戶對程式碼的理解程度',
      '• 學校政策變更導致的問題',
      '• 客戶未按時提供需求或資料'
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: '付款與收費',
    content: [
      '收費標準：',
      '• 根據作業複雜度、程式語言、截止時間等因素定價',
      '• 緊急作業（24小時內）需額外收費',
      '• 大型專案可分期付款',
      '付款方式：',
      '• 支援多種付款方式（詳情請洽詢）',
      '• 付款完成後開始作業',
      '• 提供收據和付款證明',
      '退款政策：',
      '• 作業開始前可全額退款',
      '• 作業進行中根據完成度部分退款',
      '• 交付後24小時內如有重大錯誤可申請修改或退款'
    ]
  },
  {
    icon: ClockIcon,
    title: '時間與交付',
    content: [
      '時間安排：',
      '• 客戶需提前至少24小時提出需求（緊急情況除外）',
      '• 複雜專案建議提前3-7天聯繫',
      '• 我們會根據作業複雜度提供預計完成時間',
      '交付方式：',
      '• 透過Telegram傳送完整程式碼',
      '• 提供程式碼說明和執行指南',
      '• 包含必要的檔案和資料夾結構',
      '修改服務：',
      '• 交付後7天內提供免費修改服務',
      '• 重大功能變更可能產生額外費用',
      '• 客戶需明確說明修改需求'
    ]
  },
  {
    icon: UserIcon,
    title: '客戶義務',
    content: [
      '客戶需履行以下義務：',
      '• 提供完整、準確的作業需求',
      '• 及時回覆相關問題和確認',
      '• 按時支付服務費用',
      '• 保護帳號安全，不得分享給他人使用',
      '• 遵守學術誠信原則',
      '禁止行為：',
      '• 不得要求違反學術誠信的行為',
      '• 不得將服務用於商業用途',
      '• 不得惡意投訴或誹謗',
      '• 不得要求提供考試答案或作弊協助',
      '• 不得轉售或分享服務內容'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: '隱私與保密',
    content: [
      '我們承諾：',
      '• 嚴格保護客戶個人資料',
      '• 不向第三方透露客戶身份',
      '• 不保存客戶作業內容（除必要技術支援外）',
      '• 使用加密通訊保護資料安全',
      '• 定期清理過期資料',
      '客戶同意：',
      '• 我們可匿名化使用作業案例進行服務改善',
      '• 在必要時配合法律調查',
      '• 為提供服務而處理相關個人資料',
      '• 遵守相關隱私法規和最佳實踐'
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    title: '免責聲明',
    content: [
      '重要免責聲明：',
      '• 本服務僅提供學習輔助，不保證學術成績',
      '• 客戶需自行承擔學術責任和後果',
      '• 我們不承擔因使用服務導致的任何學術處分',
      '• 客戶需確保使用服務符合學校政策',
      '• 我們保留拒絕違反學術誠信要求的權利',
      '技術免責：',
      '• 不保證程式碼在所有環境下完美運行',
      '• 客戶需自行測試和驗證程式碼',
      '• 不承擔因技術問題導致的損失',
      '• 建議客戶理解程式碼邏輯和原理'
    ]
  },
  {
    icon: CogIcon,
    title: '服務變更',
    content: [
      '我們保留以下權利：',
      '• 修改服務內容和收費標準',
      '• 暫停或終止服務（提前通知）',
      '• 拒絕不當或違法要求',
      '• 更新服務條款（提前30天通知）',
      '變更通知：',
      '• 重大變更將透過網站公告',
      '• 重要變更將直接通知客戶',
      '• 客戶可選擇繼續使用或終止服務',
      '• 繼續使用視為接受新條款',
      '服務終止：',
      '• 客戶可隨時終止服務',
      '• 我們可因違反條款終止服務',
      '• 終止後仍需履行保密義務'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '爭議解決',
    content: [
      '爭議處理程序：',
      '• 優先透過友好協商解決爭議',
      '• 客戶可透過Telegram聯繫客服',
      '• 我們承諾在24小時內回覆',
      '• 提供詳細的解決方案和補救措施',
      '調解機制：',
      '• 如協商未果，可尋求第三方調解',
      '• 支持透過消費者保護機構處理',
      '• 遵守相關法律法規',
      '• 維護雙方合法權益',
      '法律適用：',
      '• 本條款受中華民國法律管轄',
      '• 爭議由台灣地區法院管轄',
      '• 如部分條款無效，不影響其他條款效力'
    ]
  }
];

const contactInfo = {
  telegram: '@payfortimecs',
  responseTime: '24小時內回覆',
  businessHours: '週一至週日 09:00-23:00'
};

const importantNotes = [
  '本服務僅提供學習輔助，不保證學術成績',
  '客戶需自行承擔學術責任和後果',
  '使用服務前請確認符合學校政策',
  '我們保留拒絕不當要求的權利',
  '服務條款可能隨時更新，請定期查看'
];

export default function TermsPage() {
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
                  <ScaleIcon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                服務
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> 條款</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
                本服務條款詳細說明CS課業代寫服務的內容、責任範圍、付款條件和使用規範。
                請仔細閱讀並確認您理解所有條款後再使用我們的服務。
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <div className="text-sm text-gray-400">
                  最後更新：{new Date().toLocaleDateString('zh-TW')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                條款概述
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  歡迎使用CS課業代寫服務（以下簡稱「本服務」）。本服務條款（以下簡稱「本條款」）構成您與我們之間具有法律約束力的協議。
                </p>
                <p>
                  使用本服務即表示您已閱讀、理解並同意受本條款的約束。如果您不同意本條款的任何部分，請勿使用本服務。
                </p>
                <p>
                  我們保留隨時修改本條款的權利。重大變更將透過網站公告或直接通知的方式告知您。繼續使用服務即表示您接受修改後的條款。
                </p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mb-16 p-8 bg-red-50 border border-red-200 rounded-2xl">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-4">
                    重要提醒
                  </h3>
                  <ul className="space-y-2">
                    {importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-red-800">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-16">
              {termsSections.map((section, index) => (
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

            {/* Contact Information */}
            <div className="mt-16 p-8 bg-white border-2 border-gray-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                聯絡我們
              </h3>
              <p className="text-gray-600 mb-6">
                如果您對本服務條款有任何疑問，或需要技術支援，請透過以下方式聯絡我們：
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

            {/* Agreement */}
            <div className="mt-16 p-8 bg-green-50 border border-green-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                同意條款
              </h3>
              <p className="text-gray-600">
                使用本服務即表示您已閱讀、理解並同意受本服務條款的約束。您確認您已年滿18歲或已獲得法定監護人同意，
                並有能力理解並遵守本條款的所有規定。如果您不同意本條款的任何部分，請立即停止使用本服務。
              </p>
            </div>

            {/* Effective Date */}
            <div className="mt-16 text-center">
              <p className="text-gray-500">
                本服務條款自 {new Date().toLocaleDateString('zh-TW')} 起生效
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
