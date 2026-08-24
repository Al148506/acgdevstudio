import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "./Contact.css";

type ContactMethod = "whatsapp" | "email" | "call";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: ContactMethod;
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
  { value: "call", label: "Llamada" },
] satisfies { value: ContactMethod; label: string }[];

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
  const activeContactField =
    formData.contactMethod === "email" ? "email" : "phone";
  const activeContactLabel =
    formData.contactMethod === "email"
      ? "Correo electrónico *"
      : formData.contactMethod === "call"
        ? "Número de teléfono *"
        : "Teléfono / WhatsApp *";

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Por favor ingresa tu nombre";

    if (formData.contactMethod === "email") {
      if (!formData.email.trim()) {
        errs.email = "Por favor ingresa tu correo electrónico";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "El correo no parece válido";
      }
    } else if (!formData.phone.trim()) {
      errs.phone =
        formData.contactMethod === "call"
          ? "Por favor ingresa tu número de teléfono"
          : "Por favor ingresa tu teléfono o WhatsApp";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched(new Set(touched).add(e.target.name));
    setErrors({});
  };

  const handleContactMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const contactMethod = e.target.value as ContactMethod;

    setFormData((current) => ({ ...current, contactMethod }));
    setTouched((current) => {
      const next = new Set(current);
      next.delete("email");
      next.delete("phone");
      return next;
    });
    setErrors((current) => {
      const next = { ...current };
      delete next.email;
      delete next.phone;
      return next;
    });
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
    setTouched((current) => {
      const next = new Set(current);
      next.add("name");
      next.add(activeContactField);
      return next;
    });
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);

    const submissionData = {
      ...formData,
      email: formData.contactMethod === "email" ? formData.email : "",
      phone: formData.contactMethod === "email" ? "" : formData.phone,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        submissionData as unknown as Record<string, unknown>,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Gracias por contactarnos!",
          text: "Revisaré tu solicitud y me pondré en contacto contigo para conversar sobre el proyecto.",
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
            Cuéntame sobre tu negocio y te enviaré una propuesta personalizada.
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

            <fieldset className="contact-field contact-method-field">
              <legend>Método de contacto preferido *</legend>
              <div className="contact-methods">
                {contactMethods.map((m) => (
                  <label key={m.value} className="contact-method-label">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={m.value}
                      checked={formData.contactMethod === m.value}
                      onChange={handleContactMethodChange}
                      required
                    />
                    <span>{m.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div
              key={formData.contactMethod}
              className="contact-field contact-field--dynamic"
            >
              <label htmlFor={activeContactField}>{activeContactLabel}</label>
              <input
                id={activeContactField}
                type={activeContactField === "email" ? "email" : "tel"}
                name={activeContactField}
                placeholder={
                  activeContactField === "email"
                    ? "tu@correo.com"
                    : "+52 555 123 4567"
                }
                value={formData[activeContactField]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={err(activeContactField) ? "field-error" : ""}
                required
                autoComplete={activeContactField === "email" ? "email" : "tel"}
                aria-invalid={Boolean(err(activeContactField))}
                aria-describedby={
                  err(activeContactField)
                    ? `${activeContactField}-error`
                    : undefined
                }
              />
              {err(activeContactField) && (
                <span
                  className="field-error-msg"
                  id={`${activeContactField}-error`}
                >
                  {err(activeContactField)}
                </span>
              )}
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
