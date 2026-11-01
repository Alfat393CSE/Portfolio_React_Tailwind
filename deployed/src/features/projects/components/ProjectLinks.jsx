import { ExternalLink, Github } from "lucide-react";
export function ProjectLinks({ project }) {
  return (
    <div className="project-actions">
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="project-demo"
      >
        Live Demo <ExternalLink size={14} />
      </a>
      <span
        className="project-source"
        title="No source repository URL is listed in the supplied CV"
      >
        <Github size={15} /> Source code unavailable
      </span>
    </div>
  );
}
