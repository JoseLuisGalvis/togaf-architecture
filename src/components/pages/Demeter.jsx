import { useTranslation } from "react-i18next";
import BasePage from "./BasePage";

const Demeter = () => {
  const { t } = useTranslation();

  return <BasePage title={t("navbar.demeter")} />;
};

export default Demeter;
