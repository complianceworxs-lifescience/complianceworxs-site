import React from "react";
import { useNavigate } from "react-router-dom";

export default function FinalAssessment() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #F9FAFB 0%, #EEF2F6 100%)",
        padding: "96px 24px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#0B1F2A",
            marginBottom: "48px"
          }}
        >
          A Regulated Decision Has Been Detected.
        </h1>

        {/* Signal Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          {/* Urgency */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              padding: "28px",
              textAlign: "left"
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#006D6F",
                marginBottom: "12px"
              }}
            >
              Urgency Signal
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#B42318",
                marginBottom: "8px"
              }}
            >
              High Risk Alert
            </div>
            <div style={{ fontSize: "14px", color: "#475467" }}>
              Immediate attention required
            </div>
          </div>

          {/* Scope */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              padding: "28px",
              textAlign: "left"
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#004EEB",
                marginBottom: "12px"
              }}
            >
              Scope of Issue
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#0B1F2A",
                marginBottom: "8px"
              }}
            >
              Multi-Department Impact
            </div>
            <div style={{ fontSize: "14px", color: "#475467" }}>
              Broad organizational reach
            </div>
          </div>

          {/* Exposure */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "10px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              padding: "28px",
              textAlign: "left"
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#003A8F",
                marginBottom: "12px"
              }}
            >
              Exposure Type
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "600",
                color: "#0B1F2A",
                marginBottom: "8px"
              }}
            >
              Regulatory & Legal Risk
            </div>
            <div style={{ fontSize: "14px", color: "#475467" }}>
              Potential liability identified
            </div>
          </div>
        </div>

        {/* Boundary Notice */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D0D5DD",
            borderRadius: "12px",
            padding: "28px",
            maxWidth: "760px",
            margin: "0 auto 48px auto"
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "8px"
            }}
          >
            No Defensible Decision Exists At This Stage.
          </div>
          <div style={{ fontSize: "14px", color: "#475467" }}>
            Assessment results indicate risk signals only. Authorization is
            required to proceed.
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/ddr/context")}
          style={{
            background: "#004EEB",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "600",
            padding: "14px 28px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,78,235,0.35)"
          }}
        >
          Proceed to Decision Authorization
        </button>
      </div>
    </section>
  );
}
