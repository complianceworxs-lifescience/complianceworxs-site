import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// LINE 7 - FIXED: Removed './ddr/' because DDRLayout is in the root src folder
import DDRLayout from './DDRLayout'; 

// These stay the same because these files ARE in the ddr folder
import DDROverview from './ddr/Overview'; 
import DDRStart from './ddr/DDRStart'; 
import DecisionContext from './ddr/DecisionContext'; 
import EvidenceSet from './ddr/EvidenceSet';
import RiskExposure from './ddr/RiskExposure';
import DecisionOutcome from './ddr/DecisionOutcome';
import ReviewTraceability from './ddr/ReviewTraceability';
import FinalAssessment from './ddr/FinalAssessment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* The DDR Module */}
        <Route path="/ddr" element={<DDRLayout />}>
          <Route index element={<DDROverview />} />
          <Route path="start" element={<DDRStart />} />
          <Route path="context" element={<DecisionContext />} />
          <Route path="evidence" element={<EvidenceSet />} />
          <Route path="risk" element={<RiskExposure />} />
          <Route path="outcome" element={<DecisionOutcome />} />
          <Route path="traceability" element={<ReviewTraceability />} />
          <Route path="assessment" element={<FinalAssessment />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
