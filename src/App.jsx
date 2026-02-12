import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";

// FIXED: Matching the new filename
import DDRLayout from "./DDRLayout";
import Assessment from "./Assessment";

const styles = {
  hero: {
    position: "relative", width: "100%", minHeight: "520px",
    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')",
    backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", color: "#fff", fontFamily: "system-ui, -apple-system, sans-serif"
  },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10, 26, 54, 0.95), rgba(10, 26, 54, 0.8), rgba(10, 26, 54, 0.3))", zIndex: 1 },
  container: { position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 40px", width: "100%" },
  ctaButton: { display: "inline-block", padding: "16px 32px", borderRadius: "8px", backgroundColor: "#f6a623", color: "#1b1b1b", textDecoration: "none", fontWeight: "700", fontSize: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", transition: "background-color 0.2s" },
  section: { padding: "100px 0", width: "100%" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" },
  card: { backgroundColor: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #eef2f6", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }
};

const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
    <nav style={{ padding: "20px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.4rem", letterSpacing: "-0.5px" }}>COMPLIANCEWORXS</Link>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link to="/ddr/overview" style={{ border: "1.5px solid #0a1a36", color: "#0a1a36", padding: "8px 24px", borderRadius: "4px", textDecoration: "none", fontWeight: "700", fontSize: "0.9rem" }}>Start Decision Review</Link>
      </div>
    </nav>
    <main style={{ flex: "1" }}>{children}</main>
    <footer style={{ backgroundColor: "#0a1a36", color: "#fff", padding: "80px 60px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "40px" }}>
        <div>
          <h4 style={{ fontWeight: "900", color: "#fff", fontSize: "1.2rem", marginBottom: "10px" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.85rem", color: "#22d3ee", marginBottom: "15px", fontWeight: "600" }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: "0.85rem", opacity: 0.7, lineHeight: "1.6" }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "1rem", marginBottom: "20px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", opacity: 0.7, lineHeight: "2.4" }}>
            <li>Inspection Briefs</li><li>Governance Framework</li><li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "1rem", marginBottom: "20px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", opacity: 0.7, lineHeight: "2.4" }}>
            <li>Regulatory Intelligence</li><li>Authority</li><li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "1rem", marginBottom: "20px" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", opacity: 0.7, lineHeight: "2.4" }}>
            <li>Buyer FAQ</li><li>Procurement Matrix</li><li>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px", fontSize: "0.75rem", opacity: 0.5 }}>
        © 2026 ComplianceWorxs. All rights reserved.
      </div>
    </footer>
  </div>
);

const Home = () => (
  <SimpleLayout>
    <header style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.container}>
        <h1 style={{ fontSize: "4.2rem", fontWeight: "800", marginBottom: "25px", lineHeight: "1.05", maxWidth: "900px" }}>Authorize Proof Only When a Decision Can Be Defended.</h1>
        <p style={{ fontSize: "1.4rem", maxWidth: "650px", marginBottom: "40px", opacity: 0.95, lineHeight: "1.5" }}>Make regulatory decisions with confidence—before inspection, before risk compounds.</p>
        <Link to="/ddr/overview" style={styles.ctaButton}>Start Decision Defensibility Assessment →</Link>
      </div>
    </header>
    <section style={{ backgroundColor: "#f8fafc", padding: "60px 0", textAlign: "center", borderBottom: "1px solid #f1f5f9" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#0a1a36" }}>Inspectors assess decisions, <strong>not document volume.</strong></h2>
    </section>
    <section style={styles.section}>
      <div style={{ ...styles.container, ...styles.grid2 }}>
        <div>
          <h3 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "30px", color: "#0a1a36" }}>Documentation Does Not Equal Defensibility</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.5", fontSize: "1.15rem", color: "#334155" }}>
            <li>✅ Proof without defensibility increases inspection risk</li>
            <li>✅ Most findings originate from the wrong decision, not missing files</li>
            <li>✅ Teams often document outcomes they cannot justify under scrutiny</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "25px", color: "#0a1a36" }}>How ComplianceWorxs Actually Works</h3>
          <p style={{ marginBottom: "15px" }}><strong>1. Assess the decision:</strong> Determine whether a regulatory decision can be defended.</p>
          <p style={{ marginBottom: "15px" }}><strong>2. Authorize proof:</strong> Proof generation is permitted only when defensibility thresholds are met.</p>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "#0a1a36", color: "#fff", textAlign: "center", padding: "120px 0" }}>
      <div style={styles.container}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px" }}>Start Decision Defensibility Assessment</h2>
        <Link to="/ddr/overview" style={styles.ctaButton}>Start Decision Defensibility Assessment →</Link>
      </div>
    </section>
  </SimpleLayout>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ddr" element={<DDRLayout />}>
        <Route path="*" element={<Assessment />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
