import {
  Avatar,
  AuthorHeading,
  ODCLink,
  ContactLinks,
  ProjectCard,
  TextIconLink,
  Divider,
  Filters,
} from '@components/';
import myPic from '@assets/images/my-pic.jpg';
import { projectsData } from '@utils/projectsData';

import { DownloadFileIcon } from '@components/';
import { ResumeURL } from './config';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@utils/store';

function App() {
  const [projects, setProjects] = useState(projectsData);

  const {
    filter: { selectedTags },
  } = useContext(StoreContext);

  useEffect(() => {
    if (selectedTags.length == 0) setProjects(projectsData);
    else
      setProjects(
        projectsData.filter((project) =>
          selectedTags.some((tag) => project.tagsList.includes(tag))
        )
      );
    console.log(`Running`);
  }, [selectedTags]);

  return (
    <div
      className="min-w-screen min-h-screen flex justify-center items-start p-8
    md:justify-start xl:ml-[14rem] max-w-[2000px]"
    >
      <div className="w-full flex flex-col xl:flex-row xl:items-start items-center gap-5">
        {/* Left Side bar */}
        <aside className="bg-[rgba(180,180,180,0.3)] backdrop:blur-sm backdrop-blur-sm rounded-xl p-4 pt-12 text-center md:px-[5rem] flex flex-col justify-center items-center gap-10 max-w-2xl h-max xl:sticky xl:top-6 xl:w-full">
          <AuthorHeading
            authName="Mohamed S.Shelf"
            authJobTitle="Front-end Engineer"
            authJobLink={<ODCLink />}
          />
          <Avatar
            imgAlt="Mohamed Shelf sitting on a chair on ODC"
            imgPath={myPic}
          />
          <ContactLinks />
          <Divider />
          {/* Download CV link */}
          <TextIconLink
            icon={<DownloadFileIcon className="w-[40px] h-[40px]" />}
            href={ResumeURL}
            text="My Resume"
            ariaLabel="Download Shelf CV"
          />
        </aside>
        {/* Content */}
        <main className="w-full bg-[rgba(180,180,180,0.3)] backdrop:blur-md backdrop-blur-md rounded-xl p-5 flex flex-col gap-12 items-center">
          {/* Header */}
          <header className="w-full text-center py-7 flex flex-col gap-10">
            <h1>Front-end Projects</h1>
            {/* Filtering section */}
            <Filters />
          </header>
          {/* Content */}
          <section className="flex flex-row flex-wrap gap-8 justify-center items-start">
            {projects.map(
              (
                { demoLink, codeLink, imgSrc, imgAlt, title, desc, tagsList },
                index
              ) => (
                <ProjectCard
                  demoLink={demoLink}
                  codeLink={codeLink}
                  desc={desc}
                  imgAlt={imgAlt}
                  imgSrc={imgSrc}
                  tagsList={tagsList}
                  title={title}
                  key={index}
                />
              )
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
export default App;

