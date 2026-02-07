import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Pricing data
  const plans = [
    {
      name: "Standard Authorization",
      description: "Essential compliance tools for small teams",
      price: billingCycle === "monthly" ? 299 : 2990,
      period: billingCycle === "monthly" ? "/month" : "/year",
      savings: billingCycle === "yearly" ? "Save $598/year" : null,
      ctaText: "Start with Standard",
      ctaClass: "cta-standard",
      subtitle: "No credit card required for trial",
      features: [
        "Decision Defensibility Assessment results",
        "Basic compliance reporting",
        "Assessment history access",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Professional Authorization",
      description: "Turn compliance gaps into defensible proof",
      price: billingCycle === "monthly" ? 499 : 4990,
      period: billingCycle === "monthly" ? "/month" : "/year",
      savings: billingCycle === "yearly" ? "Save $998/year" : null,
      ctaText: "Activate Professional Authorization",
      ctaClass: "cta-professional",
      subtitle: "Most popular with mid-size teams",
      badge: "BEST VALUE",
      features: [
        "All Standard capabilities",
        "Decision lineage and evidence index",
        "Authorization-gated defensible proof",
        "Inspection-ready artifacts",
        "Real-time compliance gap tracking",
        "Regulatory change alerts",
        "Monthly defensibility checks",
        "Priority email support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise Authorization",
      description: "Organization-wide governance for teams operating under inspection",
      price: billingCycle === "monthly" ? 899 : 8990,
      period: billingCycle === "monthly" ? "/month" : "/year",
      savings: billingCycle === "yearly" ? "Save $1,798/year" : null,
      ctaText: "Request Enterprise Authorization",
      ctaClass: "cta-enterprise",
      subtitle: "Custom deployment and training",
      features: [
        "All Professional capabilities",
        "Multi-decision governance",
        "Organization-level authorization oversight",
        "Priority handling for complex decisions",
        "Custom framework support",
        "Dedicated account manager",
        "Priority support",
      ],
      highlight: false,
    },
  ];

  const comparisonFeatures = [
    { name: "Decision Defensibility Assessment", standard: true, professional: true, enterprise: true },
    { name: "Basic compliance reporting", standard: true, professional: true, enterprise: true },
    { name: "Assessment history access", standard: true, professional: true, enterprise: true },
    { name: "Decision lineage and evidence index", standard: false, professional: true, enterprise: true },
    { name: "Authorization-gated proof", standard: false, professional: true, enterprise: true },
    { name: "Inspection-ready artifacts", standard: false, professional: true, enterprise: true },
    { name: "Real-time gap tracking", standard: false, professional: true, enterprise: true },
    { name: "Regulatory change alerts", standard: false, professional: true, enterprise: true },
    { name: "Monthly defensibility checks", standard: false, professional: true, enterprise: true },
    { name: "Multi-decision governance", standard: false, professional: false, enterprise: true },
    { name: "Organization oversight", standard: false, professional: false, enterprise: true },
    { name: "Priority handling", standard: false, professional: false, enterprise: true },
    { name: "Custom framework support", standard: false, professional: false, enterprise: true },
    { name: "Dedicated account manager", standard: false, professional: false, enterprise: true },
    { name: "Email support", standard: true, professional: true, enterprise: true },
    { name: "Priority support", standard: false, professional: true, enterprise: true },
  ];

  const faqs = [
    {
      question: "What is the 14-day free trial?",
      answer: "Start with any plan risk-free for 14 days. No credit card required. Full access to all features in your chosen tier. Cancel anytime during the trial period with no charges."
    },
    {
      question: "Do I need a credit card to start the trial?",
      answer: "No. We don't require a credit card for the 14-day trial. You'll only need to provide payment information if you decide to continue after the trial ends."
    },
    {
      question: "What happens after my trial ends?",
      answer: "You'll receive email reminders 3 days and 1 day before your trial ends. If you choose to continue, you'll be charged based on your selected plan and billing cycle. If you don't add payment, your account converts to view-only mode and your data is preserved for 30 days."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes. Upgrade or downgrade anytime. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of your next billing cycle."
    },
    {
      question: "What is the Emergency One-Time option?",
      answer: "For organizations facing immediate inspections or audits, we offer expedited onboarding and assessment services. Contact our team for emergency pricing and availability."
    },
    {
      question: "Is ComplianceWorxs compliant with 21 CFR Part 11?",
      answer: "Yes. ComplianceWorxs is designed for life science organizations operating under FDA regulations. We maintain 21 CFR Part 11 compliance including electronic signatures, audit trails, and data integrity controls."
    }
  ];

  const trustBadges = [
    { icon: "✓", title: "21 CFR Part 11 Ready", subtitle: "Full FDA compliance support" },
    { icon: "✓", title: "GxMP 5 Validated", subtitle: "Current best system validated" },
    { icon: "✓", title: "SOC 2 Compliant", subtitle: "Enterprise security" },
    { icon: "✓", title: "99.9% Uptime", subtitle: "Reliable infrastructure" },
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-inner">
          <h1>Start Your Compliance Journey</h1>
          <p className="pricing-lead">
            Start with basic features. Upgrade later for more advanced tools.
          </p>
          <p className="pricing-tagline">
            Turn compliance gaps into defensible proof.
          </p>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={billingCycle === "monthly" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingCycle === "yearly" ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="savings-badge">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        <div className="pricing-cards-inner">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={plan.highlight ? "pricing-card highlight" : "pricing-card"}
            >
              {plan.badge && <div className="card-badge">{plan.badge}</div>}
              
              <div className="card-header">
                <h3>{plan.name}</h3>
                <p className="card-description">{plan.description}</p>
              </div>

              <div className="card-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              {plan.savings && <div className="savings-text">{plan.savings}</div>}

              <button className={plan.ctaClass}>{plan.ctaText}</button>
              
              <p className="card-subtitle">{plan.subtitle}</p>

              <div className="card-features">
                <p className="features-title">INCLUDES:</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="comparison-inner">
          <h2>Compare Plans</h2>
          
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th className="feature-col">Feature</th>
                  <th className="plan-col">Standard</th>
                  <th className="plan-col highlight-col">Professional</th>
                  <th className="plan-col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td className="feature-name">{feature.name}</td>
                    <td className="feature-check">
                      {feature.standard ? <span className="check">✓</span> : <span className="cross">✕</span>}
                    </td>
                    <td className="feature-check highlight-cell">
                      {feature.professional ? <span className="check">✓</span> : <span className="cross">✕</span>}
                    </td>
                    <td className="feature-check">
                      {feature.enterprise ? <span className="check">✓</span> : <span className="cross">✕</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-arrow">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="trust-inner">
          {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <div className="trust-icon">{badge.icon}</div>
              <div className="trust-title">{badge.title}</div>
              <div className="trust-subtitle">{badge.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to Make Your Compliance Defensible?</h2>
          <p>Start your 14-day free trial today. No credit card required.</p>
          <div className="cta-buttons">
            <button className="btn-secondary-cta">Start Free Assessment →</button>
            <button className="btn-primary-cta">Start 14-day Free Trial →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
