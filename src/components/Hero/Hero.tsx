import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-wrapper">
        <div className="hero-content">
          <p className="hero-eyebrow">ACGDevStudio</p>

          <h1 className="hero-title">
            Transformamos tu idea
            <br />
            en un <span>sitio web profesional</span>
          </h1>

          <p className="hero-description">
            Creamos sitios web modernos para restaurantes, cafeterías, gimnasios y negocios locales.
            Atrae más clientes con una presencia digital profesional.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-modern">
              Solicita tu cotización gratuita
            </a>
            <a href="#portfolio" className="btn btn-outline-light btn-modern">
              Ver nuestro trabajo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
