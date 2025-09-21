import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: CheckCircleIcon,
    title: '高品質保證',
    description: '專業工程師團隊，確保代碼品質和學術標準',
  },
  {
    icon: ClockIcon,
    title: '準時交付',
    description: '嚴格遵守交期，24小時內回覆需求',
  },
  {
    icon: ShieldCheckIcon,
    title: '隱私保護',
    description: '完全保護客戶隱私，不洩露任何個人資訊',
  },
];

export default function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-24 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-2xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] rounded-full"
        />
      </div>
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl">
          香港
            <span className="text-blue-600"> CS功課代做</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
            專為香港大專院校學生提供Programming功課協助，涵蓋 Degree、High Dip 課程的 Java、Python、C++、JavaScript 等程式語言作業。
            專業團隊確保準時交付和優秀成績。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://t.me/payfortimecs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors flex items-center gap-2"
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
            <Link href="/services" className="text-lg font-semibold leading-6 text-gray-400 hover:text-blue-600 transition-colors group">
              了解服務 <ChevronRightIcon className="ml-1 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600">為什麼選擇我們</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            專業可靠的服務保證
          </p>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-100">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-2xl sm:top-[calc(100%-30rem)] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] rounded-full"
        />
      </div>
    </div>
  );
}
