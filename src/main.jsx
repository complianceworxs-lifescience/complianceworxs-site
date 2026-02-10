import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";  // Your main landing page component

// This is the entry point where the app is rendered
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<App />} />
        
        {/* Other Routes (these can be your actual page components) */}
        <Route path="/pricing" element={<div className="hero"><h1>Pricing Page</h1><a href="#/">Back Home</a></div>} />
        <Route path="/intelligence" element={<div><h1>Intelligence Page</h1></div>} />
        <Route path="/authority" element={<div><h1>Authority Page</h1></div>} />
        <Route path="/access" element={<div><h1>Access Page</h1></div>} />
        <Route path="/ddr" element={<div><h1>DDR Overview Page</h1></div>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

