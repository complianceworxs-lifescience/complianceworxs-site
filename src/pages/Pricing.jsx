import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./App";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main style={{ background: "#F9FAFB", color: "#101828" }}>
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "96px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: 600, marginBottom: 12 }}>
            Start Your Compliance Journey
          </h1>
          <p style={{ fontSize: "16px", opacity: 0.9 }}>
            Start with basic features. Upgrade later for more advanced tools.
            <br />
            Turn compliance gaps into defensible proof.
          </p>
        </section>

        {/* PLANS */}
        <section style={{ padding: "72px 24px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24
            }}
          >
            {/* STANDARD */}
            <PlanCard
              title="Standard Authorization"
              price="$299"
              subtitle="Access core compliance assessment and basic authorization"
              button="Start with Standard"
              onClick={() => navigate("/assessment")}
              features={[
                "Decision Defensibility Assessment results",
                "Basic compliance reporting",
                "Assessment history access",
                "Email support"
              ]}
            />

            {/* PROFESSIONAL */}
            <PlanCard
              highlighted
              badge="RECOMMENDED"
              title="Professional Authorization"
              price="$499"
              subtitle="Turn compliance gaps into defensible, inspection-ready proof"
              button="Activate Professional Authorization"
              onClick={() => navigate("/assessment")}
              features={[
                "All Standard capabilities",
                "Decision lineage & evidence index",
                "Authorization-gated defensible proof",
                "Inspection-ready artifacts",
                "Real-time compliance gap tracking",
                "Regulatory change alerts",
                "Monthly defensibility checks",
                "Priority email support"
              ]}
            />

            {/* ENTERPRISE */}
            <PlanCard
              badge="BEST VALUE"
              title="Enterprise Authorization"
              price="$899"
              subtitle="Organizational governance for accountability across decisions"
              button="Request Enterprise Authorization"
              onClick={() => navigate("/assessment")}
              features={[
                "All Professional capabilities",
                "Multi-decision governance",
                "Organizational authorization oversight",
                "Priority handling for complex decisions",
                "Custom framework support",
                "Dedicated account manager",
                "Priority support"
              ]}
            />
          </div>
        </section>

        {/* COMPARE TABLE */}
        <section style={{ padding: "48px 24px" }}>
          <h2 style={{ textAlign: "center", marginBottom: 32 }}>
            Compare Plans
          </h2>

          <div style={{ maxWidth: 1100, margin: "0 auto", overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#FFFFFF",
                border: "1px solid #EAECF0"
              }}
            >
              <thead>
                <tr style={{ background: "#F2F4F7" }}>
                  <Th>Feature</Th>
                  <Th>Standard</Th>
                  <Th>Professional</Th>
                  <Th>Enterprise</Th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Decision Defensibility Assessment", true, true, true],
                  ["Basic compliance reporting", true, true, true],
                  ["Assessment history access", true, true, true],
                  ["Decision lineage & evidence index", false, true, true],
                  ["Authorization-gated proof", false, true, true],
                  ["Inspection-ready artifacts", false, true, true],
                  ["Real-time gap tracking", false, true, true],
                  ["Regulatory change alerts", false, true, true],
                  ["Multi-decision governance", false, false, true],
                  ["Organization oversight", false, false, true],
                  ["Priority handling", false, false, true],
                  ["Custom framework support", false, false, true],
                  ["Dedicated account manager", false, false, true],
                  ["Email support", true, true, true],
                  ["Priority support", false, true, true]
                ].map(([label, s, p, e], i) => (
                  <tr key={i} style={{ borderTop: "1px solid #EAECF0" }}>
                    <Td>{label}</Td>
                    <Td>{s ? "✓" : "–"}</Td>
                    <Td>{p ? "✓" : "–"}</Td>
                    <Td>{e ? "✓" : "–"}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "72px 24px", background: "#FFFFFF" }}>
          <h2 style={{ textAlign: "center", marginBottom: 32 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {[
              "What is the 14-day free trial?",
              "Do I need a credit card to start?",
              "What happens after my trial ends?",
              "Can I switch between plans?",
              "What is the Emergency One-Time option?",
              "Is ComplianceWorxs compliant with 21 CFR Part 11?"
            ].map((q, i) => (
              <div
                key={i}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid #EAECF0"
                }}
              >
                {q}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h2 style={{ marginBottom: 12 }}>
            Ready to Make Your Compliance Defensible?
          </h2>
          <p style={{ opacity: 0.9, marginBottom: 32 }}>
            Start your 14-day free trial today. No credit card required.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button
              onClick={() => navigate("/assessment")}
              style={PrimaryBtn}
            >
              Start Free Assessment →
            </button>
            <button
              onClick={() => navigate("/assessment")}
              style={SecondaryBtn}
            >
              Start 14-Day Free Trial →
            </button>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

/* ---------- Components ---------- */

function PlanCard({
  title,
  subtitle,
  price,
  features,
  button,
  onClick,
  highlighted,
  badge
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        padding: 32,
        border: highlighted ? "2px solid #12B76A" : "1px solid #EAECF0",
        boxShadow: highlighted ? "0 20px 40px rgba(18,183,106,0.15)" : "none",
        position: "relative"
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#12B76A",
            color: "#FFFFFF",
            padding: "4px 12px",
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 600
          }}
        >
          {badge}
        </div>
      )}

      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "#475467", fontSize: 14, marginBottom: 16 }}>
        {subtitle}
      </p>
      <div style={{ fontSize: 36, fontWeight: 600, marginBottom: 24 }}>
        {price}
        <span style={{ fontSize: 14, color: "#475467" }}>/month</span>
      </div>

      <button onClick={onClick} style={PrimaryBtn}>
        {button}
      </button>

      <ul style={{ marginTop: 24, paddingLeft: 20 }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: 8, fontSize: 14 }}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Styles ---------- */

const Th = ({ children }) => (
  <th style={{ padding: 16, textAlign: "left", fontSize: 14 }}>
    {children}
  </th>
);

const Td = ({ children }) => (
  <td style={{ padding: 16, fontSize: 14 }}>{children}</td>
);

const PrimaryBtn = {
  background: "#12B76A",
  color: "#FFFFFF",
  border: "none",
  padding: "14px 24px",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer"
};

const SecondaryBtn = {
  background: "#FDB022",
  color: "#101828",
  border: "none",
  padding: "14px 24px",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer"
};
