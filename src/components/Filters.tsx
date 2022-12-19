import React, { useContext } from 'react';
import { FilterTag } from '@components/';
import { StoreContext } from '@utils/store';

export const Filters: React.FC = () => {
  const {
    filter: { isFiltering, allTags, removeAllFilterTags },
  } = useContext(StoreContext);

  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-[#FEBC2E] border-1 rounded-2xl p-3 py-[40px] pb-[30px] relative">
      {/* Filters Heading */}
      <button
        className={`text-[10px] sm:text-[20px] border font-medium bg-[#333] backdrop-blur-md backdrop-filter:blur[10px] ${
          isFiltering &&
          'hover:bg-[#FEBC2E] hover:text-black focus-visible:bg-[#FEBC2E] focus-visible:text-black'
        } border-[#FEBC2E] border-1 rounded-full p-3 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-300`}
        onClick={removeAllFilterTags}
      >
        {isFiltering ? 'Clear Tag filters' : 'Filters'}
      </button>
      {/* Filters */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {allTags.map((tag) => (
          <FilterTag tag={tag} key={tag.id} />
        ))}
      </div>
    </div>
  );
};
