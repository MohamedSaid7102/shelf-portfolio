import React, { createContext, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storeType, filterTagType } from '@myTypes/';
import {
  HTMLTag,
  CSSTag,
  JSTag,
  GAMETag,
  REACTJSTag,
  projectsData,
} from '@utils/projectsData';

const Store: storeType = {
  filter: {
    isFiltering: false,
    setIsFiltering: (isFiltering: boolean) => {
      Store.filter.isFiltering = isFiltering;
    },
    allTags: [HTMLTag, CSSTag, JSTag, REACTJSTag, GAMETag],
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

  // Depending on selectedTags update isFilteringState
  useEffect(() => {
    state.filter.selectedTags.length == 0 && setIsFiltering(false);
  }, [state.filter.selectedTags]);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
