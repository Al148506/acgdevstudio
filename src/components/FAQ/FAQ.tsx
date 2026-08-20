import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "¿Qué tipo de proyectos puedes realizar?",
    a: "Puedo desarrollar sitios web para negocios y profesionales, landing pages, catálogos, menús digitales y rediseños. También puedo integrar formularios o contacto por WhatsApp cuando el proyecto lo necesite."
  },
  {
    q: "¿Cuánto puede tardar un proyecto?",
    a: "Depende del alcance, el contenido y las funciones necesarias. Después de conversar sobre tu proyecto puedo darte una estimación clara y explicarte qué sigue en cada etapa."
  },
  {
    q: "¿Cómo funciona el proceso?",
    a: "Primero conversamos sobre tu negocio y tus objetivos. Después definimos la propuesta, desarrollo el sitio y revisamos juntos los detalles antes de publicarlo."
  },
  {
    q: "¿Necesito dominio y hosting?",
    a: "El sitio necesitará dominio y hosting para estar en línea. Si todavía no los tienes, puedo orientarte en la elección y ayudarte con la configuración necesaria."
  },
  {
    q: "¿Cómo funcionan los cambios y revisiones?",
    a: "Revisamos el sitio antes de publicarlo y realizamos los ajustes acordados para el proyecto. El alcance de las revisiones queda claro desde la propuesta."
  },
  {
    q: "¿Ofreces mantenimiento después de publicar?",
    a: "Podemos acordar mantenimiento o actualizaciones según lo que necesite tu sitio. Si aplica, se define por separado para que sepas qué incluye."
  },
  {
    q: "¿Qué es la propuesta visual inicial?",
    a: "Es una primera dirección visual aplicada a una parte representativa de tu proyecto y adaptada a tu negocio. Puedes revisarla antes de decidir si avanzamos, sin compromiso."
  },
  {
    q: "¿Cómo podemos empezar?",
    a: "Cuéntame brevemente sobre tu negocio y lo que necesitas mediante el formulario o WhatsApp. A partir de ahí podemos conversar y definir el siguiente paso."
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
