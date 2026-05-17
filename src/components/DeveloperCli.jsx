import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus, Maximize2, Minimize2 } from 'lucide-react';

const DeveloperCli = ({ isOpen, onClose, theme, setTheme, onTriggerAudit }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: [
        '🚀 RAVI JADAV PORTFOLIO CLI v2.5.0 (x86_64-apple-darwin22)',
        'Type "help" to view available developer commands. Toggling Recruiter/Developer mode in navbar closes this terminal.',
        '-----------------------------------------------------------------------------------------------------------------'
      ]
    }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', content: trimmed }];
    const parts = trimmed.toLowerCase().split(' ');
    const command = parts[0];
    const arg = parts[1];

    switch (command) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: [
            'AVAILABLE COMMANDS:',
            '  about      - Display brief professional bio & core expertise',
            '  skills     - Matrix of automation tools, languages, and frameworks',
            '  projects   - Overview of featured open-source repositories',
            '  experience - Display career timeline & key achievements',
            '  audit      - Run the live portfolio audit simulation',
            '  theme      - Switch themes [vscode | dracula | nord]',
            '  contact    - Get direct email, LinkedIn, and resume download link',
            '  ls         - List available virtual directory files',
            '  cat <file> - Read virtual file contents',
            '  clear      - Clear terminal screen',
            '  sudo       - Elevate privileges',
            '  exit       - Close Developer Mode terminal'
          ]
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: [
            '================ ABOUT RAVI JADAV ================',
            'Role: Senior QA Automation Engineer & Team Lead',
            'Experience: 9+ Years specializing in E2E Test Architecture',
            'Focus: Playwright, Cypress, TypeScript, Generative AI Test Automation, CI/CD pipelines',
            'Philosophy: "Flaky tests are worse than no tests. Self-healing & robust selectors are the future."'
          ]
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: [
            '================ CORE TECHNICAL SKILLS ================',
            '[★★★★★] Automation Frameworks : Playwright, Playwright MCP, Cypress',
            '[★★★★★] Languages & Runtimes : TypeScript, JavaScript, Node.js',
            '[★★★★☆] AI & Self-Healing    : OpenAI API, Claude API, Cursor, Prompt Engineering',
            '[★★★★☆] CI/CD & DevOps       : GitHub Actions, AWS, Docker, Bitbucket Pipelines',
            '[★★★★☆] Methodologies        : TDD/BDD, API Contract Testing, POM, Enterprise Scaling'
          ]
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: [
            '================ FEATURED REPOSITORIES ================',
            '1. Playwright-GenAI-Auto',
            '   -> E2E framework with OpenAI integration for self-healing locators.',
            '   -> Link: https://github.com/theravijadav/Playwright-GenAI-Auto',
            '',
            '2. Playwright-Salesforce-Enterprise',
            '   -> Enterprise Salesforce test automation boilerplate with encrypted secrets.',
            '   -> Link: https://github.com/theravijadav/Playwright-Salesforce-Enterprise',
            '',
            '3. API-Contract-Sentinel',
            '   -> CLI tool monitoring OpenAPI schemas against deployed backends.',
            '   -> Link: https://github.com/theravijadav/API-Contract-Sentinel'
          ]
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          content: [
            '================ PROFESSIONAL EXPERIENCE ================',
            '[ 2026 - Pres ] Senior Software Engineer @ Zendesk | AI E2E Migration',
            '[ 2024 - 2026 ] Senior QA Automation Engineer @ Roofr | Playwright MCP, 0% Bug Rate',
            '[ 2021 - 2025 ] Intermediate Software Engineer @ Paramount Commerce | 95% Coverage',
            '[ 2015 - 2019 ] Senior QA Engineer @ Cygnet Infotech | TDD & Pipeline Optimization'
          ]
        });
        break;

      case 'audit':
        newHistory.push({
          type: 'output',
          content: [
            '🔍 Triggering Live Site Auditor on the main viewport...',
            'Check the Hero section to view the live scanning telemetry!'
          ]
        });
        if (onTriggerAudit) {
          onTriggerAudit();
        }
        break;

      case 'theme':
        if (arg === 'dracula' || arg === 'nord' || arg === 'vscode') {
          setTheme(arg);
          newHistory.push({
            type: 'output',
            content: [`Theme successfully switched to: ${arg.toUpperCase()}`]
          });
        } else {
          newHistory.push({
            type: 'output',
            content: [
              `Current Theme: ${theme.toUpperCase()}`,
              'Usage: theme [vscode | dracula | nord]'
            ]
          });
        }
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: [
            '================ CONTACT INFORMATION ================',
            '✉ Email    : theravijadav@gmail.com',
            '🔗 LinkedIn : https://linkedin.com/in/ravijadav',
            '🔗 GitHub   : https://github.com/ravijadav-dev',
            '📄 Resume   : /ravijadav-dev.github.io/Ravi%20Jadav%20-%20Resume.pdf'
          ]
        });
        break;

      case 'ls':
        newHistory.push({
          type: 'output',
          content: ['about.txt   experience.md   skills.json   projects/   resume.pdf']
        });
        break;

      case 'cat':
        if (arg === 'about.txt') {
          newHistory.push({
            type: 'output',
            content: ['Senior QA Automation Lead dedicated to flawless software deployment.']
          });
        } else if (arg === 'resume.pdf') {
          window.open('/ravijadav-dev.github.io/Ravi%20Jadav%20-%20Resume.pdf', '_blank');
          newHistory.push({
            type: 'output',
            content: ['Opening resume in new browser tab...']
          });
        } else if (arg === 'skills.json' || arg === 'experience.md') {
          newHistory.push({
            type: 'output',
            content: [`Type "${arg.split('.')[0]}" command for full structured view.`]
          });
        } else {
          newHistory.push({
            type: 'output',
            content: [`cat: ${arg || ''}: No such file or directory. Try 'ls'.`]
          });
        }
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        newHistory.push({
          type: 'output',
          content: [
            '🔒 Permission denied: Recruiter privileges do not include root access!',
            'Nice try though 😉 Contact theravijadav@gmail.com to unlock full engineering mode.'
          ]
        });
        break;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'output',
          content: [
            `bash: command not found: ${command}`,
            'Type "help" to view available commands.'
          ]
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const MotionDiv = motion.div;

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`fixed z-50 ${
            isMaximized
              ? 'inset-4 md:inset-8'
              : 'bottom-6 right-6 left-6 md:left-auto md:w-[680px] h-[480px]'
          } rounded-2xl border border-white/20 glass flex flex-col shadow-2xl overflow-hidden font-mono bg-darker/95 text-light`}
        >
          {/* Terminal Header bar */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center text-red-950 font-bold opacity-80 hover:opacity-100"
                title="Close"
              >
                <X className="w-2.5 h-2.5" />
              </button>
              <button
                onClick={() => setIsMaximized(false)}
                className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center text-yellow-950 font-bold opacity-80 hover:opacity-100"
                title="Minimize"
              >
                <Minus className="w-2.5 h-2.5" />
              </button>
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center text-green-950 font-bold opacity-80 hover:opacity-100"
                title={isMaximized ? "Restore" : "Maximize"}
              >
                {isMaximized ? <Minimize2 className="w-2.5 h-2.5" /> : <Maximize2 className="w-2.5 h-2.5" />}
              </button>
              <span className="text-xs text-muted ml-2 flex items-center gap-1.5 font-medium font-sans">
                <Terminal className="w-4 h-4 text-primary" /> ravijadav@portfolio ~ zsh
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30 uppercase text-[10px] font-bold tracking-wider">
                {theme}
              </span>
              <button
                onClick={onClose}
                className="hover:text-white transition-colors"
                title="Close Terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Content / Log output */}
          <div
            className="flex-1 p-4 overflow-y-auto text-xs space-y-3 leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.type === 'input' && (
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span>ravijadav@portfolio:~$</span>
                    <span className="text-white">{item.content}</span>
                  </div>
                )}

                {item.type === 'system' && (
                  <div className="text-accent/90 font-medium whitespace-pre-wrap">
                    {Array.isArray(item.content) ? item.content.join('\n') : item.content}
                  </div>
                )}

                {item.type === 'output' && (
                  <div className="text-light/80 whitespace-pre-wrap pl-2 border-l-2 border-white/10 py-0.5">
                    {Array.isArray(item.content) ? item.content.join('\n') : item.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Command Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="border-t border-white/10 p-3 bg-white/5 flex items-center gap-2"
          >
            <span className="text-primary font-bold text-xs select-none">ravijadav@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white outline-none text-xs font-mono caret-primary placeholder:text-muted/40"
              placeholder="Type command (e.g., help, skills, audit, clear)..."
              autoFocus
            />
          </form>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default DeveloperCli;
