import { storeType } from '@myTypes/';
import {
  HTMLTag,
  CSSTag,
  JSTag,
  GAMETag,
  REACTJSTag,
  projectsData,
} from '@data/projectsData';
import myPic from '@assets/images/myPic.jpg';
import { socialLinksData } from '@data/socialLinksData';

export const Store: storeType = {
  user: {
    name: 'Mohamed S.Shelf',
    jobTitle: 'Front-end Engineer',
    img: {
      src: myPic,
      alt: 'Mohamed Shelf sitting with a smile on his face on a chair on ODC',
    },
    links: {
      socialLinksData,
      resume: {
        url: 'https://drive.google.com/drive/folders/16KJfIvlQ5ZGnAYbW5Kn9RqeL_H3q16GR?usp=share_link',
        text: 'My Resume',
        ariaLabel: 'Download Shelf CV',
      },
      jobLink: (
        <a
          href="https://www.orangedigitalcenters.com/country/EG/home"
          target="_blank"
          className="text-[#f15a24] font-bold whitespace-nowrap"
        >
          @Orange (ODC) &#x2197;
        </a>
      ),
    },
  },
  projectsData,
  filter: {
    isFiltering: false,
    allTags: [
      HTMLTag,
      CSSTag,
      JSTag,
      REACTJSTag,
      GAMETag,
    ] /** You pre select tags, if you remove a tag from here it will be removed from filtering tags list & from projects tags list, so user won't be able to select this tag any more */,
    selectedTags: [] /** You pre select selected tag */,
    // ☢️☢️ Do not touch these ↘↘ These are for the filtering logic ☢️☢️
    setIsFiltering: () => {},
    addNewActiveFilter: () => {},
    removeFilterTag: () => {},
    removeAllFilterTags: () => {},
  },
};
