import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "El costo depende del tipo de proyecto: una landing page no es lo mismo que un sitio web corporativo con varias secciones. Te ofrecemos una cotización personalizada sin compromiso para que sepas exactamente lo que necesitas."
  },
  {
    q: "¿Cuánto tiempo tarda el desarrollo?",
    a: "Entregamos proyectos funcionales en 3 a 10 días hábiles, dependiendo de la complejidad. Las landing pages son más rápidas; los sitios más completos pueden tomar un poco más. Te mantenemos informado en cada etapa."
  },
  {
    q: "¿Necesito dominio y hosting?",
    a: "Sí, pero no te preocupes. Te asesoramos para elegir el mejor dominio y hosting para tu negocio, y nos encargamos de toda la configuración técnica para que tu sitio esté en línea sin complicaciones."
  },
  {
    q: "¿Mi sitio funcionará en celulares?",
    a: "Sí, absolutamente. Todos nuestros sitios están optimizados para verse perfectos en celulares, tablets y computadoras. Más del 70% de los usuarios navegan desde su teléfono, por lo que es una prioridad para nosotros."
  },
  {
    q: "¿Podré solicitar cambios después de la entrega?",
    a: "Claro. Ofrecemos soporte continuo después de la entrega. Si necesitas ajustar texto, agregar imágenes o hacer cambios, solo contáctanos y lo resolvemos rápidamente."
  },
  {
    q: "¿Puedo actualizar el contenido yo mismo?",
    a: "Sí, si lo deseas podemos configurar un panel sencillo para que administres tu contenido. Y si prefieres no preocuparte por eso, nosotros nos encargamos de las actualizaciones por ti."
  },
  {
    q: "¿Qué información necesito proporcionar?",
    a: "Básicamente lo que quieras mostrar: imágenes de tu negocio, información de tus servicios o productos, horarios, precios y cualquier detalle que consideres importante para tus clientes. Nosotros te guiamos."
  },
  {
    q: "¿Me ayudan con la publicación del sitio?",
    a: "Sí, nos encargamos de todo el proceso de publicación. Desde la configuración del dominio y hosting hasta la puesta en línea. Tú solo aprobas el diseño y nosotros hacemos el resto."
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="faq-eyebrow">Preguntas frecuentes</span>
          <h2 className="faq-title">
            Todo lo que necesitas <span>saber antes de empezar</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item${openIndex === idx ? " faq-item--open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <i className={`bi bi-chevron-down faq-arrow`} />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
