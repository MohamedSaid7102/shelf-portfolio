import React from 'react';

interface ProjectCardProps {
  demoLink: string;
  codeLink: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  tagsList: string[];
  key: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  demoLink,
  codeLink,
  imgSrc,
  imgAlt,
  title,
  desc,
  tagsList,
}) => {
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
          <div
            role="link"
            className="button button--rotate-over view"
            aria-label="Demo"
          >
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <a
              href={demoLink}
              target="_blank"
              className="flex p-5 justify-center items-center gap-6 text-[14px] sm:text-[23px]"
              tabIndex={0}
            >
              Demo
              <svg
                className="link__icon"
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <circle
                  cx="128"
                  cy="128"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></circle>
              </svg>
            </a>
          </div>
          {/*<!-- Code Link --> */}
          <div
            role="link"
            className="button button--rotate-over view"
            aria-label="Code"
          >
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <span aria-hidden={true}></span>
            <a
              href={codeLink}
              target="_blank"
              className="flex p-5 justify-center items-center gap-6 text-[14px] sm:text-[23px]"
              tabIndex={0}
            >
              Code
              <svg
                className="link__icon"
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="64 88 16 128 64 168"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <polyline
                  points="192 88 240 128 192 168"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="160"
                  y1="40"
                  x2="96"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/*<!-- 3. Tags --> */}
      <footer
        className="border border-solid border-transparent border-t-[#febc2e] flex-start flex-row flex-wrap gapX1 p-5 mt-7"
        role="list"
      >
        {tagsList.map((tag, index) => (
          <button
            className="card-tag font-extralight sm:font-medium text-[13px] sm:text-[17px] transition-all "
            data-filter={tag.toLocaleLowerCase()}
            aria-label={`filter projects by ${tag}`}
            key={index}
          >
            <span aria-hidden={true}>#</span>
            {tag.toLocaleUpperCase()}
          </button>
        ))}
      </footer>
    </article>
  );
};
