import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// ADDRESS FIX: Using uppercase DDR to match the folder in your repository
import DDRLayout from './DDR/DDRLayout';
import Context from './DDR/Context';
import Evidence from './DDR/Evidence';
import Risk from './DDR/Risk';
import Outcome from './DDR/Outcome';
import Traceability from './DDR/Traceability';
import Assessment from './DDR/Assessment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
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
