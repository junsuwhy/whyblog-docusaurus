import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

// Hero Section Component
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          探索社會，建構知識<br className={styles.heroBreak} />並將理想付諸實踐
        </h1>
        <p className={styles.heroSubtitle}>
          一名關注社會議題的工程師，致力於運用系統化思維與技術，探索並分享跨領域的知識與洞見，期盼為更公平、更多元的社會盡一份心力。
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={`${styles.btn} ${styles.btnPrimary}`}
            to="#content">
            瀏覽核心內容
          </Link>
          <Link
            className={`${styles.btn} ${styles.btnSecondary}`}
            to="#about">
            更認識我
          </Link>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>關於我</h2>
        <div className={styles.aboutDivider}></div>
        <p className={styles.aboutText}>
          我相信，透過不斷學習與反思，並將洞察轉化為具體行動，我們能為世界帶來微小而確實的改變。這裡不僅是我的數位筆記本，也是我思考與創作的實驗室。無論是透過程式碼建構工具，或是透過文字分享觀點，我都希望能與您一同探索這個複雜而迷人的世界。
        </p>
        <div className={styles.aboutButtonWrapper}>
          <Link
            className={`${styles.btn} ${styles.btnSecondary}`}
            to="/about">
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
}

// Content Pillars Section Component
function ContentSection() {
  return (
    <section id="content" className={styles.contentSection}>
      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <h2 className={styles.contentTitle}>核心內容</h2>
          <p className={styles.contentSubtitle}>以下是我長期關注與耕耘的兩大主題</p>
        </div>

        <div className={styles.contentGrid}>
          {/* Blog Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>個人部落格</h3>
            <p className={styles.cardText}>
              記錄我對社會議題的觀察、生活的反思，以及參與公共事務的點滴。這裡有我的故事、觀點與批判。
            </p>
            <div className={styles.cardButtonWrapper}>
              <Link
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnFullWidth}`}
                to="/blog">
                進入部落格
              </Link>
            </div>
          </div>

          {/* Knowledge Base Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>知識庫</h3>
            <p className={styles.cardText}>
              系統化整理我在科技、社會學、設計與自我成長等領域的學習筆記、方法論與實用工具。
            </p>
            <div className={styles.cardButtonWrapper}>
              <Link
                className={`${styles.btn} ${styles.btnSecondary} ${styles.btnFullWidth}`}
                to="/docs">
                探索知識庫
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Contact Section Component
function FooterContactSection() {
  return (
    <section id="contact" className={styles.footerContactSection}>
      <div className={styles.footerContactContainer}>
        <h3 className={styles.footerContactTitle}>保持聯繫</h3>
        <p className={styles.footerContactText}>如果您對我的文章或專案感興趣，歡迎透過以下方式與我交流。</p>
        <div className={styles.footerContactLinks}>
          <a href="https://github.com/junsuwhy" className={styles.footerContactLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className={styles.srOnly}>GitHub</span>
          </a>
          <a href="#" className={styles.footerContactLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className={styles.srOnly}>LinkedIn</span>
          </a>
          <a href="#" className={styles.footerContactLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className={styles.srOnly}>Email</span>
          </a>
        </div>
        <p className={styles.footerContactCopyright}>&copy; 2024 Your Name. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="探索社會，建構知識並將理想付諸實踐 - 一名關注社會議題的工程師的個人網站">
      <main className={styles.customHomepage}>
        <HeroSection />
        <AboutSection />
        <ContentSection />
        <FooterContactSection />
      </main>
    </Layout>
  );
}
