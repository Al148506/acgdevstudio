import { BrowserFrame } from "../BrowserFrame/BrowserFrame";
import { projectImages } from "../../data/project-images";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-identifier">
            <span>ACG / Estudio web independiente</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            Tu negocio merece una web a su altura
          </h1>

          <p className="hero-description">
            Creo sitios web profesionales para ayudarte a destacar y conectar
            con más clientes.
          </p>

          <p className="hero-capabilities">
            Sitios web · Landing pages · Catálogos · Menús digitales · WhatsApp
          </p>

          <div className="hero-actions" aria-label="Acciones principales">
            <a href="#contact" className="hero-button hero-button--primary">
              Cuéntame tu proyecto <span aria-hidden="true">↗</span>
            </a>
            <a href="#portfolio" className="hero-button hero-button--secondary">
              Ver proyectos <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-proposal">
            <span aria-hidden="true" />
            Propuesta visual inicial sin compromiso.
          </p>
        </div>

        <div
          className="hero-work"
          aria-label="Muestra de proyectos y conceptos realizados"
        >
          <div className="hero-work__meta" aria-hidden="true">
            <span>ACG / 01—03</span>
            <span>PROYECTOS SELECCIONADOS</span>
          </div>

          <div className="hero-work__frames">
            <BrowserFrame
              className="hero-work__primary"
              {...projectImages.chiluda}
              sizes="(max-width: 600px) calc(100vw - 46px), (max-width: 900px) 580px, 510px"
              fetchPriority="high"
              alt="Página principal de la demo comercial para La Chiluda Seafood & Bar"
              title="La Chiluda · Concepto para restaurante"
              url="la-chiluda-premiere.vercel.app"
              statusLabel="Demo comercial"
              loading="eager"
            />

            <BrowserFrame
              className="hero-work__secondary"
              {...projectImages.martha}
              sizes="(max-width: 390px) 78vw, (max-width: 600px) 73vw, (max-width: 900px) 320px, 285px"
              alt="Página principal del portfolio web desarrollado para la diseñadora Martha García"
              title="Martha García · Portfolio"
              url="portfolio-martha.vercel.app"
              variant="compact"
              loading="eager"
            />

            <BrowserFrame
              className="hero-work__tertiary"
              {...projectImages.inredWork}
              sizes="(max-width: 390px) 78vw, (max-width: 600px) 73vw, (max-width: 900px) 320px, 285px"
              alt="Galería de trabajos del sitio corporativo desarrollado para Inredtelecom"
              title="Inredtelecom · Sitio corporativo"
              url="inredtelecom.vercel.app"
              variant="compact"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
