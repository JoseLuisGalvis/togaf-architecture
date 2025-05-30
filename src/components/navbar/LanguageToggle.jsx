import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-outline-light"
      aria-label="Alternar idioma"
    >
      {i18n.language === "es" ? "EN" : "ES"}
    </button>
  );
}

export default LanguageToggle;
