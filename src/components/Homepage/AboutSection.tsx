import React from 'react';
import { AboutSectionProps } from './types';
import ActionButton from './ActionButton';
import styles from './styles.module.css';

export default function AboutSection({ 
  title, 
  content, 
  ctaButton, 
  decorativeLine = true 
}: AboutSectionProps): React.ReactElement {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>
            {title}
          </h2>
          {decorativeLine && <div className={styles.decorativeLine} />}
          <p className={styles.aboutText}>
            {content}
          </p>
          <ActionButton button={ctaButton} />
        </div>
      </div>
    </section>
  );
}