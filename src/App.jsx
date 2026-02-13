const MainLayout = () => (
  <div className="app-wrapper">
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span className="dot"></span> COMPLIANCEWORXS AUTHORIZATION ENGINE™
        </div>
        <div className="topbar-right">State: Operational • Proof blocked until authorized</div>
      </div>
    </div>
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand-name">COMPLIANCEWORXS</Link>
        <nav className="nav">
          <Link to="/" className="navlink">Overview</Link>
          <Link to="/pricing" className="navlink">Pricing</Link>
          <Link to="/stream" className="navlink">Intelligence Stream</Link>
          <Link to="/authorization" className="navlink">Authority</Link>
        </nav>
        <div className="header-actions">
           <Link to="/ddr" className="button-amber">Start DDR Assessment</Link>
        </div>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

const Home = () => (
  <div className="home-container">
    {/* Section 1: Hero */}
    <section className="hero-v2">
      <div className="hero-content">
        <h1>Deterministic Decision Review (DDR) for Regulatory Defensibility</h1>
        <p>Every regulatory decision is evaluated, authorized, and logged before proof exists.</p>
        <Link to="/ddr" className="button-amber-large">Start DDR Assessment →</Link>
      </div>
      <div className="hero-image-overlay">
        {/* You can replace this with your actual image URL later */}
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="DDR Interface" />
      </div>
    </section>

    {/* Section 2: How DDR Works */}
    <section className="process-section">
      <h2>How DDR Works</h2>
      <div className="process-grid">
        <div className="process-card">
          <div className="step-num">1</div>
          <h3>Decision Intake</h3>
          <p>Submit a regulatory or system decision for review.</p>
        </div>
        <div className="process-card">
          <div className="step-num">2</div>
          <h3>DDR Evaluation</h3>
          <p>Defensibility thresholds are computed against governance rules.</p>
        </div>
        <div className="process-card">
          <div className="step-num">3</div>
          <h3>Authorization Verdict</h3>
          <p><strong>Authorized</strong> — entitlement issued.<br/><strong>Not authorized</strong> — proof blocked.</p>
        </div>
        <div className="process-card">
          <div className="step-num">4</div>
          <h3>Workflow Enforcement</h3>
          <p>Verdict propagates into downstream systems & audit records.</p>
        </div>
      </div>
    </section>

    {/* Section 3: Mid-Page CTA */}
    <section className="cta-section-v2">
      <div className="cta-content">
        <h2>Start Deterministic Decision Review</h2>
        <p>Free to assess. Proof generation requires authorization.</p>
        <div className="ui-preview-mockup">
           <div className="status-box authorized">Authorized</div>
           <div className="status-box blocked">Blocked</div>
        </div>
      </div>
    </section>
  </div>
);
