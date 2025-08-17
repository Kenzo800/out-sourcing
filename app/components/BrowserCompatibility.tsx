'use client';

import { useEffect } from 'react';
import browserSupport from '../utils/browserSupport';

/**
 * 瀏覽器相容性組件
 * 負責初始化瀏覽器檢測和polyfills
 */
export default function BrowserCompatibility() {
  useEffect(() => {
    // 初始化瀏覽器支援檢測
    browserSupport.init().catch(error => {
      console.error('Browser compatibility initialization failed:', error);
    });

    // 檢測瀏覽器資訊並在開發模式下輸出
    if (process.env.NODE_ENV === 'development') {
      const browserInfo = browserSupport.getBrowserInfo();
      console.log('Browser Info:', browserInfo);
      console.log('CSS Support:', {
        grid: browserSupport.supportsGrid(),
        flexboxGap: browserSupport.supportsFlexboxGap(),
        cssVariables: browserSupport.supportsCSSVariables(),
        lineClamp: browserSupport.supportsLineClamp(),
        scrollBehavior: browserSupport.supportsScrollBehavior(),
        backdropFilter: browserSupport.supportsBackdropFilter(),
      });
    }
  }, []);

  return null; // 這個組件不需要渲染任何內容
}

/**
 * 條件式渲染組件 - 根據瀏覽器支援情況顯示不同內容
 */
interface ConditionalRenderProps {
  feature: 'grid' | 'flexboxGap' | 'cssVariables' | 'lineClamp' | 'scrollBehavior' | 'backdropFilter';
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export function ConditionalRender({ feature, fallback, children }: ConditionalRenderProps) {
  useEffect(() => {
    let isSupported = false;

    switch (feature) {
      case 'grid':
        isSupported = browserSupport.supportsGrid();
        break;
      case 'flexboxGap':
        isSupported = browserSupport.supportsFlexboxGap();
        break;
      case 'cssVariables':
        isSupported = browserSupport.supportsCSSVariables();
        break;
      case 'lineClamp':
        isSupported = browserSupport.supportsLineClamp();
        break;
      case 'scrollBehavior':
        isSupported = browserSupport.supportsScrollBehavior();
        break;
      case 'backdropFilter':
        isSupported = browserSupport.supportsBackdropFilter();
        break;
    }

    // 在不支援的情況下可以動態載入額外的CSS或執行其他邏輯
    if (!isSupported && process.env.NODE_ENV === 'development') {
      console.warn(`Feature "${feature}" is not supported, using fallback`);
    }
  }, [feature]);

  // 在SSR時預設顯示modern版本，客戶端會自動調整
  return <>{children}</>;
}

/**
 * 瀏覽器警告組件 - 為舊瀏覽器顯示升級建議
 */
export function BrowserWarning() {
  useEffect(() => {
    const browserInfo = browserSupport.getBrowserInfo();
    
    if (!browserInfo.isModern) {
      // 可以在這裡顯示瀏覽器升級建議
      console.warn(
        `您正在使用較舊的瀏覽器 (${browserInfo.name} ${browserInfo.version})，` +
        '建議升級到最新版本以獲得最佳體驗。'
      );
    }
  }, []);

  return null;
}
