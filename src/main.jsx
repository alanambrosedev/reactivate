import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CountProvider from "./providers/CountProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </StrictMode>
);
