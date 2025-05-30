import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const Estilos = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.estilos")} />;
};

export default Estilos;
