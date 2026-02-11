import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";
import "./index.css";

/**
 * SimpleLayout Component
 * Wraps every page with the navigation and the full-width footer.
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "sans-serif", backgroundColor: "#fff" }}>
    {/* Navigation */}
    <nav style={{ padding: "20px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/assessment" style={{ color: "#666", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" }}>DDR Assessment</Link>
      </div>
    </nav>

    {/* Main Content Area */}
    <main style={{ flex: "1", width: "100%" }}>
      {children}
    </main>

    {/* THE FOOTER - Full width at the bottom of the page */}
    <footer style={{ backgroundColor: "#1a2b3c", color: "white", padding: "60px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
        <div>
          <h4 style={{ color: "#0070f3", margin: "0 0 15px 0" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8", lineHeight: "1.6" }}>The authorization engine behind every DDR.</p>
        </div>
        <div>
          <h4 style={{ fontSize: "0.9rem", marginBottom: "15px", color: "#fff" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", color: "#94a3b8", lineHeight: "2" }}>
            <li>Regulatory Intelligence</li>
            <li>Audit Readiness</li>
            <li>Decision Logs</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "0.9rem", marginBottom: "15px", color: "#fff" }}>Legal & Procurement</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", color: "#94a3b8", lineHeight: "2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Secure Access</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "0.9rem", marginBottom: "15px", color: "#fff" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", color: "#94a3b8", lineHeight: "2" }}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Documents Library</li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "40px auto 0", paddingTop: "20px", borderTop: "1px solid #2d3748", fontSize: "0.75rem", color: "#64748b" }}>
        © 2026 ComplianceWorxs. All rights reserved.
      </div>
    </footer>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* NEW HIGH-END HOME PAGE WITH BANNER */}
        <Route path="/" element={
          <SimpleLayout>
            {/* Hero Section with Decision Defensibility Image */}
            <section style={{ 
              position: "relative",
              padding: "120px 40px", 
              backgroundImage: "url('http://googleusercontent.com/image_generation_content/4
