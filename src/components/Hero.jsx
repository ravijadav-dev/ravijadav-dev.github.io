import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, RotateCcw, Activity, ShieldCheck, Zap, RefreshCw, Terminal } from 'lucide-react';

const auditStepsLog = [
  { time: '0.0s', text: 'Initializing Playwright E2E Runner v1.50...', status: 'info' },
  { time: '0.2s', text: 'Injecting AI Self-Healing Adapter into DOM...', status: 'info' },
  { time: '0.5s', text: 'Executing test: Verify Nav Links (#about, #experience)...', status: 'success', tag: 'PASSED' },
  { time: '0.9s', text: 'Executing test: Check Contrast Ratio (AAA WCAG)...', status: 'success', tag: 'PASSED' },
  { time: '1.4s', text: 'Validating Semantic Tags & Heading Hierarchy...', status: 'success', tag: 'PASSED' },
  { time: '1.9s', text: 'Simulating Flaky Selector fallback on button#submit...', status: 'warning', tag: 'HEALED BY AI' },
  { time: '2.4s', text: 'Measuring Time-to-Interactive (TTI)... 42ms', status: 'success', tag: 'FLAWLESS' },
  { time: '3.0s', text: 'Checking Responsive Viewport breakpoints...', status: 'success', tag: 'VERIFIED' },
  { time: '3.6s', text: 'Generating Quality Health Score Dashboard...', status: 'info' },
];

const Hero = ({ onOpenCli }) => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [auditComplete, setAuditComplete] = useState(false);

  useEffect(() => {
    let timer;
    if (isAuditing && auditStep < auditStepsLog.length) {
      timer = setTimeout(() => {
        setAuditStep((prev) => prev + 1);
      }, 500);
    } else if (isAuditing && auditStep === auditStepsLog.length) {
      setTimeout(() => setAuditComplete(true), 600);
    }
    return () => clearTimeout(timer);
  }, [isAuditing, auditStep]);

  const handleStartAudit = () => {
    setIsAuditing(true);
    setAuditStep(0);
    setAuditComplete(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Intro Text (Span 6 cols on LG) */}
        <div className="lg:col-span-6 animate-fade-in z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Senior QA Automation Lead</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Architecting <br />
            <span className="text-gradient">Scalable Automated</span><br />
            Frameworks.
          </h1>

          <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
            Over 9 years of expertise in Playwright, Cypress, and TypeScript. Dedicated to enhancing software quality and deployment efficiency through advanced AI-driven automation and zero-flakiness testing practices.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleStartAudit}
              className="flex items-center gap-2.5 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all text-sm group"
            >
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Run Live Portfolio Audit</span>
            </button>
            <a
              href="#projects"
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all text-sm border border-white/10"
            >
              Explore Frameworks
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>100% Robust Locators</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span>AI Self-Healing Active</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Component: Live Site Auditor Terminal (Span 6 cols on LG) */}
        <div className="lg:col-span-6 animate-slide-up w-full">
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 rounded-3xl blur-3xl -z-10"></div>

            {/* Terminal Window Box */}
            <div className="glass rounded-3xl w-full relative overflow-hidden border border-white/15 bg-darker/90 shadow-2xl flex flex-col min-h-[460px]">
              {/* Terminal Titlebar */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs text-muted ml-3 font-mono flex items-center gap-1.5 font-medium">
                    <Activity className="w-3.5 h-3.5 text-primary animate-pulse" /> live-auditor-telemetry.sh
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {isAuditing && !auditComplete && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-bold text-yellow-400 animate-pulse uppercase">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Scanning DOM
                    </span>
                  )}
                  {auditComplete && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400 uppercase">
                      <CheckCircle2 className="w-3 h-3 text-green-400" /> Audit Flawless
                    </span>
                  )}
                </div>
              </div>

              {/* Scanning Laser Line (when auditing) */}
              {isAuditing && !auditComplete && (
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan z-20 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              )}

              {/* Terminal Screen Contents */}
              <div className="p-6 flex-1 flex flex-col font-mono text-xs overflow-hidden relative">
                {!isAuditing && !auditComplete && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <Terminal className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Interactive Site Auditor</h3>
                    <p className="text-muted text-sm max-w-sm leading-relaxed">
                      Click below to run a real-time simulated automated regression and quality health scan on this live DOM structure.
                    </p>
                    <button
                      onClick={handleStartAudit}
                      className="mt-4 px-6 py-3 rounded-full bg-primary/20 border border-primary text-primary font-bold tracking-wide hover:bg-primary/30 hover:scale-105 transition-all inline-flex items-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-primary" /> Start Quality Audit Scan
                    </button>
                  </div>
                )}

                {/* Audit Steps Streaming Log */}
                {isAuditing && !auditComplete && (
                  <div className="space-y-3 flex-1 overflow-y-auto scrollbar-none pr-2">
                    {auditStepsLog.slice(0, auditStep).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 animate-fade-in text-light/90">
                        <span className="text-primary/70 select-none font-semibold">[{step.time}]</span>
                        <span className="flex-1">{step.text}</span>
                        {step.tag && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider border ${
                              step.status === 'success'
                                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                                : step.status === 'warning'
                                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                                : 'bg-primary/10 border-primary/30 text-primary'
                            }`}
                          >
                            {step.tag}
                          </span>
                        )}
                      </div>
                    ))}
                    {auditStep < auditStepsLog.length && (
                      <div className="flex items-center gap-2 text-muted text-xs pt-2 animate-pulse font-sans">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>Executing automated verification suite...</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Audit Final Result: Quality Health Score Dashboard */}
                {auditComplete && (
                  <div className="flex-1 flex flex-col justify-between animate-fade-in space-y-6">
                    <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent" /> Live Quality Health Dashboard
                        </h4>
                        <p className="text-muted text-xs mt-0.5 font-sans">Automated regression evaluation completed successfully</p>
                      </div>
                      <button
                        onClick={handleStartAudit}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs text-light"
                        title="Re-run scan"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-primary" /> Re-run
                      </button>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 font-sans">
                      <div className="glass p-3.5 rounded-xl border border-white/10 flex flex-col items-center text-center bg-white/5">
                        <span className="text-xs text-muted mb-1 font-medium">Overall Score</span>
                        <span className="text-2xl font-black text-accent font-mono">99.8%</span>
                        <span className="text-[10px] text-green-400 mt-1 font-semibold">Grade: A+ FLAWLESS</span>
                      </div>

                      <div className="glass p-3.5 rounded-xl border border-white/10 flex flex-col items-center text-center bg-white/5">
                        <span className="text-xs text-muted mb-1 font-medium">Accessibility</span>
                        <span className="text-2xl font-black text-white font-mono">100%</span>
                        <span className="text-[10px] text-primary mt-1 font-semibold">WCAG AAA Compliant</span>
                      </div>

                      <div className="glass p-3.5 rounded-xl border border-white/10 flex flex-col items-center text-center bg-white/5">
                        <span className="text-xs text-muted mb-1 font-medium">Flakiness Index</span>
                        <span className="text-2xl font-black text-green-400 font-mono">0.0%</span>
                        <span className="text-[10px] text-muted mt-1 font-semibold">AI Self-Healing Active</span>
                      </div>

                      <div className="glass p-3.5 rounded-xl border border-white/10 flex flex-col items-center text-center bg-white/5">
                        <span className="text-xs text-muted mb-1 font-medium">Speed (TTI)</span>
                        <span className="text-2xl font-black text-white font-mono">42ms</span>
                        <span className="text-[10px] text-secondary mt-1 font-semibold">Ultra-Fast Execution</span>
                      </div>
                    </div>

                    {/* Footer note & trigger Dev CLI */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-muted font-sans">
                      <span>Tested with Playwright Automation Engine</span>
                      {onOpenCli && (
                        <button
                          onClick={onOpenCli}
                          className="text-primary hover:underline font-semibold flex items-center gap-1"
                        >
                          Open Developer CLI Mode →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
