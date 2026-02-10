import { Link } from "react-router-dom";

export default function DDR() {
  return (
    <div className="ddr-page">

      {/* BAND 1 — HUMAN CONTEXT / RECOGNITION */}
      <section className="ddr-band ddr-band-context">
        <div className="ddr-band-inner">
          <h1 className="ddr-headline">
            Deterministic Decision Review (DDR)
          </h1>
          <p className="ddr-subhead">
            A structured, auditable way to document, evaluate, and defend
            regulated decisions.
          </p>
          <p className="ddr-context-note">
            This is about the decisions you sign—before inspection—not abstract compliance theory.
          </p>
        </div>
      </section>

      {/* BAND 2 — AUTHORITY REVEAL / TRUST TRANSFER */}
      <section className="ddr-band ddr-band-authority">
        <div className="ddr-band-inner">
          <span className="ddr-eyebrow">
            The authorization engine behind every DDR
          </span>
          <h2 className="ddr-section-headline">
            Authority is how ComplianceWorxs decides what proof is allowed to exist—before inspection.
          </h2>
          <p className="ddr-section-body">
            A governed system that maps regulatory signals to defensible actions,
            assigns ownership, and enforces fail-closed controls when evidence or
            entitlement is missing.
          </p>
          <div className="ddr-authority-cta">
            <Link to="/assessment" className="ddr-primary-button">
              Test a Decision →
            </Link>
            <Link to="/intelligence" className="ddr-secondary-button">
              View Intelligence Stream →
            </Link>
          </div>
        </div>
      </section>

      {/* BAND 3 — PRINCIPLES / VALIDATION */}
      <section className="ddr-band ddr-band-principles">
        <div className="ddr-band-inner ddr-principles-grid">
          <div className="ddr-principle">
            <h3>Fail-closed</h3>
            <p>If governance is missing, proof cannot proceed.</p>
          </div>
          <div className="ddr-principle">
            <h3>Traceable</h3>
            <p>Every signal, rationale, owner, and evidence link is recorded.</p>
          </div>
          <div className="ddr-principle">
            <h3>Inspection-ready</h3>
            <p>Decisions are explainable and replayable as an audit narrative.</p>
          </div>
        </div>
      </section>

      {/* BAND 4 — ENGINE LOGIC / CLARITY */}
      <section className="ddr-band ddr-band-engine">
        <div className="ddr-band-inner">
          <h2 className="ddr-section-headline">
            How the engine decides
          </h2>
          <p className="ddr-section-body">
            Deterministic checks decide whether a decision can proceed with proof,
            must be escalated, or must be blocked until governance gaps are resolved.
          </p>

          <ul className="ddr-engine-list">
            <li>
              <strong>Signal</strong> — What changed and why it matters.
            </li>
            <li>
              <strong>Decision</strong> — What is being approved or executed.
            </li>
            <li>
              <strong>Owner</strong> — Who is accountable under inspection.
            </li>
            <li>
              <strong>Evidence</strong> — What supports the rationale, or what is missing.
            </li>
            <li>
              <strong>Gate</strong> — Authorize, conditional, or blocked.
            </li>
          </ul>
        </div>
      </section>

      {/* BAND 5 — DDR COMPONENTS / ORIENTATION */}
      <section className="ddr-band ddr-band-components">
        <div className="ddr-band-inner">
          <h2 className="ddr-section-headline">
            What a DDR captures
          </h2>

          <div className="ddr-components-grid">
            <div className="ddr-component">
              <h4>Decision Context</h4>
              <p>Defines scope, timing, and regulatory relevance.</p>
            </div>
            <div className="ddr-component">
              <h4>Decision Signal</h4>
              <p>Identifies the trigger that made the decision necessary.</p>
            </div>
            <div className="ddr-component">
              <h4>Evidence Set</h4>
              <p>Documents what was evaluated—and what was excluded.</p>
            </div>
            <div className="ddr-component">
              <h4>Risk & Exposure</h4>
              <p>Makes inspection and business impact explicit.</p>
            </div>
            <div className="ddr-component">
              <h4>Decision Rationale</h4>
              <p>Explains why the decision is defensible.</p>
            </div>
            <div className="ddr-component">
              <h4>Decision Outcome</h4>
              <p>Approved, conditional, or blocked—before proof is generated.</p>
            </div>
            <div className="ddr-component">
              <h4>Review & Traceability</h4>
              <p>Captures reviewer, authority, and inspection replay data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 6 — CLOSURE / COMMITMENT */}
      <section className="ddr-band ddr-band-cta">
        <div className="ddr-band-inner">
          <h2 className="ddr-final-headline">
            Make proof a controlled outcome.
          </h2>
          <p className="ddr-final-subhead">
            Start with a decision. Get a deterministically governed result.
          </p>
          <Link to="/assessment" className="ddr-final-button">
            Start a Decision Assessment →
          </Link>
        </div>
      </section>

    </div>
  );
}

