import React from 'react';
import { Link } from 'react-router-dom';

const Traceability = () => (
  <div className="ddr-page">
    <h1>Review & Traceability</h1>
    <p>Metadata supporting the "No Human in the Loop" audit trail.</p>
    <div style={{fontFamily: 'monospace', fontSize: '12px', background: '#f1f5f9', padding: '15px'}}>
      LOG_ID: CW-9921 | HASH: 8f2d... | VAULT: GCS_LOCKED
    </div>
    <Link to="/ddr/assessment" style={nextBtn}>Finalize Assessment →</Link>
  </div>
);
export default Traceability;
