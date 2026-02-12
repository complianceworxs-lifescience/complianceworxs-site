import React from "react";
import { Link } from "react-router-dom";

/**
 * Executive Style Palette
 */
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 60px",
    backgroundColor: "#0a1a36", // Deep Institutional Blue
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  navGroup: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
    opacity: 0.8
  },
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "650px",
    // Executive-focused workstation/office image
    backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "#fff"
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, #0a1a36 0%, rgba(10, 26, 54, 0.7) 50%, transparent 100%)",
    zIndex: 1
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 60px",
    width: "100%"
  },
  heroBadge: {
    display: "inline-block",
    padding: "6px 12px",
    backgroundColor: "rgba(34, 211, 238, 0.2)",
    color: "#22d3ee",
    borderRadius: "4px",
    fontSize: "0.8rem",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  primaryBtn: {
    display: "inline-block",
    padding: "16px 32px",
    backgroundColor: "#f6a623",
    color: "#000",
    textDecoration: "none",
    fontWeight: "800",
    borderRadius: "4px",
    marginTop: "30px",
    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.3)"
  }
};

const App = () => {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#1a1a1a" }}>
      {/* Top Navigation - Requested Menus Added */}
      <nav style={styles.nav}>
        <div style={{ fontWeight: "900", fontSize: "1.3rem", letterSpacing: "-0.5px" }}>
          COMPLIANCEWORXS
        </div>
        
        <div style={styles.navGroup}>
          <Link to="/" style={styles.navLink}>Overview</Link>
          <Link to="/pricing" style={styles.navLink}>Pricing</Link>
          <Link to="/intelligence" style={styles.navLink}>Intelligence Stream</Link>
          <Link to="/authority" style={styles.navLink}>Authority</Link>
        </div>

        <Link to="/assessment" style={{ ...styles.navLink, backgroundColor: "#f6a623", color: "#000", padding: "8px 20px", borderRadius: "4px", opacity: 1, fontWeight: "700" }}>
          Start DDR Assessment
        </Link>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <div style={styles.heroBadge}>Authorization Engine™ State: Operational</div>
          <h1 style={{ fontSize: "4rem", fontWeight: "800", lineHeight: "1.1", maxWidth: "800px", marginBottom: "20px" }}>
            Authorize Proof Only When a Decision Can Be Defended.
          </h1>
          <p style={{ fontSize: "1.3rem", maxWidth: "600px", opacity: 0.9, lineHeight: "1.6" }}>
            Governed by science. Validated by AI. Approved for inspection. Make regulatory decisions with total confidence.
          </p>
          <Link to="/assessment" style={styles.primaryBtn}>
            Start Decision Defensibility Assessment →
          </Link>
        </div>
      </header>

      {/* Strategic Value Section */}
      <section style={{ padding: "100px 60px", textAlign: "center", backgroundColor: "#f8fafc" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0a1a36", maxWidth: "900px", margin: "0 auto" }}>
          Inspectors assess decisions, <span style={{ color: "#f6a623" }}>not document volume.</span>
        </h2>
        <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#64748b" }}>
          Most findings originate from the wrong decision, not missing files.
        </p>
      </section>
    </div>
  );
};

export default App;
