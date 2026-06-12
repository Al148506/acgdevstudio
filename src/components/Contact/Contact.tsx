import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "./Contact.css";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const serviceOptions = [
  { value: "landing", label: "Landing Page" },
  { value: "corporate", label: "Sitio Web Corporativo" },
  { value: "restaurant", label: "Restaurante o Menú Digital" },
  { value: "redesign", label: "Rediseño de Sitio Web" },
  { value: "other", label: "Otro" },
];

const contactMethods = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Correo" },
  { value: "phone", label: "Llamada" },
];

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    contactMethod: "whatsapp",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Por favor ingresa tu nombre";
    if (!formData.email.trim()) errs.email = "Por favor ingresa tu correo electrónico";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "El correo no parece válido";
    if (!formData.phone.trim()) errs.phone = "Por favor ingresa tu teléfono";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched(new Set(touched).add(e.target.name));
    setErrors({});
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
  ) => {
    setTouched(new Set(touched).add(e.target.name));
    setErrors(validate());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Gracias por contactarnos!",
          text: "Revisaremos tu solicitud y nos pondremos en contacto contigo lo antes posible.",
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#4cc9f0",
          confirmButtonColor: "#4361ee",
          confirmButtonText: "Entendido",
          customClass: {
            popup: "swal-contact-popup",
            title: "swal-contact-title",
          },
        });
        setFormData({
          name: "", business: "", email: "", phone: "",
          service: "", contactMethod: "whatsapp", message: "",
        });
        setTouched(new Set());
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: t('contact.errorTitle'),
          text: t('contact.errorText'),
          background: "#0d1b2a",
          color: "#f0f6ff",
          iconColor: "#f07b4c",
          confirmButtonColor: "#4361ee",
          confirmButtonText: t('contact.errorBtn'),
          customClass: { popup: "swal-contact-popup" },
        });
      })
      .finally(() => setSending(false));
  };

  const err = (field: keyof FormErrors) =>
    touched.has(field) && errors[field] ? errors[field] : null;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="contact-eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-subtitle">
            Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card__glow" />

          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="name">Nombre *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={err("name") ? "field-error" : ""}
                  required
                  autoComplete="name"
                />
                {err("name") && <span className="field-error-msg">{err("name")}</span>}
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

            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={err("email") ? "field-error" : ""}
                  required
                  autoComplete="email"
                />
                {err("email") && <span className="field-error-msg">{err("email")}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Teléfono o WhatsApp *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+52 555 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={err("phone") ? "field-error" : ""}
                  autoComplete="tel"
                />
                {err("phone") && <span className="field-error-msg">{err("phone")}</span>}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="service">Servicio de interés</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label>Método de contacto preferido</label>
              <div className="contact-methods">
                {contactMethods.map((m) => (
                  <label key={m.value} className="contact-method-label">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={m.value}
                      checked={formData.contactMethod === m.value}
                      onChange={handleChange}
                    />
                    <span>{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className={`contact-btn${sending ? " contact-btn--sending" : ""}`}
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="contact-btn__spinner" />
                  Enviando…
                </>
              ) : (
                <>
                  Enviar solicitud
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
