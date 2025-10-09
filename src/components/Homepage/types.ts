/**
 * Docusaurus 首頁元件合約定義
 * 
 * 此檔案定義首頁所有元件的 TypeScript 介面與合約
 * 確保元件間的型別安全與一致性
 */

import type { ReactNode } from 'react';

// ===== 基礎型別定義 =====

/** 按鈕樣式變體 */
export type ButtonVariant = 'primary' | 'secondary';

/** 按鈕尺寸 */
export type ButtonSize = 'small' | 'medium' | 'large';

/** 社群平台類型 */
export type SocialPlatform = 'github' | 'linkedin' | 'email';

/** 內容支柱識別碼 */
export type PillarId = 'blog' | 'vault';

// ===== 核心介面定義 =====

/** 行動按鈕元件介面 */
export interface ActionButton {
  /** 按鈕顯示文字 */
  text: string;
  /** 連結目標 URL 或路由 */
  href: string;
  /** 按鈕樣式變體 */
  variant: ButtonVariant;
  /** 按鈕尺寸 */
  size: ButtonSize;
  /** 是否為外部連結 */
  isExternal: boolean;
  /** 無障礙標籤 (可選) */
  ariaLabel?: string;
  /** 點擊事件處理器 (可選) */
  onClick?: () => void;
}

/** 社群連結介面 */
export interface SocialLink {
  /** 社群平台類型 */
  platform: SocialPlatform;
  /** 連結 URL */
  url: string;
  /** 平台圖示元件 */
  icon: ReactNode;
  /** 顯示標籤 */
  label: string;
}

/** 支柱統計資訊介面 (未來擴充) */
export interface PillarMetrics {
  /** 文章數量 */
  postCount: number;
  /** 最後更新時間 */
  lastUpdated: Date;
  /** 平均閱讀時間 (分鐘) */
  readTime: number;
}

/** 內容支柱介面 */
export interface ContentPillar {
  /** 唯一識別碼 */
  id: PillarId;
  /** SVG 圖示元件 */
  icon: ReactNode;
  /** 支柱標題 */
  title: string;
  /** 支柱描述 */
  description: string;
  /** 導航按鈕 */
  actionButton: ActionButton;
  /** 統計資訊 (可選) */
  metrics?: PillarMetrics;
}

/** 裝飾元素介面 */
export interface DecorationElement {
  /** 元素類型 */
  type: 'circle' | 'square' | 'line';
  /** CSS 類別名稱 */
  className: string;
  /** 動畫延遲 (秒) */
  animationDelay?: number;
}

// ===== 區塊元件介面 =====

/** 英雄區塊屬性 */
export interface HeroSectionProps {
  /** 主標題 */
  mainTitle: string;
  /** 副標題描述 */
  subtitle: string;
  /** 主要行動按鈕 */
  primaryAction: ActionButton;
  /** 次要行動按鈕 */
  secondaryAction: ActionButton;
  /** 裝飾性背景元素 */
  backgroundElements?: DecorationElement[];
}

/** 關於區塊屬性 */
export interface AboutSectionProps {
  /** 區塊標題 */
  title: string;
  /** 介紹內容 */
  content: string;
  /** 行動呼籲按鈕 */
  ctaButton: ActionButton;
  /** 是否顯示裝飾線 */
  decorativeLine?: boolean;
}

/** 內容支柱區塊屬性 */
export interface ContentPillarsSectionProps {
  /** 區塊標題 */
  title: string;
  /** 區塊描述 */
  description: string;
  /** 內容支柱陣列 */
  pillars: ContentPillar[];
}

/** 聯絡頁尾屬性 */
export interface ContactFooterProps {
  /** 頁尾標題 */
  title: string;
  /** 聯絡描述 */
  description: string;
  /** 社群連結陣列 */
  socialLinks: SocialLink[];
  /** 版權宣告 */
  copyright: string;
}

/** 首頁布局屬性 */
export interface HomepageLayoutProps {
  /** 頁面標題 */
  title: string;
  /** Meta 描述 */
  description: string;
  /** 語言代碼 */
  lang: string;
  /** 子元件 */
  children: ReactNode;
}