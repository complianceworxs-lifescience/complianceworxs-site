import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";
import "./index.css";

const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "sans-serif", backgroundColor: "#fff" }}>
    <nav style={{ padding: "15px 40px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0056b3", textDecoration: "none", fontWeight: "bold", fontSize: "1.3rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "1px solid #0056b3", color: "#0056b3", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600" }}>DDR Assessment</Link>
    </nav>

    <main style={{ flex: "1" }}>{children}</main>

    <footer style={{ backgroundColor: "#0a2540", color: "#adbac7", padding: "60px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
        <div>
          <h4 style={{ color: "#fff", marginBottom: "15px" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", lineHeight: "2.2" }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Enterprise Procurement</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", lineHeight: "2.2" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", lineHeight: "2.2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", borderTop: "1px solid #1e293b", marginTop: "40px", paddingTop: "20px", fontSize: "0.7rem" }}>
        <p>ComplianceWorxs is a governance enforcement system. It does not make, approve, or recommend regulatory decisions.</p>
        <p style={{ marginTop: "10px" }}>© 2026 ComplianceWorxs. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

const Home = () => (
  <SimpleLayout>
    {/* HERO SECTION - Life Science Resonant Image */}
    <section style={{ 
      position: "relative", padding: "140px 40px", minHeight: "550px", display: "flex", alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=2000')", // Lab/Life Science imagery
      backgroundSize: "cover", backgroundPosition: "center", color: "white"
    }}>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 37, 64, 0.65)" }}></div>
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3.8rem", fontWeight: "800", lineHeight: "1.1", marginBottom: "25px", maxWidth: "850px" }}>
          Authorize Proof Only When a Decision Can Be Defended.
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "40px", maxWidth: "650px", opacity: 0.9 }}>
          Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.
        </p>
        <Link to="/assessment" style={{ backgroundColor: "#f59e0b", color: "#fff", padding: "18px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
          Start Decision Defensibility Assessment →
        </Link>
      </div>
    </section>

    {/* MIDDLE CONTENT - SYSTEM LOGIC */}
    <section style={{ padding: "80px 40px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.2rem", color: "#0a2540", marginBottom: "20px" }}>ComplianceWorxs Is a Proof Authorization System</h2>
      <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: "1.6" }}>
        ComplianceWorxs evaluates regulatory decisions <strong>before</strong> documentation exists. Proof is generated only after defensibility thresholds are met. <strong>Indefensible proof is blocked by design.</strong>
      </p>
    </section>

    {/* THREE COLUMN DETAILS */}
    <section style={{ padding: "40px 40px 100px", backgroundColor: "#f8fafc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        <div>
          <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "10px", marginBottom: "20px" }}>Who This Is For</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5" }}>
            <li>✅ QA leaders accountable for inspection outcomes</li>
            <li>✅ RA professionals responsible for regulatory interpretation</li>
            <li>✅ Validation leaders defending system decisions</li>
          </ul>
        </div>
        <div>
          <h3 style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "10px", marginBottom: "20px" }}>What ComplianceWorxs Never Does</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5" }}>
            <li>❌ No automated approvals</li>
            <li>❌ No remediation advice</li>
            <li>❌ No proof without accountability</li>
            <li>❌ No self-deciding AI</li>
          </ul>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section style={{ padding: "100px 40px", textAlign: "center", backgroundColor: "#0a2540", color: "#fff" }}>
      <h2 style={{ marginBottom: "20px" }}>Make proof a controlled outcome.</h2>
      <p style={{ marginBottom: "40px", opacity: 0.8 }}>Start with a decision. Get a deterministically governed result.</p>
      <Link to="/assessment" style={{ backgroundColor: "#f59e0b", color: "#fff", padding: "18px 36px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold" }}>
        Start a Decision Assessment
      </Link>
    </section>
  </SimpleLayout>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<DDR />} />
        <Route path="/assessment/summary" element={<Summary />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
