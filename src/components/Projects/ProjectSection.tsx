import { projects } from "../../data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { projectsModalData } from "../../data/projects.modal.data";
import type { ProjectModalData } from "../../data/projects.modal.data";
import "./ProjectsSection.css";

const technicalProjects = projects.filter(
  (p) => p.id !== "inredtelecom" && p.id !== "martha-garcia-portfolio"
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectModalData | null>(null);

  const handleMoreDetails = (id: string) => {
    setSelectedProject(
      projectsModalData.find((p: ProjectModalData) => p.id === id) ?? null
    );
  };

  return (
    <section id="tech-projects" className="projects-section">
      <div className="container">
        <span className="section-eyebrow">Más proyectos</span>
        <h2 className="section-title">
          Otros <span>proyectos desarrollados</span>
        </h2>
        <p className="section-description">
          Proyectos técnicos que demuestran nuestra experiencia en distintas tecnologías y enfoques.
        </p>
      </div>

      <div className="container">
        <div className="tech-grid">
          {technicalProjects.map((project) => (
            <div key={project.id} className="tech-project-card">
              <ProjectCard
                project={project}
                onMoreDetails={() => handleMoreDetails(project.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
