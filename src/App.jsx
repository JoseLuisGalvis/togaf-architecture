import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import ArquitecturaEmpresarial from "./components/sections/ArquitecturaEmpresarial";
import Proposito from "./components/sections/Proposito";
import Componentes from "./components/sections/Componentes";
import FasesADM from "./components/sections/FasesADM";
// Importar nuevas páginas
import Estilos from "./components/pages/Estilos";
import Patrones from "./components/pages/Patrones";
import PatronesDiseno from "./components/pages/PatronesDiseno";
import SOLID from "./components/pages/SOLID";
import DRY from "./components/pages/DRY";
import KISS from "./components/pages/KISS";
import YAGNI from "./components/pages/YAGNI";
import Demeter from "./components/pages/Demeter";
import BoyScoutRule from "./components/pages/BoyScoutRule";
import MejoresPracticas from "./components/pages/MejoresPracticas";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  // State para manejar la vista actual
  const [currentView, setCurrentView] = useState("home");

  // Hooks al nivel superior, sin condiciones
  const context = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);

  // Manejo de contexto undefined
  if (!context) {
    console.error(
      "ThemeContext is undefined. Ensure App is wrapped in ThemeProvider."
    );
    return <div>Error: ThemeContext no está disponible.</div>;
  }

  const { theme } = context;

  // Función simple para cambiar vista
  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  // Renderizar contenido según vista actual
  const renderContent = () => {
    switch (currentView) {
      case "ae":
        return (
          <>
            <ArquitecturaEmpresarial />
            <Proposito />
            <Componentes />
            <FasesADM />
          </>
        );
      case "estilos":
        return <Estilos />;
      case "patrones":
        return <Patrones />;
      case "patrones-diseno":
        return <PatronesDiseno />;
      case "solid":
        return <SOLID />;
      case "dry":
        return <DRY />;
      case "kiss":
        return <KISS />;
      case "yagni":
        return <YAGNI />;
      case "demeter":
        return <Demeter />;
      case "boy-scout":
        return <BoyScoutRule />;
      case "mejores-practicas":
        return <MejoresPracticas />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div
      className={`min-vh-100 d-flex flex-column ${
        theme === "dark" ? "text-white" : "bg-light text-dark"
      }`}
    >
      <Navbar onNavigate={handleNavigation} currentView={currentView} />
      <main className="flex-grow-1 container py-5">{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
