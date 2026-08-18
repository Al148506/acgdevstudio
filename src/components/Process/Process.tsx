import "./Process.css";

const steps = [
  {
    stage: "Etapa 1",
    title: "Conversamos sobre tu proyecto",
    description:
      "Me cuentas sobre tu negocio, tus clientes y lo que necesitas conseguir con la web.",
    outcome: "Una visión compartida de tus prioridades.",
  },
  {
    stage: "Etapa 2",
    title: "Definimos la propuesta",
    description:
      "Ordenamos el contenido, el alcance y la dirección visual antes de comenzar a construir.",
    outcome: "Una propuesta clara para saber qué vamos a crear.",
  },
  {
    stage: "Etapa 3",
    title: "Diseño y desarrollo",
    description:
      "Convierto lo acordado en un sitio cuidado, funcional y preparado para distintos dispositivos.",
    outcome: "Una web lista para revisar en conjunto.",
  },
  {
    stage: "Etapa 4",
    title: "Revisión y publicación",
    description:
      "Revisamos el resultado, ajustamos los detalles acordados y preparamos la puesta en línea.",
    outcome: "Tu sitio publicado y listo para compartir.",
  },
];

export const Process = () => {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-shell">
        <header className="process-header">
          <p className="process-index">ACG / 03 · Proceso</p>

          <div className="process-heading">
            <p className="process-eyebrow">De la primera conversación a la publicación</p>
            <h2 id="process-title">Un proceso claro. Siempre sabrás qué sigue.</h2>
            <p>
              Trabajar conmigo es sencillo: avanzamos paso a paso, con objetivos claros y
              decisiones compartidas.
            </p>
          </div>
        </header>

        <ol className="process-route">
          {steps.map(({ stage, title, description, outcome }) => (
            <li key={stage} className="process-step">
              <div className="process-marker" aria-hidden="true">
                <span />
              </div>

              <p className="step-stage">{stage}</p>
              <h3>{title}</h3>
              <p className="step-description">{description}</p>

              <div className="step-outcome">
                <span>Puedes esperar</span>
                <p>{outcome}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="process-closing">
          <span aria-hidden="true">→</span>
          Un recorrido definido, sin perder de vista lo que necesita tu negocio.
        </p>
      </div>
    </section>
  );
};
