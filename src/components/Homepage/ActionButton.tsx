import React from 'react';
import Link from '@docusaurus/Link';
import { ActionButton as ActionButtonType } from './types';
import styles from './styles.module.css';

interface ActionButtonProps {
  button: ActionButtonType;
  className?: string;
}

export default function ActionButton({ button, className = '' }: ActionButtonProps): React.ReactElement {
  const buttonClasses = `
    ${styles.actionButton} 
    ${styles[`actionButton${button.variant.charAt(0).toUpperCase() + button.variant.slice(1)}`]} 
    ${styles[`actionButton${button.size.charAt(0).toUpperCase() + button.size.slice(1)}`]}
    ${className}
  `.trim();

  const linkProps = {
    to: button.href,
    className: buttonClasses,
    'aria-label': button.ariaLabel || button.text,
    onClick: button.onClick,
  };

  if (button.isExternal) {
    return (
      <a
        href={button.href}
        className={buttonClasses}
        aria-label={button.ariaLabel || button.text}
        onClick={button.onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button.text}
      </a>
    );
  }

  return (
    <Link {...linkProps}>
      {button.text}
    </Link>
  );
}