import React from 'react';
import { Link } from 'react-router-dom';

const Outcome = () => (
  <div className="ddr-page">
    <h1>Decision Outcome</h1>
    <div style={{padding: '20px', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #10b981'}}>
      <h3 style={{color: '#065f46'}}>Current Status: AUTHORIZED</h3>
    </div>
    <Link to="/ddr/traceability" style={nextBtn}>View Traceability →</Link>
  </div>
);
export default Outcome;
