import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DDR from "./DDR"; 
import Summary from "./Summary";
import Success from "./Success";

/**
 * Integrated Styles (Converted from your CSS)
 * This ensures all sections look exactly like your screenshots.
 */
const styles = {
  hero: {
    position: 'relative',
    width: '100%',
    minHeight: '400px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(10, 26, 54, 0.95), rgba(10, 26, 54, 0.8), rgba(10, 26, 54, 0.4))',
    zIndex: 1
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 40px',
    width: '100%'
  },
  heroButton: {
    display: 'inline-block',
    padding: '16px 32px',
    borderRadius: '999px',
    backgroundColor: '#f6a623',
    color: '#1b1b1b',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '16px',
    marginTop: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  section: { padding: '80px 40px', width: '100%' },
  heading2: { fontSize: '2.2rem', color: '#0a1a36', marginBottom: '24px', fontWeight: '800' },
  heading3: { fontSize: '1.6rem', color: '#0a1a36', marginBottom: '20px', fontWeight: '700' },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', maxWidth: '1200px', margin: '0 auto' },
  footer: { backgroundColor: '#0a1a36', color: '#fff', padding: '80px 40px' },
  footerGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }
};

const Home = () => (
  <div style={{ fontFamily: 'sans-serif' }}>
    {/* NAVIGATION */}
    <nav style={{ padding: "20px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.4rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "2px solid #0a1a36", color: "#0a1a36", padding: "8px 24px", borderRadius: "4px", textDecoration: "none", fontWeight: "700" }}>DDR Assessment</Link>
    </nav>

    {/* HERO - Using Screenshot (3) Logic */}
    <section style={{ ...styles.hero, backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')", backgroundSize: 'cover' }}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: '800', maxWidth: '800px', margin: '0 0 20px' }}>
          Authorize Proof Only When a Decision Can Be Defended.
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '500px', margin: '0 0 32px', opacity: 0.9 }}>
          Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.
        </p>
        <Link to="/assessment" style={styles.heroButton}>Start Decision Defensibility Assessment →</Link>
      </div>
    </section>

    {/* PROOF AUTHORIZATION SYSTEM */}
    <section style={{ ...styles.section, textAlign: 'center' }}>
      <h2 style={styles.heading2}>ComplianceWorxs Is a Proof Authorization System</h2>
      <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '800px', margin: '0 auto 10px' }}>ComplianceWorxs evaluates regulatory decisions <strong>before</strong> documentation exists.</p>
      <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '800px', margin: '0 auto 10px' }}>Proof is generated only after defensibility thresholds are met.</p>
      <p style={{ fontSize: '1.2rem', fontWeight: '800', color: '#c0392b' }}>Indefensible proof is blocked by design.</p>
    </section>

    {/* DOCUMENTATION VS DEFENSIBILITY */}
    <section style={{ ...styles.section, backgroundColor: '#f8fafc' }}>
      <div style={styles.grid2}>
        <div>
          <h3 style={styles.heading3}>Documentation Does Not Equal Defensibility</h3>
          <ul style={{ lineHeight: '2.5', fontSize: '1.1rem' }}>
            <li>✅ Inspectors assess decisions, not document volume.</li>
            <li>✅ Proof without defensibility increases inspection risk.</li>
            <li>✅ Most compliance failures begin with the wrong decision.</li>
          </ul>
        </div>
        <div>
          <h3 style={styles.heading3}>How the System Works</h3>
          <p><strong>1. Assess the decision:</strong> Determine whether a decision can be defended.</p>
          <p><strong>2. Authorize proof:</strong> Proof is permitted only if defensibility is established.</p>
          <p><strong>3. Block risk:</strong> Indefensible proof is prevented from existing.</p>
        </div>
      </div>
    </section>

    {/* WHO THIS IS FOR / NEVER DOES */}
    <section style={styles.section}>
      <div style={styles.grid2}>
        <div>
          <h3 style={styles.heading3}>Who This Is For</h3>
          <ul style={{ lineHeight: '2.5', fontSize: '1.1rem' }}>
            <li>QA leaders accountable for inspection outcomes.</li>
            <li>RA professionals responsible for regulatory interpretation.</li>
            <li>Validation leaders defending system decisions.</li>
          </ul>
        </div>
        <div>
          <h3 style={styles.heading3}>What ComplianceWorxs Never Does</h3>
          <ul style={{ lineHeight: '2.5', fontSize: '1.1rem' }}>
            <li>❌ No automated approvals.</li>
            <li>❌ No remediation advice.</li>
            <li>❌ No proof without accountability.</li>
            <li>❌ No self-deciding AI.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* RECEIVE SECTION */}
    <section style={{ ...styles.section, backgroundColor: '#f8fafc', textAlign: 'center' }}>
      <h3 style={styles.heading3}>What You Receive If Authorized</h3>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>Decision defensibility verdict · Evidence lineage summary · Audit‑ready rationale</p>
    </section>

    {/* MID-PAGE CTA */}
    <section style={{ ...styles.section, backgroundColor: '#0a1a36', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ ...styles.heading2, color: '#fff' }}>Start Decision Defensibility Assessment</h2>
      <p style={{ marginBottom: '40px', opacity: 0.8 }}>Free to assess. Proof generation requires authorization.</p>
      <Link to="/assessment" style={styles.heroButton}>Start Decision Defensibility Assessment →</Link>
    </section>

    {/* FOOTER */}
    <footer style={styles.footer}>
      <div style={styles.footerGrid}>
        <div>
          <h4 style={{ fontWeight: '900', color: '#fff' }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: '0.85rem', color: '#22d3ee' }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee' }}>Governance</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', opacity: 0.7, lineHeight: '2' }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee' }}>Intelligence</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', opacity: 0.7, lineHeight: '2' }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#22d3ee' }}>Legal & Procurement</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', opacity: 0.7, lineHeight: '2' }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Regulatory Positioning</li>
          </ul>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '60px', fontSize: '0.75rem', opacity: 0.5, maxWidth: '800px', margin: '60px auto 0' }}>
        ComplianceWorxs is a governance enforcement system. ComplianceWorxs does not make, approve, or recommend regulatory decisions. All decisions remain the responsibility of the regulated organization.
      </p>
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
