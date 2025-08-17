import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | CS課業代寫服務` : 'CS課業代寫服務 | 專業大學生程式設計作業協助';
  const fullDescription = description || '專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助。包含Java, Python, C++, JavaScript等多種程式語言，確保準時交付和學術誠信。';
  const keywordString = keywords.length > 0 ? keywords.join(', ') : 'CS課業代寫, 程式設計作業, 大學生作業, Java代寫, Python代寫, C++代寫, 程式設計協助';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordString} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Language */}
      <meta httpEquiv="content-language" content="zh-TW" />
      <link rel="alternate" hrefLang="zh-tw" href={canonicalUrl} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="CS課業代寫服務團隊" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#2563eb" />
    </Head>
  );
}
