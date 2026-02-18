import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "./App";

/**
 * Pricing Page Component
 * Implements 3-column enterprise hierarchy and specific visual copy.
 */
function Pricing() {
  const navigate = useNavigate();
  // State for visual toggle (Functionality can be added in next step)
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <MainLayout>
      <main style={{ background: "#F9FAFB", color: "#101828", fontFamily: "Inter, sans-serif" }}>
        
        {/* 1. HERO SECTION - Updated Copy & Spacing */}
        <section
          style={{
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)",
            padding: "72px 24px",
            textAlign: "center",
            color: "#FFFFFF"
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Get Full Compliance Intelligence
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "700px", margin: "0 auto 8px" }}>
            Enterprise-grade compliance for complex regulatory environments.
          </p>
          <p style={{ fontSize: "18px", fontWeight: 500, color: "#12B76A" }}>
            Turn compliance gaps into defensible proof
          </p>
        </section>

        {/* 2. MONTHLY/ANNUAL TOGGLE - Visual Only */}
        <section style={{ padding: "48px 24px 0", textAlign: "center" }}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            background: "#FFFFFF", 
            padding: "4px", 
            borderRadius: "8px", 
            border: "1px solid #EAECF0",
            boxShadow: "0 1px 2px rgba(16,24,40,0.05)" 
          }}>
            <button 
              onClick={() => setIsAnnual(false)}
              style={{ 
                padding: "8px 16px", 
                borderRadius: "6px", 
                background: !isAnnual ? "#F2F4F7" : "transparent", 
                border: "none", 
                fontWeight: 600, 
                fontSize: "14px",
                cursor: "pointer",
                color: !isAnnual ? "#101828" : "#475467"
              }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              style={{ 
                padding: "8px 16px", 
                borderRadius: "6px", 
                background: isAnnual ? "#F2F4F7" : "transparent", 
                border: "none", 
                fontWeight: 600, 
                fontSize: "14px",
                cursor: "pointer",
                color: isAnnual ? "#101828" : "#475467"
              }}
            >
              Annual
            </button>
            <span style={{ 
              marginLeft: "8px", 
              marginRight: "8px",
              background: "#ECFDF3", 
              color: "#027A48", 
              padding: "2px 8px", 
              borderRadius: "16px", 
              fontSize: "12px", 
              fontWeight: 600 
            }}>
              Save 20%
            </span>
          </div>
        </section>

        {/* 3. PLAN CARDS - 3-Column Visual Hierarchy */}
        <section style={{ padding: "48px 24px 72px" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "center"
          }}>
            
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
              title="Enterprise Authorization"
              price="$899"
              subtitle="Organization-wide governance for inspection-grade decisions"
              button="Request Enterprise Authorization"
              isEnterprise
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

        {/* 5. COMPARE TABLE - Visual Cleanup */}
        <section style={{ padding: "48px 24px", background: "#FFFFFF" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}>Compare Plans</h2>
          <div style={{ maxWidth: "1000px", margin: "0 auto", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F9FAFB", borderBottom: "1px solid #EAECF0" }}>
                  <Th>Feature</Th>
                  <Th align="center">Standard</Th>
                  <Th align="center">Professional</Th>
                  <Th align="center">Enterprise</Th>
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

        {/* 6. TRUST STRIP & FINAL CTA */}
        <section style={{ padding: "80px 24px", textAlign: "center", background: "#F9FAFB" }}>
          {/* Trust Strip */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "48px", 
            marginBottom: "64px", 
            color: "#475467", 
            fontWeight: 600,
            fontSize: "14px" 
          }}>
            <span>21 CFR Part 11 Ready</span>
            <span>GAMP 5 Validated</span>
            <span>SOC 2 Compliant</span>
            <span>99.9% Uptime</span>
          </div>

          <div style={{ 
            background: "linear-gradient(180deg, #0B3A4A 0%, #062B36 100%)", 
            padding: "64px 32px", 
            borderRadius: "24px", 
            maxWidth: "1100px", 
            margin: "0 auto", 
            color: "#FFFFFF" 
          }}>
            <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Ready to Make Your Compliance Defensible?</h2>
            <p style={{ opacity: 0.8, marginBottom: "32px" }}>Start your 14-day free trial today. No credit card required.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
              <button style={{ ...PrimaryBtn, background: "#12B76A" }} onClick={() => navigate("/assessment")}>Start Free Assessment →</button>
              <button style={{ ...SecondaryBtn }} onClick={() => navigate("/assessment")}>Start 14-Day Free Trial →</button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

/* ---------- UI Components ---------- */

function PlanCard({ title, subtitle, price, features, button, onClick, highlighted, badge, isEnterprise }) {
  return (
    <div style={{
      background: "#FFFFFF",
      padding: highlighted ? "48px 32px" : "32px",
      borderRadius: "16px",
      border: highlighted ? "3px solid #12B76A" : "1px solid #EAECF0",
      boxShadow: highlighted ? "0 20px 48px rgba(16,24,40,0.2)" : "0 4px 12px rgba(16,24,40,0.05)",
      position: "relative",
      zIndex: highlighted ? 2 : 1,
      transform: highlighted ? "scale(1.05)" : "scale(1)",
      transition: "transform 0.3s ease"
    }}>
      {badge && (
        <div style={{
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#12B76A",
          color: "#FFFFFF",
          padding: "4px 12px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: 700
        }}>
          {badge}
        </div>
      )}
      <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#475467", fontSize: "14px", marginBottom: "24px", minHeight: "40px" }}>
        {subtitle}
      </p>
      <div style={{ fontSize: "48px", fontWeight: 700, marginBottom: "24px" }}>
        {price}<span style={{ fontSize: "16px", color: "#475467", fontWeight: 400 }}>/mo</span>
      </div>
      <button onClick={onClick} style={{
        ...PrimaryBtn,
        width: "100%",
        background: isEnterprise ? "#101828" : "#12B76A",
        marginBottom: "32px"
      }}>
        {button}
      </button>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
        {features.map((f, i) => (
          <li key={i} style={{ fontSize: "14px", marginBottom: "12px", display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ color: "#12B76A", fontWeight: "bold" }}>✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Th = ({ children, align = "left" }) => (
  <th style={{ padding: "12px 16px", textAlign: align, fontSize: "14px", color: "#475467", fontWeight: 600 }}>{children}</th>
);

const Td = ({ children, align = "left" }) => (
  <td style={{ padding: "12px 16px", textAlign: align, fontSize: "14px", color: "#475467" }}>{children}</td>
);

const PrimaryBtn = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer"
};

const SecondaryBtn = {
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  background: "#FDB022",
  color: "#101828",
  fontWeight: 600,
  fontSize: "16px",
  cursor: "pointer"
};

export default Pricing;
