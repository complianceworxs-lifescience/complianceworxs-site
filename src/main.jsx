import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";
import "./index.css";

const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif", backgroundColor: "#fff" }}>
    {/* Clean Navigation */}
    <nav style={{ padding: "15px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", position: "sticky", top: 0, zIndex: 100 }}>
      <Link to="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "800", fontSize: "1.4rem", letterSpacing: "-0.5px" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ color: "#1a2b3c", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600", border: "1px solid #1a2b3c", padding: "8px 16px", borderRadius: "4px" }}>DDR Assessment</Link>
    </nav>

    <main style={{ flex: "1", width: "100%" }}>
      {children}
    </main>

    {/* Refined Footer based on your screenshot */}
    <footer style={{ backgroundColor: "#112233", color: "white", padding: "80px 60px 40px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "60px" }}>
        <div>
          <h4 style={{ color: "#409eff", margin: "0 0 10px 0", fontSize: "1.2rem" }}>COMPLIANCEWORXS</h4>
          <p style={{ color: "#6ccfcf", fontSize: "0.85rem", marginBottom: "20px" }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: "0.85rem", color: "#aab", lineHeight: "1.6", maxWidth: "300px" }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px", fontSize: "0.85rem" }}>
            <span style={{ cursor: "pointer" }}>Privacy</span>
            <span style={{ cursor: "pointer" }}>Terms</span>
            <span style={{ cursor: "pointer" }}>Documents Library</span>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: "1rem", color: "#6ccfcf", marginBottom: "20px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", color: "#aab", lineHeight: "2.2" }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Enterprise Procurement</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "1rem", color: "#6ccfcf", marginBottom: "20px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", color: "#aab", lineHeight: "2.2" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "1rem", color: "#6ccfcf", marginBottom: "20px" }}>Legal & Procurement</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", color: "#aab", lineHeight: "2.2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Regulatory Positioning</li>
            <li style={{ marginTop: "10px" }}>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", borderTop: "1px dotted #334455", marginTop: "60px", paddingTop: "30px", fontSize: "0.75rem", color: "#778899", lineHeight: "1.6" }}>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>ComplianceWorxs is a governance enforcement system. ComplianceWorxs does not make, approve, or recommend regulatory decisions. All decisions remain the responsibility of the regulated organization.</p>
        <p style={{ marginTop: "20px" }}>© 2026 ComplianceWorxs. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SimpleLayout>
            {/* High-Impact Hero with Overlay fix */}
            <section style={{ 
              position: "relative",
              padding: "160px 60px", 
              background: `linear-gradient(rgba(26, 43, 60, 0.7), rgba(26, 43, 60, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              minHeight: "650px",
              display: "flex",
              alignItems: "center"
            }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
                <h1 style={{ fontSize: "4.2rem", fontWeight: "800", lineHeight: "1.05", marginBottom: "25px", maxWidth: "900px", letterSpacing: "-1px" }}>
                  Authorize Proof Only When a Decision Can Be Defended.
                </h1>
                <p style={{ fontSize: "1.4rem", marginBottom: "45px", maxWidth: "650px", lineHeight: "1.5", color: "#ddd" }}>
                  Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.
                </p>
                <Link to="/assessment" style={{ backgroundColor: "#f5a623", color: "#111", padding: "20px 40px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", display: "inline-block", boxShadow: "0 4px 15px rgba(245, 166, 35, 0.4)" }}>
                  Start Decision Defensibility Assessment →
                </Link>
              </div>
            </section>

            {/* Cleaned Grid with "Glass" styling */}
            <section style={{ backgroundColor: "#fcfdfe", padding: "100px 60px" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.4rem", marginBottom: "60px", color: "#1a2b3c", fontWeight: "800" }}>How the engine decides</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
                  {[
                    { title: "Fall-closed", text: "If governance is missing, proof cannot proceed." },
                    { title: "Decision", text: "What is being approved or executed." },
                    { title: "Inspection-ready", text: "Decisions are explainable and rely-able as an audit narrative." },
                    { title: "Signal", text: "Event change is missing proof cannot proceed." },
                    { title: "Risk & Exposure", text: "Who is accountable under inspection." },
                    { title: "Gate", text: "Authorize, conditional, or blocked." }
                  ].map((item, idx) => (
                    <div key={idx} style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #eee", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", transition: "transform 0.2s" }}>
                      <h4 style={{ color: "#0070f3", marginTop: 0, marginBottom: "15px", fontSize: "1.2rem", fontWeight: "700" }}>{item.title}</h4>
                      <p style={{ color: "#556677", fontSize: "1rem", lineHeight: "1.6", margin: 0 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </SimpleLayout>
        } />
        
        <Route path="/assessment" element={<DDR />} />
        <Route path="/assessment/summary" element={<Summary />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
