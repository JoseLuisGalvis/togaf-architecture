import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";
import Section from "../common/Section";

function Proposito() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <Section
      id="proposito"
      title={t("sections.proposito.titulo")}
      dataAos="zoom-in"
    >
      <ul className={`list-group ${theme === "dark" ? "list-group-dark" : ""}`}>
        {t("sections.proposito.puntos", {
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

export default Proposito;
