import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../contexts/ThemeContext";
import Section from "../common/Section";

function FasesADM() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  let fasesADM = [];

  try {
    // Acceder correctamente a la estructura anidada
    const fasesADMData = t("sections.fasesADM.puntos", { returnObjects: true });

    console.log("=== DEBUG DETALLADO ===");
    console.log(
      "Estructura completa sections:",
      t("sections", { returnObjects: true })
    );
    console.log(
      "fasesADM completo:",
      t("sections.fasesADM", { returnObjects: true })
    );
    console.log("Puntos específicos:", fasesADMData);
    console.log("Tipo de datos:", typeof fasesADMData);
    console.log("Es array:", Array.isArray(fasesADMData));

    if (Array.isArray(fasesADMData)) {
      fasesADM = fasesADMData;
    }
  } catch (error) {
    console.error("Error al cargar datos de fasesADM:", error);
  }

  return (
    <Section
      id="fases-adm"
      title={t("sections.fasesADM.titulo")}
      dataAos="zoom-in"
    >
      {fasesADM.length > 0 ? (
        fasesADM.map((fase, index) => (
          <div key={index} className="mb-4">
            <h3 className="h5">{fase.nombre}</h3>
            <p className={theme === "dark" ? "text-light" : "text-dark"}>
              <strong>{t("sections.fasesADM.proposito")}:</strong>{" "}
              {fase.proposito}
            </p>
            <p className={theme === "dark" ? "text-light" : "text-dark"}>
              <strong>{t("sections.fasesADM.uso")}:</strong> {fase.uso}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p>No hay datos disponibles.</p>
          <p>
            <strong>Debug:</strong> Revisa la consola para más detalles.
          </p>
        </div>
      )}
    </Section>
  );
}

export default FasesADM;
