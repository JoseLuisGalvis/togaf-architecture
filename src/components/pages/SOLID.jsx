import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const SOLID = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.solid")} />;
};

export default SOLID;
