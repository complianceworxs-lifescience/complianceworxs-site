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
          <p className="ddr-section-body"
