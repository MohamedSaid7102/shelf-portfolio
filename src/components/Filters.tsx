import React from 'react';
import { Filter } from '@components/';

interface FiltersProps {
  userSelectedFilter: boolean;
}

export const Filters: React.FC<FiltersProps> = ({ userSelectedFilter }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-[#FEBC2E] border-1 rounded-2xl p-3 py-[40px] pb-[30px] relative">
      {/* Filters Heading */}
      <button
        className={`text-[10px] sm:text-[20px] border font-medium bg-[#333] backdrop-blur-md backdrop-filter:blur[10px] ${
          userSelectedFilter && 'hover:bg-[#000]'
        } border-[#FEBC2E] border-1 rounded-full p-3 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        {userSelectedFilter ? 'Clear Tag filters' : 'Filters'}
      </button>
      {/* Filters */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <Filter name="html" selected={false} />
        <Filter name="css" selected={true} />
        <Filter name="js" selected={false} />
      </div>
    </div>
  );
};
