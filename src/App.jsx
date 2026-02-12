import React from "react";
import { Link } from "react-router-dom";

/**
 * Institutional Styles - Updated with new hero design
 */
const styles = {
  // Top status bar
  statusBar: {
    backgroundColor: "#0a1a36",
    color: "#fff",
    padding: "12px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.85rem"
  },
  statusLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#22d3ee"
  },
  // Main navigation
  nav: {
    padding: "20px 60px",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  navLinks: {
    display: "flex",
    gap: "40px",
    alignItems: "center"
  },
  navLink: {
    color: "#334155",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.95rem"
  },
  // Hero section with split design
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "650px",
    display: "flex",
    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(10, 26, 54, 0.92) 0%, rgba(10, 26, 54, 0.88) 45%, rgba(10, 26, 54, 0.3) 100%)",
    zIndex: 1
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 60px",
    alignItems: "center"
  },
  heroLeft: {
    flex: "0 0 50%",
    paddingRight: "60px"
  },
  heroRight: {
    flex: "0 0 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  // Computer mockup
  computerMockup: {
    position: "relative",
    width: "600px",
    height: "380px",
    backgroundColor: "#1e293b",
    borderRadius: "12px 12px 0 0",
    border: "12px solid #0f172a",
    borderBottom: "none",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
  },
  screen: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f8fafc",
    borderRadius: "4px 4px 0 0",
    padding: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center"
  },
  statusCard: {
    backgroundColor: "#fff",
    padding: "24px 28px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    minWidth: "200px"
  },
  authorizedCard: {
    borderLeft: "4px solid #10b981"
  },
  blockedCard: {
    borderLeft: "4px solid #ef4444"
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
    fontSize: "1.1rem",
    fontWeight: "700"
  },
  checkIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem"
  },
  blockIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#ef4444",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
    fontWeight: "700"
  },
  cardText: {
    fontSize: "0.8rem",
    color: "#64748b",
    lineHeight: "1.5"
  },
  // CTA Button
  ctaButton: {
    display: "inline-block",
    padding: "16px 32px",
    borderRadius: "8px",
    backgroundColor: "#f6a623",
    color: "#1b1b1b",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(246, 166, 35, 0.3)",
    transition: "all 0.2s"
  },
  // Bottom CTA section
  ctaSection: {
    backgroundColor: "#f8fafc",
    textAlign: "center",
    padding: "100px 60px",
    borderTop: "1px solid #e2e8f0"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  section: {
    padding: "100px 0",
    width: "100%"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
    alignItems: "start"
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid #eef2f6",
    boxShadow: "0 4px 6px rgba(0,0,0,0.02)"
  }
};

/**
 * Layout Wrapper with Status Bar
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
    {/* Status Bar */}
    <div style={styles.statusBar}>
      <div style={styles.statusLeft}>
        <div style={styles.statusDot}></div>
        <span>COMPLIANCEWORXS AUTHORIZATION ENGINE™</span>
      </div>
      <div style={{ opacity: 0.9 }}>
        <strong>State:</strong> Operational <span style={{ margin: "0 8px" }}>•</span> Proof blocked until authorized
      </div>
    </div>

    {/* Navigation Bar */}
    <nav style={styles.nav}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.4rem", letterSpacing: "-0.5px" }}>COMPLIANCEWORXS</Link>
      <div style={styles.navLinks}>
        <Link to="/overview" style={styles.navLink}>Overview</Link>
        <Link to="/pricing" style={styles.navLink}>Pricing</Link>
        <Link to="/intelligence" style={styles.navLink}>Intelligence Stream</Link>
        <Link to="/authority" style={styles.navLink}>Authority</Link>
        <Link to="/assessment" style={{ ...styles.ctaButton, padding: "10px 24px", fontSize: "0.9rem" }}>Start DDR Assessment</Link>
      </div>
    </nav>

    <main style={{ flex: "1" }}>{children}</main>

    {/* Institutional Footer */}
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
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "1rem", marginBottom: "20px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", opacity: 0.7, lineHeight: "2.4" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "1rem", marginBottom: "20px" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.85rem", opacity: 0.7, lineHeight: "2.4" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px", fontSize: "0.75rem", opacity: 0.5 }}>
        © 2026 ComplianceWorxs. All rights reserved.
      </div>
    </footer>
  </div>
);

/**
 * Home Component - New Hero Design
 */
export const Home = () => (
  <SimpleLayout>
    {/* HERO SECTION - Split Design */}
    <header style={styles.hero}>
      <div style={styles.heroOverlay}></div>
      <div style={styles.heroContent}>
        {/* Left Side - Text Content */}
        <div style={styles.heroLeft}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "800", 
            marginBottom: "25px", 
            lineHeight: "1.1", 
            color: "#fff" 
          }}>
            Deterministic Decision Review (DDR) for Regulatory Defensibility
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            marginBottom: "40px", 
            opacity: 0.95, 
            lineHeight: "1.6",
            color: "#fff" 
          }}>
            Every regulatory decision is evaluated, authorized, and logged before proof exists.
          </p>
          <Link to="/assessment" style={styles.ctaButton}>
            Start DDR Assessment →
          </Link>
        </div>

        {/* Right Side - Computer Mockup */}
        <div style={styles.heroRight}>
          <div style={styles.computerMockup}>
            <div style={styles.screen}>
              {/* Authorized Card */}
              <div style={{ ...styles.statusCard, ...styles.authorizedCard }}>
                <div style={styles.cardHeader}>
                  <div style={styles.checkIcon}>✓</div>
                  <span style={{ color: "#10b981" }}>Authorized</span>
                </div>
                <div style={styles.cardText}>
                  • Sensitive - optionality or<br />
                  &nbsp;&nbsp;Disease with ERR emerges
                </div>
              </div>

              {/* Blocked Card */}
              <div style={{ ...styles.statusCard, ...styles.blockedCard }}>
                <div style={styles.cardHeader}>
                  <div style={styles.blockIcon}>i</div>
                  <span style={{ color: "#ef4444" }}>Blocked</span>
                </div>
                <div style={styles.cardText}>
                  • Call-out of ACHTreatment<br />
                  &nbsp;&nbsp;The correction - proof obstructed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* BOTTOM CTA SECTION */}
    <section style={styles.ctaSection}>
      <div style={styles.container}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "800", 
          marginBottom: "15px",
          color: "#0a1a36"
        }}>
          Start Deterministic Decision Review
        </h2>
        <p style={{ 
          color: "#64748b", 
          marginBottom: "40px", 
          fontSize: "1.15rem" 
        }}>
          Free to assess. Proof generation requires authorization.
        </p>
        <Link to="/assessment" style={styles.ctaButton}>
          Start DDR Assessment →
        </Link>
      </div>
    </section>

    {/* DOCUMENTATION VS DEFENSIBILITY */}
    <section style={styles.section}>
      <div style={{ ...styles.container, ...styles.grid2, padding: "0 60px" }}>
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
          <p style={{ marginTop: "30px", fontSize: "0.9rem", fontStyle: "italic", color: "#64748b" }}>⚙️ ComplianceWorxs evaluates, then works.</p>
        </div>
      </div>
    </section>

    {/* WHO THIS IS FOR / NEVER DOES */}
    <section style={{ ...styles.section, backgroundColor: "#fcfdfe" }}>
      <div style={{ ...styles.container, ...styles.grid2, padding: "0 60px" }}>
        <div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "30px", color: "#0a1a36" }}>Built for Professionals</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.4", fontSize: "1.1rem", color: "#334155" }}>
            <li>QA leaders responsible for inspection outcomes</li>
            <li>Regulatory professionals accountable for interpretation</li>
            <li>Validation leaders defending system decisions</li>
          </ul>
        </div>
        <div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "30px", color: "#0a1a36" }}>What ComplianceWorxs Never Does</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.4", fontSize: "1.1rem", color: "#334155" }}>
            <li>❌ No automated approvals</li>
            <li>❌ No remediation advice</li>
            <li>❌ No proof without accountability</li>
          </ul>
        </div>
      </div>
    </section>
  </SimpleLayout>
);

