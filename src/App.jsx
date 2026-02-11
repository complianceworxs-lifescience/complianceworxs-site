import React from "react";
import { Link } from "react-router-dom";

/**
 * Institutional Styles - Baked in to ensure exact visual replication
 */
const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "450px",
    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontFamily: "system-ui, sans-serif"
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(10, 26, 54, 0.95), rgba(10, 26, 54, 0.8), rgba(10, 26, 54, 0.4))",
    zIndex: 1
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
    width: "100%"
  },
  button: {
    display: "inline-block",
    padding: "14px 28px",
    borderRadius: "8px",
    backgroundColor: "#f6a623",
    color: "#1b1b1b",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
  },
  section: {
    padding: "80px 0",
    width: "100%"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "start"
  }
};

/**
 * Global Layout - Navigation and institutional blue footer
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <nav style={{ padding: "15px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "1px solid #0a1a36", color: "#0a1a36", padding: "6px 18px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", fontSize: "0.85rem" }}>Launch DDR Assessment</Link>
    </nav>

    <main style={{ flex: "1" }}>{children}</main>

    <footer style={{ backgroundColor: "#0a1a36", color: "#fff", padding: "80px 60px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "40px" }}>
        <div>
          <h4 style={{ fontWeight: "900", color: "#fff", fontSize: "1.1rem" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.8rem", color: "#22d3ee", marginBottom: "15px" }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7, lineHeight: "1.6" }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2" }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', fontSize: '0.75rem', opacity: 0.5 }}>
        © 2026 ComplianceWorxs. All rights reserved.
      </div>
    </footer>
  </div>
);

/**
 * Home Component - Duplicates Screenshot (5)
 */
export const Home = () => (
  <SimpleLayout>
    {/* Hero Section */}
    <header style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.container}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "20px", lineHeight: "1.1" }}>Authorize Proof Only When a Decision Can Be Defended.</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px", opacity: 0.9 }}>Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.</p>
        <Link to="/assessment" style={styles.button}>Start Decision Defensibility Assessment →</Link>
      </div>
    </header>

    {/* Section: Inspectors assess decisions */}
    <section style={{ ...styles.section, textAlign: "center", borderBottom: "1px solid #f1f5f9" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#0a1a36" }}>Inspectors assess decisions, <strong>not document volume.</strong></h2>
    </section>

    {/* Section: Documentation vs Defensibility */}
    <section style={styles.section}>
      <div style={{ ...styles.container, ...styles.grid2 }}>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "25px" }}>Documentation Does Not Equal Defensibility</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2", fontSize: "1.05rem" }}>
            <li>✅ Proof without defensibility increases inspection risk</li>
            <li>✅ Most findings originate from the wrong decision, not missing files</li>
            <li>✅ Teams often document outcomes they cannot justify under scrutiny</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#fcfdfe", padding: "30px", borderRadius: "12px", border: "1px solid #eef2f6" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "20px" }}>How ComplianceWorxs Actually Works</h3>
          <p><strong>1. Assess the decision:</strong> Determine whether a regulatory decision can be defended.</p>
          <p><strong>2. Authorize proof:</strong> Proof generation is permitted only when defensibility thresholds are met.</p>
          <p style={{ marginTop: "15px", fontSize: "0.85rem", fontStyle: "italic" }}>⚙️ ComplianceWorxs: evaluates, adenatly works.</p>
        </div>
      </div>
    </section>

    {/* Section: Professional Context */}
    <section style={{ ...styles.section, backgroundColor: "#f8fafc" }}>
      <div style={{ ...styles.container, ...styles.grid2 }}>
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "20px" }}>Built for Professionals</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>QA leaders responsible for inspection outcomes</li>
            <li>Regulatory professionals accountable for interpretation</li>
            <li>Validation leaders defending system decisions</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "20px" }}>What ComplianceWorxs Never Does</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>❌ No automated approvals</li>
            <li>❌ No remediation advice</li>
            <li>❌ No proof without accountability</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section style={{ ...styles.section, backgroundColor: "#0a1a36", color: "#fff", textAlign: "center" }}>
      <div style={styles.container}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "15px" }}>Start Decision Defensibility Assessment</h2>
        <p style={{ opacity: 0.8, marginBottom: "35px" }}>Free to assess. Proof generation requires authorization.</p>
        <Link to="/assessment" style={styles.button}>Start Decision Defensibility Assessment →</Link>
      </div>
    </section>
  </SimpleLayout>
);
