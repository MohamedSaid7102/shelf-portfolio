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
      className="border border-white p-4 rounded-2xl shadow-2xl hover:shadow-none hover:rounded-none focus-visible:rounded-none"
    >
      {logo}
    </a>
  );
};
