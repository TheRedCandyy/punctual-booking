import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Import i18n configuration
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>
);
