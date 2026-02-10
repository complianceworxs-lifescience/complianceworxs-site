import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import PricingPage from "./PricingPage.jsx";  // Make sure to create these components
import IntelligencePage from "./IntelligencePage.jsx";
import AuthorityPage from "./AuthorityPage.jsx";
import AccessPage from "./AccessPage.jsx";
import DDR from "./DDR.jsx";  // DDR route for /ddr
import "./index.css";  // Your global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<App />} />

        {/* Define the missing Routes */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/intelligence" element={<IntelligencePage />} />
        <Route path="/authority" element={<AuthorityPage />} />
        <Route path="/access" element={<AccessPage />} />

        {/* Add DDR Route */}
        <Route path="/ddr" element={<DDR />} />  {/* DDR page route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
