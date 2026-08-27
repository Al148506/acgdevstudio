import { projectImages, type ResponsiveImage } from "./project-images";

export interface CaseStudy {
  id: string;
  title: string;
  projectType: string;
  context: string;
  image: ResponsiveImage;
  imageAlt: string;
  frameTitle: string;
  frameUrl: string;
  frameStatus?: string;
  disclosure?: string;
  problem: string;
  solution: string;
  delivery: string[];
  liveUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "inredtelecom",
    title: "Inredtelecom",
    projectType: "Sitio web corporativo",
    context:
      "Una presencia digital para explicar los servicios de la empresa y reunir su trabajo en un solo lugar.",
    image: projectImages.inredHome,
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
    liveUrl: "https://inredtelecom.vercel.app/",
  },
  {
    id: "martha-garcia-portfolio",
    title: "Martha García",
    projectType: "Portfolio profesional",
    context:
      "Un sitio propio para presentar su perfil como diseñadora y dar protagonismo a su trabajo creativo.",
    image: projectImages.martha,
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
    liveUrl: "https://portfolio-martha.vercel.app/",
  },
  {
    id: "la-chiluda-demo",
    title: "La Chiluda Seafood & Bar",
    projectType: "Demo comercial · Concepto para restaurante",
    context:
      "Una demostración de cómo un restaurante puede presentar su ambiente, sus platillos y la información necesaria antes de una visita.",
    image: projectImages.chiluda,
    imageAlt:
      "Página principal de la demo para La Chiluda Seafood & Bar con fotografía de platillos, acceso al menú y reserva por WhatsApp",
    frameTitle: "La Chiluda · Concepto para restaurante",
    frameUrl: "la-chiluda-premiere.vercel.app",
    frameStatus: "Demo comercial",
    
    problem:
      "Un restaurante necesita mostrar su propuesta, menú y ubicaciones de forma atractiva para que las personas puedan conocerlo antes de acudir.",
    solution:
      "Se creó una experiencia responsive con secciones del restaurante, galería, sucursales y accesos directos para consultas por WhatsApp.",
    delivery: [
      "Platillos, galería y sucursales",
      "Menú dinámico de demostración",
      "Pedidos y consultas por WhatsApp",
    ],
    liveUrl: "https://la-chiluda-premiere.vercel.app/",
  },
];
