import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const BoyScoutRule = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.boyScout")} />;
};

export default BoyScoutRule;
