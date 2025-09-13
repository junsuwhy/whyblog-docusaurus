import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📚 知識分享',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        整理技術學習筆記、經驗分享與深度思考，建構完整的知識體系。
        透過結構化的文件管理，讓知識更容易被找到和應用。
      </>
    ),
  },
  {
    title: '✍️ 部落格紀錄',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        分享開發心得、專案經歷與技術探索過程。
        記錄成長路上的點點滴滴，與社群交流學習。
      </>
    ),
  },
  {
    title: '🔍 智慧搜尋',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        內建中英文搜尋功能，支援全站內容快速檢索。
        讓您輕鬆找到需要的文章和技術文件。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
