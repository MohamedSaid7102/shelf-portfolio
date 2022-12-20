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
  user: {
    name: string;
    jobTitle: string;
    img: {
      src: string;
      alt: string;
    };
    links: {
      socialLinksData: socialLinksDataType;
      jobLink: React.ReactNode;
      resume: {
        url: string;
        text: string;
        ariaLabel: string;
      };
    };
  };
  projectsData: projectDataType[];
  filter: {
    isFiltering: boolean;
    allTags: filterTagType[];
    selectedTags: filterTagType[];
    setIsFiltering: (isFiltering: boolean) => void;
    addNewActiveFilter: (selectedFilter: filterTagType) => void;
    removeFilterTag: (selectedFilter: filterTagType) => void;
    removeAllFilterTags: () => void;
  };
};

export type socialLinksDataType = {
  title: string;
  url: string;
  logo: JSX.Element;
}[];
