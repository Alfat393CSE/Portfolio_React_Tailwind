import { Code2 } from "lucide-react";
export function ProjectVisual({ project }) {
  const Icon = project.icon;
  return (
    <div
      className="project-visual"
      style={{ "--project-color": project.color }}
      aria-label={`${project.title}: illustrative project thumbnail`}
    >
      <div className="project-visual-grid" aria-hidden="true" />
      <div className="project-visual-content">
        <span className="project-visual-icon">
          <Icon size={36} strokeWidth={1.4} aria-hidden="true" />
        </span>
        <span className="project-visual-kind">{project.kind}</span>
        <strong>{project.title}</strong>
      </div>
      <span className="project-visual-label">PROJECT ILLUSTRATION</span>
      <Code2
        className="project-visual-code"
        size={30}
        strokeWidth={1}
        aria-hidden="true"
      />
    </div>
  );
}
