import React from 'react';
import { SocialLink } from '@components/';
import { socialLinksData } from '@utils/socialLinksData';

export const ContactLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {socialLinksData.map((link) => (
        <SocialLink
          key={link.title}
          title={link.title}
          url={link.url}
          logo={link.logo}
        />
      ))}
    </div>
  );
};
