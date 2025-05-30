import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";
import Section from "../common/Section";

function ArquitecturaEmpresarial() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      id="arquitectura-empresarial"
      title={t("sections.arquitecturaEmpresarial.titulo")}
      dataAos="fade-up"
    >
      <p className="mb-4">{t("sections.arquitecturaEmpresarial.definicion")}</p>
      <h3 className="h5 mb-2">
        {t("sections.arquitecturaEmpresarial.dominios")}
      </h3>
      <ul className={`list-group ${theme === "dark" ? "list-group-dark" : ""}`}>
        {t("sections.arquitecturaEmpresarial.listaDominios", {
          returnObjects: true,
        }).map((domain, index) => (
          <li key={index} className="list-group-item">
            {domain}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ArquitecturaEmpresarial;
