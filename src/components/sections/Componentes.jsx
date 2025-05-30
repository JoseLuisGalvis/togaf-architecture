import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";
import Section from "../common/Section";

function Componentes() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      id="componentes"
      title={t("sections.componentes.titulo")}
      dataAos="fade-up"
    >
      <ul className={`list-group ${theme === "dark" ? "list-group-dark" : ""}`}>
        {t("sections.componentes.puntos", {
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

export default Componentes;
