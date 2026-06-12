import "./Benefits.css";

const benefits = [
  { icon: "bi bi-chat-square-text", title: "Sin complicaciones técnicas", desc: "Te explicamos todo en términos sencillos. No necesitas saber de tecnología para tener un sitio web profesional." },
  { icon: "bi bi-rocket-takeoff", title: "Resultados rápidos", desc: "Entregamos tu sitio funcionando en días, no meses. Ideal para negocios que necesitan presencia digital ya." },
  { icon: "bi bi-headset", title: "Soporte continuo", desc: "No te dejamos solo después de entregar. Estamos disponibles para cambios, actualizaciones y lo que necesites." },
];

export const Benefits = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="benefits-header">
          <span className="benefits-eyebrow">¿Por qué nosotros?</span>
          <h2 className="benefits-title">
            Razones para <span>trabajar con nosotros</span>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ icon, title, desc }) => (
            <div key={title} className="benefit-card">
              <div className="benefit-icon">
                <i className={icon} />
              </div>
              <h3 className="benefit-title">{title}</h3>
              <p className="benefit-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
