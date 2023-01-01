import React, { useContext, useState } from 'react';
import { CloseIcon } from '@components/';
import { StoreContext } from '@base/src/store';
import { filterTagType } from '@myTypes/index';

interface FilterTag {
  tag: filterTagType;
}

export const FilterTag: React.FC<FilterTag> = ({ tag }) => {
  const {
    filter: { removeFilterTag, addNewActiveFilter, selectedTags },
  } = useContext(StoreContext);

  /**
   *
   * @param tag
   * @returns weather tag is selected or not <Boolean>
   */
  const isTagSelected = (tag: filterTagType) => selectedTags.includes(tag);

  return (
    <button
      aria-label={`Filter with ${tag.name}`}
      className={`relative flex justify-between items-center gap-3 text-[12px] sm:text-[18px] ${
        tag.disabled
          ? 'cursor-not-allowed border border-1 border-gray-500 text-gray-400'
          : 'cursor-pointer border border-1 hover:border-[#0be8f4]'
      }  rounded-3xl py-1 px-5 focus-visible:bg-[#0be8f442] ${
        isTagSelected(tag) && 'bg-[#0be8f442] border-transparent'
      }`}
      disabled={tag.disabled}
      onClick={() => {
        isTagSelected(tag) ? removeFilterTag(tag) : addNewActiveFilter(tag);
      }}
      title={
        tag.disabled
          ? `No projects with filters you selected + ${tag.name}`
          : `Filter with ${tag.name}`
      }
    >
      <span>{tag.name}</span>
      {isTagSelected(tag) && (
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
