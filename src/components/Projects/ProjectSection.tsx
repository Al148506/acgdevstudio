import { BrowserFrame } from "../BrowserFrame/BrowserFrame";
import { projects } from "../../data/projects.data";
import type { Project } from "./types";
import "./ProjectsSection.css";

interface TechnicalProjectCopy {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
  imageAlt: string;
  frameUrl: string;
}

const selection: TechnicalProjectCopy[] = [
  {
    id: "inventory-system",
    title: "Sistema de inventario",
    summary:
      "Una aplicación para organizar productos, existencias y operaciones de administración desde una interfaz web.",
    capabilities: ["Gestión de stock", "Validación de datos", "Operaciones CRUD"],
    imageAlt: "Panel del sistema de inventario con productos y controles de administración",
    frameUrl: "inventorysystemacg.azurewebsites.net",
  },
  {
    id: "chat-ai",
    title: "Chat con IA",
    summary:
      "Una interfaz conversacional conectada con servicios backend para procesar mensajes y responder de forma asíncrona.",
    capabilities: ["Integración con servicios", "API REST", "Flujos asíncronos"],
    imageAlt: "Interfaz del sistema de chat con IA mostrando una conversación",
    frameUrl: "chataisystemacg.azurewebsites.net",
  },
  {
    id: "videogame-store",
    title: "Tienda de videojuegos",
    summary:
      "Un proyecto de comercio electrónico con catálogo, gestión de productos y distintos niveles de acceso.",
    capabilities: ["Catálogo y ventas", "Usuarios y roles", "Gestión de productos"],
    imageAlt: "Página de la tienda de videojuegos con su catálogo de productos",
    frameUrl: "videogamestoreacg.web.app",
  },
];

const selectedProjects = selection.reduce<Array<Project & TechnicalProjectCopy>>(
  (result, content) => {
    const project = projects.find(({ id }) => id === content.id);
    if (project) result.push({ ...project, ...content });
    return result;
  },
  []
);

export const Projects = () => {
  return (
    <section id="tech-projects" className="projects-section" aria-labelledby="tech-title">
      <div className="projects-shell">
        <header className="projects-header">
          <p className="projects-index">ACG / Laboratorio</p>

          <div className="projects-heading">
            <p className="projects-eyebrow">Proyectos técnicos</p>
            <h2 id="tech-title">Sistemas, integraciones y lógica detrás de la interfaz.</h2>
            <p>
              Una selección breve de aplicaciones que exploran necesidades más complejas de
              gestión, comunicación y comercio digital.
            </p>
          </div>
        </header>

        <div className="technical-list">
          {selectedProjects.map((project, index) => (
            <article className="technical-project" key={project.id}>
              <p className="technical-project__number">
                ACG / LAB {String(index + 1).padStart(2, "0")}
              </p>

              <BrowserFrame
                className="technical-project__visual"
                src={project.image}
                alt={project.imageAlt}
                title={project.title}
                url={project.frameUrl}
                variant="compact"
              />

              <div className="technical-project__content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <ul aria-label={`Capacidades demostradas en ${project.title}`}>
                  {project.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </div>

              <footer className="technical-project__footer">
                <p aria-label={`Tecnologías: ${project.technologies.join(", ")}`}>
                  {project.technologies.join(" · ")}
                </p>

                <div className="technical-project__actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo de ${project.title} en una nueva pestaña`}
                    >
                      Ver demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="technical-project__code"
                    aria-label={`Ver código de ${project.title} en GitHub, en una nueva pestaña`}
                  >
                    Ver código <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <p className="projects-note">
          Los proyectos para clientes aparecen arriba; esta selección muestra capacidades de
          desarrollo que pueden incorporarse cuando un sitio necesita más funcionalidad.
        </p>
      </div>
    </section>
  );
};
