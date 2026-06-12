import "./Services.css";

const services = [
  { icon: "bi bi-building", title: "Sitios Web Corporativos", desc: "Presencia profesional para tu negocio. Tu carta de presentación digital 24/7." },
  { icon: "bi bi-layout-text-window", title: "Landing Pages", desc: "Páginas diseñadas para convertir visitantes en clientes. Ideal para campañas y promociones." },
  { icon: "bi bi-book", title: "Catálogos y Menús Digitales", desc: "Tu menú o catálogo siempre actualizado, accesible desde cualquier celular con un clic." },
  { icon: "bi bi-whatsapp", title: "Integración con WhatsApp", desc: "Tus clientes te contactan directamente con un solo clic desde cualquier página." },
  { icon: "bi bi-phone", title: "Optimización para Móviles", desc: "Tu sitio se ve y funciona perfecto en celulares, tablets y computadoras." },
  { icon: "bi bi-geo-alt", title: "Posicionamiento Local", desc: "Aparece en Google cuando los clientes buscan negocios como el tuyo en tu zona." },
];

export const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="services-eyebrow">Servicios</span>
          <h2 className="services-title">
            Lo que <span>hacemos por tu negocio</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="service-card">
              <div className="service-icon">
                <i className={icon} />
              </div>
              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
