import { Link } from "react-router-dom";

export default function DDR() {
  return (
    <div className="ddr-visual-page">
      
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="ddr-visual-hero">
        <div className="ddr-visual-hero-overlay">
          <div className="ddr-visual-hero-inner">
            <h1 className="ddr-visual-headline">
              Deterministic Decision Review (DDR)
            </h1>
            <p className="ddr-visual-subhead">
              A structured, auditable way to document, evaluate, and defend regulated decisions.
            </p>
          </div>
        </div>
      </section>

      {/* SEPARATOR BAND */}
      <section className="ddr-visual-separator">
        <div className="ddr-visual-separator-inner">
          <p>The authorization engine behind every DDR</p>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="ddr-visual-authority">
        <div className="ddr-visual-authority-inner">
          <h2 className="ddr-visual-authority-headline">
            Authority is how ComplianceWorxs decides what proof is allowed to exist—before inspection.
          </h2>
          <p className="ddr-visual-authority-body">
            A governed system that maps regulatory signals to defensible actions, assigns ownership, 
            and enforces fail-closed controls when evidence or entitlement is missing.
          </p>
          <div className="ddr-visual-buttons">
            <Link to="/assessment" className="ddr-visual-btn-primary">
              Test a Decision →
            </Link>
            <Link to="/intelligence" className="ddr-visual-btn-secondary">
              View Intelligence Stream →
            </Link>
          </div>
        </div>
      </section>

      {/* ENGINE CARDS SECTION */}
      <section className="ddr-visual-engine">
        <div className="ddr-visual-engine-inner">
          <div className="ddr-visual-engine-header">
            <h3>How the engine decides</h3>
          </div>

          <div className="ddr-visual-cards-grid">
            <div className="ddr-visual-card">
              <h4>Fail-closed</h4>
              <p>If governance is missing, proof cannot proceed.</p>
            </div>
            
            <div className="ddr-visual-card">
              <h4>Decision</h4>
              <p>What is being approved or executed.</p>
            </div>
            
            <div className="ddr-visual-card">
              <h4>Inspection-ready</h4>
              <p>Decisions are explainable and replayable as an audit narrative.</p>
            </div>
            
            <div className="ddr-visual-card">
              <h4>Signal</h4>
              <p>What changed and why it matters.</p>
            </div>
            
            <div className="ddr-visual-card">
              <h4>Risk & Exposure</h4>
              <p>Who is accountable under inspection.</p>
            </div>
            
            <div className="ddr-visual-card">
              <h4>Gate</h4>
              <p>Authorize, conditional, or blocked.</p>
            </div>
          </div>

          <div className="ddr-visual-engine-cta">
            <Link to="/assessment" className="ddr-visual-btn-engine">
              Start a Decision Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ddr-visual-final">
        <div className="ddr-visual-final-inner">
          <h2>Make proof a controlled outcome.</h2>
          <p>Start with a decision. Get a deterministically governed result.</p>
          <Link to="/assessment" className="ddr-visual-btn-final">
            Start a Decision Assessment →
          </Link>
        </div>
      </section>

    </div>
  );
}

