import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthorizationEntry() {
  const navigate = useNavigate();
  return (
    <div className="section-muted" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="panel panel-review">
          <h2 className="panel-title">Secure Authorization Intake</h2>
          <p className="panel-body">Initializing connection to the BigQuery Audit Ledger. All decisions made in this session will be recorded with a permanent Trace ID for regulatory defensibility.</p>
          <div className="cta-row" style={{ marginTop: '24px' }}>
            <button onClick={() => navigate('/ddr/start')} className="button-primary">Begin Defensibility Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
