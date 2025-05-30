import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../contexts/ThemeContext";
import juniors from "../assets/juniors.png";

function Home() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="row align-items-center min-vh-75">
      {/* Imagen lado izquierdo */}
      <div className="col-md-6 text-center mb-4 mb-md-0" data-aos="fade-right">
        <img
          src={juniors}
          alt="Juniors" // Cambia por la ruta de tu imagen
          className="img-fluid rounded shadow"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>

      {/* Título y subtítulo lado derecho */}
      <div className="col-md-6" data-aos="fade-left">
        <h1
          className={`display-4 fw-bold mb-3 ${
            theme === "dark" ? "text-light" : "text-primary"
          }`}
        >
          {t("home.title", "Arquitectura Empresarial")}
        </h1>
        <h2
          className={`lead fs-4 mb-4 ${
            theme === "dark" ? "text-light" : "text-secondary"
          }`}
        >
          {t(
            "home.subtitle",
            "Transformando organizaciones a través del diseño estratégico y la innovación tecnológica"
          )}
        </h2>
        <p className={`fs-5 ${theme === "dark" ? "text-light" : "text-muted"}`}>
          {t(
            "home.description",
            "Descubre cómo la Arquitectura Empresarial puede optimizar tus procesos, alinear la tecnología con los objetivos de negocio y crear valor sostenible para tu organización."
          )}
        </p>
      </div>
    </div>
  );
}

export default Home;
