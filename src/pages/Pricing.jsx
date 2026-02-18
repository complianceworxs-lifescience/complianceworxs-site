import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PRICE_IDS = {
  standard:     { monthly: "price_1T2ChRBcdOgm3yGBrDlQ3aae", annual: "price_1T2CqLBcdOgm3yGBgkzh3DIj" },
  professional: { monthly: "price_1So0zJBcdOgm3yGBwEAnkXZc", annual: "price_1T2CvKBcdOgm3yGBErHxH3LD" },
  enterprise:   { monthly: "price_1T2CjhBcdOgm3yGB8mMML2ou", annual: "price_1T2CzPBcdOgm3yGBwXpAnnNr" },
};

const C = {
  navy:     "#0B1F2A",
  navyDeep: "#06151C",
  teal:     "#1E8E8A",
  green:    "#12B76A",
  gold:     "#F2B233",
  dark:     "#101828",
  mid:      "#475467",
  border:   "#EAECF0",
  bg:       "#F9FAFB",
  white:    "#FFFFFF",
};

const TABLE_ROWS = [
  ["Decision Defensibility Assessment",    true,  true,  true ],
  ["Basic compliance reporting",           true,  true,  true ],
  ["Assessment history access",            true,  true,  true ],
  ["Decision lineage & evidence index",    false, true,  true ],
  ["Authorization-gated proof",            false, true,  true ],
  ["Inspection-ready artifacts",           false, true,  true ],
  ["Real-time gap tracking",               false, true,  true ],
  ["Regulatory change alerts",             false, true,  true ],
  ["Monthly defensibility checks",         false, true,  true ],
  ["Multi-decision governance",            false, false, true ],
  ["Organization oversight",               false, false, true ],
  ["Priority handling",                    false, false, true ],
  ["Custom framework support",             false, false, true ],
  ["Dedicated account manager",            false, false, true ],
  ["Email support",                        true,  true,  true ],
  ["Priority support",                     false, true,  true ],
];

const FAQS = [
  { q: "What is the 14-day free trial?", a: "You get full access to Professional Authorization features for 14 days at no cost." },
  { q: "Do I need a credit card to start the trial?", a: "No. You can start your trial without entering any payment information." },
  { q: "What happens after my trial ends?", a: "Your account reverts to read-only access unless you choose a plan." },
  { q: "Can I switch between plans?", a: "Yes. You can upgrade or downgrade at any time with prorated credits." },
  { q: "What is the Emergency One-Time option?", a: "A single-use package for immediate inspection-ready documentation." },
  { q: "Is ComplianceWorxs compliant with 21 CFR Part 11?", a: "Yes. The platform satisfies audit-trail and data-integrity requirements." },
];

export default function Pricing() {
  const navigate = useNavigate();
  const [annual, setAnnual] = useState(false);

  const prices = {
    standard:     annual ? "$239" : "$299",
    professional: annual ? "$399" : "$499",
    enterprise:   annual ? "$719" : "$899",
  };

  const startCheckout = async (plan) => {
    const priceId = PRICE_IDS[plan][annual ? "annual" : "monthly"];
    try {
      const res = await fetch("/api/create-checkout-session", {
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
    <div style={{ background: C.bg, color: C.dark, fontFamily: "'Inter', sans-serif" }}>
      
      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(180deg, ${C.navy} 0%, ${C.navyDeep} 100%)`,
        padding: "80px 24px",
        textAlign: "center",
        color: C.white,
      }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
          Unlock Advanced Compliance Features
        </h1>
        <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 8 }}>
          Unlock powerful analytics and advanced compliance tools today.
        </p>
        <p style={{ fontSize: 16, fontWeight: 600, color: C.green, marginBottom: 40 }}>
          Turn compliance gaps into defensible proof
        </p>

        {/* Toggle */}
        <div style={{
          display: "inline-flex",
          background: "rgba(255,255,255,0.1)",
          padding: 4,
          borderRadius: 8,
          alignItems: "center"
        }}>
          <button onClick={() => setAnnual(false)} style={{
            padding: "8px 20px", border: "none", borderRadius: 6, cursor: "pointer",
            background: !annual ? C.white : "transparent", color: !annual ? C.dark : C.white, fontWeight: 600
          }}>Monthly</button>
          <button onClick={() => setAnnual(true)} style={{
            padding: "8px 20px", border: "none", borderRadius: 6, cursor: "pointer",
            background: annual ? C.white : "transparent", color: annual ? C.dark : C.white, fontWeight: 600
          }}>Annual</button>
          <span style={{ marginLeft: 12, marginRight: 8, color: "#C6F6D5", fontSize: 12, fontWeight: 700 }}>Save 20%</span>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section style={{ maxWidth: 1200, margin: "-40px auto 80px", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <Card 
          title="Standard Authorization" 
          price={prices.standard} 
          subtitle="Access compliance assessment and basic authorization."
          features={["Assessment results", "Basic reporting", "History access", "Email support"]}
          cta="Start with Standard"
          onCta={() => startCheckout("standard")}
        />
        <Card 
          highlighted 
          badge="RECOMMENDED" 
          title="Professional Authorization" 
          price={prices.professional} 
          subtitle="Turn compliance gaps into defensible, inspection-ready proof."
          features={["All Standard capabilities", "Decision lineage", "Authorization-gated proof", "Inspection-ready artifacts", "Gap tracking", "Change alerts"]}
          cta="Activate Professional"
          onCta={() => startCheckout("professional")}
        />
        <Card 
          badge="BEST VALUE" 
          badgeBg={C.teal}
          title="Enterprise Authorization" 
          price={prices.enterprise} 
          subtitle="Governance for team accountability across multiple decisions."
          features={["All Professional capabilities", "Multi-decision governance", "Org oversight", "Custom framework support", "Dedicated manager"]}
          cta="Request Enterprise"
          onCta={() => startCheckout("enterprise")}
          darkBtn
        />
      </section>

      {/* COMPARE TABLE */}
      <section style={{ maxWidth: 1000, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Compare Plans</h2>
        <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.border}`, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: `1px solid ${C.border}` }}>
                <th style={{ padding: 16 }}>Feature</th>
                <th style={{ padding: 16, textAlign: "center" }}>Standard</th>
                <th style={{ padding: 16, textAlign: "center", color: C.teal }}>Professional</th>
                <th style={{ padding: 16, textAlign: "center", color: C.gold }}>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.white : C.bg }}>
                  <td style={{ padding: 16, fontSize: 14 }}>{row[0]}</td>
                  <td style={{ textAlign: "center" }}>{row[1] ? "✓" : "×"}</td>
                  <td style={{ textAlign: "center", color: C.teal }}>{row[2] ? "✓" : "×"}</td>
                  <td style={{ textAlign: "center", color: C.gold }}>{row[3] ? "✓" : "×"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ maxWidth: 800, margin: "0 auto 100px", padding: "0 24px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Frequently Asked Questions</h2>
        {FAQS.map((f, i) => (
          <details key={i} style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 0", cursor: "pointer" }}>
            <summary style={{ fontWeight: 600, listStyle: "none", display: "flex", justifyContent: "space-between" }}>
              {f.q} <span>+</span>
            </summary>
            <p style={{ marginTop: 12, color: C.mid, fontSize: 14 }}>{f.a}</p>
          </details>
        ))}
      </section>

      {/* FOOTER CTA */}
      <section style={{ padding: "80px 24px", background: C.white, textAlign: "center" }}>
        <div style={{ background: C.navy, borderRadius: 24, padding: "60px", color: C.white, maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, marginBottom: 16 }}>Ready to Make Your Compliance Defensible?</h2>
          <p style={{ marginBottom: 32, opacity: 0.8 }}>Start your 14-day free trial today. No credit card required.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button onClick={() => navigate("/ddr")} style={{ padding: "12px 24px", borderRadius: 8, border: "2px solid white", background: "transparent", color: "white", cursor: "pointer" }}>Start Free Assessment</button>
            <button onClick={() => navigate("/ddr")} style={{ padding: "12px 24px", borderRadius: 8, border: "none", background: C.gold, color: C.dark, fontWeight: 700, cursor: "pointer" }}>Start 14-Day Free Trial</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ highlighted, badge, badgeBg, title, subtitle, price, features, cta, onCta, darkBtn }) {
  return (
    <div style={{
      background: C.white, padding: "40px 32px", borderRadius: 16, position: "relative",
      border: highlighted ? `2px solid ${C.teal}` : `1px solid ${C.border}`,
      boxShadow: highlighted ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "none",
      display: "flex", flexDirection: "column"
    }}>
      {badge && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: badgeBg || C.green, color: "white", padding: "4px 12px", borderRadius: 20, fontSize: 10, fontWeight: 800
        }}>{badge}</div>
      )}
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 13, color: C.mid, marginBottom: 24 }}>{subtitle}</p>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 40, fontWeight: 800 }}>{price}</span>
        <span style={{ color: C.mid }}>/month</span>
      </div>
      <button onClick={onCta} style={{
        padding: "12px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700,
        background: darkBtn ? C.navy : C.teal, color: C.white, marginBottom: 24
      }}>{cta}</button>
      <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 13 }}>
            <span style={{ color: C.green }}>✓</span> {f}
          </div>
        ))}
      </div>
    </div>
  );
}
