import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";

const BasePage = ({ title }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <div
            className={`card shadow-lg border-0 p-5 ${
              theme === "dark" ? "bg-dark text-white" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card-body">
              <div className="mb-4">
                <i
                  className={`fas fa-tools fa-4x mb-3 ${
                    theme === "dark" ? "text-warning" : "text-primary"
                  }`}
                ></i>
              </div>
              <h1 className="display-4 fw-bold mb-4">{title}</h1>
              <h2 className="h3 mb-4 text-muted">
                {t("pages.enConstruccion")}
              </h2>
              <p className="lead">{t("pages.contenidoProximamente")}</p>
              <div className="mt-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
