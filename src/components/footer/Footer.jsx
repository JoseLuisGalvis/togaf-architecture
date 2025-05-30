import { useContext } from "react";
import { useTranslation } from "react-i18next";
import FooterSection from "./FooterSection";
import ThemeContext from "../../contexts/ThemeContext"; // ✅ Importar el contexto

function Footer() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext); // ✅ Obtener el tema actual

  const footerClass =
    theme === "dark" ? "bg-dark text-light" : "bg-primary text-white";

  const linkClass = theme === "dark" ? "text-light" : "text-white";

  return (
    <footer className={`${footerClass} py-5`}>
      <div className="container">
        <div className="row">
          <FooterSection title={t("footer.sobre.titulo")}>
            <p>{t("footer.sobre.contenido")}</p>
          </FooterSection>
          <FooterSection title={t("footer.enlaces.titulo")}>
            <ul className="list-unstyled">
              <li>
                <a href="#arquitectura-empresarial" className={linkClass}>
                  {t("footer.enlaces.inicio")}
                </a>
              </li>
              <li>
                <a href="#componentes" className={linkClass}>
                  {t("footer.enlaces.acerca")}
                </a>
              </li>
              <li>
                <a href="#fases-adm" className={linkClass}>
                  {t("footer.enlaces.contacto")}
                </a>
              </li>
            </ul>
          </FooterSection>
          <FooterSection title={t("footer.contacto.titulo")}>
            <p>{t("footer.contacto.correo")}: info@example.com</p>
            <p>{t("footer.contacto.telefono")}: +123 456 7890</p>
          </FooterSection>
          <FooterSection title={t("footer.mapa.titulo")}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.396014454764!2d-58.53761360358126!3d-34.59915421041719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7956ef959eb%3A0x9dee59743b000fa0!2sB1674%20S%C3%A1enz%20Pe%C3%B1a%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748599771838!5m2!1ses!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </FooterSection>
        </div>
        <div className="text-center mt-4">
          <p>
            © {new Date().getFullYear()} Guía TOGAF. {t("footer.derechos")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
