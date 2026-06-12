import "./DemoWeb.css";

const demoBenefits = [
  "Diseño personalizado para tu negocio",
  "Optimizado para celulares y tablets",
  "Inspirado en los colores y estilo de tu marca",
  "Sin compromiso — recibe tu propuesta antes de decidir",
];

export const DemoWeb = () => {
  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-card">
          <div className="demo-card__glow" />

          <span className="demo-eyebrow">¿Aún no tienes un sitio web?</span>

          <h2 className="demo-title">
            ¿Te gustaría ver cómo podría verse
            <br />
            tu negocio en internet?
          </h2>

          <p className="demo-description">
            Solicita una propuesta visual gratuita y descubre el potencial
            de una página web profesional para tu negocio.
          </p>

          <ul className="demo-benefits">
            {demoBenefits.map((b) => (
              <li key={b}>
                <i className="bi bi-check-circle-fill"></i> {b}
              </li>
            ))}
          </ul>

          <a href="#contact" className="demo-cta">
            Solicitar Demo Gratuita
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
