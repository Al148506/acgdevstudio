import inredtelecom from "../images/Inredtelecom/01HomePage.png";
import landingPageMartha from "../images/LandingPageMartha/01HomePage.png";

export interface CaseStudy {
  id: string;
  title: string;
  projectType: string;
  context: string;
  image: string;
  imageAlt: string;
  frameTitle: string;
  frameUrl: string;
  problem: string;
  solution: string;
  delivery: string[];
  stack: string[];
  liveUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "inredtelecom",
    title: "Inredtelecom",
    projectType: "Sitio web corporativo",
    context:
      "Una presencia digital para explicar los servicios de la empresa y reunir su trabajo en un solo lugar.",
    image: inredtelecom,
    imageAlt:
      "Página del sitio corporativo de Inredtelecom con información de la empresa, sus valores y servicios",
    frameTitle: "Inredtelecom · Sitio corporativo",
    frameUrl: "inredtelecom.vercel.app",
    problem:
      "La empresa necesitaba presentar con claridad su experiencia en telecomunicaciones, sus servicios y los proyectos realizados.",
    solution:
      "Se organizó el contenido en una navegación directa y una identidad visual sobria, pensada para facilitar la consulta y el contacto.",
    delivery: [
      "Presentación de servicios",
      "Galería de trabajos",
      "Recomendaciones y contacto",
    ],
    stack: ["React", "TypeScript", "Vite"],
    liveUrl: "https://inredtelecom.vercel.app/",
  },
  {
    id: "martha-garcia-portfolio",
    title: "Martha García",
    projectType: "Portfolio profesional",
    context:
      "Un sitio propio para presentar su perfil como diseñadora y dar protagonismo a su trabajo creativo.",
    image: landingPageMartha,
    imageAlt:
      "Página principal del portfolio de Martha García con su propuesta como diseñadora gráfica y accesos al portfolio y contacto",
    frameTitle: "Martha García · Portfolio",
    frameUrl: "portfolio-martha.vercel.app",
    problem:
      "Martha necesitaba reunir su identidad, servicios y proyectos en una presentación profesional fácil de compartir con posibles clientes.",
    solution:
      "Se diseñó un portfolio visual alineado con su marca, con una lectura clara y recorridos directos hacia sus trabajos y formas de contacto.",
    delivery: [
      "Portfolio visual por categorías",
      "Presentación de servicios",
      "Contacto y acceso a WhatsApp",
    ],
    stack: ["React", "TypeScript", "Vite"],
    liveUrl: "https://portfolio-martha.vercel.app/",
  },
];
