import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";
import DDRLayout from "./DDRLayout";
import Assessment from "./Assessment";
import AuthorizationEntry from "./authorization/AuthorizationEntry";

const styles = {
  // RESTORED: Professional dark theme from your original design
  hero: {
    position: "relative", width: "100%", minHeight: "600px",
    backgroundColor: "#0a1a36", // Your signature navy blue
    display: "flex", alignItems: "center", color: "#fff", 
    fontFamily: "system-ui, -apple-system, sans-serif"
  },
  container: { position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 40px", width: "100%" },
  ctaButton: { 
    display: "inline-block", padding: "18px 36px", borderRadius: "4px", 
    backgroundColor: "#f6a623", color: "#1b1b1b", textDecoration: "none", 
    fontWeight: "800", fontSize: "1.1rem", border: "none" 
  }
};

const MainLayout = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <nav style={{ padding: "20px 60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/" style={{ color: "#0a1a36", textDecoration: "none", fontWeight: "900", fontSize: "1.4rem" }}>COMPLIANCEWORXS</Link>
      <Link to="/authorization" style={{ border: "1px solid #0a1a36", color: "#0a1a36", padding: "8px 20px", textDecoration: "none", fontWeight: "700" }}>Start Authorization</Link>
    </nav>
    <main style={{ flex: 1 }}><Outlet /></main>
  </div>
);

const Home = () => (
  <>
    <header style={styles.hero}>
      <div style={styles.container}>
        <h1 style={{ fontSize: "4.5rem", fontWeight: "800", maxWidth: "900px", lineHeight: "1.1" }}>Authorize Proof Only When a Decision Can Be Defended.</h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "30px 0", opacity: 0.9 }}>Make regulatory decisions with confidence—before inspection, before risk compounds.</p>
        <Link to="/authorization" style={styles.ctaButton}>Start Authorization Review →</Link>
      </div>
    </header>
  </>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="authorization" element={<AuthorizationEntry />} />
        <Route path="ddr" element={<DDRLayout />}>
          <Route path="*" element={<Assessment />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
