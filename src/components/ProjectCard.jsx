export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span className="project-card__stage">{project.stage}</span>
        <span className="project-card__proof-label">{project.proofLabel}</span>
      </div>

      <h3>{project.name}</h3>
      <p className="project-card__description">{project.description}</p>

      <div className="chip-row" aria-label={`${project.name} stack`}>
        {project.stack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      <p className="project-card__contribution">{project.contribution}</p>

      <a className="project-card__link" href={project.proofHref} target="_blank" rel="noreferrer">
        <span>{project.proofText}</span>
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}