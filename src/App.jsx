import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", fontFamily: "sans-serif" }}>
      
      {/* 1. TOP RIBBON - Authorization Engine Branding */}
      <div style={{ width: "100%", backgroundColor: "rgba(15, 23, 42, 0.95)", fontSize: "11px", padding: "8px 40px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e293b", textTransform: "uppercase", letterSpacing: "1px" }}>
        <span>
          <span style={{ color: "#2dd4bf", fontWeight: "bold" }}>COMPLIANCEWORXS</span> AUTHORIZATION ENGINE™
        </span>
        <span style={{ color: "#94a3b8" }}>State: <span style={{ color: "#2dd4bf" }}>Operational</span> | Your decisions, your proof, your control.</span>
      </div>

      {/* 2. MAIN NAV BAR - Executive Menus */}
      <header style={{ width: "100%", backgroundColor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1e293b", sticky: "top", zIndex: 50 }}>
        <div style={{ fontSize: "14px", letterSpacing: "0.3em", fontWeight: "bold", color: "#f8fafc" }}>
          COMPLIANCEWORXS
        </div>

        <nav style={{ display: "flex", gap: "30px", fontSize: "13px", fontWeight: "500" }}>
          <Link to="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>Overview</Link>
          <Link to="/pricing" style={{ color: "#cbd5e1", textDecoration: "none" }}>Pricing</Link>
          <Link to="/intelligence" style={{ color: "#cbd5e1", textDecoration: "none" }}>Intelligence Stream</Link>
          <Link to="/security" style={{ color: "#cbd5e1", textDecoration: "none" }}>Security</Link>
          <Link to="/authority" style={{ color: "#cbd5e1", textDecoration: "none" }}>Authority</Link>
        </nav>

        <Link to="/assessment" style={{ background: "#fbbf24", color: "#0f172a", textDecoration: "none", padding: "10px 22px", borderRadius: "4px", fontWeight: "700", fontSize: "13px" }}>
          Start DDR Assessment
        </Link>
      </header>

      {/* 3. HERO SECTION - The "Perplexity" Dashboard Layout */}
      <main style={{ position: "relative", overflow: "hidden", padding: "100px 40px" }}>
        {/* Visual Background (Replaces the broken local file) */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ width: "100%", h: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }}></div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0f172a, rgba(15, 23, 42, 0.8), transparent)" }}></div>
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
          
          {/* Left Side: Strategic Value */}
          <section style={{ flex: "1", minWidth: "300px" }}>
            <h1 style={{ fontSize: "48px", fontWeight: "800", lineHeight: "1.1", marginBottom: "24px", color: "#ffffff" }}>
              Authorize Proof Only<br />When a Decision Can Be<br />Defended.
            </h1>
            <p style={{ fontSize: "18px", color: "#cbd5e1", marginBottom: "40px", maxWidth: "550px", lineHeight: "1.6" }}>
              Make regulatory decisions with <strong>confidence</strong>—before inspection, before documentation, before risk compounds.
            </p>
            <Link to="/assessment" style={{ display: "inline-block", background: "#fbbf24", color: "#0f172a", textDecoration: "none", padding: "16px 32px", borderRadius: "6px", fontWeight: "800", fontSize: "15px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}>
              Start Decision Defensibility Assessment →
            </Link>
          </section>

          {/* Right Side: The Mock Dashboard */}
          <section style={{ flex: "1", minWidth: "350px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ backgroundColor: "#ffffff", color: "#1e293b", borderRadius: "12px", width: "100%", maxWidth: "460px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <div style={{ padding: "14px 24px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontSize: "10px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Decision Defensibility Assessment</h2>
                <span style={{ fontSize: "10px", color: "#94a3b8", fontWeight: "bold" }}>Q1 · PRE-INSPECTION</span>
              </div>
              
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBottom: "24px" }}>
                  <div style={{ backgroundColor: "#059669", color: "#ffffff", padding: "18px", borderRadius: "8px", textAlign: "center", minWidth: "130px" }}>
                    <div style={{ fontSize: "9px", textTransform: "uppercase", opacity: 0.9, fontWeight: "bold" }}>Defensibility Score</div>
                    <div style={{ fontSize: "36px", fontWeight: "900" }}>80</div>
                    <div style={{ fontSize: "9px", marginTop: "4px" }}>Threshold: 72</div>
                  </div>
                  
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "11px" }}>
                    <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "4px" }}><strong>Ownership</strong><br /><span style={{ color: "#059669", fontWeight: "bold" }}>MET</span></div>
                    <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "4px" }}><strong>Authority</strong><br /><span style={{ color: "#059669", fontWeight: "bold" }}>MET</span></div>
                    <div><strong>Context</strong><br /><span style={{ color: "#d97706", fontWeight: "bold" }}>AT RISK</span></div>
                    <div><strong>Posture</strong><br /><span style={{ color: "#059669", fontWeight: "bold" }}>READY</span></div>
                  </div>
                </div>

                <div style={{ padding: "14px", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "10px", fontWeight: "900", color: "#065f46", textTransform: "uppercase" }}>Proof Authorization Permitted</div>
                    <div style={{ fontSize: "10px", color: "#065f46" }}>Defensible thresholds for proof generation satisfied.</div>
                  </div>
                  <div style={{ fontSize: "20px", color: "#10b981" }}>✓</div>
                </div>

                <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#94a3b8" }}>
                   <span>Generated by ComplianceWorxs</span>
                   <span style={{ cursor: "pointer", color: "#059669", fontWeight: "bold" }}>Export proof →</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default App;
