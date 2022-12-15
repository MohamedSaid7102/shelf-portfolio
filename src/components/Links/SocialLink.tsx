import React, { ReactNode } from 'react';

interface SocialLinkProps {
  title: string;
  url: string;
  logo: ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ title, url, logo }) => {
  return (
    <a
      href={url}
      aria-label={title}
      title={title}
      target="_blank"
      className="outline-btn-type-1 border p-4"
    >
      {logo}
    </a>
  );
};
