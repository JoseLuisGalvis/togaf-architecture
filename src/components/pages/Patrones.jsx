import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const Patrones = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.patrones")} />;
};

export default Patrones;
