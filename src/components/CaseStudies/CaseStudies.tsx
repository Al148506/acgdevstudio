import {
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { BrowserFrame } from "../BrowserFrame/BrowserFrame";
import { caseStudies } from "../../data/case-studies.data";
import "./CaseStudies.css";

export const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const touchStart = useRef({ x: 0, y: 0 });
  const didSwipe = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeProject = caseStudies[activeIndex];

  const showProject = (index: number, nextDirection: "next" | "previous") => {
    // Keep focus visible if an arrow key hides the currently focused preview.
    if (
      document.activeElement instanceof HTMLElement &&
      viewportRef.current?.contains(document.activeElement) &&
      document.activeElement.closest(".case-study")
    ) {
      viewportRef.current.focus({ preventScroll: true });
    }
    setDirection(nextDirection);
    setActiveIndex((index + caseStudies.length) % caseStudies.length);
  };

  const showPrevious = () => showProject(activeIndex - 1, "previous");
  const showNext = () => showProject(activeIndex + 1, "next");

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    didSwipe.current = false;
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const horizontalDistance = touchStart.current.x - touch.clientX;
    const verticalDistance = touchStart.current.y - touch.clientY;

    if (
      Math.abs(horizontalDistance) < 50 ||
      Math.abs(horizontalDistance) <= Math.abs(verticalDistance)
    ) {
      return;
    }

    didSwipe.current = true;

    if (horizontalDistance > 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  const handleProjectClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (didSwipe.current) {
      event.preventDefault();
      didSwipe.current = false;
    }
  };

  return (
    <section
      className="cases-section"
      id="portfolio"
      aria-labelledby="cases-title"
    >
      <div className="cases-shell">
        <header className="cases-header">
          <p className="cases-index">ACG / Trabajo seleccionado</p>

          <div className="cases-heading">
            <p className="cases-eyebrow">Proyectos y demos comerciales</p>
            <h2 id="cases-title">
              Proyectos pensados para necesidades reales.
            </h2>
            <p>
              Trabajo para clientes y conceptos comerciales que convierten
              necesidades concretas en sitios claros y fáciles de usar.
            </p>
          </div>
        </header>

        <div
          className="cases-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Trabajo seleccionado"
        >
          <p
            className="cases-carousel__status"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando {activeProject.title}
          </p>

          <div
            ref={viewportRef}
            className="cases-carousel__viewport"
            id="case-carousel-slide"
            role="group"
            aria-roledescription="diapositiva"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label={`${activeProject.title}. Usa las flechas izquierda y derecha para navegar.`}
          >
            {caseStudies.map((project, index) => {
              const isActive = index === activeIndex;
              const projectFrame = (
                <BrowserFrame
                  className="case-visual"
                  {...project.image}
                  sizes="(max-width: 660px) calc(100vw - 48px), (max-width: 900px) calc(100vw - 80px), 730px"
                  alt={project.imageAlt}
                  title={project.frameTitle}
                  url={project.frameUrl}
                  statusLabel={project.frameStatus}
                />
              );

              return (
                <article
                  key={project.id}
                  className={`case-study${isActive ? ` case-study--enter-${direction}` : ""}`}
                  aria-labelledby={`${project.id}-title`}
                  hidden={!isActive}
                  inert={!isActive}
                  aria-hidden={!isActive}
                >
                  <header className="case-intro">
                    <p className="case-type">{project.projectType}</p>
                    <h3 id={`${project.id}-title`}>{project.title}</h3>
                    <p className="case-context">{project.context}</p>
                    {project.disclosure && (
                      <p className="case-disclosure">{project.disclosure}</p>
                    )}
                  </header>

                  {project.liveUrl ? (
                    <a
                      className="case-visual-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver proyecto ${project.title} en una nueva pestaña`}
                      tabIndex={isActive ? undefined : -1}
                      onClick={handleProjectClick}
                    >
                      {projectFrame}
                      <span className="case-visual-link__overlay" aria-hidden="true">
                        <span>Ver proyecto ↗</span>
                      </span>
                      <span className="case-visual-link__mobile-cta" aria-hidden="true">
                        Ver proyecto ↗
                      </span>
                    </a>
                  ) : (
                    <div className="case-visual-wrapper">{projectFrame}</div>
                  )}

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
                </article>
              );
            })}
            <div className="cases-carousel__controls">
              <button
                type="button"
                className="cases-carousel__arrow"
                onClick={showPrevious}
                aria-label="Ver proyecto anterior"
              >
                <span aria-hidden="true">←</span>
                <span>Anterior</span>
              </button>

              <div
                className="cases-carousel__dots"
                role="group"
                aria-label="Elegir proyecto"
              >
                {caseStudies.map((project, index) => (
                  <button
                    type="button"
                    key={project.id}
                    className={`cases-carousel__dot${index === activeIndex ? " is-active" : ""}`}
                    onClick={() =>
                      showProject(
                        index,
                        index >= activeIndex ? "next" : "previous",
                      )
                    }
                    aria-label={`Mostrar ${project.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    aria-controls="case-carousel-slide"
                  />
                ))}
              </div>

              <button
                type="button"
                className="cases-carousel__arrow"
                onClick={showNext}
                aria-label="Ver proyecto siguiente"
              >
                <span>Siguiente</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
