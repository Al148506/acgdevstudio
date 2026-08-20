import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { href: "#home", id: "home", label: "Inicio" },
  { href: "#portfolio", id: "portfolio", label: "Proyectos" },
  { href: "#process", id: "process", label: "Cómo trabajo" },
  { href: "#faq", id: "faq", label: "Preguntas" },
  { href: "#contact", id: "contact", label: "Contacto" },
];

const observedSectionIds = ["home", "portfolio", "process", "demo", "faq", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 24);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const readingLine = window.scrollY + Math.max(120, window.innerHeight * 0.28);
      let currentSection = sections[0]?.id ?? "home";

      sections.forEach((section) => {
        if (section.offsetTop <= readingLine) currentSection = section.id;
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`site-navbar${isScrolled ? " site-navbar--scrolled" : ""}`}
      aria-label="Navegación principal"
    >
      <div className="site-navbar__inner">
        <a className="site-brand" href="#home" onClick={closeMenu} aria-label="ACGDevStudio, ir al inicio">
          <span className="site-brand__mark" aria-hidden="true">ACG</span>
          <span className="site-brand__copy">
            <span className="site-brand__name">ACGDevStudio</span>
            <span className="site-brand__descriptor">Estudio web independiente</span>
          </span>
        </a>

        <button
          className={`site-menu-toggle${isOpen ? " site-menu-toggle--open" : ""}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          className={`site-navbar__panel${isOpen ? " site-navbar__panel--open" : ""}`}
          id="primary-navigation"
        >
          <ul className="site-nav-list">
            {navLinks.map(({ href, id, label }) => (
              <li key={href}>
                <a
                  className={`site-nav-link${activeSection === id ? " site-nav-link--active" : ""}`}
                  href={href}
                  onClick={closeMenu}
                  aria-current={activeSection === id ? "location" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="site-navbar__cta"
            href="#contact"
            onClick={closeMenu}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            Cuéntame tu proyecto
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
