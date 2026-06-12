import "./WhatsAppButton.css";

const PHONE_NUMBER = "524495865567";
const MESSAGE = encodeURIComponent("Hola, me gustaría recibir una cotización para un sitio web.");

export const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contáctanos por WhatsApp"
    >
      <i className="bi bi-whatsapp" />
    </a>
  );
};
