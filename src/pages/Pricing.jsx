import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../App";

/**
 * Pricing Page
 * Enterprise 3-column hierarchy
 * Visual-only annual toggle
 */
function Pricing() {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <MainLayout>
      <main style={{ background: "#F9FAFB", color: "#101828", fontFamily: "Inter, sans-serif" }}>
        
        {/* HERO */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: 16 }}>
            Get Full Compliance Intelligence
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Enterprise-grade compliance for complex regulatory environments.
          </p>
          <p style={{ fontSize: "18px", fontWeight: 600, color: "#12B76A" }}>
            Turn compliance gaps into defensible proof
          </p>
        </section>

        {/* BILLING TOGGLE (VISUAL ONLY) */}
        <section style={{ padding: "48px 24px 0", textAlign: "center" }}>
          <div style={toggleWrap}>
            <button onClick={() => setIsAnnual(false)} style={toggleBtn(!isAnnual)}>
              Monthly
            </button>
            <button onClick={() => setIsAnnual(true)} style={toggleBtn(isAnnual)}>
              Annual
            </button>
            <span style={saveBadge}>Save 20%</span>
          </div>
        </section>

        {/* PLANS */}
        <section style={{ padding: "48px 24px 72px" }}>
          <div style={planGrid}>
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

            <PlanCard
              highlighted
              badge="MOST POPULAR"
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

            <PlanCard
              isEnterprise
              title="Enterprise Authorization"
              price="$899"
              subtitle="Organization-wide governance for inspection-grade decisions"
              button="Request Enterprise Authorization"
              onClick={() => navigate("/assessment")}
              features={[
                "All Professional capabilities",
                "Multi-decision governance",
                "Organization authorization oversight",
                "Priority handling for complex decisions",
                "Custom framework support",
                "Dedicated account manager",
                "Priority support"
              ]}
            />
          </div>
        </section>

        {/* COMPARE TABLE */}
        <section style={{ padding: "48px 24px", background: "#FFFFFF" }}>
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>Compare Plans</h2>

          <div style={{ maxWidth: 1000, margin: "0 auto", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F9FAFB" }}>
                  <Th>Feature</Th>
                  <Th align="center">Standard</Th>
                  <Th align="center">Professional</Th>
                  <Th align="center">Enterprise</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, s, p, e], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #EAECF0" }}>
                    <Td>{label}</Td>
                    <Td align="center">{s ? "✓" : "×"}</Td>
                    <Td align="center">{p ? "✓" : "×"}</Td>
                    <Td align="center">{e ? "✓" : "×"}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TRUST + CTA */}
        <section style={{ padding: "80px 24px", textAlign: "center" }}>
          <div style={trustStrip}>
            <span>21 CFR Part 11 Ready</span>
            <span>GAMP 5 Validated</span>
            <span>SOC 2 Compliant</span>
            <span>99.9% Uptime</span>
          </div>

          <div style={ctaBox}>
            <h2>Ready to Make Your Compliance Defensible?</h2>
            <p>No credit card required.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
              <button style={primaryBtn} onClick={() => navigate("/assessment")}>
                Start Free Assessment →
              </button>
              <button style={secondaryBtn} onClick={() => navigate("/assessment")}>
                Start 14-Day Free Trial →
              </button>
            </div>
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
  badge,
  isEnterprise
}) {
  return (
    <div style={cardStyle(highlighted)}>
      {badge && <div style={badgeStyle}>{badge}</div>}
      <h3>{title}</h3>
      <p style={{ color: "#475467" }}>{subtitle}</p>
      <div style={{ fontSize: 48, fontWeight: 700 }}>
        {price}
        <span style={{ fontSize: 16, color: "#475467" }}>/mo</span>
      </div>
      <button
        onClick={onClick}
        style={{ ...primaryBtn, background: isEnterprise ? "#101828" : "#12B76A", width: "100%" }}
      >
        {button}
      </button>
      <ul style={{ padding: 0, marginTop: 24, listStyle: "none" }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            ✓ {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Helpers & Styles ---------- */

const rows = [
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
];

const Th = ({ children, align = "left" }) => (
  <th style={{ padding: 12, textAlign: align }}>{children}</th>
);

const Td = ({ children, align = "left" }) => (
  <td style={{ padding: 12, textAlign: align }}>{children}</td>
);

const planGrid = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24
};

const cardStyle = highlighted => ({
  background: "#FFFFFF",
  padding: highlighted ? 48 : 32,
  borderRadius: 16,
  border: highlighted ? "3px solid #12B76A" : "1px solid #EAECF0",
  boxShadow: highlighted
    ? "0 20px 48px rgba(16,24,40,0.2)"
    : "0 4px 12px rgba(16,24,40,0.05)",
  transform: highlighted ? "scale(1.05)" : "none"
});

const badgeStyle = {
  position: "absolute",
  top: -12,
  left: "50%",
  transform: "translateX(-50%)",
  background: "#12B76A",
  color: "#FFF",
  padding: "4px 12px",
  borderRadius: 12,
  fontSize: 12,
  fontWeight: 700
};

const toggleWrap = {
  display: "inline-flex",
  background: "#FFF",
  padding: 4,
  borderRadius: 8,
  border: "1px solid #EAECF0"
};

const toggleBtn = active => ({
  padding: "8px 16px",
  border: "none",
  background: active ? "#F2F4F7" : "transparent",
  fontWeight: 600,
  cursor: "pointer"
});

const saveBadge = {
  marginLeft: 8,
  background: "#ECFDF3",
  color: "#027A48",
  padding: "2px 8px",
  borderRadius: 12,
  fontSize: 12,
  fontWeight: 600
};

const trustStrip = {
  display: "flex",
  justifyContent: "center",
  gap: 40,
  marginBottom: 48,
  fontWeight: 600
};

const ctaBox = {
  background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
  padding: 64,
  borderRadius: 24,
  color: "#FFF",
  maxWidth: 1100,
  margin: "0 auto"
};

const primaryBtn = {
  padding: "12px 24px",
  borderRadius: 8,
  border: "none",
  color: "#FFF",
  fontWeight: 600,
  cursor: "pointer",
  background: "#12B76A"
};

const secondaryBtn = {
  ...primaryBtn,
  background: "#FDB022",
  color: "#101828"
};

export default Pricing;
