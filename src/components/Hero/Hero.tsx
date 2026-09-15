import alejandro400 from "../../images/optimized/alejandro-400.webp";
import alejandro640 from "../../images/optimized/alejandro-640.webp";
import alejandro960 from "../../images/optimized/alejandro-960.webp";
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
            Creo sitios web claros y profesionales para que tu negocio presente
            mejor sus servicios, genere confianza y facilite el contacto con
            nuevos clientes.
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

        <figure className="hero-profile">
          <div className="hero-profile__meta" aria-hidden="true">
            <span>ACG / PERFIL</span>
            <span>ATENCIÓN DIRECTA</span>
          </div>

          <div className="hero-profile__card">
            <div className="hero-profile__portrait">
              <img
                src={alejandro640}
                srcSet={`${alejandro400} 400w, ${alejandro640} 640w, ${alejandro960} 960w`}
                sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 900px) 430px, 464px"
                width="1024"
                height="1028"
                fetchPriority="high"
                alt="Retrato profesional de Alejandro Castañeda, desarrollador web de ACGDevStudio"
                loading="eager"
                decoding="async"
              />
            </div>

            <figcaption className="hero-profile__caption">
              <p className="hero-profile__name">Alejandro Castañeda</p>
              <p className="hero-profile__role">
                Desarrollador web freelance · Aguascalientes
              </p>
              <p className="hero-profile__statement">
                Trabajo directamente contigo para crear una web clara,
                profesional y adaptada a tu negocio.
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
