import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";
import "./index.css";

/**
 * SimpleLayout Component
 * Standardizes the high-end "Intel" look across the application.
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#fff" }}>
    <nav style={{ padding: "15px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "1px solid #0a1a36", color: "#0a1a36", padding: "6px 18px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", fontSize: "0.85rem" }}>DDR Assessment</Link>
    </nav>

    <main style={{ flex: "1" }}>{children}</main>

    {/* Integrated Footer from GPT Logic & Screenshot (2) */}
    <footer style={{ backgroundColor: "#0a1a36", color: "#fff", padding: "80px 60px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "40px" }}>
        <div>
          <h4 style={{ fontWeight: "900", color: "#fff", fontSize: "1.1rem", marginBottom: "10px" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.8rem", color: "#22d3ee", marginBottom: "15px", fontWeight: "600" }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7, lineHeight: "1.6" }}>A governed system that enforces whether regulatory proof is allowed to be released based on governance conditions.</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px", fontSize: "0.8rem", opacity: 0.8 }}>
             <span>Privacy</span><span>Terms</span><span>Documents Library</span>
          </div>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Legal & Procurement</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Regulatory Positioning</li>
            <li style={{ marginTop: "10px" }}>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px" }}>
        <p style={{ fontSize: "0.75rem", opacity: 0.6, maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
          ComplianceWorxs is a governance enforcement system. ComplianceWorxs does not make, approve, or recommend regulatory decisions. All decisions remain the responsibility of the regulated organization.
        </p>
        <p style={{ fontSize: "0.75rem", opacity: 0.4, marginTop: "20px" }}>© 2026 ComplianceWorxs. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

const Home = () => (
  <SimpleLayout>
    {/* HERO SECTION - Integrated from Hero.css Logic */}
    <section style={{ 
      position: "relative", width: "100%", minHeight: "450px", color: "#fff", display: "flex", alignItems: "center",
      backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')", backgroundSize: "cover", backgroundPosition: "center"
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10, 26, 54, 0.95), rgba(10, 26, 54, 0.8), rgba(10, 26, 54, 0.4))", zIndex: 1 }}></div>
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "64px 40px", width: "100%" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", lineHeight: "1.1", marginBottom: "20px", maxWidth: "850px" }}>
          Authorize Proof Only When a Decision Can Be Defended.
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "32px", maxWidth: "500px", opacity: 0.9, lineHeight: "1.5" }}>
          Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.
        </p>
        <Link to="/assessment" style={{ 
          display: "inline-block", padding: "14px 28px", borderRadius: "999px", backgroundColor: "#f6a623", color: "#1b1b1b",
          textDecoration: "none", fontWeight: "700", fontSize: "15px", boxShadow: "0 8px 18px rgba(0, 0, 0, 0.25)"
        }}>
          Start Decision Defensibility Assessment →
        </Link>
      </div>
    </section>

    {/* BODY SEGMENTS - Integrated from LandingPageBody Logic */}
    <section style={{ padding: "80px 60px", textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2.2rem", color: "#0a1a36", fontWeight: "800", marginBottom: "24px" }}>ComplianceWorxs Is a Proof Authorization System</h2>
      <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: "1.6" }}>ComplianceWorxs evaluates regulatory decisions <strong>before</strong> documentation exists.</p>
      <p style={{ fontSize: "1.1rem", color: "#334155", lineHeight: "1.6" }}>Proof is generated only after defensibility thresholds are met.</p>
      <p style={{ fontSize: "1.1rem", fontWeight: "800", color: "#b91c1c", marginTop: "10px" }}>Indefensible proof is blocked by design.</p>
    </section>

    <section style={{ backgroundColor: "#f8fafc", padding: "80px 60px", borderTop: "1px solid #eee" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px", color: "#0a1a36" }}>Documentation Does Not Equal Defensibility</h3>
          <ul style={{ listStyleType: "square", paddingLeft: "20px", lineHeight: "2.2", fontSize: "1rem", color: "#334155" }}>
            <li>Inspectors assess decisions, not document volume.</li>
            <li>Proof without defensibility increases inspection risk.</li>
            <li>Most compliance failures begin with the wrong decision.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px", color: "#0a1a36" }}>How the System Works</h3>
          <p><strong>1. Assess the decision:</strong> Determine whether a decision can be defended.</p>
          <p><strong>2. Authorize proof:</strong> Proof is permitted only if defensibility is established.</p>
          <p><strong>3. Block risk:</strong> Indefensible proof is prevented from existing.</p>
        </div>
      </div>
    </section>

    <section style={{ padding: "80px 60px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px", color: "#0a1a36" }}>Who This Is For</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", lineHeight: "2.2", fontSize: "1rem", color: "#334155" }}>
            <li>QA leaders accountable for inspection outcomes.</li>
            <li>RA professionals responsible for regulatory interpretation.</li>
            <li>Validation leaders defending system decisions.</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px", color: "#0a1a36" }}>What ComplianceWorxs Never Does</h3>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2.2", fontSize: "1rem", color: "#334155" }}>
            <li>❌ No automated approvals.</li>
            <li>❌ No remediation advice.</li>
            <li>❌ No proof without accountability.</li>
            <li>❌ No self-deciding AI.</li>
          </ul>
        </div>
      </div>
    </section>

    <section style={{ padding: "100px 60px", backgroundColor: "#0a1a36", color: "#fff", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "20px" }}>Start Decision Defensibility Assessment</h2>
      <p style={{ opacity: 0.8, marginBottom: "40px" }}>Free to assess. Proof generation requires authorization.</p>
      <Link to="/assessment" style={{ 
        display: "inline-block", padding: "18px 36px", borderRadius: "999px", backgroundColor: "#f6a623", color: "#1b1b1b",
        textDecoration: "none", fontWeight: "700", fontSize: "1.1rem"
      }}>
        Launch Assessment Engine →
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
