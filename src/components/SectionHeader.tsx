import React from 'react';

interface SectionHeaderProps {
  title: string;
  otherContent?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  otherContent,
}) => {
  return (
    <header className="w-full text-center py-7 flex flex-col gap-12">
      <h1>{title}</h1>
      {otherContent}
    </header>
  );
};
