import React from "react";
import { Link } from "react-router-dom";

const styles = {
  topBar: {
    backgroundColor: '#0a1a36',
    color: '#fff',
    padding: '8px 60px',
    fontSize: '0.75rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nav: {
    padding: '15px 60px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  },
  navLink: {
    color: '#334155',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  ctaButton: {
    padding: '10px 24px',
    borderRadius: '6px',
    backgroundColor: '#f59e0b',
    color: '#1e293b',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.85rem',
    border: 'none',
    cursor: 'pointer'
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 60px',
    alignItems: 'center'
  },
  section: {
    padding: '80px 60px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  heading2: {
    fontSize: '1.8rem',
    color: '#0f172a',
    marginBottom: '16px',
    fontWeight: '700',
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  checkItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '16px',
    color: '#475569',
    fontSize: '0.95rem'
  },
  checkIcon: {
    color: '#22d3ee',
    fontSize: '1.2rem',
    flexShrink: 0,
    marginTop: '2px'
  },
  xIcon: {
    color: '#ef4444',
    fontSize: '1.2rem',
    flexShrink: 0,
    marginTop: '2px'
  },
  stepNumber: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#22d3ee',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.9rem',
    flexShrink: 0
  }
};

export const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f9fafb" }}>
    {/* Top Bar */}
    <div style={styles.topBar}>
      <div>▸ COMPLIANCEWORXS <span style={{ color: '#22d3ee' }}>AUTHORIZATION ENGINE™</span></div>
      <div style={{ display: 'flex', gap: '24px', fontSize: '0.7rem' }}>
        <span>🔒 ISO 9001/13485/14001</span>
        <span>📋 Buyer Editions</span>
        <span>👤 Enterprise</span>
      </div>
    </div>

    {/* Main Navigation */}
    <nav style={styles.nav}>
      <Link to="/" style={{ color: '#0a1a36', textDecoration: 'none', fontWeight: '900', fontSize: '1.3rem', letterSpacing: '-0.5px' }}>
        COMPLIANCEWORXS
      </Link>
      <div style={styles.navLinks}>
        <a href="#" style={styles.navLink}>Overview</a>
        <a href="#" style={styles.navLink}>Pricing</a>
        <a href="#" style={styles.navLink}>Intelligence Stream</a>
        <a href="#" style={styles.navLink}>Security</a>
        <a href="#" style={styles.navLink}>Access</a>
        <Link to="/assessment" style={styles.ctaButton}>Start Assessment</Link>
      </div>
    </nav>

    <main style={{ flex: "1", backgroundColor: "#f9fafb" }}>{children}</main>

    {/* Footer */}
    <footer style={{ backgroundColor: '#0a1a36', color: '#fff', padding: '80px 60px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h4 style={{ fontWeight: "900", color: "#fff", fontSize: "1.1rem", marginBottom: "12px" }}>COMPLIANCEWORXS</h4>
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
          <h4 style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: "15px" }}>Legal & Procurement</h4>
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

export const Home = () => (
  <SimpleLayout>
    {/* HERO SECTION - Two Column Layout */}
    <section style={styles.hero}>
      <div>
        <h1 style={{ 
          fontSize: '3rem', 
          lineHeight: '1.15', 
          fontWeight: '700', 
          color: '#0f172a',
          marginBottom: '24px',
          letterSpacing: '-0.5px'
        }}>
          Authorize Proof Only When a Decision Can Be Defended.
        </h1>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#475569', 
          marginBottom: '32px',
          lineHeight: '1.7'
        }}>
          Make regulatory decisions with confidence—before inspection, before documentation, before risk compounds.
        </p>
        <Link to="/assessment" style={{...styles.ctaButton, display: 'inline-block', fontSize: '0.9rem', padding: '12px 28px'}}>
          Start Decision Defensibility Assessment →
        </Link>
      </div>
      <div style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
        minHeight: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
      }} />
    </section>

    {/* INSPECTOR STATEMENT */}
    <section style={{ backgroundColor: '#fff', padding: '60px 0', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
      <div style={{ textAlign: 'center', fontSize: '1.3rem', color: '#0f172a', fontWeight: '400' }}>
        Inspectors <span style={{ fontWeight: '700' }}>assess decisions</span>, <span style={{ fontWeight: '700' }}>not document volume</span>.
      </div>
    </section>

    {/* DOCUMENTATION DOES NOT EQUAL DEFENSIBILITY */}
    <section style={{ ...styles.section, textAlign: 'center' }}>
      <h2 style={styles.heading2}>Documentation Does Not Equal Defensibility</h2>
      <div style={{ maxWidth: '800px', margin: '40px auto 0' }}>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>✓</span>
          <span>Proof without defensibility increases inspection risk</span>
        </div>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>✓</span>
          <span>Most findings originate from the wrong decision, not missing files</span>
        </div>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>✓</span>
          <span>Teams often document outcomes they cannot justify under scrutiny</span>
        </div>
      </div>
      <p style={{ 
        marginTop: '48px', 
        fontSize: '1.15rem', 
        color: '#0f172a',
        fontWeight: '500'
      }}>
        ComplianceWorxs evaluates regulatory decisions <span style={{ fontWeight: '700', fontStyle: 'italic' }}>before</span> documentation exists.
      </p>
    </section>

    {/* HOW IT WORKS */}
    <section style={{ backgroundColor: '#fff', padding: '80px 0', borderTop: '1px solid #e5e7eb' }}>
      <div style={{ ...styles.section, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        {/* Left Column */}
        <div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '32px', color: '#0f172a' }}>
            How ComplianceWorxs Actually Works
          </h3>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '28px' }}>
            <div style={styles.stepNumber}>1</div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px', color: '#0f172a' }}>Assess the decision</h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Determine whether a regulatory decision can be defended.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '28px' }}>
            <div style={styles.stepNumber}>2</div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px', color: '#0f172a' }}>Authorize proof</h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Proof generation is permitted only when defensibility thresholds are met.
              </p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: '#fef2f2', 
            padding: '20px', 
            borderRadius: '6px',
            borderLeft: '3px solid #ef4444',
            marginTop: '32px'
          }}>
            <p style={{ color: '#991b1b', fontWeight: '600', fontSize: '0.9rem' }}>
              💡 ComplianceWorxs: Evaluates, defends only works.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '32px', color: '#0f172a' }}>
            What You Receive If Authorized
          </h3>
          
          <div style={styles.checkItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>No automated approvals</span>
          </div>
          <div style={styles.checkItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>No remediation advice</span>
          </div>
          <div style={styles.checkItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>No proof without accountability</span>
          </div>
          <div style={styles.checkItem}>
            <span style={styles.checkIcon}>✓</span>
            <span>No self-deciding AI</span>
          </div>

          <div style={{ marginTop: '48px' }}>
            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>
              What ComplianceWorxs Never Does
            </h4>
            <div style={styles.checkItem}>
              <span style={styles.xIcon}>✗</span>
              <span>No automated approvals</span>
            </div>
            <div style={styles.checkItem}>
              <span style={styles.xIcon}>✗</span>
              <span>No remediation advice</span>
            </div>
            <div style={styles.checkItem}>
              <span style={styles.xIcon}>✗</span>
              <span>No proof without accountability</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* BUILT FOR PROFESSIONALS */}
    <section style={styles.section}>
      <h2 style={styles.heading2}>Built for Professionals <span style={{ color: '#64748b', fontWeight: '400', fontSize: '1.2rem' }}>Accountable at inspection</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', marginTop: '40px' }}>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>○</span>
          <span>QA leaders responsible for inspection outcomes</span>
        </div>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>○</span>
          <span>Regulatory professionals accountable for interpretation</span>
        </div>
        <div style={styles.checkItem}>
          <span style={styles.checkIcon}>○</span>
          <span>Validation leaders defending system decisions</span>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section style={{ backgroundColor: '#0a1a36', color: '#fff', textAlign: 'center', padding: '100px 40px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '16px' }}>
        Start Decision Defensibility Assessment
      </h2>
      <p style={{ opacity: 0.8, marginBottom: '40px', fontSize: '1rem' }}>
        Free to assess. Proof generation requires authorization.
      </p>
      <Link to="/assessment" style={{...styles.ctaButton, display: 'inline-block', fontSize: '0.95rem', padding: '14px 32px'}}>
        Start Decision Defensibility Assessment →
      </Link>
    </section>
  </SimpleLayout>
);

