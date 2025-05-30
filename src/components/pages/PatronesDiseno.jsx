import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const PatronesDiseno = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.patronesDiseno")} />;
};

export default PatronesDiseno;
