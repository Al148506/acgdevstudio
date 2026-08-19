import { BrowserFrame } from "../BrowserFrame/BrowserFrame";
import { caseStudies } from "../../data/case-studies.data";
import "./CaseStudies.css";

export const CaseStudies = () => {
  return (
    <section className="cases-section" id="portfolio" aria-labelledby="cases-title">
      <div className="cases-shell">
        <header className="cases-header">
          <p className="cases-index">ACG / Trabajo seleccionado</p>

          <div className="cases-heading">
            <p className="cases-eyebrow">Proyectos para clientes</p>
            <h2 id="cases-title">Trabajo real, presentado con contexto.</h2>
            <p>
              Dos proyectos creados para convertir necesidades concretas en sitios claros,
              profesionales y fáciles de usar.
            </p>
          </div>
        </header>

        <div className="cases-list">
          {caseStudies.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className={`case-study${index % 2 === 1 ? " case-study--reverse" : ""}`}
                aria-labelledby={`${project.id}-title`}
              >
                <header className="case-intro">
                  <p className="case-number">ACG / Project {projectNumber}</p>
                  <p className="case-type">{project.projectType}</p>
                  <h3 id={`${project.id}-title`}>{project.title}</h3>
                  <p className="case-context">{project.context}</p>
                </header>

                <BrowserFrame
                  className="case-visual"
                  src={project.image}
                  alt={project.imageAlt}
                  title={project.frameTitle}
                  url={project.frameUrl}
                />

                <div className="case-details">
                  <div className="case-detail">
                    <p className="case-detail__label">Necesidad</p>
                    <p>{project.problem}</p>
                  </div>

                  <div className="case-detail">
                    <p className="case-detail__label">Respuesta</p>
                    <p>{project.solution}</p>
                  </div>

                  <div className="case-detail case-detail--delivery">
                    <p className="case-detail__label">Entrega</p>
                    <ul>
                      {project.delivery.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="case-footer">
                  <p className="case-stack" aria-label={`Tecnologías: ${project.stack.join(", ")}`}>
                    {project.stack.join(" · ")}
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-cta"
                    aria-label={`Ver proyecto ${project.title} en una nueva pestaña`}
                  >
                    Ver proyecto <span aria-hidden="true">↗</span>
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
