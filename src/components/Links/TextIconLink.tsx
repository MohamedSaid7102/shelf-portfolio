import React, { ReactNode } from 'react';

interface TextIconLinkProps {
  text: string;
  icon: ReactNode;
  href: string;
  ariaLabel?: string;
}

export const TextIconLink: React.FC<TextIconLinkProps> = ({
  text,
  icon,
  href,
  ariaLabel,
}) => {
  return (
    <a
      className="outline-btn-type-1 w-full py-5 gap-3"
      aria-label={ariaLabel ? ariaLabel : text}
      href={href}
      target="_blank"
    >
      <span className="pointer-events-none">{text}</span>
      {icon}
    </a>
  );
};
