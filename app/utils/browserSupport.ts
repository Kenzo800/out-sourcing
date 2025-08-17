/**
 * 瀏覽器功能檢測工具
 * 用於檢測瀏覽器對現代CSS功能的支援情況
 */

export const browserSupport = {
  /**
   * 檢測是否支援CSS Grid
   */
  supportsGrid(): boolean {
    if (typeof window === 'undefined') return true; // SSR時假設支援
    return CSS?.supports?.('display', 'grid') ?? false;
  },

  /**
   * 檢測是否支援Flexbox Gap
   */
  supportsFlexboxGap(): boolean {
    if (typeof window === 'undefined') return true;
    return CSS?.supports?.('gap', '1rem') ?? false;
  },

  /**
   * 檢測是否支援CSS自定義屬性（CSS Variables）
   */
  supportsCSSVariables(): boolean {
    if (typeof window === 'undefined') return true;
    return CSS?.supports?.('--custom', 'value') ?? false;
  },

  /**
   * 檢測是否支援-webkit-line-clamp
   */
  supportsLineClamp(): boolean {
    if (typeof window === 'undefined') return true;
    return CSS?.supports?.('-webkit-line-clamp', '2') ?? false;
  },

  /**
   * 檢測是否支援scroll-behavior
   */
  supportsScrollBehavior(): boolean {
    if (typeof window === 'undefined') return true;
    return CSS?.supports?.('scroll-behavior', 'smooth') ?? false;
  },

  /**
   * 檢測是否支援backdrop-filter
   */
  supportsBackdropFilter(): boolean {
    if (typeof window === 'undefined') return true;
    return CSS?.supports?.('backdrop-filter', 'blur(10px)') ?? 
           CSS?.supports?.('-webkit-backdrop-filter', 'blur(10px)') ?? false;
  },

  /**
   * 檢測瀏覽器類型
   */
  getBrowserInfo() {
    if (typeof window === 'undefined') {
      return { name: 'unknown', version: '0', isModern: true };
    }

    const userAgent = navigator.userAgent;
    let browserName = 'unknown';
    let browserVersion = '0';

    // Chrome
    if (userAgent.includes('Chrome')) {
      browserName = 'chrome';
      const match = userAgent.match(/Chrome\/(\d+)/);
      browserVersion = match ? match[1] : '0';
    }
    // Firefox
    else if (userAgent.includes('Firefox')) {
      browserName = 'firefox';
      const match = userAgent.match(/Firefox\/(\d+)/);
      browserVersion = match ? match[1] : '0';
    }
    // Safari
    else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      browserName = 'safari';
      const match = userAgent.match(/Safari\/(\d+)/);
      browserVersion = match ? match[1] : '0';
    }
    // Edge
    else if (userAgent.includes('Edg')) {
      browserName = 'edge';
      const match = userAgent.match(/Edg\/(\d+)/);
      browserVersion = match ? match[1] : '0';
    }
    // IE
    else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
      browserName = 'ie';
      const match = userAgent.match(/(?:MSIE |rv:)(\d+)/);
      browserVersion = match ? match[1] : '0';
    }

    const isModern = this.isModernBrowser(browserName, parseInt(browserVersion));

    return {
      name: browserName,
      version: browserVersion,
      isModern
    };
  },

  /**
   * 判斷是否為現代瀏覽器
   */
  isModernBrowser(browserName: string, version: number): boolean {
    const minimumVersions = {
      chrome: 88,
      firefox: 85,
      safari: 14,
      edge: 88,
      ie: Infinity // IE不算現代瀏覽器
    };

    const minVersion = minimumVersions[browserName as keyof typeof minimumVersions] || 0;
    return version >= minVersion;
  },

  /**
   * 為舊瀏覽器添加CSS類別
   */
  addBrowserClasses(): void {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const browserInfo = this.getBrowserInfo();

    // 添加瀏覽器類別
    html.classList.add(`browser-${browserInfo.name}`);
    html.classList.add(`browser-${browserInfo.name}-${browserInfo.version}`);

    // 添加現代性標記
    if (browserInfo.isModern) {
      html.classList.add('modern-browser');
    } else {
      html.classList.add('legacy-browser');
    }

    // 添加功能支援類別
    if (!this.supportsGrid()) {
      html.classList.add('no-grid');
    }

    if (!this.supportsFlexboxGap()) {
      html.classList.add('no-gap');
    }

    if (!this.supportsCSSVariables()) {
      html.classList.add('no-css-variables');
    }

    if (!this.supportsLineClamp()) {
      html.classList.add('no-line-clamp');
    }

    if (!this.supportsScrollBehavior()) {
      html.classList.add('no-scroll-behavior');
    }

    if (!this.supportsBackdropFilter()) {
      html.classList.add('no-backdrop-filter');
    }
  },

  /**
   * 載入polyfill（如果需要）
   */
  async loadPolyfills(): Promise<void> {
    const promises: Promise<any>[] = [];

    // Intersection Observer polyfill for IE
    if (!('IntersectionObserver' in window)) {
      promises.push(
        import('intersection-observer').catch(() => {
          console.warn('Failed to load IntersectionObserver polyfill');
        })
      );
    }

    // 平滑滾動polyfill
    if (!this.supportsScrollBehavior()) {
      promises.push(
        import('smoothscroll-polyfill').then(smoothscroll => {
          smoothscroll.polyfill();
        }).catch(() => {
          console.warn('Failed to load smooth scroll polyfill');
        })
      );
    }

    await Promise.all(promises);
  },

  /**
   * 初始化瀏覽器支援檢測
   */
  async init(): Promise<void> {
    this.addBrowserClasses();
    await this.loadPolyfills();
  }
};

export default browserSupport;
