import React from "react";
import { Link } from "react-router-dom";

/**
 * ComplianceWorxs Unified Executive Interface
 * Incorporating the Perplexity Hero Logic with Institutional Navigation
 */
const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* 1. TOP AUTHORIZATION RIBBON */}
      <div className="w-full bg-[#0a1a36] text-[10px] text-slate-300 px-8 py-2 flex items-center justify-between border-b border-white/10 uppercase tracking-widest">
        <span>
          <span className="text-cyan-400 font-bold">● COMPLIANCEWORXS</span> AUTHORIZATION ENGINE™
        </span>
        <div className="flex gap-6">
          <span>State: <span className="text-emerald-400">Operational</span></span>
          <span>Proof blocked until authorized</span>
        </div>
      </div>

      {/* 2. EXECUTIVE NAVIGATION MENU */}
      <header className="w-full bg-white px-10 py-5 flex items-center justify-between border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center">
          <Link to="/" className="text-lg tracking-[0.2em] font-black text-[#0a1a36] no-underline">
            COMPLIANCEWORXS
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold text-slate-600 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#0a1a36] transition-colors no-underline">Overview</Link>
          <Link to="/pricing" className="hover:text-[#0a1a36] transition-colors no-underline">Pricing</Link>
          <Link to="/intelligence" className="hover:text-[#0a1a36] transition-colors no-underline">Intelligence Stream</Link>
          <Link to="/authority" className="hover:text-[#0a1a36] transition-colors no-underline">Authority</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link 
            to="/assessment" 
            className="bg-[#f6a623] text-[#0a1a36] font-extrabold text-[12px] px-6 py-2.5 rounded shadow-md hover:bg-amber-500 transition-all uppercase no-underline"
          >
            Start DDR Assessment
          </Link>
        </div>
      </header>

      {/* 3. THE HERO SECTION [Replicating Screenshot (1) and Perplexity Logic] */}
      <main className="relative bg-[#0a1a36] overflow-hidden py-20">
        {/* Visual Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a36] via-[#0a1a36]/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Strategic Copy */}
          <section className="lg:w-1/2 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6">
              Deterministic Decision Review (DDR) for Regulatory Defensibility
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Every regulatory decision is evaluated, <span className="text-white font-bold underline decoration-cyan-400">authorized</span>, and logged before proof exists.
            </p>
            <Link 
              to="/assessment" 
              className="inline-flex items-center justify-center bg-[#f6a623] hover:bg-amber-500 text-[#0a1a36] font-black text-sm px-8 py-4 rounded shadow-2xl transition-all no-underline"
            >
              Start DDR Assessment →
            </Link>
          </section>

          {/* Right Side: The Mock Dashboard */}
          <section className="lg:w-1/2 w-full flex justify-end">
            <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-lg border border-slate-200 overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">DDR Assessment Module</h2>
                <span className="text-[10px] text-slate-400 font-bold">ID: 11,126-Q1</span>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex gap-6 items-center">
                  <div className="bg-emerald-600 text-white rounded-lg px-6 py-4 text-center">
                    <div className="text-[9px] uppercase font-bold text-emerald-100 tracking-tighter">Defensibility Score</div>
                    <div className="text-4xl font-black leading-none my-1">80</div>
                    <div className="text-[8px] text-emerald-100/80">Threshold: 72</div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4 text-[10px]">
                    <div><span className="block font-black text-slate-400 uppercase">Ownership</span><span className="text-emerald-600 font-bold">MET</span></div>
                    <div><span className="block font-black text-slate-400 uppercase">Authority</span><span className="text-emerald-600 font-bold">MET</span></div>
                    <div><span className="block font-black text-slate-400 uppercase">Context</span><span className="text-amber-500 font-bold">AT RISK</span></div>
                    <div><span className="block font-black text-slate-400 uppercase">Posture</span><span className="text-emerald-600 font-bold">READY</span></div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-emerald-500/20 bg-emerald-50/50 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Proof Authorization Permitted</div>
                    <div className="text-[9px] text-emerald-700 italic">Defensible thresholds satisfied.</div>
                  </div>
                  <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 4. INSTITUTIONAL FOOTER */}
      <footer className="bg-[#0a1a36] text-white pt-20 pb-10 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div>
            <h4 className="font-black text-lg mb-4">COMPLIANCEWORXS</h4>
            <p className="text-cyan-400 text-xs font-bold mb-4">Defensible decisions, before inspection.</p>
            <p className="text-xs text-slate-400 leading-relaxed">The only governed compliance system that determines whether regulatory proof is allowed to exist.</p>
          </div>
          <div className="text-xs text-slate-400 space-y-2">
            <h4 className="text-white font-bold mb-4 uppercase">Intelligence</h4>
            <p>Regulatory Intelligence</p><p>Authority</p><p>Operational Questions</p>
          </div>
          <div className="text-xs text-slate-400 space-y-2">
            <h4 className="text-white font-bold mb-4 uppercase">Governance</h4>
            <p>Inspection Briefs</p><p>Governance Framework</p><p>Workflows</p>
          </div>
          <div className="text-xs text-slate-400 space-y-2">
            <h4 className="text-white font-bold mb-4 uppercase">Legal</h4>
            <p>Buyer FAQ</p><p>Secure Access</p>
          </div>
        </div>
        <div className="text-center pt-10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          © 2026 ComplianceWorxs. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
