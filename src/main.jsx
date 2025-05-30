import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.jsx";
import i18n from "./i18n.js";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import "./styles/custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
