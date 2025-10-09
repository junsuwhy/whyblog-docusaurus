import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/Homepage/HeroSection';
import ContentPillarsSection from '@site/src/components/Homepage/ContentPillarsSection';
import AboutSection from '@site/src/components/Homepage/AboutSection';
import ContactFooter from '@site/src/components/Homepage/ContactFooter';
import BlogIcon from '@site/src/components/Homepage/icons/BlogIcon';
import VaultIcon from '@site/src/components/Homepage/icons/VaultIcon';
import GitHubIcon from '@site/src/components/Homepage/icons/GitHubIcon';
import LinkedInIcon from '@site/src/components/Homepage/icons/LinkedInIcon';
import EmailIcon from '@site/src/components/Homepage/icons/EmailIcon';
import type { ActionButton, ContentPillar, SocialLink } from '@site/src/components/Homepage/types';

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();

  // 定義主要行動按鈕
  const primaryAction: ActionButton = {
    text: '瀏覽核心內容',
    href: '#content-pillars',
    variant: 'primary',
    size: 'large',
    isExternal: false,
    ariaLabel: '瀏覽核心內容區塊'
  };

  // 定義次要行動按鈕
  const secondaryAction: ActionButton = {
    text: '更認識我',
    href: '/about',
    variant: 'secondary',
    size: 'large',
    isExternal: false,
    ariaLabel: '前往關於我頁面'
  };

  // 定義內容支柱
  const contentPillars: ContentPillar[] = [
    {
      id: 'blog',
      icon: <BlogIcon />,
      title: '部落格',
      description: '記錄思考過程、學習心得與實踐經驗。分享在探索社會議題與個人成長路上的所見所得。',
      actionButton: {
        text: '閱讀文章',
        href: '/blog',
        variant: 'primary',
        size: 'medium',
        isExternal: false,
        ariaLabel: '前往部落格頁面'
      }
    },
    {
      id: 'vault',
      icon: <VaultIcon />,
      title: '知識庫',
      description: '整理各領域的知識筆記與參考資料。建構系統化的知識體系，便於學習與查閱。',
      actionButton: {
        text: '探索知識',
        href: '/vault',
        variant: 'primary',
        size: 'medium',
        isExternal: false,
        ariaLabel: '前往知識庫頁面'
      }
    }
  ];

  // 定義社群連結
  const socialLinks: SocialLink[] = [
    {
      platform: 'github',
      url: 'https://github.com/junsuwhy',
      icon: <GitHubIcon />,
      label: 'GitHub'
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/ycat',
      icon: <LinkedInIcon />,
      label: 'LinkedIn'
    },
    {
      platform: 'email',
      url: 'mailto:contact@example.com',
      icon: <EmailIcon />,
      label: 'Email'
    }
  ];

  return (
    <Layout
      title={`首頁 | ${siteConfig.title}`}
      description="探索社會，建構知識並將理想付諸實踐 - Ycat 的個人成長知識庫">
      <main>
        <HeroSection
          mainTitle="探索社會，建構知識並將理想付諸實踐"
          subtitle="只有用心靈才能看見真實的東西，真正重要的東西不是用眼睛可以看見的。── 聖修伯里"
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        
        <ContentPillarsSection
          title="核心內容"
          description="探索兩大知識支柱，深入了解思考過程與系統化知識體系"
          pillars={contentPillars}
        />
        
        <AboutSection
          title="關於我"
          content="歡迎來到我的個人知識庫！我致力於探索社會議題、建構知識體系，並將理想付諸實踐。透過持續學習與思考，記錄成長路上的所見所得，希望能與更多志同道合的朋友交流，共同成長。"
          ctaButton={{
            text: '了解更多',
            href: '/about',
            variant: 'primary',
            size: 'medium',
            isExternal: false,
            ariaLabel: '前往關於我頁面了解更多'
          }}
        />
        
        <ContactFooter
          title="保持聯繫"
          description="如果您對網站內容有任何想法或建議，歡迎透過以下方式與我交流"
          socialLinks={socialLinks}
          copyright="© 2025 Ycat 個人知識庫. All rights reserved."
        />
      </main>
    </Layout>
  );
}