import React, { useContext } from 'react';
import { SocialLink } from '@components/';
import { StoreContext } from '@base/src/store';

export const ContactLinks: React.FC = () => {
  const {
    user: {
      links: { socialLinksData },
    },
  } = useContext(StoreContext);

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
