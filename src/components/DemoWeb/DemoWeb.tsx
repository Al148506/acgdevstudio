import "./DemoWeb.css";

const proposalDetails = [
  "Una sección clave",
  "Dirección visual adaptada",
  "Sin compromiso",
];

export const DemoWeb = () => {
  return (
    <section className="demo-section" id="demo" aria-labelledby="demo-title">
      <div className="demo-panel">
        <div className="demo-index" aria-hidden="true">
          <span>ACG / Propuesta inicial</span>
          <span>03 — Empezar con claridad</span>
        </div>

        <div className="demo-copy">
          <p>Antes de desarrollar</p>
          <h2 id="demo-title">Visualiza una primera dirección para tu web.</h2>
          <p className="demo-description">
            Recibes una propuesta visual inicial gratuita para una sección clave,
            adaptada al estilo y las necesidades de tu negocio. Puedes revisarla
            antes de decidir si avanzamos.
          </p>
        </div>

        <div className="demo-action">
          <ul aria-label="Qué incluye la propuesta visual">
            {proposalDetails.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <a href="#contact">
            Solicitar propuesta visual
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
