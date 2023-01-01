import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { storeType, filterTagType, projectDataType } from '@myTypes/';
import { Store } from '@data/store';

export const StoreContext = createContext(Store);

// Render the app state context provider
export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<storeType>(Store);

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
  };

  /**
   * remove tag filter from selected tags filter
   * @param newFilter
   */
  const removeFilterTag = (newFilter: filterTagType) => {
    setFilterSelectedState(newFilter, false);
  };

  /**
   * Removes all selected filter tags
   */
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
        selectedTags: prevState.filter.selectedTags.filter(() => false),
      },
    }));
  };

  /**
   * MY Algo
   * 1- Select new filer => that will result in new set of projects.
   * 2- Loop over those projects and collect all filters and store them in a Set() - to remove dupplication -.
   * 3- Loop over all filter and if any one them is not included in previous set of filters => make it disabled
   */

  // Update selectedProjects on filter change
  useEffect(() => {
    let newSelectedProjects: projectDataType[] = [];
    let relatedTags = new Set();

    if (state.filter.selectedTags.length == 0) {
      newSelectedProjects = state.projectsData;
      setIsFiltering(false);
    } else {
      newSelectedProjects = state.projectsData.filter((project) => {
        if (
          state.filter.selectedTags.every((tag) =>
            project.tagsList.includes(tag)
          )
        ) {
          project.tagsList.forEach((tag) => relatedTags.add(tag));
          return project;
        }
      });
      setIsFiltering(true);
    }

    if (relatedTags.size === 0)
      state.filter.allTags.forEach((tag) => (tag.disabled = false));
    else
      state.filter.allTags.forEach(
        (tag) => (tag.disabled = !relatedTags.has(tag))
      );

    setState((state) => ({
      ...state,
      selectedProjects: newSelectedProjects,
      filter: {
        ...state.filter,
        setIsFiltering,
        addNewActiveFilter,
        removeFilterTag,
        removeAllFilterTags,
      },
    }));
  }, [state.filter.selectedTags]);

  // only run once
  useEffect(() => {
    setState((state) => ({
      ...state,
      filter: {
        ...state.filter,
        setIsFiltering,
        addNewActiveFilter,
        removeFilterTag,
        removeAllFilterTags,
      },
    }));
  }, []);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
