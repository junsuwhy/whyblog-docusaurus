import React from 'react';
import { ContactFooterProps } from './types';
import SocialLink from './SocialLink';
import styles from './styles.module.css';

export default function ContactFooter({ 
  title, 
  description, 
  socialLinks, 
  copyright 
}: ContactFooterProps): React.ReactElement {
  return (
    <footer className={styles.contactFooter}>
      <div className={styles.container}>
        <h2 className={styles.footerTitle}>
          {title}
        </h2>
        <p className={styles.footerDescription}>
          {description}
        </p>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <SocialLink 
              key={link.platform} 
              link={link} 
            />
          ))}
        </div>
        <div className={styles.copyright}>
          {copyright}
        </div>
      </div>
    </footer>
  );
}