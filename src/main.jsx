import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// CORRECTED PATHS: Pointing exactly to src/ddr/
import DDRLayout from './ddr/DDRLayout';
import Context from './ddr/Context';
import Evidence from './ddr/Evidence';
import Risk from './ddr/Risk';
import Outcome from './ddr/Outcome';
import Traceability from './ddr/Traceability';
import Assessment from './ddr/Assessment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* The DDR Module - Paths fixed to resolve Vercel build errors */}
        <Route path="/ddr" element={<DDRLayout />}>
          {/* Landing on Assessment/Overview as the default */}
          <Route index element={<Assessment />} />
          
          <Route path="context" element={<Context />} />
          <Route path="evidence" element={<Evidence />} />
          <Route path="risk" element={<Risk />} />
          <Route path="outcome" element={<Outcome />} />
          <Route path="traceability" element={<Traceability />} />
          <Route path="assessment" element={<Assessment />} />
          {/* Added /overview to match our intended entry point */}
          <Route path="overview" element={<Assessment />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
