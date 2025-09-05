interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'Service';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CS課業代寫服務',
        url: 'https://www.chan-codeguy.com',
        logo: 'https://www.chan-codeguy.com/favicon.ico',
        description: '專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助',
        serviceArea: 'Taiwan',
        knowsAbout: [
          'Java程式設計',
          'Python開發',
          'C++程式設計',
          'Web開發',
          '資料結構與演算法',
          '資料庫設計'
        ]
      };
      break;

    case 'Article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.excerpt,
        author: {
          '@type': 'Person',
          name: data.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'CS課業代寫服務',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.chan-codeguy.com/favicon.ico'
          }
        },
        datePublished: data.publishedAt,
        dateModified: data.publishedAt,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.chan-codeguy.com/blog/${data.slug}`
        },
        articleSection: data.category,
        keywords: data.tags?.join(', '),
        inLanguage: 'zh-TW'
      };
      break;

    case 'Service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'CS課業代寫服務',
        description: '專業的CS課業代寫服務，涵蓋Java、Python、C++、Web開發等各種程式設計作業',
        provider: {
          '@type': 'Organization',
          name: 'CS課業代寫服務'
        },
        areaServed: 'Taiwan',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '程式設計服務',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Java程式設計',
                description: '物件導向程式設計、Spring Boot、企業級應用開發'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Python開發',
                description: '機器學習、數據分析、Web框架、自動化腳本'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web開發',
                description: 'React、Vue.js、Node.js、全端開發'
              }
            }
          ]
        },
        serviceType: '教育服務',
        category: '程式設計教學',
        audience: {
          '@type': 'Audience',
          audienceType: '大學生'
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
