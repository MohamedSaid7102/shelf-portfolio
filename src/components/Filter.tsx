import React, { useState } from 'react';
import { CloseIcon } from '@components/';

interface FilterProps {
  name: string;
  selected: boolean;
}

export const Filter: React.FC<FilterProps> = ({ name, selected }) => {
  const [userHoveredCloseIcon, setUserHoveredCloseIcon] =
    useState<boolean>(false);
  const shouldRemovefilter = () => {
    console.log(`shouldRemovefilter`);
  };
  return (
    <button
      aria-label={`Filter with ${name}`}
      className={`relative flex justify-between items-center gap-3 text-[12px] sm:text-[18px] cursor-pointer border border-1 hover:border-[#0be8f4] rounded-3xl py-1 px-5 ${
        selected && 'bg-[#0be8f442] border-transparent'
      }`}
      onClick={shouldRemovefilter}
    >
      <span>{name}</span>
      {selected && (
        <span
          onClick={shouldRemovefilter}
          onMouseEnter={() => setUserHoveredCloseIcon(true)}
          onMouseLeave={() => setUserHoveredCloseIcon(false)}
          className={`absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] cursor-pointer h-max w-max rounded-full z-0 transition-all`}
        >
          <CloseIcon width={20} height={20} className="text-red-500" />
        </span>
      )}
    </button>
  );
};
