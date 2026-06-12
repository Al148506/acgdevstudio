import inredtelecom from "../images/Inredtelecom/01HomePage.png";
import landingPageMartha from "../images/LandingPageMartha/01HomePage.png";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  reto: string;
  solucion: string;
  resultado: string;
  liveUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "inredtelecom",
    title: "Inredtelecom — Sitio Web Corporativo",
    description: "Sitio web profesional para empresa de telecomunicaciones con catálogo de servicios y galería de proyectos.",
    image: inredtelecom,
    reto: "Inredtelecom necesitaba una presencia digital profesional que reflejara la calidad de sus servicios de telecomunicaciones. Su presencia en línea era limitada y no contaban con un canal digital para mostrar su portafolio de proyectos o facilitar el contacto con clientes potenciales.",
    solucion: "Desarrollamos un sitio web corporativo moderno con secciones de servicios, galería de proyectos realizados, testimonios de clientes y un formulario de contacto integrado. El diseño se enfocó en transmitir profesionalismo y confianza, con una navegación clara y contenido visual de sus proyectos.",
    resultado: "Inredtelecom ahora cuenta con un sitio web profesional que funciona como su principal carta de presentación digital. Sus clientes pueden conocer sus servicios, ver proyectos anteriores y contactarlos directamente desde la página.",
    liveUrl: "https://inredtelecom.vercel.app/",
  },
  {
    id: "martha-garcia-portfolio",
    title: "Martha García — Portafolio Freelance",
    description: "Portafolio web profesional para diseñadora gráfica freelance con galería de trabajos y enlace directo a WhatsApp.",
    image: landingPageMartha,
    reto: "Martha, una diseñadora gráfica independiente, necesitaba un portafolio profesional que reflejara su identidad visual y le permitiera mostrar su trabajo a clientes potenciales. Dependía exclusivamente de redes sociales para conseguir proyectos.",
    solucion: "Creamos un sitio web portafolio con galería visual de sus trabajos, sección de servicios, enlace directo a WhatsApp y formulario de contacto. El diseño se adaptó a su identidad de marca, con una estética limpia y profesional que resalta su trabajo creativo.",
    resultado: "Martha ahora tiene una presencia digital profesional independiente de las redes sociales. Sus clientes potenciales pueden ver su portafolio completo, conocer sus servicios y contactarla directamente por WhatsApp con un solo clic.",
    liveUrl: "https://portfolio-martha.vercel.app/",
  },
];
