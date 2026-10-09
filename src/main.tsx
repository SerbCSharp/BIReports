import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App clickersCount = { 5 }><h1>Всем привет</h1></App> 
  </StrictMode>,
);
