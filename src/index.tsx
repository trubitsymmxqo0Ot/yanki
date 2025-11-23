import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { StrictMode } from "react";
import "@/shared/config/i18n/i18n";
import { StoreProvider } from "@/app/providers/StoreProvider/index";

const container = document.getElementById("root");
if (!container) throw new Error("Не удалось инициализировать root");

const root = createRoot(container);
root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
