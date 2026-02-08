import { useState } from "react";
import { Link } from "react-router-dom";

export default function Intelligence() {
  const [activeTab, setActiveTab] = useState("Featured");

  const hubs = {
    Featured: [
      {
        id: 1,
        title: "Regulatory Change Impact",
        description: "See what changed, why it matters, and which decisions are affected. Signals are prioritized by risk and scope.",
        linkText: "Get Free Change Impact Report",
        ctaText: "Get Free Change Impact Report"
      },
      {
        id: 2,
        title: "Inspection & Enforcement Signals",
        description: "Identify enforcement patterns before they become findings and understand what inspectors are targeting.",
        linkText: "Start Inspection Signal Check",
        ctaText: "Start Inspection Signal Check"
      },
      {
        id: 3,
        title: "Risk Management",
        description: "Prioritize compliance risks by severity, urgency, and business impact.",
        linkText: "Start Risk Assessment",
        ctaText: "Start Risk Assessment"
      },
      {
        id: 4,
        title: "Decision Ownership",
        description: "Clarify who owns regulated decisions and where accountability is undefined.",
        linkText: "Start Decision Ownership Mapping",
        ctaText: "Start Decision Ownership Mapping"
      },
      {
        id: 5,
        title: "Defensibility & Evidence",
        description: "Identify evidence gaps inspectors will question and map corrective actions.",
        linkText: "Start Defensibility Assessment",
        ctaText: "Start Audit Readiness Assessment"
      },
      {
        id: 6,
        title: "Audit Readiness",
        description: "See what will fail first when an inspector asks for proof.",
        linkText: "Start Audit Readiness Assessment",
        ctaText: "Start Audit Readiness Assessment"
      }
    ],
    Risk: [
      {
        id: 3,
        title: "Risk Management",
        description: "Prioritize compliance risks by severity, urgency, and business impact.",
        linkText: "Start Risk Assessment",
        ctaText: "Start Risk Assessment"
      },
      {
        id: 4,
        title: "Decision Ownership",
        description: "Clarify who owns regulated decisions and where accountability is undefined.",
        linkText: "Start Decision Ownership Mapping",
        ctaText: "Start Decision Ownership Mapping"
      }
    ],
    Inspection: [
      {
        id: 2,
        title: "Inspection & Enforcement Signals",
        description: "Identify enforcement patterns before they become findings and understand what inspectors are targeting.",
        linkText: "Start Inspection Signal Check",
        ctaText: "Start Inspection Signal Check"
      },
      {
        id: 5,
        title: "Defensibility & Evidence",
        description: "Identify evidence gaps inspectors will question and map corrective actions.",
        linkText: "Start Defensibility Assessment",
        ctaText: "Start Audit Readiness Assessment"
      },
      {
        id: 6,
        title: "Audit Readiness",
        description: "See what will fail first when an inspector asks for proof.",
        linkText: "Start Audit Readiness Assessment",
        ctaText: "Start Audit Readiness Assessment"
      }
    ]
  };

  const currentHubs = hubs[activeTab] || hubs.Featured;

  return (
    <div className="intelligence-stream-page">
      {/* Hero Section */}
      <section className="intelligence-stream-hero">
        <div className="intelligence-stream-hero-inner">
          <h1>
            <span className="hero-highlight">Topic Intelligence Hubs</span> turn regulatory change into 
            actions that protect revenue, prevent inspection surprises, and show you{" "}
            <span className="hero-emphasis">exactly what to do next.</span> →
          </h1>
          
          <p className="hero-subtext">
            Each hub maps regulatory signals to a defensible compliance action.<br />
            Nothing is generic. Everything leads to a decision.
          </p>

          {/* Tab Navigation */}
          <div className="intelligence-tabs">
            <button
              className={activeTab === "Featured" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("Featured")}
            >
              Featured
            </button>
            <button
              className={activeTab === "Risk" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("Risk")}
            >
              Risk
            </button>
            <button
              className={activeTab === "Inspection" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("Inspection")}
            >
              Inspection
            </button>
          </div>
        </div>
      </section>

      {/* Intelligence Stream Content */}
      <section className="intelligence-stream-content">
        <div className="intelligence-stream-inner">
          <h2 className="stream-title">Intelligence Stream</h2>
          
          <div className="intelligence-hub-grid">
            {currentHubs.map((hub) => (
              <div key={hub.id} className="intelligence-hub-card">
                <h3 className="hub-card-title">{hub.title}</h3>
                <p className="hub-card-description">{hub.description}</p>
                <div className="hub-card-link">
                  <Link to="/assessment">{hub.linkText} →</Link>
                </div>
                <button className="hub-card-cta">
                  {hub.ctaText} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="intelligence-bottom-cta">
        <Link to="/assessment" className="bottom-cta-button">
          Start Assessment
        </Link>
      </section>
    </div>
  );
}


