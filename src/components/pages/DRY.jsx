import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const DRY = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.dry")} />;
};

export default DRY;
