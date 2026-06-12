import "./Hero.css";

const benefits = [
  "Diseño profesional",
  "Optimizado para móviles",
  "Integración con WhatsApp",
  "Soporte personalizado",
];

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

          <ul className="hero-benefits">
            {benefits.map((b) => (
              <li key={b}>
                <i className="bi bi-check-lg"></i> {b}
              </li>
            ))}
          </ul>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-modern">
              Solicitar Demo Gratuita
            </a>
            <a href="#portfolio" className="btn btn-outline-light btn-modern">
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
