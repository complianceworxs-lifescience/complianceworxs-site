import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./App";

export default function IntelligenceStream() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main style={{ background: "#F9FAFB", color: "#101828" }}>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, #1F3A5F 0%, #102A43 100%)",
            padding: "96px 24px",
            color: "#FFFFFF"
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "40px", fontWeight: 600, marginBottom: 16 }}>
              Topic Intelligence Hubs turn regulatory change into actions that
              protect revenue, prevent inspection surprises, and show you exactly
              what to do next.
            </h1>
            <p style={{ fontSize: 16, opacity: 0.9, maxWidth: 800, margin: "0 auto" }}>
              Choose a hub to see live regulatory signals, AI-generated analysis,
              and practical next steps for that part of your compliance program.
            </p>

            {/* 3-Step Flow */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
                marginTop: 48
              }}
            >
              <Step
                number="1"
                title="Track what changed"
                desc="See live regulatory changes and early inspection signals."
              />
              <Step
                number="2"
                title="Decide what to do"
                desc="Prioritize risks and assign accountable decision owners."
              />
              <Step
                number="3"
                title="Prove you did it"
                desc="Show inspectors validated audit records and evidence."
              />
            </div>
          </div>
        </section>

        {/* HUB LIST */}
        <section style={{ padding: "72px 24px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 32
            }}
          >
            {/* LEFT: HUB CARDS */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <HubCard
                title="Regulatory Change Impact"
                desc="See what changed, why it matters, and what it affects."
                cta="Get Free Change Impact Report"
                onClick={() => navigate("/assessment")}
              />

              <HubCard
                title="Inspection & Enforcement Signals"
                desc="See early enforcement signals before they become findings."
                cta="Start Inspection Signal Check"
                onClick={() => navigate("/assessment")}
              />

              <HubCard
                title="Risk Management"
                desc="Prioritize compliance risks by severity, scope, and urgency."
                cta="Start Risk Assessment"
                onClick={() => navigate("/assessment")}
              />

              <HubCard
                title="Decision Ownership"
                desc="Clarify who owns compliance decisions and approval paths."
                cta="Start Decision Ownership Mapping"
                onClick={() => navigate("/assessment")}
              />

              <HubCard
                title="Defensibility & Evidence"
                desc="Identify what would fail under inspection and why."
                cta="Start Defensibility Assessment"
                onClick={() => navigate("/assessment")}
              />

              <HubCard
                title="Audit Readiness"
                desc="See what breaks first when an inspector asks for proof."
                cta="Start Audit Readiness Assessment"
                onClick={() => navigate("/assessment")}
              />
            </div>

            {/* RIGHT: ACTION PATH */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #EAECF0",
                borderRadius: 12,
                padding: 24,
                height: "fit-content"
              }}
            >
              <h3 style={{ marginBottom: 12 }}>Actionable Compliance Path</h3>
              <p style={{ fontSize: 14, color: "#475467", marginBottom: 16 }}>
                Each hub maps to a next action.
              </p>

              <ul style={{ paddingLeft: 20, fontSize: 14, color: "#344054" }}>
                <li>Regulatory Change Impact → Free Report</li>
                <li>Inspection Signals → Risk Check</li>
                <li>Risk Management → Risk Assessment</li>
                <li>Decision Ownership → Decision Mapping</li>
                <li>Defensibility & Evidence → Free Assessment</li>
                <li>Audit Readiness → Readiness Assessment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            background: "#102A43",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h2 style={{ marginBottom: 12 }}>
            Start with a free assessment. Upgrade when proof matters.
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 32 }}>
            No credit card required.
          </p>

          <button
            onClick={() => navigate("/assessment")}
            style={{
              background: "#12B76A",
              color: "#FFFFFF",
              border: "none",
              padding: "16px 28px",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Start Assessment →
          </button>
        </section>
      </main>
    </MainLayout>
  );
}

/* ---------- Components ---------- */

function Step({ number, title, desc }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#12B76A",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 12px auto",
          fontWeight: 600
        }}
      >
        {number}
      </div>
      <h4 style={{ marginBottom: 8 }}>{title}</h4>
      <p style={{ fontSize: 14, opacity: 0.85 }}>{desc}</p>
    </div>
  );
}

function HubCard({ title, desc, cta, onClick }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #EAECF0",
        borderRadius: 12,
        padding: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <h3 style={{ marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, color: "#475467" }}>{desc}</p>
      </div>

      <button
        onClick={onClick}
        style={{
          background: "#0BA5EC",
          color: "#FFFFFF",
          border: "none",
          padding: "10px 16px",
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          whiteSpace: "nowrap"
        }}
      >
        {cta}
      </button>
    </div>
  );
}
