import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeader index="01" title="HNG Projects" />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}