import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLinks } from "./ProjectLinks";
export function ProjectDetail({ slug, theme, toggleTheme }) {
  const project = projects.find((item) => item.slug === slug);
  const heading = useRef(null);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${project?.title ?? "Project not found"} | Alfat Tasnim Hasan`;
    heading.current?.focus({ preventScroll: true });
    return () => {
      document.title = previousTitle;
    };
  }, [project]);
  return (
    <div className="project-detail-page">
      <header className="container project-detail-nav">
        <a href="#projects" className="text-link">
          <ArrowLeft size={16} /> Back to projects
        </a>
        <button
          type="button"
          className="secondary-button"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </header>
      <main className="container project-detail-main">
        {project ? (
          <>
            <p className="eyebrow">
              PROJECT / {project.category.toUpperCase()}
            </p>
            <h1 ref={heading} tabIndex={-1}>
              {project.title}
            </h1>
            <p className="project-detail-summary">{project.description}</p>
            <ProjectLinks project={project} />
            <ProjectVisual project={project} />
            <div className="project-detail-grid">
              <div>
                <section>
                  <h2>Project overview</h2>
                  <p>{project.description}</p>
                  <h3>Main functionalities</h3>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>My contributions</h2>
                  <ul>
                    {project.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </section>
                {project.methodology && (
                  <section>
                    <h2>Research objective & methodology</h2>
                    <p>{project.methodology}</p>
                    <h3>Model performance</h3>
                    <p>{project.performance}</p>
                    <h3>Research paper</h3>
                    <p>{project.research}</p>
                  </section>
                )}
              </div>
              <aside>
                <h2>Technology stack</h2>
                <ul className="project-stack">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <p className="project-evidence-note">
                  Project details are based on the supplied CV. The thumbnail is
                  an illustration; a project screenshot has not been supplied.
                </p>
              </aside>
            </div>
          </>
        ) : (
          <>
            <h1 ref={heading} tabIndex={-1}>
              Project not found
            </h1>
            <p>Please return to the gallery to explore available projects.</p>
          </>
        )}
      </main>
      <footer className="container">
        <span className="brand-name">
          ALFAT<span>.</span>
        </span>
        <a href="#projects" className="text-link">
          Explore more projects <ArrowUpRight size={16} />
        </a>
      </footer>
    </div>
  );
}
