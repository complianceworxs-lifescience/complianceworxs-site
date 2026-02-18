import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Pricing Page — matches screenshot 2 design:
 * - Dark hero, centered headline
 * - 3-column card layout, Professional elevated in center with teal border
 * - FAQ accordion
 * - Icon trust strip
 * - Dark CTA section
 */

// ── Stripe price IDs ──────────────────────────────────────────────────────────
const PRICE_IDS = {
  standard:     { monthly: "price_1T2ChRBcdOgm3yGBrDlQ3aae", annual: "price_1T2CqLBcdOgm3yGBgkzh3DIj" },
  professional: { monthly: "price_1So0zJBcdOgm3yGBwEAnkXZc", annual: "price_1T2CvKBcdOgm3yGBErHxH3LD" },
  enterprise:   { monthly: "price_1T2CjhBcdOgm3yGB8mMML2ou", annual: "price_1T2CzPBcdOgm3yGBwXpAnnNr" },
};

// ── Colour tokens ─────────────────────────────────────────────────────────────
const C = {
  navy:        "#0B3A4A",
  navyDeep:    "#062B36",
  teal:        "#1E8E8A",
  tealLight:   "#12B76A",
  gold:        "#F2B233",
  dark:        "#101828",
  mid:         "#475467",
  border:      "#EAECF0",
  bg:          "#F9FAFB",
  white:       "#FFFFFF",
};

// ── Comparison table rows ─────────────────────────────────────────────────────
const TABLE_ROWS = [
  ["Decision Defensibility Assessment", true,  true,  true ],
  ["Basic compliance reporting",        true,  true,  true ],
  ["Assessment history access",         true,  true,  true ],
  ["Decision lineage & evidence index", false, true,  true ],
  ["Authorization-gated proof",         false, true,  true ],
  ["Inspection-ready artifacts",        false, true,  true ],
  ["Real-time gap tracking",            false, true,  true ],
  ["Regulatory change alerts",          false, true,  true ],
  ["Monthly defensibility checks",      false, true,  true ],
  ["Multi-decision governance",         false, false, true ],
  ["Organization oversight",            false, false, true ],
  ["Priority handling",                 false, false, true ],
  ["Custom framework support",          false, false, true ],
  ["Dedicated account manager",         false, false, true ],
  ["Email support",                     true,  true,  true ],
  ["Priority support",                  false, true,  true ],
];

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  { q: "What is the 14-day free trial?",             a: "You get full access to Professional Authorization features for 14 days at no cost — no credit card required. After the trial you can choose a plan or let access expire." },
  { q: "Do I need a credit card to start the trial?",a: "No. You can start your 14-day trial without entering any payment information." },
  { q: "What happens after my trial ends?",          a: "You'll receive an email reminder before your trial expires. If you take no action your account reverts to read-only access of completed assessments." },
  { q: "Can I switch between plans?",                a: "Yes. You can upgrade or downgrade at any time. Prorated credits are applied automatically." },
  { q: "What is the Emergency One-Time option?",     a: "A single-use authorization package for organisations that need immediate inspection-ready documentation without a recurring subscription." },
  { q: "Is ComplianceWorxs compliant with 21 CFR Part 11?", a: "Yes. The platform is built to satisfy 21 CFR Part 11 audit-trail, electronic-signature, and data-integrity requirements." },
];

// ── Trust strip items ─────────────────────────────────────────────────────────
const TRUST = [
  { icon: "🛡", label: "21 CFR Part 11 Ready",  sub: "Full FDA compliance support"       },
  { icon: "✅", label: "GAMP 5 Validated",       sub: "Computer system validation"        },
  { icon: "🔒", label: "SOC 2 Compliant",        sub: "Enterprise security"               },
  { icon: "⚡", label: "99.9% Uptime",           sub: "Reliable infrastructure"           },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function Pricing() {
  const navigate   = useNavigate();
  const [annual, setAnnual] = useState(false);

  const prices = {
    standard:     annual ? "$239" : "$299",
    professional: annual ? "$399" : "$499",
    enterprise:   annual ? "$719" : "$899",
  };

  const startCheckout = async (plan) => {
    const priceId = PRICE_IDS[plan][annual ? "annual" : "monthly"];
    try {
      const res  = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div style={{ background: C.bg, color: C.dark, fontFamily: "'DM Sans', 'Segoe UI', sans-serif", lineHeight: 1.6 }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(180deg, ${C.navy} 0%, ${C.navyDeep} 100%)`,
        padding: "80px 24px 72px",
        textAlign: "center",
        color: C.white,
      }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.5px" }}>
          Unlock Advanced Compliance Features
        </h1>
        <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 6 }}>
          Unlock powerful analytics and advanced compliance tools today.
        </p>
        <p style={{ fontSize: 18, fontWeight: 600, color: C.tealLight, marginBottom: 40 }}>
          Turn compliance gaps into defensible proof
        </p>

        {/* Toggle */}
        <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: 4 }}>
          <button onClick={() => setAnnual(false)} style={toggleBtnStyle(!annual)}>Monthly</button>
          <button onClick={() => setAnnual(true)}  style={toggleBtnStyle(annual)}>Annual</button>
          <span style={{
            marginLeft: 10, marginRight: 6,
            background: "#ECFDF3", color: "#027A48",
            padding: "4px 12px", borderRadius: 16, fontSize: 12, fontWeight: 700,
          }}>
            Save 20%
          </span>
        </div>
      </section>

      {/* ── PLAN CARDS ───────────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 72px", marginTop: -1 }}>
        <div style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
          alignItems: "stretch",
        }}>

          {/* Standard */}
          <PlanCard
            title="Standard Authorization"
            subtitle="Access to compliance assessment and basic authorization."
            price={prices.standard}
            period={annual ? "/yr" : "/month"}
            cta="Start with Standard"
            onCta={() => startCheckout("standard")}
            ctaColor={C.teal}
            features={[
              "Decision Defensibility Assessment results",
              "Basic compliance reporting",
              "Assessment history access",
              "Email support",
            ]}
            note="No credit card required for trial"
          />

          {/* Professional — highlighted */}
          <PlanCard
            highlighted
            badge="RECOMMENDED"
            title="Professional Authorization"
            subtitle="Turn compliance gaps into defensible, inspection-ready proof."
            price={prices.professional}
            period={annual ? "/yr" : "/month"}
            cta="Activate Professional Authorization"
            onCta={() => startCheckout("professional")}
            ctaColor={C.teal}
            features={[
              "All Standard capabilities",
              "Decision lineage and evidence index",
              "Authorization-gated defensible proof",
              "Inspection-ready artifacts",
              "Real-time compliance gap tracking",
              "Regulatory change alerts",
              "Monthly defensibility checks",
              "Priority email support",
            ]}
            note="No credit card required for trial"
          />

          {/* Enterprise */}
          <PlanCard
            badge="BEST VALUE"
            badgeColor={C.gold}
            badgeText={C.dark}
            title="Enterprise Authorization"
            subtitle="Organisational governance for team accountability across multiple decisions."
            price={prices.enterprise}
            period={annual ? "/yr" : "/month"}
            cta="Request Enterprise Authorization"
            onCta={() => startCheckout("enterprise")}
            ctaColor={C.dark}
            features={[
              "All Professional capabilities",
              "Multi-decision governance",
              "Organization level authorization oversight",
              "Priority handling for complex decisions",
              "Custom framework support",
              "Dedicated account manager",
              "Priority support",
            ]}
          />

        </div>
      </section>

      {/* ── COMPARE TABLE ────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px 80px", background: C.white }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 48 }}>Compare Plans</h2>
        <div style={{ maxWidth: 1000, margin: "0 auto", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                <th style={thStyle()}>Feature</th>
                <th style={thStyle()}>Standard</th>
                <th style={thStyle(C.teal)}>Professional</th>
                <th style={thStyle(C.gold)}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(([label, s, p, e], i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.white : C.bg }}>
                  <td style={{ padding: "14px 16px", color: C.dark, fontWeight: 500 }}>{label}</td>
                  <CellCheck val={s} />
                  <CellCheck val={p} color={C.teal} />
                  <CellCheck val={e} color={C.gold} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: C.bg }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 48 }}>
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {FAQS.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section style={{ padding: "64px 24px", background: C.white }}>
        <div style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}>
          {TRUST.map((t, i) => (
            <div key={i}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.dark }}>{t.label}</div>
              <div style={{ fontSize: 13, color: C.mid, marginTop: 4 }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: C.bg }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          background: `linear-gradient(180deg, ${C.navy} 0%, ${C.navyDeep} 100%)`,
          borderRadius: 24,
          padding: "72px 40px",
          textAlign: "center",
          color: C.white,
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
            Ready to Make Your Compliance Defensible?
          </h2>
          <p style={{ fontSize: 16, opacity: 0.85, marginBottom: 40 }}>
            Start your 14-day free trial today. No credit card required.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/ddr")}
              style={{
                padding: "14px 28px", borderRadius: 8, border: `2px solid ${C.white}`,
                background: "transparent", color: C.white, fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}
            >
              Start Free Assessment →
            </button>
            <button
              onClick={() => navigate("/ddr")}
              style={{
                padding: "14px 28px", borderRadius: 8, border: "none",
                background: C.gold, color: C.dark, fontWeight: 700, fontSize: 16, cursor: "pointer",
              }}
            >
              Start 14-Day Free Trial →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function PlanCard({ title, subtitle, price, period, cta, onCta, ctaColor, features, note, highlighted, badge, badgeColor, badgeText }) {
  const bColor = badgeColor || (highlighted ? "#12B76A" : "#E8F8F4");
  const bText  = badgeText  || (highlighted ? "#FFF"    : C.teal);

  return (
    <div style={{
      background: C.white,
      border: highlighted ? `2px solid ${C.teal}` : `1px solid ${C.border}`,
      borderRadius: 16,
      padding: "36px 28px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxShadow: highlighted ? "0 20px 48px rgba(11,58,74,0.18)" : "0 4px 12px rgba(16,24,40,0.05)",
    }}>
      {badge && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: bColor, color: bText,
          padding: "4px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
        }}>
          {badge}
        </div>
      )}

      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: C.dark }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.mid, marginBottom: 24, minHeight: 44 }}>{subtitle}</p>

      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 48, fontWeight: 800, color: C.dark }}>{price}</span>
        <span style={{ fontSize: 15, color: C.mid }}> {period}</span>
      </div>

      <button
        onClick={onCta}
        style={{
          width: "100%", padding: "13px 0", borderRadius: 8, border: "none",
          background: ctaColor, color: "#FFF", fontWeight: 700, fontSize: 15,
          cursor: "pointer", marginBottom: 8,
        }}
      >
        {cta}
      </button>

      {note && <p style={{ fontSize: 12, color: C.mid, textAlign: "center", marginBottom: 24 }}>{note}</p>}

      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, marginTop: 8 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: C.mid, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          INCLUDES:
        </p>
        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: "flex", gap: 10, marginBottom: 11, fontSize: 14, color: C.dark }}>
              <span style={{ color: C.tealLight, fontWeight: 700, flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: `1px solid ${C.border}`,
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 0", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", fontSize: 16, fontWeight: 600, color: C.dark,
        }}
      >
        {q}
        <span style={{
          fontSize: 22, color: C.mid, transition: "transform 0.2s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          flexShrink: 0, marginLeft: 16,
        }}>
          +
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: C.mid, paddingBottom: 20, margin: 0, lineHeight: 1.7 }}>
          {a}
        </p>
      )}
    </div>
  );
}

function CellCheck({ val, color }) {
  return (
    <td style={{ padding: "14px 16px", textAlign: "center" }}>
      {val
        ? <span style={{ color: color || C.mid, fontSize: 18, fontWeight: 700 }}>✓</span>
        : <span style={{ color: "#D0D5DD", fontSize: 18 }}>×</span>
      }
    </td>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Style helpers
// ─────────────────────────────────────────────────────────────────────────────

const toggleBtnStyle = (active) => ({
  padding: "9px 22px",
  border: "none",
  borderRadius: 7,
  background: active ? C.white : "transparent",
  color: active ? C.dark : "rgba(255,255,255,0.75)",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: 15,
  transition: "all 0.2s",
});

const thStyle = (accentColor) => ({
  padding: "14px 16px",
  textAlign: accentColor ? "center" : "left",
  borderBottom: `2px solid ${C.border}`,
  fontWeight: 700,
  fontSize: 14,
  color: accentColor || C.mid,
  letterSpacing: "0.02em",
});

