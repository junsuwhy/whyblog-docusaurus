import React from 'react';
import { SocialLink as SocialLinkType } from './types';
import styles from './styles.module.css';

interface SocialLinkProps {
  link: SocialLinkType;
  className?: string;
}

export default function SocialLink({ link, className = '' }: SocialLinkProps): React.ReactElement {
  const linkClasses = `${styles.socialLink} ${className}`.trim();

  return (
    <a
      href={link.url}
      className={linkClasses}
      aria-label={link.label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.icon}
    </a>
  );
}