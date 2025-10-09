import React from 'react';
import { HeroSectionProps } from './types';
import ActionButton from './ActionButton';
import styles from './styles.module.css';

export default function HeroSection({ 
  mainTitle, 
  subtitle, 
  primaryAction, 
  secondaryAction,
  backgroundElements = []
}: HeroSectionProps): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>
          {mainTitle}
        </h1>
        <p className={styles.heroSubtitle}>
          {subtitle}
        </p>
        <div className={styles.heroActions}>
          <ActionButton button={primaryAction} />
          <ActionButton button={secondaryAction} />
        </div>
      </div>
      
      {/* 裝飾性背景元素 */}
      {backgroundElements.length > 0 && (
        <div className={styles.heroBackground}>
          {backgroundElements.map((element, index) => (
            <div 
              key={index}
              className={`${styles.decorationElement} ${element.className}`}
              style={{ 
                animationDelay: element.animationDelay ? `${element.animationDelay}s` : undefined 
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}