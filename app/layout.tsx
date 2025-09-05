import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CS課業代寫服務 | 專業大學生程式設計作業協助",
    template: "%s | CS課業代寫服務"
  },
  description: "專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助。包含Java, Python, C++, JavaScript等多種程式語言，確保準時交付和學術誠信。",
  keywords: ["CS課業代寫", "程式設計作業", "大學生作業", "Java代寫", "Python代寫", "C++代寫", "程式設計協助"],
  authors: [{ name: "CS課業代寫服務團隊" }],
  creator: "CS課業代寫服務",
  publisher: "CS課業代寫服務",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://www.chan-codeguy.com",
    title: "CS課業代寫服務 | 專業大學生程式設計作業協助",
    description: "專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助。",
    siteName: "CS課業代寫服務",
  },
  twitter: {
    card: "summary_large_image",
    title: "CS課業代寫服務 | 專業大學生程式設計作業協助",
    description: "專業的CS課業代寫服務，提供高品質的大學生程式設計作業協助。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: 'education',
  classification: 'CS課業代寫服務',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
