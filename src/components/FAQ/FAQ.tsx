import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "¿Cuánto cuesta un sitio web?",
    a: "El costo depende del tipo de proyecto. Desde una landing page sencilla hasta un sitio web corporativo completo. Contáctanos para una cotización personalizada sin compromiso."
  },
  {
    q: "¿Qué tan rápido puedo tener mi sitio listo?",
    a: "Dependiendo de la complejidad, podemos tener tu sitio listo en 3 a 10 días hábiles. Las landing pages son más rápidas, los sitios corporativos pueden tomar un poco más."
  },
  {
    q: "¿Necesito saber de tecnología para administrarlo?",
    a: "Para nada. Nosotros nos encargamos de todo. Si necesitas actualizar algo, solo nos avisas y lo hacemos por ti. También podemos enseñarte lo básico si prefieres hacerlo tú mismo."
  },
  {
    q: "¿El sitio va a funcionar en celulares?",
    a: "Sí, todos nuestros sitios están optimizados para verse perfectos en celulares, tablets y computadoras. Más del 70% de los usuarios navegan desde su teléfono."
  },
  {
    q: "¿Me ayudas con el dominio y el hosting?",
    a: "Sí, te asesoramos para elegir el mejor dominio y hosting para tu negocio, y nos encargamos de toda la configuración técnica para que tu sitio esté en línea."
  },
  {
    q: "¿Incluye integración con WhatsApp?",
    a: "Sí, todos nuestros sitios incluyen un botón de WhatsApp para que tus clientes te contacten directamente desde la página."
  },
  {
    q: "¿Qué pasa si necesito cambios después?",
    a: "Ofrecemos soporte continuo. Si necesitas cambios o actualizaciones, solo contáctanos y te apoyamos. No te dejamos solo después de la entrega."
  }
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
