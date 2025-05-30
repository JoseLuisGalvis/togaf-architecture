import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onNavigate, currentView }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const handleNavClick = (view) => {
    onNavigate(view);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${theme} ${
        theme === "dark" ? "bg-dark" : "bg-primary text-white"
      } shadow`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img
            src="/public/logo.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block mx-2"
          />
          {t("navbar.titulo")}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Inicio */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "home" ? "active" : ""
                }`}
                onClick={() => handleNavClick("home")}
              >
                {t("navbar.inicio")}
              </button>
            </li>

            {/* AE */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "ae" ? "active" : ""
                }`}
                onClick={() => handleNavClick("ae")}
              >
                {t("navbar.ae")}
              </button>
            </li>

            {/* Arquitectura con submenús */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.arquitectura")}
              </a>
              <ul
                className={`dropdown-menu ${
                  theme === "dark" ? "dropdown-menu-dark" : ""
                }`}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("estilos")}
                  >
                    {t("navbar.estilos")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("patrones")}
                  >
                    {t("navbar.patrones")}
                  </button>
                </li>
              </ul>
            </li>

            {/* Patrones de Diseño */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "patrones-diseno" ? "active" : ""
                }`}
                onClick={() => handleNavClick("patrones-diseno")}
              >
                {t("navbar.patronesDiseno")}
              </button>
            </li>

            {/* Principios con submenús */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("navbar.principios")}
              </a>
              <ul
                className={`dropdown-menu ${
                  theme === "dark" ? "dropdown-menu-dark" : ""
                }`}
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("solid")}
                  >
                    {t("navbar.solid")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("dry")}
                  >
                    {t("navbar.dry")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("kiss")}
                  >
                    {t("navbar.kiss")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleNavClick("yagni")}
                  >
                    {t("navbar.yagni")}
                  </button>
                </li>
              </ul>
            </li>

            {/* Demeter */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "demeter" ? "active" : ""
                }`}
                onClick={() => handleNavClick("demeter")}
              >
                {t("navbar.demeter")}
              </button>
            </li>

            {/* Boy Scout Rule */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "boy-scout" ? "active" : ""
                }`}
                onClick={() => handleNavClick("boy-scout")}
              >
                {t("navbar.boyScout")}
              </button>
            </li>

            {/* Mejores Prácticas */}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  currentView === "mejores-practicas" ? "active" : ""
                }`}
                onClick={() => handleNavClick("mejores-practicas")}
              >
                {t("navbar.mejoresPracticas")}
              </button>
            </li>
          </ul>

          {/* Controles de tema e idioma */}
          <div className="d-flex align-items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
