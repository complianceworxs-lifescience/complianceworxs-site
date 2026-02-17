import React from "react";
import MainLayout from "../App";

export default function DecisionOutcome() {
  return (
    <MainLayout>
      <div style={{ background: "#F9FAFB", minHeight: "80vh", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          
          {/* A. Outcome Status */}
          <header style={{ marginBottom: "48px" }}>
            <div style={{ 
              display: "inline-block", 
              padding: "8px 16px", 
              borderRadius: "20px", 
              background: "#FEF0C7", 
              color: "#B54708", 
              fontWeight: "700",
              fontSize: "14px",
              marginBottom: "16px",
              textTransform: "uppercase"
            }}>
              Decision Status: Conditional Authorization
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#101828", marginBottom: "16px" }}>
              Evaluation Complete
            </h1>
            <p style={{ fontSize: "18px", color: "#475467" }}>
              This decision carries regulatory exposure under the evaluated conditions.
            </p>
          </header>

          {/* B. Context (Authorization Required) */}
          <div style={{ 
            background: "#FFFFFF", 
            border: "1px solid #EAECF0", 
            borderRadius: "12px", 
            padding: "40px", 
            marginBottom: "40px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>
              Authorization Required
            </h2>
            <p style={{ fontSize: "16px", color: "#475467", margin: 0 }}>
              To retain this decision as a defensible record, formal authorization must be issued.
            </p>
          </div>

          {/* C. Action (The Only Action) */}
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/your_live_link_here'}
            style={{
              backgroundColor: "#F2B233",
              color: "#0B1F2A",
              padding: "20px 48px",
              borderRadius: "8px",
              border: "none",
              fontSize: "20px",
              fontWeight: "800",
              cursor: "pointer",
              width: "100%",
              boxShadow: "0 4px 15px rgba(242, 178, 51, 0.4)",
              transition: "transform 0.1s"
            }}
          >
            Issue Authorization Record — $499
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
