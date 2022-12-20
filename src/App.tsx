import {
  Avatar,
  AuthorHeading,
  ODCLink,
  SectionHeader,
  ProjectsList,
  ContactLinks,
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
    filter: { selectedTags, setIsFiltering },
  } = useContext(StoreContext);

  useEffect(() => {
    if (selectedTags.length == 0) {
      setProjects(projectsData);
      setIsFiltering(false);
      console.log(selectedTags.length);
    } else {
      setProjects(
        projectsData.filter((project) =>
          selectedTags.every((tag) => project.tagsList.includes(tag))
        )
      );
      setIsFiltering(true);
    }
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
        {/* Page main Content */}
        <main className="w-full bg-[rgba(180,180,180,0.3)] backdrop:blur-md backdrop-blur-md rounded-xl p-5 flex flex-col gap-12 items-center">
          {/* Section Header */}
          <SectionHeader title="My Projects" otherContent={<Filters />} />
          {/* Section Content */}
          <ProjectsList projects={projects} />
        </main>
      </div>
    </div>
  );
}
export default App;

