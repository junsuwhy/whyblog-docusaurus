import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Sample blog posts data - in a real implementation, this would come from the blog metadata
const samplePosts = [
  {
    id: 1,
    title: '探索個人知識管理系統的建立',
    date: '2024-03-15',
    excerpt: '在資訊爆炸的時代，如何有效地管理和組織個人知識變得越來越重要。本文將分享建立個人知識管理系統的實踐經驗，包括工具選擇、架構設計和持續優化的方法...',
    permalink: '/blog/knowledge-management-system'
  },
  {
    id: 2,
    title: '從 0 到 1：我的部落格遷移之旅',
    date: '2024-03-12',
    excerpt: '記錄從傳統部落格平台遷移到 Docusaurus 的完整過程，包括技術選型、內容遷移、主題客製化等關鍵步驟，以及過程中遇到的挑戰與解決方案...',
    permalink: '/blog/blog-migration-journey'
  },
  {
    id: 3,
    title: '深度工作：提升專注力的實踐心得',
    date: '2024-03-08',
    excerpt: '分享實踐深度工作法的個人經驗，探討如何在充滿干擾的環境中保持專注，以及建立深度工作習慣的具體方法和工具推薦...',
    permalink: '/blog/deep-work-practice'
  },
  {
    id: 4,
    title: '學習筆記的藝術：Zettelkasten 方法實踐',
    date: '2024-03-05',
    excerpt: '深入介紹 Zettelkasten 筆記方法的核心概念，分享如何將這套系統應用在日常學習中，並展示實際的筆記範例和連結技巧...',
    permalink: '/blog/zettelkasten-method'
  },
  {
    id: 5,
    title: '時間管理的迷思與真相',
    date: '2024-03-01',
    excerpt: '打破常見的時間管理迷思，分享真正有效的時間管理策略。從能量管理到優先級設定，探討如何在有限的時間內創造最大價值...',
    permalink: '/blog/time-management-truth'
  }
];

export default function LatestPosts(): ReactNode {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <section className={styles.latestPosts}>
      <div className="container">
        <h2 className={styles.sectionTitle}>最新的文章</h2>
        
        <div className={styles.postsGrid}>
          {samplePosts.map((post, index) => (
            <article key={post.id} className={styles.postCard} style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}>
              <div className={styles.postImage}></div>
              <div className={styles.postContent}>
                <span className={styles.postDate}>
                  {formatDate(post.date)}
                </span>
                <h3 className={styles.postTitle}>
                  {post.title}
                </h3>
                <p className={styles.postExcerpt}>
                  {post.excerpt}
                </p>
                <Link
                  to={post.permalink}
                  className={styles.readMore}
                >
                  閱讀全文
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link to="/blog" className={styles.viewAllBtn}>
          閱讀全部部落格文章
        </Link>
      </div>
    </section>
  );
}
