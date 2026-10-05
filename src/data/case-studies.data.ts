import { projectImages, type ResponsiveImage } from "./project-images";

export interface CaseStudy {
  id: string;
  title: string;
  projectType: string;
  category: "client" | "demo";
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
    category: "client",
    context:
      "Un sitio para presentar servicios y trabajos de telecomunicaciones en un solo lugar.",
    image: projectImages.inredHome,
    imageAlt:
      "Página del sitio corporativo de Inredtelecom con información de la empresa, sus valores y servicios",
    frameTitle: "Inredtelecom · Sitio corporativo",
    frameUrl: "inredtelecom.vercel.app",
    problem:
      "La empresa necesitaba mostrar su experiencia, servicios y proyectos con claridad.",
    solution:
      "Se organizó la información con una navegación directa y accesos claros al contacto.",
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
    category: "client",
    context:
      "Un portfolio propio para mostrar su trabajo y facilitar el contacto con posibles clientes.",
    image: projectImages.martha,
    imageAlt:
      "Página principal del portfolio de Martha García con su propuesta como diseñadora gráfica y accesos al portfolio y contacto",
    frameTitle: "Martha García · Portfolio",
    frameUrl: "portfolio-martha.vercel.app",
    problem:
      "Martha necesitaba reunir su perfil, servicios y proyectos en un sitio fácil de compartir.",
    solution:
      "Se diseñó un recorrido visual alineado con su marca, con acceso directo a sus trabajos y al contacto.",
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
    projectType: "Concepto para restaurante",
    category: "demo",
    context:
      "Una demo para mostrar platillos, menú, sucursales y formas de consulta desde la web.",
    image: projectImages.chiluda,
    imageAlt:
      "Página principal de la demo para La Chiluda Seafood & Bar con fotografía de platillos, acceso al menú y reserva por WhatsApp",
    frameTitle: "La Chiluda · Concepto para restaurante",
    frameUrl: "la-chiluda-premiere.vercel.app",
    frameStatus: "Demo comercial",
    disclosure: "Concepto comercial de ACGDevStudio; no fue un encargo del restaurante.",
    problem:
      "Un restaurante necesita dar a conocer su propuesta, menú y ubicaciones antes de una visita.",
    solution:
      "Se preparó una demo responsive con galería, sucursales y accesos a WhatsApp.",
    delivery: [
      "Platillos, galería y sucursales",
      "Menú dinámico de demostración",
      "Pedidos y consultas por WhatsApp",
    ],
    liveUrl: "https://la-chiluda-premiere.vercel.app/",
  },
  {
    id: "peluditos-estetica-canina",
    title: "Peluditos · Estética Canina",
    projectType: "Landing page para negocio local",
    category: "client",
    context:
      "Una landing page para una estética canina que presenta sus servicios y facilita el contacto por WhatsApp.",
    image: projectImages.peluditos,
    imageAlt:
      "Página principal de Peluditos Estética Canina con la sección hero, el perro dorado y los botones de acción",
    frameTitle: "Peluditos · Estética Canina",
    frameUrl: "peluditos-demo.vercel.app",
    problem:
      "La estética necesitaba una presencia digital clara que mostrara sus servicios y permitiera agendar citas fácilmente.",
    solution:
      "Se desarrolló una landing page responsive con secciones de servicios, antes/después, testimonios, ubicación y CTA directo a WhatsApp.",
    delivery: [
      "Presentación de servicios",
      "Galería antes/después y testimonios",
      "Ubicación y contacto por WhatsApp",
    ],
    liveUrl: "https://peluditos-demo.vercel.app/",
  },
];
