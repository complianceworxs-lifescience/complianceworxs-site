/* src/main.jsx */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import DDRLayout from './pages/ddr/DDRLayout';
import Context from './pages/ddr/Context';
import Evidence from './pages/ddr/Evidence';
import Risk from './pages/ddr/Risk';
import Outcome from './pages/ddr/Outcome';
import Traceability from './pages/ddr/Traceability';
import Assessment from './pages/ddr/Assessment';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        {/* The DDR Module */}
        <Route path="/ddr" element={<DDRLayout />}>
          <Route index element={<Context />} />
          <Route path="evidence" element={<Evidence />} />
          <Route path="risk" element={<Risk />} />
          <Route path="outcome" element={<Outcome />} />
          <Route path="traceability" element={<Traceability />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
