import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Pricing from "./Pricing.jsx";
import Intelligence from "./Intelligence.jsx";
import Authority from "./Authority.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/authority" element={<Authority />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
