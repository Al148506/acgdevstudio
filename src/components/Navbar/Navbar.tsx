import "./Navbar.css";

const navLinks = [
  { href: "#home", icon: "bi bi-house", label: "Inicio" },
  { href: "#services", icon: "bi bi-grid", label: "Servicios" },
  { href: "#portfolio", icon: "bi bi-images", label: "Portafolio" },
  { href: "#faq", icon: "bi bi-question-circle", label: "FAQ" },
  { href: "#contact", icon: "bi bi-envelope", label: "Contacto" },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav d-flex align-items-lg-center gap-1">
            {navLinks.map(({ href, icon, label }) => (
              <li className="nav-item" key={href}>
                <a className="nav-link" href={href}>
                  <span className="nav-icon">
                    <i className={icon}></i>
                  </span>
                  <span className="nav-label">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
