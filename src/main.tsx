import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<Users />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
