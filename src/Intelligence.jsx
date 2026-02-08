import { useState } from "react";
import { Link } from "react-router-dom";

export default function Intelligence() {
  const [activeTab, setActiveTab] = useState("featured");

  const hubs = [
    {
      id: "reg-change",
      title: "Regulatory Change Impact",
      description:
        "See what changed, why it matters, and which decisions are affected. Signals are prioritized by risk and scope.",
      category: "featured",
      linkText: "Get Free Change Impact Report →",
      ctaText: "Get Free Change Impact Report →",
      to: "/assessment"
    },
    {
      id: "inspection-signals",
      title: "Inspection & Enforcement Signals",
      description:
        "Identify enforcement patterns before they become findings and understand what inspectors are targeting.",
      category: "inspection",
      linkText: "Start Inspection Signal Check →",
      ctaText: "Start Inspection Signal Check →",
      to: "/assessment"
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description:
        "Prioritize compliance risks by severity, urgency, and business impact.",
      category: "risk",
      linkText: "Start Risk Assessment →",
      ctaText: "Start Risk Assessment →",
      to: "/assessment"
    },
    {
      id: "decision-ownership",
      title: "Decision Ownership",
      description:
        "Clarify who owns regulated decisions and where accountability is undefined.",
      category: "risk",
      linkText: "Start Decision Ownership Mapping →",
      ctaText: "Start Decision Ownership Mapping →",
      to: "/assessment"
    },
    {
      id: "defensibility",
      title: "Defensibility & Evidence",
      description:
        "Identify evidence gaps inspectors will question and map corrective actions.",
      category: "featured",
      linkText: "Start Defensibility Assessment →",
      ctaText: "Start Audit Readiness Assessment →",
      to: "/assessment"
    },
    {
      id: "audit-readiness",
      title: "Audit Readiness",
      description:
        "See what will fail first when an inspector asks for proof.",
      category: "inspection",
      linkText: "Start Audit Readiness Assessment →",
      ctaText: "Start Audit Readiness Assessment →",
      to: "/assessment"
    }
  ];

  const visibleHubs =
    activeTab === "featured"
      ? hubs
      : hubs.filter(hub => hub.category === activeTab);

  return (
    <div className="intelligence-stream-page">
      {/* HERO */}
      <section className="intelligence-stream-hero">
        <div className="intelligence-stream-hero-inner">
          <h1>
            Topic Intelligence Hubs turn regulatory change into{" "}
            <span className="hero-highlight">
              actions that protect revenue, prevent inspection surprises,
            </span>{" "}
            and show you <span className="hero-emphasis">exactly what to do next.</span>
          </h1>

          <p className="hero-subtext">
            Each hub maps regulatory signals to a defensible compliance action.
            Nothing is generic. Everything leads to a decision.
          </p>

          <div className="intelligence-tabs">
            <button
              className={`tab-btn ${activeTab === "featured" ? "active" : ""}`}
              onClick={() => setActiveTab("featured")}
            >
              Featured
            </button>
            <button
              className={`tab-btn ${activeTab === "risk" ? "active" : ""}`}
              onClick={() => setActiveTab("risk")}
            >
              Risk
            </button>
            <button
              className={`tab-btn ${activeTab === "inspection" ? "active" : ""}`}
              onClick={() => setActiveTab("inspection")}
            >
              Inspection
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="intelligence-stream-content">
        <div className="intelligence-stream-inner">
          <h2 className="stream-title">Intelligence Stream</h2>

          <div className="intelligence-hub-grid">
            {visibleHubs.map(hub => (
              <div className="intelligence-hub-card" key={hub.id}>
                <h3 className="hub-card-title">{hub.title}</h3>
                <p className="hub-card-description">{hub.description}</p>

                <div className="hub-card-link">
                  <Link to={hub.to}>{hub.linkText}</Link>
                </div>

                <Link to={hub.to} className="hub-card-cta">
                  {hub.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="intelligence-bottom-cta">
        <Link to="/assessment" className="bottom-cta-button">
          Start Assessment
        </Link>
      </section>
    </div>
  );
}



