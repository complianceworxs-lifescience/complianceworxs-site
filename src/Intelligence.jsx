import { useState } from "react";
import { Link } from "react-router-dom";

export default function Intelligence() {
  const [activeHub, setActiveHub] = useState("featured");

  const hubs = [
    {
      id: "regulatory-change",
      title: "Regulatory Change Impact",
      description:
        "See what changed, why it matters, and which decisions are affected. Signals are prioritized by risk and scope.",
      cta: "Get Free Change Impact Report"
    },
    {
      id: "inspection-signals",
      title: "Inspection & Enforcement Signals",
      description:
        "Identify enforcement patterns before they become findings. Understand what inspectors are targeting.",
      cta: "Start Inspection Signal Check"
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description:
        "Prioritize compliance risks by severity, urgency, and business impact.",
      cta: "Start Risk Assessment"
    },
    {
      id: "decision-ownership",
      title: "Decision Ownership",
      description:
        "Clarify who owns regulated decisions and where accountability is undefined.",
      cta: "Start Decision Ownership Mapping"
    },
    {
      id: "defensibility",
      title: "Defensibility & Evidence",
      description:
        "Identify evidence gaps inspectors will question and map corrective actions.",
      cta: "Start Defensibility Assessment"
    },
    {
      id: "audit-readiness",
      title: "Audit Readiness",
      description:
        "See what will fail first when an inspector asks for proof.",
      cta: "Start Audit Readiness Assessment"
    }
  ];

  return (
    <div className="intelligence-page">
      {/* HERO */}
      <section className="intelligence-hero">
        <h1>
          Topic Intelligence Hubs turn regulatory change into actions that protect
          revenue, prevent inspection surprises, and show you exactly what to do
          next.
        </h1>
        <p>
          Each hub maps regulatory signals to a defensible compliance action.
          Nothing is generic. Everything leads to a decision.
        </p>
      </section>

      {/* HUB FILTER */}
      <section className="intelligence-filters">
        <button
          className={activeHub === "featured" ? "filter active" : "filter"}
          onClick={() => setActiveHub("featured")}
          type="button"
        >
          Featured
        </button>
        <button
          className={activeHub === "risk" ? "filter active" : "filter"}
          onClick={() => setActiveHub("risk")}
          type="button"
        >
          Risk
        </button>
        <button
          className={activeHub === "inspection" ? "filter active" : "filter"}
          onClick={() => setActiveHub("inspection")}
          type="button"
        >
          Inspection
        </button>
      </section>

      {/* HUB CARDS */}
      <section className="intelligence-grid">
        {hubs.map((hub) => (
          <div className="intelligence-card" key={hub.id}>
            <h3>{hub.title}</h3>
            <p>{hub.description}</p>

            <Link className="intelligence-cta" to="/assessment">
              {hub.cta} →
            </Link>
          </div>
        ))}
      </section>

      {/* FOOTER CTA */}
      <section className="intelligence-footer">
        <Link className="primary-action" to="/assessment">
          Start Assessment
        </Link>
      </section>
    </div>
  );
}
