import React from "react";
import { useNavigate } from "react-router-dom";

export default function DDRSummary() {
  const navigate = useNavigate();

  const sectionStyle = {
    minHeight: "100vh",
    background: "#F2F4F7",
    padding: "80px 24px",
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
    color: "#101828"
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto"
  };

  const summaryCardStyle = {
    background: "#FFFFFF",
    border: "1px solid #EAECF0",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "24px"
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "700",
    color: "#667085",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
    display: "block"
  };

  const dataTextStyle = {
    fontSize: "16px",
    color: "#101828",
    marginBottom: "20px",
    lineHeight: "1.5"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <header style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "12px" }}>
            DDR Synthesis & Review
          </h1>
          <p style={{ fontSize: "16px", color: "#475467" }}>
            Review the synthesized record. This view is read-only and precedes final authorization.
          </p>
        </header>

        {/* 1. Decision Context Recap */}
        <div style={summaryCardStyle}>
          <span style={labelStyle}>Decision Context</span>
          <p style={dataTextStyle}>
            Authorized Owner: [Decision Authority Identified]<br />
            Regulatory Scope: Federal Compliance, Internal Policy<br />
            Timeframe: Immediate Execution
          </p>
        </div>

        {/* 2. Risk & Exposure Recap */}
        <div style={summaryCardStyle}>
          <span style={labelStyle}>Risk & Exposure Identification</span>
          <p style={dataTextStyle}>
            Primary Domains: Regulatory Compliance, Data Integrity, System Validation<br />
            Qualitative Exposure: High Risk Signal Detected
          </p>
        </div>

        {/* 3. Evidence & Traceability Recap */}
        <div style={summaryCardStyle}>
          <span style={labelStyle}>Traceability Mapping</span>
          <div style={{ fontSize: "14px", color: "#344054" }}>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>Policies & SOPs → Regulatory Compliance (Mapped)</li>
              <li>Validation Protocols → System Validation (Mapped)</li>
              <li>Audit Trails → Data Integrity (Mapped)</li>
            </ul>
          </div>
        </div>

        {/* 2. Deterministic Boundary Notice */}
        <div style={{
          background: "#FEF3F2",
          border: "1px solid #FECDCA",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "40px",
          textAlign: "center"
        }}>
          <h4 style={{ color: "#B42318", margin: "0 0 8px 0", fontSize: "16px", fontWeight: "600" }}>
            Final Inspection Checkpoint
          </h4>
          <p style={{ color: "#B42318", fontSize: "14px", margin: 0 }}>
            This is a synthesized view for inspection only. No approval exists, and no 
            record has been finalized or written to the ledger at this stage.
          </p>
        </div>

        {/* 3. Single Forward CTA */}
        <button
          onClick={() => navigate("/ddr/outcome")}
          style={{
            width: "100%",
            background: "#101828",
            color: "#FFFFFF",
            padding: "18px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(16, 24, 40, 0.2)"
          }}
        >
          Proceed to Authorization
        </button>

        <button
          onClick={() => navigate("/ddr/traceability")}
          style={{
            width: "100%",
            background: "transparent",
            color: "#475467",
            padding: "12px",
            marginTop: "12px",
            border: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          Return to Review
        </button>
      </div>
    </section>
  );
}
