import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 效能優化配置
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
  },
  
  // 編譯器優化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 圖片優化
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1年
  },
  
  // 壓縮配置
  compress: true,
  
  // 啟用 SWC 最小化
  swcMinify: true,
  
  // 效能監控
  poweredByHeader: false,
};

export default nextConfig;
