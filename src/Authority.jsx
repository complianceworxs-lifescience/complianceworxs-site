import { useMemo } from "react";
import { Link } from "react-router-dom";

function IconShield() {
  return (
    <svg
      className="authority__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.5 19 5.7v6.1c0 5.3-3.6 9.9-7 10.8-3.4-.9-7-5.5-7-10.8V5.7L12 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2 11 14l3.8-4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLedger() {
  return (
    <svg
      className="authority__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 4h12a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h10M8 12h10M8 16h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGate() {
  return (
    <svg
      className="authority__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4.5 10.5V7.8c0-2 1.6-3.6 3.6-3.6h7.8c2 0 3.6 1.6 3.6 3.6v2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10.5h11a2 2 0 0 1 2 2v7H4.5v-7a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 14v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMap() {
  return (
    <svg
      className="authority__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 6 4.5 8.5v12L10 18l4 2 5.5-2.5v-12L14 8l-4-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 6v12M14 8v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Authority() {
  const pillars = useMemo(
    () => [
      {
        title: "Decision authority, by design",
        body:
          "Decisions are assigned an owner, a scope, and a defensibility threshold—before inspection-facing proof is allowed to exist.",
        icon: <IconMap />,
      },
      {
        title: "Defensible evidence, not content",
        body:
          "Outputs are structured as proof artifacts: what changed, why it matters, who approves, and what evidence supports it.",
        icon: <IconLedger />,
      },
      {
        title: "Fail-closed governance gates",
        body:
          "If confidence, lineage, or entitlement is missing, the system blocks proof generation. No silent drift. No untracked approvals.",
        icon: <IconGate />,
      },
      {
        title: "Inspection-ready posture",
        body:
          "Every outcome is written to be explainable: decisions, signals, and evidence are traceable and replayable as an audit narrative.",
        icon: <IconShield />,
      },
    ],
    []
  );

  const modules = useMemo(
    () => [
      {
        k: "DDR",
        title: "Deterministic Decision Review",
        body:
          "A structured assessment that determines whether a regulatory decision is authorized, conditional, or blocked—before proof exists.",
      },
      {
        k: "Lineage",
        title: "Decision Lineage",
        body:
          "A structured record that ties signals → rationale → owner → evidence. Designed to support explainability and audit replay.",
      },
      {
        k: "Proof",
        title: "Proof Controls",
        body:
          "Rules that govern what can be produced, for whom, and when. Prevents entitlement leakage and evidence gaps.",
      },
    ],
    []
  );

  return (
    <main className="authority authority-page">
      <section className="authority__hero" role="banner">
        <div className="authority__heroInner">
          <div className="authority__heroTop">
            <div className="authority__badge">
              <span className="authority__badgeDot" aria-hidden="true" />
              <span className="authority__badgeText">AUTHORIZATION ENGINE</span>
            </div>
          </div>

          <h1 className="authority__headline">
            Authority is how ComplianceWorxs decides what proof is allowed to
            exist—<span className="authority__headlineEm">before inspection.</span>
          </h1>

          <p className="authority__subhead">
            A governed compliance system that maps regulatory signals to
            defensible actions, assigns ownership, and enforces fail-closed
            controls when evidence or entitlement is missing.
          </p>

          <div className="authority__heroCtas">
            <Link className="authority__ctaPrimary" to="/assessment">
              Test a Decision →
            </Link>
            <Link className="authority__ctaSecondary" to="/intelligence">
              View Intelligence Stream →
            </Link>
          </div>

          <div className="authority__heroStats" aria-label="Authority outcomes">
            <div className="authority__stat">
              <div className="authority__statVal">Fail-closed</div>
              <div className="authority__statLbl">proof is blocked if governance is missing</div>
            </div>
            <div className="authority__stat">
              <div className="authority__statVal">Traceable</div>
              <div className="authority__statLbl">signals → rationale → owner → evidence</div>
            </div>
            <div className="authority__stat">
              <div className="authority__statVal">Inspection-ready</div>
              <div className="authority__statLbl">explainable decisions and audit narrative</div>
            </div>
          </div>
        </div>
      </section>

      <section className="authority__content">
        <div className="authority__contentInner">
          <div className="authority__sectionHead">
            <h2 className="authority__h2">What Authority enforces</h2>
            <p className="authority__p">
              This page explains the operating logic behind the Authorization
              Engine—so the system is not a black box.
            </p>
          </div>

          <div className="authority__grid">
            {pillars.map((p) => (
              <article key={p.title} className="authority__card">
                <div className="authority__cardIconWrap">{p.icon}</div>
                <h3 className="authority__cardTitle">{p.title}</h3>
                <p className="authority__cardBody">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="authority__divider" />

          <div className="authority__split">
            <div className="authority__splitLeft">
              <h2 className="authority__h2">How the engine works</h2>
              <p className="authority__p">
                The engine is a set of deterministic checks that decide whether a
                decision can proceed with proof, must be escalated, or must be
                blocked until governance gaps are resolved.
              </p>

              <ul className="authority__bullets">
                <li className="authority__bullet">
                  <span className="authority__bulletKey">Signal →</span> what changed and why it matters
                </li>
                <li className="authority__bullet">
                  <span className="authority__bulletKey">Decision →</span> what is being approved or executed
                </li>
                <li className="authority__bullet">
                  <span className="authority__bulletKey">Owner →</span> who is accountable under inspection
                </li>
                <li className="authority__bullet">
                  <span className="authority__bulletKey">Evidence →</span> what supports the rationale (or what’s missing)
                </li>
                <li className="authority__bullet">
                  <span className="authority__bulletKey">Gate →</span> authorize / conditional / block
                </li>
              </ul>

              <div className="authority__microCta">
                <Link className="authority__linkCta" to="/assessment">
                  Start Decision Defensibility Assessment →
                </Link>
              </div>
            </div>

            <div className="authority__splitRight">
              <div className="authority__modulePanel" aria-label="Authority modules">
                <div className="authority__modulePanelHead">
                  <div className="authority__modulePanelTitle">Core modules</div>
                  <div className="authority__modulePanelSub">
                    Built to keep decisions defensible under inspection
                  </div>
                </div>

                <div className="authority__moduleList">
                  {modules.map((m) => (
                    <div key={m.k} className="authority__module">
                      <div className="authority__moduleK">{m.k}</div>
                      <div className="authority__moduleText">
                        <div className="authority__moduleTitle">{m.title}</div>
                        <div className="authority__moduleBody">{m.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="authority__modulePanelFoot">
                  <Link className="authority__ctaPrimary authority__ctaPrimary--small" to="/assessment">
                    Test a Decision →
                  </Link>
                  <Link className="authority__ctaSecondary authority__ctaSecondary--small" to="/pricing">
                    View Pricing →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="authority__bottomCta">
            <div className="authority__bottomCtaInner">
              <div className="authority__bottomCtaCopy">
                <h2 className="authority__h2 authority__h2--invert">Make proof a controlled outcome.</h2>
                <p className="authority__p authority__p--invert">
                  Start with a decision. Get a deterministically governed result.
                </p>
              </div>
              <Link className="authority__bottomBtn" to="/assessment">
                Start Decision Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
