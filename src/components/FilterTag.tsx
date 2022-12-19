import React, { useContext, useState } from 'react';
import { CloseIcon } from '@components/';
import { StoreContext } from '@utils/store';
import { filterTagType } from '@myTypes/index';

interface FilterTag {
  tag: filterTagType;
}

export const FilterTag: React.FC<FilterTag> = ({ tag }) => {
  const {
    filter: { removeFilterTag, addNewActiveFilter },
  } = useContext(StoreContext);
  return (
    <button
      aria-label={`Filter with ${tag.name}`}
      className={`relative flex justify-between items-center gap-3 text-[12px] sm:text-[18px] cursor-pointer border border-1 hover:border-[#0be8f4] rounded-3xl py-1 px-5 ${
        tag.selected && 'bg-[#0be8f442] border-transparent'
      }`}
      onClick={() => {
        tag.selected ? removeFilterTag(tag) : addNewActiveFilter(tag);
      }}
    >
      <span>{tag.name}</span>
      {tag.selected && (
        <span
          onClick={() => removeFilterTag(tag)}
          className={`absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] cursor-pointer h-max w-max rounded-full z-0 transition-all`}
        >
          <CloseIcon width={20} height={20} className="text-red-500" />
        </span>
      )}
    </button>
  );
};
