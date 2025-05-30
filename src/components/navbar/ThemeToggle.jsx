// components/navbar/ThemeToggle.jsx

import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-light"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
