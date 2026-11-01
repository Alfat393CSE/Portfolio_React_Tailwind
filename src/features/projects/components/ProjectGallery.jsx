import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLinks } from "./ProjectLinks";
export function ProjectGallery() {
  const [filter, setFilter] = useState("All Projects");
  const visible = projects.filter(
    (project) => filter === "All Projects" || project.filters.includes(filter),
  );
  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects by category"
      >
        {[
          "All Projects",
          "Full-Stack",
          "Frontend",
          "Backend",
          "Machine Learning",
        ].map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="project-result-count" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
        {filter !== "All Projects" ? ` · ${filter}` : ""}
      </p>
      <div className="project-gallery">
        {visible.map((project) => (
          <motion.article
            key={project.slug}
            className="project-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              className="project-visual-link"
              href={`#/projects/${project.slug}`}
              aria-label={`View ${project.title} details`}
            >
              <ProjectVisual project={project} />
            </a>
            <div className="project-card-body">
              <div className="project-card-meta">
                <span>{project.category}</span>
                <span>{project.kind}</span>
              </div>
              <h3>
                <a
                  className="project-title-link"
                  href={`#/projects/${project.slug}`}
                >
                  {project.title}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-stack" aria-label="Technology stack">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <ProjectLinks project={project} />
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
