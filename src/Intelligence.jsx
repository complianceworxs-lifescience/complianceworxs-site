import { useState } from "react";
import "./intelligence.css";

const CARDS = [
  {
    id: 1,
    title: "Regulatory Change Impact",
    summary:
      "See what changed, why it matters, and which decisions are affected. Signals are prioritized by risk and scope.",
    miniCta: "Get Free Change Impact Report →",
    button: "Get Free Change Impact Report →",
    category: "featured",
  },
  {
    id: 2,
    title: "Inspection & Enforcement Signals",
    summary:
      "Identify enforcement patterns before they become findings and understand what inspectors are targeting.",
    miniCta: "Start Inspection Signal Check →",
    button: "Start Inspection Signal Check →",
    category: "featured",
  },
  {
    id: 3,
    title: "Risk Management",
    summary:
      "Prioritize compliance risks by severity, urgency, and business impact.",
    miniCta: "Start Risk Assessment →",
    button: "Start Risk Assessment →",
    category: "risk",
  },
  {
    id: 4,
    title: "Decision Ownership",
    summary:
      "Clarify who owns regulated decisions and where accountability is undefined.",
    miniCta: "Start Decision Ownership Mapping →",
    button: "Start Decision Ownership Mapping →",
    category: "risk",
  },
  {
    id: 5,
    title: "Defensibility & Evidence",
    summary:
      "Identify evidence gaps inspectors will question and map corrective actions.",
    miniCta: "Start Defensibility Assessment →",
    button: "Start Audit Readiness Assessment →",
    category: "inspection",
  },
  {
    id: 6,
    title: "Audit Readiness",
    summary:
      "See what will fail first when an inspector asks for proof.",
    miniCta: "Start Audit Readiness Assessment →",
    button: "Start Audit Readiness Assessment →",
    category: "inspection",
  },
];

export default function Intelligence() {
  const [activeTab, setActiveTab] = useState("featured");

  const visibleCards = CARDS.filter(
    (c) => c.category === activeTab
  );

  return (
    <main className="intelligence-page">
      {/* HERO */}
      <section className="intelligence-hero" role="banner">
        <h1>
          Topic Intelligence Hubs turn regulatory change into actions that
          protect revenue, prevent inspection surprises, and show you exactly
          what to do next →
        </h1>
        <p>
          Each hub maps regulatory signals to a defensible compliance action.
          Nothing is generic. Everything leads to a decision.
        </p>

        {/* TABS */}
        <div className="intelligence-tabs">
          {["featured", "risk", "inspection"].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="intelligence-grid-wrapper">
        <h2>Intelligence Stream</h2>

        <div className="intelligence-grid">
          {visibleCards.map((card) => (
            <div key={card.id} className="intelligence-card">
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
              <span className="mini-cta">{card.miniCta}</span>
              <button className="card-button">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL CTA */}
      <section className="intelligence-bottom-cta">
        <button className="bottom-cta-button">
          Start Assessment
        </button>
      </section>
    </main>
  );
}

