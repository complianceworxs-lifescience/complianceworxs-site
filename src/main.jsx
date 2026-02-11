import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";

const styles = {
  hero: {
    position: 'relative',
    width: '100%',
    minHeight: '420px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(10, 26, 54, 0.98), rgba(10, 26, 54, 0.85), rgba(10, 26, 54, 0.5))',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '64px 40px',
    width: '100%'
  },
  heroButton: {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '4px',
    backgroundColor: '#f6a623',
    color: '#1b1b1b',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '15px',
    marginTop: '24px',
  },
  section: { padding: '80px 60px', width: '100%' },
  heading2: { fontSize: '2rem', color: '#0a1a36', marginBottom: '24px', fontWeight: '800', letterSpacing: '-0.02em' },
  heading3: { fontSize: '1.4rem', color: '#0a1a36', marginBottom: '20px', fontWeight: '700' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1200px', margin: '0 auto' },
  footer: { backgroundColor: '#0a1a36', color: '#fff', padding: '80px 60px 40px' },
  footerGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }
};

const Home = () => (
  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1a1a1a' }}>
    <nav style={{ padding: "15px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "1px solid #0a1a36", color: "#0a1a36", padding: "6px 18px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", fontSize: "0.85rem" }}>Launch DDR Assessment</Link>
    </nav>

    {/* Hero - Descriptive Technical Intent */}
    <section style={{ ...styles.hero, backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')", backgroundSize: 'cover' }}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={{ fontSize: '3rem', lineHeight: '1.15', fontWeight: '800', maxWidth: '900px', margin: '0 0 20px' }}>
          Authorize Proof Only When a Decision Can Be Defended.
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 0 32px', opacity: 0.9, lineHeight: '1.6' }}>
          A governed compliance system that determines whether regulatory proof is permitted to exist based on pre-defined defensibility thresholds.
        </p>
        <Link to="/assessment" style={styles.heroButton}>Launch Decision Defensibility Assessment →</Link>
      </div>
    </section>

    {/* System Mechanics */}
    <section style={{ ...styles.section, textAlign: 'left', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={styles.heading2}>Deterministic Proof Authorization</h2>
      <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>
        ComplianceWorxs evaluates the rationale of regulatory decisions <strong>prior</strong> to the creation of formal documentation.
      </p>
      <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>
        System logic enforces that proof is only generated when specific governance and defensibility criteria are satisfied.
      </p>
      <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#b91c1c' }}>
        Indefensible results are blocked from the audit trail by design.
      </p>
    </section>

    {/* Comparative Logic */}
    <section style={{ ...styles.section, backgroundColor: '#fcfdfe', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
      <div style={styles.grid2}>
        <div>
          <h3 style={styles.heading3}>Decision-Grade Defensibility</h3>
          <ul style={{ listStyleType: 'square', paddingLeft: '20px', lineHeight: '2', fontSize: '1rem', color: '#334155' }}>
            <li>Inspection focus remains on decision rationale over document volume.</li>
            <li>Documentation without underlying defensibility represents institutional risk.</li>
            <li>Regulatory failures are downstream consequences of unauthorized decisions.</li>
          </ul>
        </div>
        <div>
          <h3 style={styles.heading3}>System Controls</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>1. Decision Assessment:</strong> Evaluates if a regulatory decision meets established defensibility requirements.</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>2. Proof Authorization:</strong> Permits the generation of evidence only upon successful assessment.</p>
          <p style={{ fontSize: '0.95rem' }}><strong>3. Risk Mitigation:</strong> Prevents the introduction of non-compliant data into the official record.</p>
        </div>
      </div>
    </section>

    {/* Qualification & Constraints */}
    <section style={styles.section}>
      <div style={styles.grid2}>
        <div>
          <h3 style={styles.heading3}>Personnel Requirements</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '1rem', color: '#334155' }}>
            <li>• QA personnel accountable for inspection readiness.</li>
            <li>• RA professionals interpreting regulatory expectations.</li>
            <li>• Technical owners defending system-level decisions.</li>
          </ul>
        </div>
        <div>
          <h3 style={styles.heading3}>System Constraints</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', fontSize: '1rem', color: '#334155' }}>
            <li>• No automated approval generation.</li>
            <li>• No advisory or remediation services.</li>
            <li>• No proof generation without identified accountability.</li>
            <li>• No autonomous decision-making agents.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Final Ledger Logic */}
    <footer style={styles.footer}>
      <div style={styles.footerGrid}>
        <div>
          <h4 style={{ fontWeight: '900', color: '#fff', fontSize: '1.1rem', marginBottom: '10px' }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: '0.8rem', color: '#22d3ee', marginBottom: '15px', fontWeight: '600' }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: '1.6' }}>A governed system that enforces whether regulatory proof is allowed to be released based on governance conditions.</p>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee', fontSize: '0.9rem', marginBottom: '15px' }}>Governance</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', opacity: 0.7, lineHeight: '2.2' }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Traceability Controls</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee', fontSize: '0.9rem', marginBottom: '15px' }}>Intelligence</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', opacity: 0.7, lineHeight: '2.2' }}>
            <li>Regulatory Intelligence</li>
            <li>Enforcement Authority</li>
            <li>Audit Defensibility</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee', fontSize: '0.9rem', marginBottom: '15px' }}>Legal & Procurement</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', opacity: 0.7, lineHeight: '2.2' }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Regulatory Positioning</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
        <p style={{ fontSize: '0.75rem', opacity: 0.6, maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
          ComplianceWorxs is a governance enforcement system. It does not make, approve, or recommend regulatory decisions. 
          All decisions, interpretations, and determinations remain the sole responsibility of the regulated organization 
          and its authorized personnel.
        </p>
        <p style={{ fontSize: '0.75rem', opacity: 0.4, marginTop: '20px' }}>© 2026 ComplianceWorxs. All rights reserved.</p>
      </div>
    </footer>
  </div>
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
