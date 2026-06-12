import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
    whatsapp: false,
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = e.target.type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        { ...formData, whatsapp: formData.whatsapp ? "Sí" : "No" },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: t('contact.successTitle'),
          text: t('contact.successText'),
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#4cc9f0",
          confirmButtonColor: "#4361ee",
          confirmButtonText: t('contact.successBtn'),
          customClass: {
            popup: "swal-contact-popup",
            title: "swal-contact-title",
          },
        });
        setFormData({ name: "", email: "", phone: "", business: "", service: "", message: "", whatsapp: false });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: t('contact.errorTitle'),
          text: t('contact.errorText'),
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#f07b4c",
          confirmButtonColor: "#4361ee",
          confirmButtonText: t('contact.errorBtn'),
          customClass: {
            popup: "swal-contact-popup",
          },
        });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="contact-header">
          <span className="contact-eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">
            Cuéntanos sobre tu negocio y te enviaremos una cotización personalizada en 24 horas.
          </p>
        </div>

        <div className="contact-card">

          <div className="contact-card__glow" />

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="name">{t('contact.nameLabel')}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">{t('contact.emailLabel')}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="phone">Teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+52 555 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="business">Nombre del negocio</label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  placeholder="Nombre de tu negocio"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="service">Servicio que te interesa</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                <option value="corporate">Sitio web corporativo</option>
                <option value="landing">Landing page</option>
                <option value="catalog">Catálogo / menú digital</option>
                <option value="redesign">Rediseño de sitio web</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="contact-checkbox">
              <input
                type="checkbox"
                id="whatsapp"
                name="whatsapp"
                checked={formData.whatsapp}
                onChange={handleChange}
              />
              <label htmlFor="whatsapp">¿Prefieres que te contactemos por WhatsApp?</label>
            </div>

            <button
              type="submit"
              className={`contact-btn${sending ? " contact-btn--sending" : ""}`}
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="contact-btn__spinner" />
                  {t('contact.sendingBtn')}
                </>
              ) : (
                <>
                  Recibe tu cotización en 24 horas
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};
