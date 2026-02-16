import React from "react";
import { useNavigate } from "react-router-dom";

export default function Traceability() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#F9FAFB",
        padding: "96px 24px",
        boxSizing: "border-box"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "12px"
            }}
          >
            Review & Traceability
          </h1>
          <p style={{ fontSize: "15px", color: "#475467" }}>
            Map declared evidence to identified risk domains to establish the defensibility record.
          </p>
        </header>

        {/* Traceability Matrix (UI Only) */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            marginBottom: "32px"
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "16px"
            }}
          >
            Evidence-to-Risk Mapping
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #EAECF0", textAlign: "left" }}>
                <th style={{ padding: "12px", color: "#667085" }}>Evidence Category</th>
                <th style={{ padding: "12px", color: "#667085" }}>Target Risk Domain</th>
                <th style={{ padding: "12px", color: "#667085" }}>Traceability Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: "Policies & SOPs", risk: "Regulatory Compliance" },
                { cat: "Validation Protocols", risk: "System Validation" },
                { cat: "Audit Trails & Logs", risk: "Data Integrity" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #EAECF0" }}>
                  <td style={{ padding: "16px 12px", fontWeight: "500" }}>{row.cat}</td>
                  <td style={{ padding: "16px 12px" }}>{row.risk}</td>
                  <td style={{ padding: "16px 12px" }}>
                    <span style={{ 
                      background: "#ECFDF3", 
                      color: "#027A48", 
                      padding: "4px 12px", 
                      borderRadius: "16px",
                      fontSize: "12px",
                      fontWeight: "500"
                    }}>
                      Mapped
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Attestation Block */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            marginBottom: "32px"
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "12px"
            }}
          >
            Final Review Notes
          </h3>
          <textarea
            rows={4}
            placeholder="Enter any final observations regarding the traceability or completeness of the record…"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              padding: "12px",
              fontSize: "14px",
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        {/* Boundary Notice */}
        <div
          style={{
            border: "1px solid #D0D5DD",
            borderRadius: "10px",
            padding: "20px",
            background: "#FFFFFF",
            marginBottom: "40px"
          }}
        >
          <p style={{ fontSize: "13px", color: "#475467", margin: 0, textAlign: "center" }}>
            “Traceability links evidence to intent. This page formalizes the connection 
            without evaluating the quality of the execution.”
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate("/ddr/evidence")}
            style={{
              background: "transparent",
              border: "1px solid #D0D5DD",
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            ← Back to Evidence
          </button>

          <button
            onClick={() => navigate("/ddr/summary")}
            style={{
              background: "#004EEB",
              color: "#FFFFFF",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Generate Final DDR Summary →
          </button>
        </div>
      </div>
    </section>
  );
}
