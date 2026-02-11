import { Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  // Simplified state for the landing page
  const [authState] = useState("blocked"); 

  return (
    <>
      {/* TOP AUTHORITY BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
          <div className="topbar-right">
            <span className="badge badge-blocked">
              <span className="badge-title">Status</span>
              <span className="badge-sub">Waiting for Assessment</span>
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
            <Link className="navlink" to="/">Overview</Link>
            <Link className="navlink" to="/pricing">Pricing</Link>
            <Link className="navlink" to="/intelligence">Intelligence Stream</Link>
            <Link className="navlink" to="/authority">Authority</Link>
            <Link className="navlink" to="/access">Access</Link>
          </nav>

          <div className="header-actions">
            <button className="button-secondary" type="button">Sign In</button>
            <button className="button-primary" type="button">Start Assessment</button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Decision-Grade Compliance Intelligence</h1>
            <p className="lead">
              ComplianceWorxs evaluates regulatory decisions before documentation
              exists. Proof is generated only after defensibility thresholds are met.
            </p>

            <div className="cta-row">
              <button className="button-primary" type="button">Start Assessment</button>
              <button className="link-button" type="button">How It Works →</button>
            </div>
          </div>

          <aside className="panel panel-blocked">
            <div className="panel-title">Proof Status</div>
            <div className="panel-body">
              No defensible proof may be generated until authorization thresholds are met.
            </div>
          </aside>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 ComplianceWorxs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
