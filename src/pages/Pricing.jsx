import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./App";

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main style={{ background: "#F9FAFB", color: "#101828" }}>
        {/* HERO - Updated copy & padding */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: 600, marginBottom: 12 }}>
            Get Full Compliance Intelligence
          </h1>
          <p style={{ fontSize: "16px", opacity: 0.9 }}>
            Enterprise-grade compliance for complex regulatory environments.
            <br />
            Turn compliance gaps into defensible proof
          </p>
        </section>

        {/* PLANS SECTION */}
        <section style={{ padding: "72px 24px" }}>
          {/* MONTHLY / ANNUAL TOGGLE (Visual Only) */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontWeight: 600, color: "#101828" }}>Monthly</span>
            <div style={{ 
              width: 44, 
              height: 24, 
              background: "#EAECF0", 
              borderRadius: 12, 
              position: "relative",
              cursor: "pointer"
            }}>
              <div style={{ 
                width: 18, 
                height: 18, 
                background: "#FFFFFF", 
                borderRadius: "50%", 
                position: "absolute", 
                top: 3, 
                left: 3,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }} />
            </div>
            <span style={{ color: "#475467" }}>Annual</span>
            <span style={{ 
              background: "#ECFDF3", 
              color: "#027A48", 
              padding: "2px 8px", 
              borderRadius: 16, 
              fontSize: 12, 
              fontWeight: 600 
            }}>
              Save 20%
            </span>
          </div>

          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              alignItems: "start"
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

            {/* PROFESSIONAL - MOST POPULAR */}
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

            {/* ENTERPRISE */}
            <PlanCard
              title="Enterprise Authorization"
              price="$899"
              subtitle="Organization-wide governance for inspection-grade decisions"
              button="Request Enterprise Authorization"
              buttonStyle={{ background: "#101828" }}
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

        {/* COMPARE TABLE - Updated styling */}
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
                <tr style={{ background: "#F9FAFB" }}>
                  <Th>Feature</Th>
                  <Th style={{ textAlign: "center" }}>Standard</Th>
                  <Th style={{ textAlign: "center" }}>Professional</Th>
                  <Th style={{ textAlign: "center" }}>Enterprise</Th>
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
                    <Td style={{ textAlign: "center" }}>{s ? "✓" : "×"}</Td>
                    <Td style={{ textAlign: "center" }}>{p ? "✓" : "×"}</Td>
                    <Td style={{ textAlign: "center" }}>{e ? "✓" : "×"}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TRUST STRIP & FINAL CTA */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          {/* Trust Strip */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "40px", 
            flexWrap: "wrap", 
            marginBottom: "64px",
            opacity: 0.8,
            fontSize: "14px",
            fontWeight: 500,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "40px"
          }}>
            <span>21 CFR Part 11 Ready</span>
            <span>GAMP 5 Validated</span>
            <span>SOC 2 Compliant</span>
            <span>99.9% Uptime</span>
          </div>

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
  badge,
  buttonStyle
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 12,
        padding: 32,
        border: highlighted ? "3px solid #12B76A" : "1px solid #D0D5DD",
        boxShadow: highlighted ? "0 24px 48px -12px rgba(16, 24, 40, 0.18)" : "0 4px 6px -2px rgba(16, 24, 40, 0.03)",
        position: "relative",
        zIndex: highlighted ? 2 : 1
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#12B76A",
            color: "#FFFFFF",
            padding: "4px 16px",
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.5px"
          }}
        >
          {badge}
        </div>
      )}

      <h3 style={{ marginBottom: 8, fontSize: "20px" }}>{title}</h3>
      <p style={{ color: "#475467", fontSize: 14, marginBottom: 24, lineHeight: "1.5", minHeight: "42px" }}>
        {subtitle}
      </p>
      <div style={{ fontSize: 36, fontWeight: 600, marginBottom: 24 }}>
        {price}
        <span style={{ fontSize: 14, color: "#475467", fontWeight: 400 }}>/month</span>
      </div>

      <button onClick={onClick} style={{ ...PrimaryBtn, ...buttonStyle, width: "100%" }}>
        {button}
      </button>

      <ul style={{ marginTop: 32, paddingLeft: 0, listStyle: "none" }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: 12, fontSize: 14, display: "flex", gap: 8 }}>
            <span style={{ color: "#12B76A" }}>✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Styles ---------- */

const Th = ({ children, style }) => (
  <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 14, fontWeight: 600, color: "#475467", ...style }}>
    {children}
  </th>
);

const Td = ({ children, style }) => (
  <td style={{ padding: "12px 16px", fontSize: 14, color: "#475467", ...style }}>{children}</td>
);

const PrimaryBtn = {
  background: "#12B76A",
  color: "#FFFFFF",
  border: "none",
  padding: "12px 20px",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s"
};

const SecondaryBtn = {
  background: "#FDB022",
  color: "#101828",
  border: "none",
  padding: "12px 20px",
  borderRadius: 8,
  fontWeight: 600,
  cursor: "pointer"
};
