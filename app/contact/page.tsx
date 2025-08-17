'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  PhoneIcon, 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const contactSchema = z.object({
  name: z.string().min(1, '請輸入您的姓名'),
  email: z.string().email('請輸入有效的電子郵件'),
  subject: z.string().min(1, '請選擇作業類型'),
  urgency: z.string().min(1, '請選擇緊急程度'),
  description: z.string().min(10, '請詳細描述您的作業需求（至少10個字）'),
  budget: z.string().optional(),
  deadline: z.string().min(1, '請輸入截止日期'),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = [
  'Java 程式設計',
  'Python 開發',
  'C/C++ 程式',
  'Web 開發',
  '資料結構與演算法',
  '資料庫設計',
  '其他',
];

const urgencyLevels = [
  { value: 'low', label: '一般 (7天以上)', color: 'text-green-600' },
  { value: 'medium', label: '中等 (3-7天)', color: 'text-yellow-600' },
  { value: 'high', label: '緊急 (1-3天)', color: 'text-orange-600' },
  { value: 'urgent', label: '非常緊急 (24小時內)', color: 'text-red-600' },
];

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: '電子郵件',
    content: 'contact@cs-homework.com',
    description: '24小時內回覆',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Line 客服',
    content: 'cs-homework-help',
    description: '即時線上諮詢',
  },
  {
    icon: ClockIcon,
    title: '服務時間',
    content: '週一至週日',
    description: '9:00 AM - 11:00 PM',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // 模擬API調用
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('表單數據:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('提交失敗:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                諮詢已送出！
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                感謝您的諮詢，我們將在24小時內回覆您的需求。
                如有緊急事項，請直接聯絡我們的Line客服。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                >
                  繼續諮詢
                </button>
                <a href="/" className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                  返回首頁 <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">聯絡我們</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              取得專業諮詢和報價
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              詳細描述您的作業需求，我們將提供最適合的解決方案和透明的價格報價。
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-12">
            {/* Contact Info */}
            <div className="mb-12 lg:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">聯絡資訊</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-lg text-gray-900">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">服務承諾</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    24小時內回覆諮詢
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    免費報價和時程評估
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    100% 隱私保護
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    品質保證和修改服務
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">需求諮詢表單</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="請輸入您的姓名"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    電子郵件 *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    作業類型 *
                  </label>
                  <select
                    {...register('subject')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">請選擇作業類型</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    緊急程度 *
                  </label>
                  <select
                    {...register('urgency')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">請選擇緊急程度</option>
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                  {errors.urgency && (
                    <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>
                  )}
                </div>

                {/* Deadline */}
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                    截止日期 *
                  </label>
                  <input
                    {...register('deadline')}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.deadline && (
                    <p className="mt-1 text-sm text-red-600">{errors.deadline.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    預算範圍
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">請選擇預算範圍（可選）</option>
                    <option value="under-1000">$1000 以下</option>
                    <option value="1000-2000">$1000 - $2000</option>
                    <option value="2000-3000">$2000 - $3000</option>
                    <option value="3000-5000">$3000 - $5000</option>
                    <option value="over-5000">$5000 以上</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    詳細需求 *
                  </label>
                  <textarea
                    {...register('description')}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="請詳細描述您的作業需求，包含：&#10;- 作業內容和要求&#10;- 使用的程式語言或框架&#10;- 特殊要求或限制&#10;- 需要的檔案格式&#10;- 其他相關資訊"
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? '送出中...' : '送出諮詢'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
