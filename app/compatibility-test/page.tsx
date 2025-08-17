'use client';

import { useEffect, useState } from 'react';
import browserSupport from '../utils/browserSupport';

interface CompatibilityTest {
  name: string;
  description: string;
  isSupported: boolean;
  cssProperty?: string;
  fallbackMessage: string;
}

export default function CompatibilityTestPage() {
  const [tests, setTests] = useState<CompatibilityTest[]>([]);
  const [browserInfo, setBrowserInfo] = useState<any>(null);

  useEffect(() => {
    const info = browserSupport.getBrowserInfo();
    setBrowserInfo(info);

    const compatibilityTests: CompatibilityTest[] = [
      {
        name: 'CSS Grid',
        description: '現代化的二維佈局系統',
        isSupported: browserSupport.supportsGrid(),
        cssProperty: 'display: grid',
        fallbackMessage: '使用 Flexbox 作為替代方案'
      },
      {
        name: 'Flexbox Gap',
        description: 'Flex 容器中的間距控制',
        isSupported: browserSupport.supportsFlexboxGap(),
        cssProperty: 'gap: 1rem',
        fallbackMessage: '使用 margin 間距替代'
      },
      {
        name: 'CSS 自定義屬性',
        description: 'CSS 變數支援',
        isSupported: browserSupport.supportsCSSVariables(),
        cssProperty: '--custom-property: value',
        fallbackMessage: '使用固定數值替代'
      },
      {
        name: 'Line Clamp',
        description: '多行文字截斷',
        isSupported: browserSupport.supportsLineClamp(),
        cssProperty: '-webkit-line-clamp: 2',
        fallbackMessage: '使用 JavaScript 截斷文字'
      },
      {
        name: 'Smooth Scroll',
        description: '平滑滾動行為',
        isSupported: browserSupport.supportsScrollBehavior(),
        cssProperty: 'scroll-behavior: smooth',
        fallbackMessage: '載入 smoothscroll-polyfill'
      },
      {
        name: 'Backdrop Filter',
        description: '背景模糊效果',
        isSupported: browserSupport.supportsBackdropFilter(),
        cssProperty: 'backdrop-filter: blur(10px)',
        fallbackMessage: '使用透明背景色替代'
      }
    ];

    setTests(compatibilityTests);
  }, []);

  const getSupportIcon = (isSupported: boolean) => {
    return isSupported ? (
      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  };

  const supportedCount = tests.filter(test => test.isSupported).length;
  const supportPercentage = tests.length > 0 ? Math.round((supportedCount / tests.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            瀏覽器相容性測試
          </h1>
          <p className="text-lg text-gray-600">
            檢查您的瀏覽器對現代 CSS 功能的支援情況
          </p>
        </div>

        {/* Browser Info */}
        {browserInfo && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">瀏覽器資訊</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">瀏覽器</label>
                <p className="text-lg font-semibold capitalize">{browserInfo.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">版本</label>
                <p className="text-lg font-semibold">{browserInfo.version}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">現代性</label>
                <p className={`text-lg font-semibold ${browserInfo.isModern ? 'text-green-600' : 'text-red-600'}`}>
                  {browserInfo.isModern ? '現代瀏覽器' : '舊版瀏覽器'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Overall Support */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">整體支援度</h2>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{supportPercentage}%</div>
              <div className="text-sm text-gray-500">{supportedCount}/{tests.length} 項功能</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${supportPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Compatibility Tests */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">功能支援詳情</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {tests.map((test, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {getSupportIcon(test.isSupported)}
                      <h3 className="ml-3 text-lg font-semibold text-gray-900">
                        {test.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">{test.description}</p>
                    {test.cssProperty && (
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {test.cssProperty}
                      </code>
                    )}
                  </div>
                  <div className="ml-6 text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      test.isSupported 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {test.isSupported ? '支援' : '不支援'}
                    </div>
                  </div>
                </div>
                {!test.isSupported && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-800">
                      <strong>替代方案：</strong> {test.fallbackMessage}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">建議</h3>
          <div className="space-y-2 text-sm text-blue-800">
            {supportPercentage < 70 && (
              <p>• 您的瀏覽器對現代功能支援度較低，建議升級到最新版本</p>
            )}
            {!browserInfo?.isModern && (
              <p>• 考慮使用 Chrome、Firefox、Safari 或 Edge 的最新版本</p>
            )}
            <p>• 本網站已針對所有測試的功能提供相容性回退方案</p>
            <p>• 如遇到顯示問題，請聯絡技術支援</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            返回首頁
          </a>
        </div>
      </div>
    </div>
  );
}
