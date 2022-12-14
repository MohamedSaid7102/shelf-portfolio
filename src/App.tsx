import {
  Avatar,
  AuthorHeading,
  SectionHeader,
  ProjectsList,
  ContactLinks,
  TextIconLink,
  Divider,
  Filters,
  DownloadFileIcon,
} from '@components/';
import { useContext, useEffect, useReducer, useState, useRef } from 'react';
import { StoreContext } from '@base/src/store';

function App() {
  // Get data from local store using useContext
  const {
    user: {
      name: userName,
      jobTitle: userJobTitle,
      img: { src: userImgSrc, alt: userImgAlt },
      links: {
        jobLink: userJobLink,
        resume: {
          text: userResumeText,
          url: userResumeURL,
          ariaLabel: userResumeAriaLabel,
        },
      },
    },
    filter: { selectedTags, setIsFiltering },
    selectedProjects,
  } = useContext(StoreContext);

  return (
    <div
      className="relative min-w-screen min-h-screen flex justify-center items-start p-8
    md:justify-start xl:ml-[14rem] max-w-[2000px]"
    >
      <div className="w-full flex flex-col xl:flex-row xl:items-start items-center gap-5">
        {/* Left Side bar */}
        <aside className="bg-[rgba(180,180,180,0.3)] backdrop:blur-sm backdrop-blur-sm rounded-xl p-4 pt-12 text-center md:px-[5rem] flex flex-col justify-center items-center gap-10 max-w-2xl h-max xl:sticky xl:top-6 xl:w-full">
          <AuthorHeading
            authName={userName}
            authJobTitle={userJobTitle}
            authJobLink={userJobLink}
          />
          <Avatar imgSrc={userImgSrc} imgAlt={userImgAlt} />
          <ContactLinks />
          <Divider />
          {/* Download CV link */}
          <TextIconLink
            text={userResumeText}
            icon={<DownloadFileIcon className="w-[40px] h-[40px]" />}
            href={userResumeURL}
            ariaLabel={userResumeAriaLabel}
          />
        </aside>
        {/* Page main Content */}
        <main className="w-full bg-[rgba(180,180,180,0.3)] backdrop:blur-md backdrop-blur-md rounded-xl p-5 flex flex-col gap-12 items-center">
          {/* Section Header */}
          <SectionHeader title="My Projects" otherContent={<Filters />} />
          {/* Section Content */}
          <ProjectsList projects={selectedProjects} />
        </main>
      </div>
    </div>
  );
}
export default App;

