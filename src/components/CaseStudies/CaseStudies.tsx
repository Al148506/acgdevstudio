import { caseStudies } from "../../data/case-studies.data";
import "./CaseStudies.css";

export const CaseStudies = () => {
  return (
    <section className="cases-section" id="portfolio">
      <div className="container">
        <div className="cases-header">
          <span className="cases-eyebrow">Casos de éxito</span>
          <h2 className="cases-title">
            Proyectos que <span>generan resultados</span>
          </h2>
          <p className="cases-subtitle">
            Conoce cómo hemos ayudado a otros negocios a tener una presencia digital profesional.
          </p>
        </div>

        <div className="cases-list">
          {caseStudies.map((cs, idx) => (
            <div key={cs.id} className="case-card">
              <div className="case-card__image">
                <img src={cs.image} alt={cs.title} />
              </div>

              <div className="case-card__body">
                <span className="case-number">Caso {String(idx + 1).padStart(2, "0")}</span>
                <h3 className="case-title">{cs.title}</h3>
                <p className="case-desc">{cs.description}</p>

                <div className="case-details">
                  <div className="case-detail">
                    <span className="case-detail-label">
                      <i className="bi bi-exclamation-triangle"></i> El reto
                    </span>
                    <p className="case-detail-text">{cs.reto}</p>
                  </div>

                  <div className="case-detail">
                    <span className="case-detail-label">
                      <i className="bi bi-tools"></i> La solución
                    </span>
                    <p className="case-detail-text">{cs.solucion}</p>
                  </div>

                  <div className="case-detail">
                    <span className="case-detail-label">
                      <i className="bi bi-check-circle"></i> El resultado
                    </span>
                    <p className="case-detail-text">{cs.resultado}</p>
                  </div>
                </div>

                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-cta"
                >
                  <i className="bi bi-box-arrow-up-right"></i> Ver sitio web
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
