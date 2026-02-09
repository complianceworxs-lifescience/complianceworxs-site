import { Link } from "react-router-dom";

export default function DDR() {
  return (
    <div className="ddr-page">
      {/* HERO */}
      <section className="ddr-hero">
        <div className="ddr-hero-inner">
          <div className="ddr-breadcrumb">
            <Link to="/">Home</Link> / Deterministic Decision Review
          </div>
          <h1 className="ddr-headline">
            Deterministic Decision Review (DDR)
          </h1>
          <p className="ddr-subhead">
            A structured, auditable system for documenting, evaluating, and
            defending regulated decisions before inspection.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="ddr-intro">
        <div className="ddr-intro-inner">
          <p className="ddr-intro-text">
            DDR is the framework ComplianceWorxs uses to ensure every regulated decision is 
            documented, defensible, and audit-ready. Each review follows a deterministic 
            process that captures context, evidence, risk, rationale, and traceability.
          </p>
        </div>
      </section>

      {/* DDR COMPONENTS */}
      <section className="ddr-components">
        <div className="ddr-components-inner">
          
          <div className="ddr-component">
            <div className="ddr-component-number">01</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Decision Context</h2>
              <p className="ddr-component-body">
                Captures the scope, timing, and regulatory relevance of the decision 
                under review. Establishes why this decision requires formal documentation 
                and which regulations apply.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">02</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Decision Signal</h2>
              <p className="ddr-component-body">
                The triggering event, regulatory change, or operational condition that 
                required this decision. Identifies what made this decision necessary and 
                when the signal was detected.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">03</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Evidence Set</h2>
              <p className="ddr-component-body">
                The documented inputs, artifacts, and references evaluated as part of 
                this decision. Includes SOPs, quality records, regulatory guidance, and 
                subject matter expert input.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">04</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Risk & Exposure</h2>
              <p className="ddr-component-body">
                Identified risks and potential exposure associated with the decision 
                outcome. Evaluates both compliance risk and business impact before 
                authorizing proof generation.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">05</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Decision Rationale</h2>
              <p className="ddr-component-body">
                The deterministic reasoning used to justify the decision. Explains why 
                this decision is defensible given the context, signal, evidence, and risk 
                assessment.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">06</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Decision Outcome</h2>
              <p className="ddr-component-body">
                The final disposition of the decision, including any conditions, 
                limitations, or follow-up actions required. Authorizes proof generation 
                only when defensibility thresholds are met.
              </p>
            </div>
          </div>

          <div className="ddr-component">
            <div className="ddr-component-number">07</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">Review & Traceability</h2>
              <p className="ddr-component-body">
                Review metadata supporting audit replay and future verification. Captures 
                who reviewed the decision, when, and under what authority.
              </p>
            </div>
          </div>

          <div className="ddr-component ddr-component-reserved">
            <div className="ddr-component-number">08</div>
            <div className="ddr-component-content">
              <h2 className="ddr-component-title">DDR Evolution</h2>
              <p className="ddr-component-body">
                Reserved space for future automation, intelligence integration, and 
                system expansion. DDR is designed to evolve as regulatory requirements 
                and organizational needs change.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="ddr-cta">
        <div className="ddr-cta-inner">
          <h2>Start Your Deterministic Decision Review</h2>
          <p>
            See how DDR creates audit-ready proof that defensibility thresholds were 
            met before documentation was generated.
          </p>
          <Link to="/assessment" className="ddr-cta-button">
            Start Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
