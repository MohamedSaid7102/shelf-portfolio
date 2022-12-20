import { projectDataType } from '@myTypes/index';
import React from 'react';
import { ProjectCard } from '@components/';
interface ProjectsListProps {
  projects: projectDataType[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
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
  );
};
