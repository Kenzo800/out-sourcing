import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const footerNavigation = {
  services: [
    { name: 'Java 程式設計', href: '/services#java' },
    { name: 'Python 開發', href: '/services#python' },
    { name: 'C/C++ 程式', href: '/services#cpp' },
    { name: 'Web 開發', href: '/services#web' },
    { name: '資料結構與演算法', href: '/services#algorithms' },
    { name: '資料庫設計', href: '/services#database' },
  ],
  company: [
    { name: '關於我們', href: '/about' },
    { name: '服務流程', href: '/about#process' },
    { name: '品質保證', href: '/about#quality' },
    { name: '隱私政策', href: '/privacy' },
    { name: '服務條款', href: '/terms' },
  ],
  support: [
    { name: '常見問題', href: '/faq' },
    { name: '聯絡我們', href: '/contact' },
    { name: '技術支援', href: '/support' },
    { name: '學習資源', href: '/blog' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        頁腳
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <CodeBracketIcon className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl text-white">CS代寫專家</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助。
              我們致力於幫助學生在學習過程中獲得更好的理解和成績。
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="h-5 w-5" />
                <span className="text-sm">contact@cs-homework.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm">Line ID: cs-homework-help</span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">服務項目</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">公司資訊</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">客戶支援</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 CS代寫專家. 版權所有.
            </p>
            <p className="mt-4 md:mt-0 text-xs leading-5 text-gray-400">
              本服務僅供學習參考，請遵守學術誠信原則
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
