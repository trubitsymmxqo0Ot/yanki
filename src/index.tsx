import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { StrictMode } from "react";

const container = document.getElementById("root");
if (!container) throw new Error("Не удалось инициализировать root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
