import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 

// We are defining these placeholder components here so the site doesn't 
// crash while we build the actual files in your src folder.
const Placeholder = ({ title }) => (
  <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
    <h1>{title}</h1>
    <p>This module is being initialized...</p>
    <a href="#/">Back to Overview</a>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Main Entry Point */}
        <Route path="/" element={<App />} />
        
        {/* The DDR Spine - The starting point of the process */}
        <Route path="/ddr" element={<Placeholder title="DDR Overview" />} />
        
        {/* Core Menu Routes */}
        <Route path="/intelligence" element={<Placeholder title="Intelligence Stream" />} />
        <Route path="/authority" element={<Placeholder title="Authority" />} />
        <Route path="/access" element={<Placeholder title="Access" />} />

        {/* The Revenue Trigger Path (Critical for Firebase tracking) */}
        <Route path="/success" element={
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>Thank You</h1>
            <p>Your $199 Assessment is confirmed. Revenue has been logged to the ledger.</p>
            <a href="#/">Return Home</a>
          </div>
        } />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
