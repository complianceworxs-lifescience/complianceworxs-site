import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function App() {
  // Authorization state management
  // "blocked" | "review" | "authorized"
  const [authState, setAuthState] = useState("blocked");

  // Dynamic configuration based on authorization state
  const stateConfig = useMemo(() => {
    if (authState === "authorized") {
      return {
        badgeClass: "badge badge-authorized",
        badgeTitle: "Authorized",
        badgeSubtitle: "Proof generation enabled",
        panelClass: "panel panel-authorized",
        panelTitle: "Proof Authorized",
        panelBody:
          "You may generate a defensible record. Decisions will be logged with rationale and evidence.",
        ctaText: "Generate Proof",
        ctaClass: "button-primary",
      };
    }

    if (authState === "review") {
      return {
        badgeClass: "badge badge-review",
        badgeTitle: "Review Required",
        badgeSubtitle: "Additional signal needed",
        panelClass: "panel panel-review",
        panelTitle: "Authorization Pending",
        panelBody:
          "Your decision requires one more validation signal before proof can be generated.",
        ctaText: "Continue Assessment",
        ctaClass: "button-primary",
      };
    }

    // Default: blocked
    return {
      badgeClass: "badge badge-blocked",
      badgeTitle: "Not Authorized",
      badgeSubtitle: "Proof blocked by design",
      panelClass: "panel panel-blocked",
      panelTitle: "Proof Blocked",
      panelBody:
        "No defensible proof may be generated until authorization thresholds are met.",
      ctaText: "Start Assessment",
      ctaClass: "button-primary",
    };
  }, [authState]);

  return (
    <>
      {/* TOP AUTHORITY BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
          <div className="topbar-right">
            <span className={stateConfig.badgeClass}>
              <span className="badge-title">{stateConfig.badgeTitle}</span>
              <span className="badge-sub">{stateConfig.badgeSubtitle}</span>
            </span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-name">COMPLIANCEWORXS</div>
            <div className="brand-tag">Defensible decisions, before inspection.</div>
          </div>

          <nav className="nav">
  <Link className="navlink" to="/">
    Overview
  </Link>
  <Link className="navlink" to="/pricing">
    Pricing
  </Link>
  <Link className="navlink" to="/intelligence">
  Intelligence Stream
</Link>

  <a className="navlink" href="#authority">
    Authority
  </a>
  <a className="navlink" href="#access">
    Access
  </a>
</nav>

          <div className="header-actions">
            <button className="button-secondary" type="button">
              Sign In
            </button>
            <button className="button-primary" type="button">
              Start Assessment
            </button>
          </div>
        </div>
      </header>

      {/* HERO + STATE PANEL */}
      <main className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Decision-Grade Compliance Intelligence</h1>
            <p className="lead">
              ComplianceWorxs evaluates regulatory decisions before documentation
              exists. Proof is generated only after defensibility thresholds are met.
            </p>

            <div className="cta-row">
              <a className={stateConfig.ctaClass} href="#start">
                {stateConfig.ctaText}
              </a>

              <button className="link-button" type="button">
                How Authorization Works →
              </button>
            </div>

            {/* DEMO TOGGLE */}
            <div className="demo-toggle">
              <div className="demo-label">Demo: authorization state</div>
              <div className="demo-buttons">
                <button
                  className={authState === "blocked" ? "pill active" : "pill"}
                  onClick={() => setAuthState("blocked")}
                  type="button"
                >
                  Blocked
                </button>
                <button
                  className={authState === "review" ? "pill active" : "pill"}
                  onClick={() => setAuthState("review")}
                  type="button"
                >
                  Review
                </button>
                <button
                  className={authState === "authorized" ? "pill active" : "pill"}
                  onClick={() => setAuthState("authorized")}
                  type="button"
                >
                  Authorized
                </button>
              </div>
            </div>
          </div>

          <aside className={stateConfig.panelClass}>
            <div className="panel-title">{stateConfig.panelTitle}</div>
            <div className="panel-body">{stateConfig.panelBody}</div>
          </aside>
        </div>
      </main>

      {/* SYSTEM SECTION */}
      <section className="section-muted">
        <div className="container">
          <h2>Deterministic Decision Review (DDR)</h2>
          <p>
            DDR captures the signal, the decision, the rationale, and the evidence.
            If the decision cannot be defended, proof is blocked by design.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Documentation Does Not Equal Defensibility</h3>
              <ul>
                <li>Inspectors assess decisions, not document volume</li>
                <li>Proof without defensibility increases inspection risk</li>
                <li>Most compliance failures begin with the wrong decision</li>
              </ul>
            </div>

            <div className="card">
              <h3>How the System Works</h3>
              <ol>
                <li>Assess the decision</li>
                <li>Authorize proof</li>
                <li>Block risk</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER AUTHORITY BAND */}
      <footer className="authority-band">
        <p>
          Proof generation is governed. Indefensible proof is blocked by design.
        </p>
      </footer>
    </>
  );
}
