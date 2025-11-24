import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./lib/router";

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* If you want global context, wrap with CountProvider */}
    {/* <CountProvider>
      <App />
    </CountProvider> */}
    <RouterProvider router={router} />
  </StrictMode>
);
