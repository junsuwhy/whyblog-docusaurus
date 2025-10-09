import React from 'react';
import { ContentPillar as ContentPillarType } from './types';
import ActionButton from './ActionButton';
import styles from './styles.module.css';

interface ContentPillarProps {
  pillar: ContentPillarType;
  className?: string;
}

export default function ContentPillar({ pillar, className = '' }: ContentPillarProps): React.ReactElement {
  const cardClasses = `${styles.pillarCard} ${className}`.trim();

  return (
    <div className={cardClasses}>
      <div className={styles.pillarIcon}>
        {pillar.icon}
      </div>
      <h3 className={styles.pillarTitle}>
        {pillar.title}
      </h3>
      <p className={styles.pillarDescription}>
        {pillar.description}
      </p>
      {pillar.metrics && (
        <div className={styles.pillarMetrics}>
          <span>{pillar.metrics.postCount} 篇文章</span>
          <span>更新於 {pillar.metrics.lastUpdated.toLocaleDateString('zh-TW')}</span>
        </div>
      )}
      <ActionButton button={pillar.actionButton} />
    </div>
  );
}