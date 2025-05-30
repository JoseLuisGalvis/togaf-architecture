import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const YAGNI = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.yagni")} />;
};

export default YAGNI;
