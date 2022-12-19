export type projectDataType = {
  demoLink: string;
  codeLink: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  tagsList: filterTagType[];
};

export type filterTagType = {
  name: string;
  id: string;
  selected: boolean;
};

export type storeType = {
  filter: {
    isFiltering: boolean;
    setIsFiltering: (isFiltering: boolean) => void;
    allTags: filterTagType[];
    selectedTags: filterTagType[];
    addNewActiveFilter: (selectedFilter: filterTagType) => void;
    removeFilterTag: (selectedFilter: filterTagType) => void;
    removeAllFilterTags: () => void;
  };
  projectsData: projectDataType[];
};
