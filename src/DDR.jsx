import { Link } from "react-router-dom";

export default function DDR() {
  return (
    <div className="ddr-page">

      {/* HERO SECTION */}
      <section className="ddr-hero">
        <div className="ddr-hero-inner">
          <h1 className="ddr-hero-headline">Deterministic Decision Review (DDR)</h1>
          <p className="ddr-hero-subhead">
            A structured, auditable way to document, evaluate, and defend regulated decisions.
          </p>
          <p className="ddr-hero-description">
            This is about the decisions you sign—before inspection—not abstract compliance theory.
          </p>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="ddr-authority">
        <div className="ddr-authority-inner">
          <h2 className="ddr-authority-headline">The authorization engine behind every DDR</h2>
          <p className="ddr-authority-body">
            Authority is how ComplianceWorxs decides what proof is allowed to exist—before inspection.
            A governed system that maps regulatory signals to defensible actions, assigns ownership,
            and enforces fail-closed controls when evidence or entitlement is missing.
          </p>
          <div className="ddr-authority-buttons">
            <Link to="/assessment" className="ddr-cta-button">Test a Decision →</Link>
            <Link to="/intelligence" className="ddr-cta-button secondary">View Intelligence Stream →</Link>
          </div>
        </div>
      </section>

      {/* HOW THE ENGINE DECIDES */}
      <section className="ddr-engine">
        <h2 className="ddr-section-headline">How the engine decides</h2>
        <p className="ddr-section-body">
          Deterministic checks decide whether a decision can proceed with proof, must be escalated, or must be blocked until governance gaps are resolved.
        </p>
        <ul className="ddr-engine-list">
          <li><strong>Signal</strong> — What changed and why it matters.</li>
          <li><strong>Decision</strong> — What is being approved or executed.</li>
          <li><strong>Owner</strong> — Who is accountable under inspection.</li>
          <li><strong>Evidence</strong> — What supports the rationale, or what is missing.</li>
          <li><strong>Gate</strong> — Authorize, conditional, or blocked.</li>
        </ul>
      </section>

      {/* WHAT DDR CAPTURES */}
      <section className="ddr-capture">
        <h2 className="ddr-section-headline">What a DDR captures</h2>
        <div className="ddr-capture-list">
          <div className="ddr-capture-item">
            <h4>Decision Context</h4>
            <p>Defines scope, timing, and regulatory relevance.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Decision Signal</h4>
            <p>Identifies the trigger that made the decision necessary.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Evidence Set</h4>
            <p>Documents what was evaluated—and what was excluded.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Risk & Exposure</h4>
            <p>Makes inspection and business impact explicit.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Decision Rationale</h4>
            <p>Explains why the decision is defensible.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Decision Outcome</h4>
            <p>Approved, conditional, or blocked—before proof is generated.</p>
          </div>
          <div className="ddr-capture-item">
            <h4>Review & Traceability</h4>
            <p>Captures reviewer, authority, and inspection replay data.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ddr-final-cta">
        <h2 className="ddr-final-headline">Make proof a controlled outcome.</h2>
        <p className="ddr-final-subhead">Start with a decision. Get a deterministically governed result.</p>
        <Link to="/assessment" className="ddr-final-button">
          Start a Decision Assessment →
        </Link>
      </section>

    </div>
  );
}
