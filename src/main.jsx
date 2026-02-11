import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";
import "./index.css";

/**
 * SimpleLayout Component
 * Defined locally for ease of management. 
 * This creates the global structure with the full-width footer.
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "sans-serif", backgroundColor: "#fff" }}>
    {/* Navigation */}
    <nav style={{ padding: "20px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/assessment" style={{ color: "#666", textDecoration: "#0070f3", fontSize: "0.9rem", fontWeight: "600" }}>DDR Assessment</Link>
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
        {/* NEW HIGH-END HOME PAGE */}
        <Route path="/" element={
          <SimpleLayout>
            {/* Hero Section */}
            <section style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "60px", alignItems: "center" }}>
              <div style={{ flex: "1" }}>
                <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "#1a2b3c", lineHeight: "1.1", marginBottom: "20px" }}>
                  Deterministic Decision Review (DDR)
                </h1>
                <p style={{ fontSize: "1.25rem", color: "#4b5563", marginBottom: "40px", lineHeight: "1.6" }}>
                  A structured, auditable way to document, evaluate, and defend regulated decisions. The authorization engine behind every DDR.
                </p>
                <Link to="/assessment" style={{ backgroundColor: "#0070f3", color: "white", padding: "18px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", display: "inline-block" }}>
                  Start a Decision Assessment →
                </Link>
              </div>
              {/* This mirrors the layout of your professional screenshot */}
              <div style={{ flex: "1", minHeight: "450px", backgroundColor: "#f3f4f6", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb" }}>
                 <p style={{ color: "#9ca3af", textAlign: "center", padding: "20px" }}>[ High-End Professional Image Placeholder ]</p>
              </div>
            </section>

            {/* The Engine Grid Section */}
            <section style={{ backgroundColor: "#f9fafb", padding: "80px 40px" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "50px", color: "#111827" }}>How the engine decides</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
                  {[
                    { title: "Fall-closed", text: "If governance is missing, proof cannot proceed." },
                    { title: "Decision", text: "What is being approved or executed." },
                    { title: "Inspection-ready", text: "Decisions are explainable and rely-able as an audit narrative." },
                    { title: "Signal", text: "Event change is missing proof cannot proceed." },
                    { title: "Risk & Exposure", text: "Who is accountable under inspection." },
                    { title: "Gate", text: "Authorize, conditional, or blocked." }
                  ].map((item, idx) => (
                    <div key={idx} style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}>
                      <h4 style={{ color: "#0070f3", marginTop: 0, marginBottom: "12px", fontSize: "1.1rem" }}>{item.title}</h4>
                      <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </SimpleLayout>
        } />
        
        {/* Core Functional Routes */}
        <Route path="/assessment" element={<DDR />} />
        <Route path="/assessment/summary" element={<Summary />} />
        <Route path="/success" element={<Success />} />

        {/* Legacy Support */}
        <Route path="/ddr" element={
          <SimpleLayout>
            <div style={{ padding: "80px 40px", maxWidth: "800px", margin: "0 auto" }}>
              <h2>DDR Process Overview</h2>
              <p>The authorization engine behind every defensible record.</p>
              <Link to="/assessment" style={{ color: "#0070f3" }}>Launch Engine →</Link>
            </div>
          </SimpleLayout>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
