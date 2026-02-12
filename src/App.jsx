import React from "react";
import { Link } from "react-router-dom";

/**
 * Accurate Styles matching the screenshot
 */
const styles = {
  // Top status bar
  statusBar: {
    backgroundColor: "#0a1a36",
    color: "#fff",
    padding: "10px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.75rem"
  },
  statusLeft: {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },
  statusDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#22d3ee"
  },
  // Main navigation
  nav: {
    padding: "18px 60px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navLinks: {
    display: "flex",
    gap: "35px",
    alignItems: "center"
  },
  navLink: {
    color: "#334155",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.9rem"
  },
  // Hero section
  hero: {
    backgroundColor: "#0f2847",
    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
    padding: "80px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px"
  },
  heroLeft: {
    flex: "0 0 45%",
    color: "#fff"
  },
  heroRight: {
    flex: "0 0 50%",
    display: "flex",
    justifyContent: "center"
  },
  // Status cards container
  statusCardsContainer: {
    backgroundColor: "#f8f9fa",
    padding: "50px",
    borderRadius: "8px",
    display: "flex",
    gap: "30px",
    maxWidth: "550px"
  },
  statusCard: {
    backgroundColor: "#fff",
    padding: "30px 25px",
    borderRadius: "6px",
    flex: 1,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
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
    gap: "8px",
    marginBottom: "20px",
    fontSize: "0.95rem",
    fontWeight: "600"
  },
  checkCircle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    fontWeight: "700"
  },
  blockCircle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ef4444",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: "700"
  },
  cardText: {
    fontSize: "0.8rem",
    color: "#64748b",
    lineHeight: "1.6"
  },
  // CTA Button
  ctaButton: {
    display: "inline-block",
    padding: "14px 28px",
    borderRadius: "6px",
    backgroundColor: "#f6a623",
    color: "#000",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "0.9rem",
    transition: "all 0.2s"
  },
  // Sections
  ctaSection: {
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "80px 60px"
  },
  contentSection: {
    padding: "80px 60px",
    backgroundColor: "#fff"
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: "35px",
    borderRadius: "8px"
  }
};

/**
 * Layout Wrapper
 */
const SimpleLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
    {/* Status Bar */}
    <div style={styles.statusBar}>
      <div style={styles.statusLeft}>
        <div style={styles.statusDot}></div>
        <span>COMPLIANCEWORXS AUTHORIZATION ENGINE™</span>
      </div>
      <div>
        <strong>State:</strong> Operational <span style={{ margin: "0 8px" }}>•</span> Proof blocked until authorized
      </div>
    </div>

    {/* Navigation Bar */}
    <nav style={styles.nav}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.3rem", letterSpacing: "-0.5px" }}>
        COMPLIANCEWORXS
      </Link>
      <div style={styles.navLinks}>
        <Link to="/overview" style={styles.navLink}>Overview</Link>
        <Link to="/pricing" style={styles.navLink}>Pricing</Link>
        <Link to="/intelligence" style={styles.navLink}>Intelligence Stream</Link>
        <Link to="/authority" style={styles.navLink}>Authority</Link>
        <Link to="/assessment" style={styles.ctaButton}>Start DDR Assessment</Link>
      </div>
    </nav>

    <main style={{ flex: "1" }}>{children}</main>

    {/* Footer */}
    <footer style={{ backgroundColor: "#0a1a36", color: "#fff", padding: "60px 60px 30px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "50px" }}>
        <div>
          <h4 style={{ fontWeight: "900", color: "#fff", fontSize: "1.1rem", marginBottom: "15px" }}>COMPLIANCEWORXS</h4>
          <p style={{ fontSize: "0.85rem", color: "#22d3ee", marginBottom: "15px", fontWeight: "600" }}>Defensible decisions, before inspection.</p>
          <p style={{ fontSize: "0.8rem", opacity: 0.7, lineHeight: "1.7" }}>A governed compliance system that determines whether regulatory proof is allowed to exist.</p>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.95rem", marginBottom: "20px" }}>Governance</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Inspection Briefs</li>
            <li>Governance Framework</li>
            <li>Workflows</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.95rem", marginBottom: "20px" }}>Intelligence</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Regulatory Intelligence</li>
            <li>Authority</li>
            <li>Operational Questions</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: "#22d3ee", fontSize: "0.95rem", marginBottom: "20px" }}>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.8rem", opacity: 0.7, lineHeight: "2.2" }}>
            <li>Buyer FAQ</li>
            <li>Procurement Matrix</li>
            <li>Secure Access</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px", paddingTop: "25px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.7rem", opacity: 0.5 }}>
        © 2026 ComplianceWorxs. All rights reserved.
      </div>
    </footer>
  </div>
);

/**
 * Home Component - Matches Screenshot Exactly
 */
export const Home = () => (
  <SimpleLayout>
    {/* HERO SECTION */}
    <div style={styles.hero}>
      {/* Left Side - Text */}
      <div style={styles.heroLeft}>
        <h1 style={{ 
          fontSize: "3.2rem", 
          fontWeight: "700", 
          marginBottom: "25px", 
          lineHeight: "1.15"
        }}>
          Deterministic Decision Review (DDR) for Regulatory Defensibility
        </h1>
        <p style={{ 
          fontSize: "1.05rem", 
          marginBottom: "35px", 
          lineHeight: "1.6",
          opacity: 0.95
        }}>
          Every regulatory decision is evaluated, authorized, and logged before proof exists.
        </p>
        <Link to="/assessment" style={styles.ctaButton}>
          Start DDR Assessment →
        </Link>
      </div>

      {/* Right Side - Status Cards */}
      <div style={styles.heroRight}>
        <div style={styles.statusCardsContainer}>
          {/* Authorized Card */}
          <div style={{ ...styles.statusCard, ...styles.authorizedCard }}>
            <div style={styles.cardHeader}>
              <div style={styles.checkCircle}>✓</div>
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
              <div style={styles.blockCircle}>⚠</div>
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

    {/* CTA SECTION */}
    <section style={styles.ctaSection}>
      <h2 style={{ 
        fontSize: "2.2rem", 
        fontWeight: "700", 
        marginBottom: "12px",
        color: "#0a1a36"
      }}>
        Start Deterministic Decision Review
      </h2>
      <p style={{ 
        color: "#64748b", 
        marginBottom: "35px", 
        fontSize: "1rem" 
      }}>
        Free to assess. Proof generation requires authorization.
      </p>
      <Link to="/assessment" style={styles.ctaButton}>
        Start DDR Assessment →
      </Link>
    </section>

    {/* DOCUMENTATION VS DEFENSIBILITY */}
    <section style={styles.contentSection}>
      <div style={styles.grid2}>
        <div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "30px", color: "#0a1a36" }}>
            Documentation Does Not Equal Defensibility
          </h3>
          <div style={{ lineHeight: "2.2", fontSize: "1rem", color: "#334155" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
              <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span>
              <span>Proof without defensibility increases inspection risk</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
              <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span>
              <span>Most findings originate from the wrong decision, not missing files</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ color: "#10b981", fontWeight: "700" }}>✓</span>
              <span>Teams often document outcomes they cannot justify under scrutiny</span>
            </div>
          </div>
        </div>
        
        <div style={styles.card}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "25px", color: "#0a1a36" }}>
            How ComplianceWorxs Actually Works
          </h3>
          <p style={{ marginBottom: "15px", fontSize: "0.95rem", lineHeight: "1.7", color: "#334155" }}>
            <strong>1. Assess the decision:</strong> Determine whether a regulatory decision can be defended.
          </p>
          <p style={{ marginBottom: "25px", fontSize: "0.95rem", lineHeight: "1.7", color: "#334155" }}>
            <strong>2. Authorize proof:</strong> Proof generation is permitted only when defensibility thresholds are met.
          </p>
          <p style={{ fontSize: "0.85rem", fontStyle: "italic", color: "#94a3b8" }}>
            ⚙️ ComplianceWorxs evaluates, then works.
          </p>
        </div>
      </div>
    </section>

    {/* WHO THIS IS FOR / NEVER DOES */}
    <section style={{ ...styles.contentSection, backgroundColor: "#f8f9fa" }}>
      <div style={styles.grid2}>
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "30px", color: "#0a1a36" }}>
            Built for Professionals
          </h3>
          <div style={{ lineHeight: "2", fontSize: "0.95rem", color: "#334155" }}>
            <div>QA leaders responsible for inspection outcomes</div>
            <div>Regulatory professionals accountable for interpretation</div>
            <div>Validation leaders defending system decisions</div>
          </div>
        </div>
        
        <div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "30px", color: "#0a1a36" }}>
            What ComplianceWorxs Never Does
          </h3>
          <div style={{ lineHeight: "2", fontSize: "0.95rem", color: "#334155" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ef4444", fontWeight: "700" }}>✕</span>
              <span>No automated approvals</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ef4444", fontWeight: "700" }}>✕</span>
              <span>No remediation advice</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#ef4444", fontWeight: "700" }}>✕</span>
              <span>No proof without accountability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SimpleLayout>
);

