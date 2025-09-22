import React from "react";
import { projectsData } from "../../site-content";
import ProjectInfo from "../ui/ProjectInfo";

const Projects = () => {
  const { projects } = projectsData;

  return (
    <section className="relative py-12 text-gray-800">
      <h2 className="section-heading">{projectsData.title}</h2>
      <div className="container mx-auto px-4 flex flex-col items-center gap-y-16">
        {projects.map((project) => (
          <ProjectInfo
            key={project.id}
            title={project.name}
            description={project.description}
            button={project.button}
            href={project.href}
            imgSrc={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
