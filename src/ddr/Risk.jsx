import React from 'react';
import { Link } from 'react-router-dom';

const Risk = () => (
  <div className="ddr-page">
    <h1>Risk & Exposure</h1>
    <p>Simulate inspection pressure on your current decision rationale.</p>
    <div style={inputBlock}>
      <label>Potential Warning Letter Trigger?</label>
      <input type="checkbox" /> High Criticality
    </div>
    <Link to="/ddr/outcome" style={nextBtn}>Review Outcome →</Link>
  </div>
);
export default Risk;
