import React, { MouseEventHandler, useContext } from 'react';
import { projectDataType, filterTagType } from '@myTypes/';
import { AnimatedTextIconLink1, CodeIcon, EyeIcon } from '@components/';
import { v4 as uuidv4 } from 'uuid';
import { StoreContext } from '@utils/store';

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
    filter: { addNewActiveFilter, removeFilterTag },
  } = useContext(StoreContext);

  const filterWithTag = (
    e: React.MouseEvent<HTMLButtonElement>,
    tag: filterTagType
  ) => {
    e.preventDefault();
    if (tag.selected) {
      console.log(tag.selected);
      removeFilterTag(tag);
    } else {
      console.log(tag.selected);
      addNewActiveFilter(tag);
    }
  };

  return (
    <article className="card-wrap sm:w-[350px] w-[300px] bg-[rgba(50,50,50,0.5)] rounded-2xl overflow-hidden flex flex-col flex-start gap-5">
      {/*<!-- 1. Image --> */}
      <picture className="flex h-[180px] overflow-hidden justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <a
          href={demoLink}
          aria-label={imgAlt}
          tabIndex={-1}
          className="w-full h-full"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </a>
      </picture>
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
        <div className="content__links w-full flex flex-wrap justify-between sm:gap-6 sm:justify-start">
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
        className="border border-solid border-transparent border-t-[#febc2e] flex-start flex-row flex-wrap gapX1 p-5 mt-7"
        role="list"
      >
        {tagsList.map((tag) => (
          <button
            className="card-tag font-extralight sm:font-medium text-[13px] sm:text-[17px] transition-all "
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
