import React from "react";

export default function App() {
  return (
    <div className="cw-page">
      {/* Top utility bar */}
      <div className="cw-topbar">
        <div className="cw-container cw-topbar__inner">
          <div className="cw-topbar__brand">
            <span className="cw-dot" aria-hidden="true" />
            <span className="cw-topbar__brandText">COMPLIANCEWORXS AUTHORIZATION ENGINE™</span>
          </div>
          <div className="cw-topbar__links">
            <a href="#/how" className="cw-topbar__link">How system works</a>
            <span className="cw-topbar__sep">•</span>
            <a href="#/stories" className="cw-topbar__link">Case Editions</a>
            <span className="cw-topbar__sep">•</span>
            <a href="#/principles" className="cw-topbar__link">Ethos principles</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="cw-header">
        <div className="cw-container cw-header__inner">
          <div className="cw-logo">COMPLIANCEWORXS</div>

          <nav className="cw-nav" aria-label="Primary">
            <a className="cw-nav__link" href="#/overview">Overview</a>
            <a className="cw-nav__link" href="#/pricing">Pricing</a>
            <a className="cw-nav__link" href="#/intel">Intelligence Stream</a>
            <a className="cw-nav__link" href="#/security">Security</a>
            <a className="cw-nav__link" href="#/access">Access</a>
          </nav>

          <a className="cw-btn cw-btn--small" href="#/assessment">Start Assessment</a>
        </div>
      </header>

      {/* Hero */}
      <section className="cw-hero">
        <div className="cw-hero__bg" aria-hidden="true" />
        <div className="cw-container cw-hero__inner">
          <div className="cw-hero__copy">
            <h1 className="cw-hero__title">
              Authorize Proof Only
              <br />
              When a Decision Can Be
              <br />
              Defended.
            </h1>

            <p className="cw-hero__sub">
              Make regulatory decisions with confidence—before inspection,
              before documentation, before risk compounds.
            </p>

            <a className="cw-btn cw-btn--hero" href="#/assessment/start">
              Start Decision Defensibility Assessment <span className="cw-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Statement strip */}
      <section className="cw-strip">
        <div className="cw-container">
          <div className="cw-strip__text">
            <span className="cw-strong">Inspectors</span> assess decisions, <span className="cw-strong">not</span> document volume.
          </div>
        </div>
      </section>

      {/* Documentation section */}
      <section className="cw-section">
        <div className="cw-container cw-section__inner cw-center">
          <h2 className="cw-h2">Documentation Does Not Equal Defensibility</h2>

          <ul className="cw-list">
            <li className="cw-list__item">
              <CheckIcon />
              <span>Proof without defensibility increases inspection risk</span>
            </li>
            <li className="cw-list__item">
              <CheckIcon />
              <span>Most findings originate from the wrong decision, not missing files</span>
            </li>
            <li className="cw-list__item">
              <CheckIcon />
              <span>Teams often document outcomes they cannot justify under scrutiny</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Statement strip 2 */}
      <section className="cw-strip cw-strip--light">
        <div className="cw-container">
          <div className="cw-strip__text cw-strip__text--small">
            <span className="cw-strong">ComplianceWorxs</span> evaluates regulatory decisions <em>before</em> documentation exists.
          </div>
        </div>
      </section>

      {/* Two column: how it works + what you receive */}
      <section className="cw-section cw-section--tight">
        <div className="cw-container">
          <div className="cw-grid2">
            <div className="cw-card">
              <h3 className="cw-h3">How ComplianceWorxs Actually Works</h3>

              <div className="cw-steps">
                <div className="cw-step">
                  <div className="cw-step__num">1</div>
                  <div className="cw-step__body">
                    <div className="cw-step__title">Assess the decision</div>
                    <div className="cw-step__text">Determine whether a regulatory decision can be defended.</div>
                  </div>
                </div>

                <div className="cw-step__divider" aria-hidden="true" />

                <div className="cw-step">
                  <div className="cw-step__num">2</div>
                  <div className="cw-step__body">
                    <div className="cw-step__title">Authorize proof</div>
                    <div className="cw-step__text">Proof generation is permitted only when defensibility thresholds are met.</div>
                  </div>
                </div>
              </div>

              <div className="cw-pill">
                <InfoIcon />
                <span>ComplianceWorxs: evaluates, defensibly works.</span>
              </div>
            </div>

            <div className="cw-card">
              <h3 className="cw-h3">What You Receive If Authorized</h3>
              <ul className="cw-list cw-list--compact">
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>No automated approvals</span>
                </li>
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>No remediation advice</span>
                </li>
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>No proof without accountability</span>
                </li>
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>No self-deciding AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for professionals + never does */}
      <section className="cw-section cw-section--tight">
        <div className="cw-container">
          <div className="cw-grid2">
            <div className="cw-card cw-card--flat">
              <h3 className="cw-h3">
                Built for Professionals <span className="cw-muted">Accountable at inspection</span>
              </h3>

              <ul className="cw-list cw-list--compact">
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>QA leaders responsible for inspection outcomes</span>
                </li>
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>Regulatory professionals accountable for interpretation</span>
                </li>
                <li className="cw-list__item">
                  <CheckIcon />
                  <span>Validation leaders defending system decisions</span>
                </li>
              </ul>
            </div>

            <div className="cw-card cw-card--shadow">
              <h3 className="cw-h3">What ComplianceWorxs Never Does</h3>
              <ul className="cw-list cw-list--compact cw-list--danger">
                <li className="cw-list__item">
                  <XIcon />
                  <span>No automated approvals</span>
                </li>
                <li className="cw-list__item">
                  <XIcon />
                  <span>No remediation advice</span>
                </li>
                <li className="cw-list__item">
                  <XIcon />
                  <span>No proof without accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="cw-cta">
        <div className="cw-container cw-cta__inner">
          <h2 className="cw-cta__title">Start Decision Defensibility Assessment</h2>
          <div className="cw-cta__sub">Free to assess. Proof generation requires authorization.</div>
          <a className="cw-btn cw-btn--hero" href="#/assessment/start">
            Start Decision Defensibility Assessment <span className="cw-arrow">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="cw-footer">
        <div className="cw-container">
          <div className="cw-footer__grid">
            <div>
              <div className="cw-footer__logo">COMPLIANCEWORXS</div>
              <p className="cw-footer__text">
                A permissioned compliance system that evaluates proof before it enters your record.
              </p>
            </div>

            <div>
              <div className="cw-footer__head">Governance</div>
              <ul className="cw-footer__links">
                <li><a href="#/governance">Inspection logic</a></li>
                <li><a href="#/lineage">Decision lineage</a></li>
                <li><a href="#/policies">Policies</a></li>
              </ul>
            </div>

            <div>
              <div className="cw-footer__head">Intelligence</div>
              <ul className="cw-footer__links">
                <li><a href="#/intel">Regulatory signals</a></li>
                <li><a href="#/stream">Intelligence stream</a></li>
                <li><a href="#/alerts">Alerts</a></li>
              </ul>
            </div>

            <div>
              <div className="cw-footer__head">Legal &amp; Procurement</div>
              <ul className="cw-footer__links">
                <li><a href="#/security">Security</a></li>
                <li><a href="#/terms">Terms</a></li>
                <li><a href="#/privacy">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="cw-footer__bottom">
            <span>© {new Date().getFullYear()} ComplianceWorxs</span>
            <span className="cw-footer__dot">•</span>
            <span>Authorization Engine™</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="cw-ico cw-ico--ok" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12.2l2.6 2.6L16.8 9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="cw-ico cw-ico--bad" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8l8 8M16 8l-8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="cw-ico cw-ico--info" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10.8v6.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="7.6" r="1.2" fill="currentColor" />
    </svg>
  );
}
