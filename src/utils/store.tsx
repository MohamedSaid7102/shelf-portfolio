import React, { createContext, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storeType, filterTagType } from '@myTypes/';
import { projectsData } from '@utils/projectsData';

const Store: storeType = {
  filter: {
    isFiltering: false,
    setIsFiltering: (isFiltering: boolean) => {
      Store.filter.isFiltering = isFiltering;
    },
    allTags: [
      { name: 'html', selected: false, id: uuidv4() },
      { name: 'css', selected: false, id: uuidv4() },
      { name: 'js', selected: false, id: uuidv4() },
      { name: 'react.js', selected: false, id: uuidv4() },
      { name: 'game', selected: false, id: uuidv4() },
    ],
    selectedTags: [],
    addNewActiveFilter: () => {},
    removeFilterTag: () => {},
    removeAllFilterTags: () => {},
  },
  projectsData,
};

export const StoreContext = createContext(Store);
// Render the app state context provider
export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState<storeType>(Store);

  /**
   * Update the selected state of the tag passed to it <True | False>
   * @param newFilter filterTagType type
   * @param newSelectedState Boolean
   */
  const setFilterSelectedState = (
    newFilter: filterTagType,
    newSelectedState: boolean
  ) => {
    setState((prevState) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        allTags: [
          ...prevState.filter.allTags.map((filter: filterTagType) => {
            if (
              filter.name.toLocaleLowerCase() ===
              newFilter.name.toLocaleLowerCase()
            )
              filter.selected = newSelectedState;
            return filter;
          }),
        ],
        selectedTags: newSelectedState
          ? prevState.filter.selectedTags.some(
              (tag) => tag.name === newFilter.name
            )
            ? prevState.filter.selectedTags
            : [...prevState.filter.selectedTags, newFilter]
          : prevState.filter.selectedTags.some(
              (tag) => tag.name === newFilter.name
            )
          ? prevState.filter.selectedTags.filter(
              (tag) => tag.name !== newFilter.name
            )
          : prevState.filter.selectedTags,
      },
    }));
  };

  /**
   * Update the isFiltering property <True | False>
   * @param isFiltering boolean indicating if it's filtering state or not
   */
  const setIsFiltering = (isFiltering: boolean) => {
    setState((prevState) => ({
      ...prevState,
      filter: { ...prevState.filter, isFiltering },
    }));
  };

  /**
   * Add a new filter as a selected filter
   * @param newFilter
   */
  const addNewActiveFilter = (newFilter: filterTagType) => {
    setFilterSelectedState(newFilter, true);
    setIsFiltering(true);
  };

  /**
   * remove tag filter from selected tags filter
   * @param newFilter
   */
  const removeFilterTag = (newFilter: filterTagType) => {
    setFilterSelectedState(newFilter, false);
    // After removing check if there is remaining any other filters selected or not
    /**
     * Note: I did this with a counter to count how many selected tags left because excution of the logic that is responsible for figuring out is all tags are unselected or not will always run successfully with a render latency, because each render has it's own state and props and every thing, so I think this is the only way figuring out is all tags are unselected or not.
     */
    let selectedTags = 0;
    state.filter.allTags.forEach((tag) => {
      if (tag.selected) selectedTags++;
    });
    const isAllTagsNotSelected = selectedTags <= 1;
    if (isAllTagsNotSelected) setIsFiltering(false);
  };

  const removeAllFilterTags = () => {
    setState((prevState) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        allTags: [
          ...prevState.filter.allTags.map((filter: filterTagType) => {
            if (filter.selected) filter.selected = false;
            return filter;
          }),
        ],
        selectedTags: prevState.filter.selectedTags.filter((item) => false),
      },
    }));
    setIsFiltering(false);
  };

  // only run once
  useEffect(() => {
    setState((state) => ({
      ...state,
      filter: {
        ...state.filter,
        addNewActiveFilter,
        removeFilterTag,
        removeAllFilterTags,
      },
    }));
  }, []);

  useEffect(() => {
    console.log(state.filter.selectedTags);
  }, [state.filter.selectedTags]);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
