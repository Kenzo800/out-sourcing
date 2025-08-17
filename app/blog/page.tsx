import { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '學習資源',
  description: '程式設計學習資源、技術教學文章和CS課業指導，幫助學生提升程式設計能力。',
};

// 模擬文章資料 - 在實際應用中會從CMS或資料庫獲取
const articles = [
  {
    id: 1,
    title: 'Java物件導向程式設計完整指南',
    slug: 'java-oop-complete-guide',
    excerpt: '深入理解Java物件導向的核心概念，包含類別、物件、繼承、多型和封裝等重要主題。',
    content: '',
    category: 'Java',
    author: '張工程師',
    publishedAt: new Date('2024-01-15'),
    readTime: 15,
    tags: ['Java', '物件導向', '程式設計基礎'],
    featured: true,
  },
  {
    id: 2,
    title: 'Python資料結構與演算法實戰',
    slug: 'python-data-structures-algorithms',
    excerpt: '從基礎的陣列、串列到進階的樹狀結構和圖論，用Python實作常見的資料結構和演算法。',
    content: '',
    category: 'Python',
    author: '李工程師',
    publishedAt: new Date('2024-01-12'),
    readTime: 20,
    tags: ['Python', '資料結構', '演算法'],
    featured: true,
  },
  {
    id: 3,
    title: 'React前端開發最佳實踐',
    slug: 'react-frontend-best-practices',
    excerpt: '學習現代React開發的最佳實踐，包含Hooks、狀態管理、效能優化和測試策略。',
    content: '',
    category: 'Web開發',
    author: '王工程師',
    publishedAt: new Date('2024-01-10'),
    readTime: 18,
    tags: ['React', 'JavaScript', '前端開發'],
    featured: false,
  },
  {
    id: 4,
    title: 'C++記憶體管理深度解析',
    slug: 'cpp-memory-management',
    excerpt: '理解C++的記憶體管理機制，包含指標、智慧指標、RAII原則和記憶體洩漏的預防。',
    content: '',
    category: 'C++',
    author: '陳工程師',
    publishedAt: new Date('2024-01-08'),
    readTime: 25,
    tags: ['C++', '記憶體管理', '系統程式'],
    featured: false,
  },
  {
    id: 5,
    title: '資料庫設計原則與正規化',
    slug: 'database-design-normalization',
    excerpt: '學習關聯式資料庫的設計原則，了解正規化的重要性和實際應用場景。',
    content: '',
    category: '資料庫',
    author: '張工程師',
    publishedAt: new Date('2024-01-05'),
    readTime: 22,
    tags: ['資料庫', '正規化', 'SQL'],
    featured: false,
  },
  {
    id: 6,
    title: 'Node.js後端API開發指南',
    slug: 'nodejs-backend-api-guide',
    excerpt: '使用Node.js和Express建立RESTful API，包含路由設計、中介軟體和錯誤處理。',
    content: '',
    category: 'Web開發',
    author: '王工程師',
    publishedAt: new Date('2024-01-03'),
    readTime: 16,
    tags: ['Node.js', 'API', '後端開發'],
    featured: false,
  },
];

const categories = ['全部', 'Java', 'Python', 'C++', 'Web開發', '資料庫'];

export default function BlogPage() {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">學習資源</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              程式設計知識分享
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們定期分享程式設計教學文章、技術指南和學習心得，
              幫助學生建立紮實的程式設計基礎。
            </p>
          </div>

          {/* Category Filter */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">精選文章</h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                {featuredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="flex flex-col items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-x-4 text-xs mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {article.category}
                      </span>
                      <span className="text-gray-500">精選</span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                        <Link href={`/blog/${article.slug}`}>
                          <span className="absolute inset-0" />
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <div className="flex items-center gap-x-2 text-sm text-gray-500">
                        <UserIcon className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-x-2 text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4" />
                        <time dateTime={article.publishedAt.toISOString()}>
                          {format(article.publishedAt, 'yyyy年MM月dd日', { locale: zhTW })}
                        </time>
                      </div>
                      <div className="flex items-center gap-x-2 text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4" />
                        <span>{article.readTime}分鐘閱讀</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div className="mx-auto mt-20 max-w-2xl lg:max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">所有文章</h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {regularArticles.map((article) => (
                <article key={article.id} className="flex flex-col items-start">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {article.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                      <Link href={`/blog/${article.slug}`}>
                        <span className="absolute inset-0" />
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="relative mt-8 flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <UserIcon className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4" />
                      <time dateTime={article.publishedAt.toISOString()}>
                        {format(article.publishedAt, 'yyyy年MM月dd日', { locale: zhTW })}
                      </time>
                    </div>
                    <div className="flex items-center gap-x-2 text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      <span>{article.readTime}分鐘閱讀</span>
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mx-auto mt-20 max-w-2xl bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">訂閱學習資源</h3>
            <p className="text-gray-600 mb-6">
              獲取最新的程式設計教學文章和學習資源，讓我們陪伴您的程式設計學習之路。
            </p>
            <div className="flex max-w-md mx-auto gap-x-4">
              <input
                type="email"
                placeholder="輸入您的電子郵件"
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              <button className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
