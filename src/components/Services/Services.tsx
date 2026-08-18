import "./Services.css";

const solutions = [
  {
    number: "01",
    title: "Lanzar tu presencia digital",
    audience: "Para negocios y profesionales que necesitan empezar con una base clara y profesional.",
    description: "Organizamos lo que quieres comunicar y lo convertimos en un sitio fácil de entender, usar y compartir.",
    includes: [
      "Landing page",
      "Sitio corporativo",
      "Estructura de contenido",
      "Diseño responsive",
      "Formularios y contacto",
    ],
  },
  {
    number: "02",
    title: "Facilitar consultas, ventas o reservas",
    audience: "Para negocios que necesitan que su web ayude a cada visitante a realizar una acción.",
    description: "Diseñamos recorridos claros para que las personas encuentren la información adecuada y sepan cómo contactarte o avanzar.",
    includes: [
      "Catálogos y menús",
      "Integración con WhatsApp",
      "Formularios",
      "Llamadas a la acción",
      "Servicios o productos",
    ],
  },
  {
    number: "03",
    title: "Mejorar una web que ya no representa tu negocio",
    audience: "Para negocios que ya tienen presencia online, pero necesitan una imagen más actual y clara.",
    description: "Revisamos lo que ya existe y priorizamos los cambios que pueden mejorar su presentación, lectura y funcionamiento.",
    includes: [
      "Rediseño visual",
      "Claridad del contenido",
      "Adaptación responsive",
      "Rendimiento",
      "Optimización básica",
    ],
  },
];

const capabilities = [
  "Diseño responsive",
  "WhatsApp",
  "SEO básico y local",
  "Rendimiento",
  "Formularios",
  "Buenas prácticas técnicas",
];

export const Services = () => {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-shell">
        <header className="services-header">
          <p className="services-index">ACG / 02 · Servicios</p>
          <div className="services-heading">
            <h2 id="services-title">Una web útil empieza por entender qué necesita tu negocio.</h2>
            <p>
              No necesitas llegar con una solución definida. Te ayudo a ordenar tus ideas,
              elegir el alcance adecuado y construir a partir de objetivos concretos.
            </p>
          </div>
        </header>

        <div className="solutions-list">
          {solutions.map((solution) => (
            <article className="solution-item" key={solution.number}>
              <div className="solution-intro">
                <span className="solution-number" aria-hidden="true">ACG / {solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.audience}</p>
              </div>

              <div className="solution-detail">
                <p className="solution-description">{solution.description}</p>
                <ul aria-label={`Elementos que puede incluir: ${solution.title}`}>
                  {solution.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="services-capabilities" aria-labelledby="capabilities-title">
          <div className="capabilities-heading">
            <span>Base compartida</span>
            <h3 id="capabilities-title">Capacidades que pueden acompañar cada solución</h3>
          </div>
          <ul>
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </aside>

        <div className="services-guidance">
          <p><strong>¿No sabes cuál necesitas?</strong> Podemos definirlo juntos, sin tecnicismos innecesarios.</p>
          <a href="#contact">Cuéntame tu proyecto <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
};
