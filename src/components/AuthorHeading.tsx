import React, { ReactNode } from 'react';

interface AuthorHeadingProps {
  authName: string;
  authJobTitle: string;
  authJobLink?: ReactNode;
}

export const AuthorHeading: React.FC<AuthorHeadingProps> = ({
  authName,
  authJobTitle,
  authJobLink,
}) => {
  return (
    <div>
      <h2 className="font-light text-[20px] sm:text-[30px]">{authName}</h2>
      <span className="text-[11px] sm:text-[20px]">
        {authJobTitle} {authJobLink && authJobLink}
      </span>
    </div>
  );
};
