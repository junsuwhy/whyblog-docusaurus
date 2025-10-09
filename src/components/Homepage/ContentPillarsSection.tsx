import React from 'react';
import { ContentPillarsSectionProps } from './types';
import ContentPillar from './ContentPillar';
import styles from './styles.module.css';

export default function ContentPillarsSection({ 
  title, 
  description, 
  pillars 
}: ContentPillarsSectionProps): React.ReactElement {
  return (
    <section className={styles.contentPillarsSection} id="content-pillars">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {title}
        </h2>
        <p className={styles.sectionDescription}>
          {description}
        </p>
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <ContentPillar 
              key={pillar.id} 
              pillar={pillar} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}