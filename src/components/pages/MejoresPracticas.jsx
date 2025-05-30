import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const MejoresPracticas = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.mejoresPracticas")} />;
};

export default MejoresPracticas;
