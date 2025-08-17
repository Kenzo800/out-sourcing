'use client';

import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  ClipboardDocumentListIcon,
  UsersIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: '總文章數',
    value: '23',
    change: '+12%',
    changeType: 'positive',
    icon: DocumentTextIcon,
  },
  {
    name: '待處理訂單',
    value: '8',
    change: '+4.75%',
    changeType: 'positive',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: '活躍客戶',
    value: '156',
    change: '+54',
    changeType: 'positive',
    icon: UsersIcon,
  },
  {
    name: '本月收入',
    value: 'NT$45,678',
    change: '+12.02%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
];

const recentOrders = [
  {
    id: 'ORD-2024-001',
    customer: '張同學',
    service: 'Java程式設計',
    amount: 'NT$1,200',
    status: '進行中',
    date: '2024-01-15',
  },
  {
    id: 'ORD-2024-002',
    customer: '李同學',
    service: 'Python資料分析',
    amount: 'NT$1,800',
    status: '已完成',
    date: '2024-01-14',
  },
  {
    id: 'ORD-2024-003',
    customer: '王同學',
    service: 'Web開發',
    amount: 'NT$2,500',
    status: '待開始',
    date: '2024-01-13',
  },
  {
    id: 'ORD-2024-004',
    customer: '陳同學',
    service: 'C++演算法',
    amount: 'NT$1,500',
    status: '已完成',
    date: '2024-01-12',
  },
];

const recentArticles = [
  {
    title: 'Java物件導向程式設計完整指南',
    author: '張工程師',
    date: '2024-01-15',
    views: 1234,
    status: '已發布',
  },
  {
    title: 'Python資料結構與演算法實戰',
    author: '李工程師',
    date: '2024-01-12',
    views: 856,
    status: '已發布',
  },
  {
    title: 'React前端開發最佳實踐',
    author: '王工程師',
    date: '2024-01-10',
    views: 692,
    status: '草稿',
  },
];

export default function AdminDashboard() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">控制台總覽</h1>
          <p className="mt-2 text-sm text-gray-600">
            歡迎回到CS代寫專家後台管理系統
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-blue-500 rounded-md p-3">
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stat.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Orders */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">最近訂單</h3>
                <a href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-500">
                  查看全部
                </a>
              </div>
              <div className="flow-root">
                <ul className="-mb-8">
                  {recentOrders.map((order, orderIdx) => (
                    <li key={order.id}>
                      <div className="relative pb-8">
                        {orderIdx !== recentOrders.length - 1 ? (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <ClipboardDocumentListIcon className="h-5 w-5 text-white" />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                {order.customer} - {order.service}
                              </p>
                              <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-gray-500">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  order.status === '已完成'
                                    ? 'bg-green-100 text-green-800'
                                    : order.status === '進行中'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {order.status}
                              </span>
                              <p className="mt-1">{order.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">最近文章</h3>
                <a href="/admin/articles" className="text-sm text-blue-600 hover:text-blue-500">
                  查看全部
                </a>
              </div>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div key={article.title} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          作者：{article.author} • {article.date}
                        </p>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="text-xs text-gray-500">
                            觀看次數：{article.views}
                          </span>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              article.status === '已發布'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {article.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">快速操作</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/admin/articles/new"
              className="relative group bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                  <DocumentTextIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">新增文章</h3>
                <p className="mt-2 text-sm text-gray-500">
                  撰寫新的技術教學文章
                </p>
              </div>
            </a>

            <a
              href="/admin/orders/new"
              className="relative group bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-600 group-hover:bg-green-100">
                  <ClipboardDocumentListIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">新增訂單</h3>
                <p className="mt-2 text-sm text-gray-500">
                  手動建立新的客戶訂單
                </p>
              </div>
            </a>

            <a
              href="/admin/analytics"
              className="relative group bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-50 text-purple-600 group-hover:bg-purple-100">
                  <ChartBarIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">數據分析</h3>
                <p className="mt-2 text-sm text-gray-500">
                  查看詳細的業務數據
                </p>
              </div>
            </a>

            <a
              href="/admin/customers"
              className="relative group bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-600 group-hover:bg-orange-100">
                  <UsersIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">客戶管理</h3>
                <p className="mt-2 text-sm text-gray-500">
                  管理所有客戶資訊
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
