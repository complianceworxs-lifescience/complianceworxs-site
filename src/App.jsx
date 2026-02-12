import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc", fontFamily: "sans-serif" }}>
      
      {/* 1. TOP RIBBON */}
      <div style={{ width: "100%", backgroundColor: "rgba(15, 23, 42, 0.9)", fontSize: "12px", padding: "8px 32px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1e293b" }}>
        <span style={{ letterSpacing: "0.05em" }}>
          <span style={{ color: "#2dd4bf", fontWeight: "bold" }}>COMPLIANCEWORXS</span> AUTHORIZATION ENGINE™
        </span>
        <span style={{ color: "#cbd5e1" }}>Your decisions, your <strong>proof</strong>, your control.</span>
      </div>

      {/* 2. MAIN NAV BAR */}
      <header style={{ width: "100%", backgroundColor: "rgba(15, 23, 42, 0.8)", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1e293b" }}>
        <div style={{ fontSize: "14px", letterSpacing: "0.35em", fontWeight: "bold", color: "#f1f5f9" }}>
          COMPLIANCEWORXS
        </div>

        <nav style={{ display: "flex", gap: "32px", fontSize: "14px" }}>
          <Link to="/" style={{ color: "#e2e8f0", textDecoration: "none" }}>Overview</Link>
          <Link to="/pricing" style={{ color: "#e2e8f0", textDecoration: "none" }}>Pricing</Link>
          <Link to="/intelligence" style={{ color: "#e2e8f0", textDecoration: "none" }}>Intelligence Stream</Link>
          <Link to="/security" style={{ color: "#e2e8f0", textDecoration: "none" }}>Security</Link>
          <Link to="/authority" style={{ color: "#e2e8f0", textDecoration: "none" }}>Authority</Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button style={{ background: "#fbbf24", color: "#0f172a", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
            Start Assessment
          </button>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <main style={{ position: "relative", padding: "80px 40px", display: "flex", justifyContent: "center" }}>
        {/* Background Overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.3, zIndex: 0, backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000')", backgroundSize: "cover" }}></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0f172a, rgba(15, 23, 42, 0.7))", zIndex: 1 }}></div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", width: "100%", display: "flex", alignItems: "center", gap: "60px" }}>
          
          {/* Left Content */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "48px", fontWeight: "bold", lineHeight: "1.2", marginBottom: "24px" }}>
              Authorize Proof Only<br />When a Decision Can Be<br />Defended.
            </h1>
            <p style={{ fontSize: "18px", color: "#e2e8f0", marginBottom: "32px", maxWidth: "500px" }}>
              Make regulatory decisions with <strong>confidence</strong>—before inspection, before documentation, before risk compounds.
            </p>
            <button style={{ background: "#fbbf24", color: "#0f172a", border: "none", padding: "15px 30px", borderRadius: "6px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>
              Start Decision Defensibility Assessment →
            </button>
          </div>

          {/* Right Mock Dashboard Card */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ backgroundColor: "#fff", color: "#1e293b", borderRadius: "12px", width: "100%", maxWidth: "450px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", overflow: "hidden" }}>
              <div style={{ padding: "12px 20px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "10px", fontWeight: "bold", color: "#64748b", textTransform: "uppercase" }}>Decision Defensibility Assessment</span>
                <span style={{ fontSize: "10px", color: "#94a3b8" }}>Q1 · PRE-INSPECTION</span>
              </div>
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ background: "#059669", color: "#fff", padding: "16px", borderRadius: "8px", textAlign: "center", minWidth: "120px" }}>
                    <div style={{ fontSize: "9px", textTransform: "uppercase", opacity: 0.8 }}>Defensibility Score</div>
                    <div style={{ fontSize: "32px", fontWeight: "bold" }}>80</div>
                    <div style={{ fontSize: "9px", marginTop: "4px" }}>Threshold: 72</div>
                  </div>
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "11px" }}>
                    <div><strong>Ownership</strong><br /><span style={{ color: "#059669" }}>MET</span></div>
                    <div><strong>Authority</strong><br /><span style={{ color: "#059669" }}>MET</span></div>
                    <div><strong>Context</strong><br /><span style={{ color: "#d97706" }}>AT RISK</span></div>
                    <div><strong>Posture</strong><br /><span style={{ color: "#059669" }}>READY</span></div>
                  </div>
                </div>
                <div style={{ padding: "12px", background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: "8px", color: "#065f46", fontSize: "11px" }}>
                  <strong>Proof Authorization Permitted</strong><br />
                  Structural conditions for defensible proof are satisfied.
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
