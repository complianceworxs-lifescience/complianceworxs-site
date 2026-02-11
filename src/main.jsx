import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* Your Core Menu Options */}
        <Route path="/intelligence" element={<div><h1>Intelligence</h1><p>Compliance Data & Insights</p><a href="#/">Back Home</a></div>} />
        <Route path="/authority" element={<div><h1>Authority</h1><p>Regulatory Frameworks</p><a href="#/">Back Home</a></div>} />
        <Route path="/access" element={<div><h1>Access</h1><p>Membership Tiers</p><a href="#/">Back Home</a></div>} />

        {/* The Success Trigger Path (Critical for Firebase tracking) */}
        <Route path="/success" element={<div><h1>Thank You</h1><p>Your order is confirmed.</p><a href="#/">Back Home</a></div>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
