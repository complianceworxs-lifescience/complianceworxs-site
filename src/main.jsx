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
    minHeight: '480px',
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
    padding: '64px 40px',
    width: '100%'
  },
  ctaButton: {
    display: 'inline-block',
    padding: '14px 28px',
    borderRadius: '8px',
    backgroundColor: '#f6a623',
    color: '#1b1b1b',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  section: { padding: '80px 60px', width: '100%', maxWidth: '1200px', margin: '0 auto' },
  heading2: { fontSize: '2.2rem', color: '#0a1a36', marginBottom: '24px', fontWeight: '800', textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eef2f6', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }
};

const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
    <nav style={{ padding: "15px 60px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.2rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/assessment" style={{ border: "1px solid #0a1a36", color: "#0a1a36", padding: "6px 18px", borderRadius: "4px", textDecoration: "none", fontWeight: "600", fontSize: "0.85rem" }}>Launch DDR Assessment</Link>
    </nav>
    <main style={{ flex: "1" }}>{children}</main>
    <footer style={{ backgroundColor: "#0a1a36", color: "#fff", padding: "80px 60px 40px" }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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

const Home = () => (
  <SimpleLayout>
    {/* HERO - Screenshot 5 Logic */}
    <section style={{ ...styles.hero, backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')", backgroundSize: 'cover' }}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', fontWeight: '800', maxWidth: '850px', margin: '0 0 20px' }}>Authorize Proof Only When a Decision Can Be Defended.</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '32px', maxWidth: '600px', opacity: 0.9 }}>Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.</p>
        <Link to="/assessment" style={styles.ctaButton}>Start Decision Defensibility Assessment →</Link>
      </div>
    </section>

    {/* SYSTEM LOGIC - Consistently technical, no marketing fluff */}
    <section style={styles.section}>
      <h2 style={styles.heading2}>ComplianceWorxs Is a Proof Authorization System</h2>
      <div style={{ textAlign: 'center', color: '#475569', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>ComplianceWorxs evaluates regulatory decisions <strong>before</strong> documentation exists.</p>
        <p>Proof is generated only after defensibility thresholds are met.</p>
        <p style={{ fontWeight: '800', color: '#b91c1c' }}>Indefensible proof is blocked by design.</p>
      </div>
    </section>

    {/* TWO COLUMN GRID - Screenshot 5 Detailed Segments */}
    <section style={{ backgroundColor: '#fcfdfe', padding: '80px 0', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ ...styles.section, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        <div style={styles.card}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' }}>Documentation Does Not Equal Defensibility</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', color: '#334155' }}>
            <li>✅ Inspectors assess decisions, not document volume.</li>
            <li>✅ Proof without defensibility increases inspection risk.</li>
            <li>✅ Most findings originate from the wrong decision, not missing files.</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' }}>How ComplianceWorxs Actually Works</h3>
          <p><strong>1. Assess the decision:</strong> Determine whether a regulatory decision can be defended.</p>
          <p><strong>2. Authorize proof:</strong> Proof generation is permitted only when defensibility thresholds are met.</p>
          <p><strong>3. Block risk:</strong> Indefensible proof is prevented from existing.</p>
        </div>
      </div>
    </section>

    <section style={{ ...styles.section, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' }}>Built for Professionals</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', color: '#334155' }}>
                <li>🔹 QA leaders responsible for inspection outcomes</li>
                <li>🔹 Regulatory professionals accountable for interpretation</li>
                <li>🔹 Validation leaders defending system decisions</li>
            </ul>
        </div>
        <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' }}>What ComplianceWorxs Never Does</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2', color: '#334155' }}>
                <li>❌ No automated approvals</li>
                <li>❌ No remediation advice</li>
                <li>❌ No proof without accountability</li>
            </ul>
        </div>
    </section>

    {/* FINAL CALL TO ACTION */}
    <section style={{ backgroundColor: '#0a1a36', color: '#fff', textAlign: 'center', padding: '100px 40px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px' }}>Start Decision Defensibility Assessment</h2>
      <p style={{ opacity: 0.8, marginBottom: '40px' }}>Free to assess. Proof generation requires authorization.</p>
      <Link to="/assessment" style={styles.ctaButton}>Launch Assessment Engine →</Link>
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
