import "./index.css";

export default function App() {
  return (
    <>
      {/* HERO */}
      <section className="container">
        <h1>Compliance Intelligence for Life Science Teams</h1>
        <p>
          ComplianceWorxs delivers decision-grade compliance intelligence for
          organizations operating under regulatory scrutiny.
        </p>

        <h2>Deterministic Decision Review (DDR)</h2>
        <p>
          DDR creates a defensible, audit-ready record of regulatory decisions
          by capturing the signal, the decision, the rationale, and the
          evidence.
        </p>

        <ul>
          <li>Regulatory signal identified</li>
          <li>Decision taken</li>
          <li>Rationale documented</li>
          <li>Evidence preserved</li>
        </ul>

        <a className="button-primary" href="#">
          Start Decision Defensibility Assessment
        </a>
      </section>

      {/* SYSTEM LOGIC SECTION */}
      <section className="section-muted">
        <div className="container">
          <h2>Why ComplianceWorxs Exists</h2>
          <p>
            Documentation does not equal defensibility. Inspectors assess
            decisions, not document volume. Proof without defensibility
            increases inspection risk.
          </p>
        </div>
      </section>

      {/* AUTHORITY FOOTER */}
      <section className="authority-band">
        <p>
          ComplianceWorxs is a governed compliance system.
          <br />
          Indefensible proof is blocked by design.
        </p>
      </section>
    </>
  );
}
