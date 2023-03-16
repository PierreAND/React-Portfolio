import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ModalProvider>
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
    </ModalProvider>
);
