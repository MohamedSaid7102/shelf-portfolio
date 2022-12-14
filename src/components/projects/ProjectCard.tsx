import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { projectDataType, filterTagType } from '@myTypes/';
import {
  AnimatedTextIconLink1,
  CodeIcon,
  EyeIcon,
  ImageLazyLoad,
} from '@components/';
import { StoreContext } from '@base/src/store';
import { lazyLoadingImagesData } from '@data/data';
import { getProductionNameOfPath } from '@utils/functions';

export const ProjectCard: React.FC<projectDataType> = ({
  demoLink,
  codeLink,
  imgSrc,
  imgAlt,
  title,
  desc,
  tagsList,
}) => {
  const {
    filter: { addNewActiveFilter, removeFilterTag, selectedTags, allTags },
  } = useContext(StoreContext);

  /**
   *
   * @param tag
   * @returns weather tag is selected or not <Boolean>
   */
  const isTagSelected = (tag: filterTagType) => selectedTags.includes(tag);

  const filterWithTag = (
    e: React.MouseEvent<HTMLButtonElement>,
    tag: filterTagType
  ) => {
    e.preventDefault();
    if (tag.selected) {
      removeFilterTag(tag);
    } else {
      addNewActiveFilter(tag);
    }
  };

  /** imgSrc in production might be like e.g: /assets/project-1-e5c0642e.png,
   * below logic is to remove the produced version of the img name, to be able to correctly compare ti to images in lazyLoadingImagesData
   */
  let inProductionMode = imgSrc.includes('-');

  let correspondingHash = inProductionMode
    ? /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[getProductionNameOfPath(imgSrc)].blurhash
    : /*@ts-ignore: Get the corresponding hash from lazyLoadingImagesData to show it*/
      lazyLoadingImagesData[imgSrc].blurhash;

  return (
    <article className="card-wrap w-full sm:w-[350px] bg-[rgba(50,50,50,0.5)] rounded-2xl overflow-hidden flex flex-col flex-start gap-5">
      {/*<!-- 1. Image --> */}
      <a
        href={demoLink}
        aria-label={imgAlt}
        tabIndex={-1}
        className="w-full relative flex h-[180px] overflow-hidden justify-center items-center"
      >
        <ImageLazyLoad src={imgSrc} alt={imgAlt} blurHash={correspondingHash} />
      </a>
      {/*<!-- 2. Content --> */}
      <div className="flex flex-col items-center gap-5 sm:items-start text-center sm:text-left p-5 pb-0">
        <a
          href={demoLink}
          className="text-gradient text-[17px] sm:text-[30px] py-3"
        >
          {title}
        </a>
        <p className="font-light text-[13px] sm:text-[20px]">{desc}</p>
        {/*<!-- Links --> */}
        <div className="content__links w-full flex flex-wrap justify-between gap-3 sm:gap-6 sm:justify-start">
          {/*<!-- DEMO Link  --> */}
          <AnimatedTextIconLink1
            text="Demo"
            icon={<EyeIcon />}
            link={demoLink}
          />
          {/*<!-- Code Link --> */}
          <AnimatedTextIconLink1
            text="Code"
            icon={<CodeIcon />}
            link={codeLink}
          />
        </div>
      </div>
      {/*<!-- 3. Tags --> */}
      <footer
        className="border border-solid border-transparent border-t-[#febc2e] flex-start flex-row flex-wrap gap-2 p-5 mt-7"
        role="list"
      >
        {tagsList
          .filter((tag) => allTags.includes(tag))
          .map((tag) => (
            <button
              className={`cursor-pointer ${
                isTagSelected(tag) ? 'bg-[#0be8f442]' : 'bg-transparent'
              } text-[#0be8f4] py-[0.3em] px-[0.6em] mr-2 border-none rounded-[30px] font-extralight sm:font-medium text-[13px] sm:text-[17px] transition-all
            hover:bg-[#0be8f442]
            focus-visible:bg-[#0be8f442]
            outline-1 outline-[#0be8f4] outline-offset-4`}
              data-filter={tag.name.toLocaleLowerCase()}
              aria-label={`filter projects by ${tag.name}`}
              key={tag.id}
              onClick={(e) => filterWithTag(e, tag)}
            >
              <span aria-hidden={true} className="opacity-75">
                #{' '}
              </span>
              {tag.name.toLocaleUpperCase()}
            </button>
          ))}
      </footer>
    </article>
  );
};
