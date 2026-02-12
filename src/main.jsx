import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// FIXED: Now pointing to Assessment.jsx (which you just renamed)
import DDRLayout from './DDRLayout';
import Assessment from './Assessment'; 
import Context from './ddr/Context'; 
import Evidence from './ddr/Evidence';
import Risk from './ddr/Risk';
import Outcome from './ddr/Outcome';
import Traceability from './ddr/Traceability';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* The DDR Module */}
        <Route path="/ddr" element={<DDRLayout />}>
          <Route index element={<Assessment />} />
          <Route path="context" element={<Context />} />
          <Route path="evidence" element={<Evidence />} />
          <Route path="risk" element={<Risk />} />
          <Route path="outcome" element={<Outcome />} />
          <Route path="traceability" element={<Traceability />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="overview" element={<Assessment />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
