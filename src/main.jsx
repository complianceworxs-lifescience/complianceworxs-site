import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; // Your new Assessment Logic
import Summary from "./Summary"; // Your new Summary/Rationale page
import "./index.css";

// Standard UI for your Compliance Professionals
const SimpleLayout = ({ title, children }) => (
  <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
    <nav style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>COMPLIANCEWORXS</Link>
      <Link to="/ddr" style={{ color: "#666", textDecoration: "none" }}>DDR Process</Link>
    </nav>
    <h1>{title}</h1>
    {children}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Home Page - Matches your 2nd Screenshot style */}
        <Route path="/" element={
          <SimpleLayout title="Decision-Grade Compliance Intelligence">
            <p>Evaluating regulatory decisions before documentation exists.</p>
            <Link to="/assessment" style={{ display: "inline-block", background: "#0070f3", color: "white", padding: "12px 24px", borderRadius: "5px", textDecoration: "none" }}>
              Start DDR Assessment →
            </Link>
          </SimpleLayout>
        } />
        
        {/* Step 1: The Assessment Gate (DDR.jsx) */}
        <Route path="/assessment" element={<DDR />} />
        
        {/* Step 2: The Logic Summary (Summary.jsx) */}
        <Route path="/assessment/summary" element={<Summary />} />
        
        {/* Step 3: THE SUCCESS PAGES (Stops the 404s) */}
        <Route path="/success" element={
          <SimpleLayout title="✔ Thank You">
            <p>Your $199 Assessment is confirmed. Revenue has been logged to your Firebase ledger.</p>
            <Link to="/">Return Home</Link>
          </SimpleLayout>
        } />
        
        <Route path="/thank-you" element={
          <SimpleLayout title="✔ Thank You">
            <p>Your order is complete.</p>
            <Link to="/">Return Home</Link>
          </SimpleLayout>
        } />

        {/* Catch-all for the DDR Overview */}
        <Route path="/ddr" element={
          <SimpleLayout title="DDR Overview">
            <p>The authorization engine behind every defensible record.</p>
            <p>Deterministic Decision Review (DDR) captures signal, decision, and rationale.</p>
            <Link to="/assessment" style={{ color: "#0070f3" }}>Launch Assessment Engine</Link>
          </SimpleLayout>
        } />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
