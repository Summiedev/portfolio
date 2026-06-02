import { useState } from "react";

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="14"
    height="14"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
    aria-hidden="true"
  >
    <path d="M4 6l4 4 4-4" />
  </svg>
);

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
    const isNarrowViewport = typeof window !== "undefined" && window.innerWidth <= 640;
    if (isTouchDevice || isNarrowViewport) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div className={`proj-card${open ? " open" : ""}`} data-stage={project.stage}>
      <div className="proj-top" onClick={onToggle}>
        <div className="proj-top-row">
          <div style={{ flex: 1 }}>
            <div className="proj-stage">{project.stage}</div>
            <h3 className="proj-name">{project.name}</h3>
          </div>
          <span className="proj-chevron" style={{ display: typeof window !== "undefined" && window.innerWidth > 640 ? "none" : undefined }}>
            <ChevronIcon open={open} />
          </span>
        </div>
        <p className="proj-desc">{project.description}</p>
      </div>

      <div className={`proj-expand${open ? " open" : ""}`}>
        <div className="proj-expand-inner">
          <div className="proj-stack">
            {project.stack.map((tag) => (
              <span key={tag.label} className={`tag${tag.accent ? " accent" : ""}`}>
                {tag.label}
              </span>
            ))}
          </div>
          <p className="proj-contribution">{project.contribution}</p>
          <a className="proj-link" href={project.proofHref} target="_blank" rel="noreferrer">
            <ExternalIcon />
            {project.proofText}
          </a>
        </div>
      </div>
    </div>
  );
}
