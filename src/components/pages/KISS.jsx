import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const KISS = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.kiss")} />;
};

export default KISS;
