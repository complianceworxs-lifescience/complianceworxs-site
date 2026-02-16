import React from "react";
import { useNavigate } from "react-router-dom";

export default function RiskExposure() {
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
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
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
            Risk & Exposure Identification
          </h1>
          <p style={{ fontSize: "15px", color: "#475467" }}>
            Identify where this decision may introduce regulatory or operational risk.
          </p>
        </header>

        {/* Risk Domains */}
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
            Risk Domains (select all that apply)
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}
          >
            {[
              "Regulatory Compliance",
              "Data Integrity",
              "System Validation",
              "Process Control",
              "Vendor / Third-Party Risk",
              "Change Management",
              "Security & Access Control"
            ].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#344054"
                }}
              >
                <input type="checkbox" />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Exposure Level */}
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
            Exposure Level
          </h3>
          <p style={{ fontSize: "14px", color: "#475467", marginBottom: "16px" }}>
            Select the perceived level of exposure. This is qualitative only.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            {["Low", "Moderate", "High"].map((level) => (
              <label
                key={level}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  color: "#344054"
                }}
              >
                <input type="radio" name="exposure" />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Assumptions */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            marginBottom: "40px"
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
            Key Assumptions
          </h3>
          <p style={{ fontSize: "14px", color: "#475467", marginBottom: "16px" }}>
            Document assumptions made while identifying risk.
          </p>

          <textarea
            rows={5}
            placeholder="Enter assumptions or contextual notes…"
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
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "40px",
            background: "#FFFFFF"
          }}
        >
          <p style={{ fontSize: "14px", color: "#667085", margin: 0 }}>
            “Exposure mapping establishes the scope of evidence required for defensibility.”
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/ddr/evidence")}
          style={{
            background: "#101828",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "600",
            padding: "16px 32px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Continue to Evidence Set
        </button>
      </div>
    </section>
  );
}
