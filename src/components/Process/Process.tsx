import "./Process.css";

const steps = [
  {
    icon: "bi bi-chat-dots",
    step: "01",
    title: "Conocemos tu negocio",
    desc: "Conversamos sobre tus objetivos, clientes y necesidades para entender exactamente qué busca tu negocio.",
  },
  {
    icon: "bi bi-pencil-square",
    step: "02",
    title: "Creamos una propuesta visual gratuita",
    desc: "Diseñamos una vista previa para que puedas visualizar el potencial de tu sitio web antes de tomar una decisión.",
  },
  {
    icon: "bi bi-code-slash",
    step: "03",
    title: "Desarrollamos tu sitio",
    desc: "Construimos una solución profesional adaptada a tu negocio, optimizada para móviles y lista para funcionar.",
  },
  {
    icon: "bi bi-rocket-takeoff",
    step: "04",
    title: "Lanzamiento y soporte",
    desc: "Publicamos tu sitio y te acompañamos en los primeros pasos. No te dejamos solo después de la entrega.",
  },
];

export const Process = () => {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="process-header">
          <span className="process-eyebrow">¿Cómo trabajamos?</span>
          <h2 className="process-title">
            Un proceso <span>simple y transparente</span>
          </h2>
          <p className="process-subtitle">
            Te acompañamos en cada paso para que tu experiencia sea tranquila y sin sorpresas.
          </p>
        </div>

        <div className="process-steps">
          {steps.map(({ icon, step, title, desc }) => (
            <div key={step} className="process-step">
              <div className="step-number">{step}</div>
              <div className="step-icon">
                <i className={icon} />
              </div>
              <h3 className="step-title">{title}</h3>
              <p className="step-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
