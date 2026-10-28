import React, { useState } from 'react';
import { X, Sparkles, Download, Copy, Check, FileText, BookOpen } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface InteractiveStudyNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveStudyNotesModal: React.FC<InteractiveStudyNotesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [topic, setTopic] = useState('Operating System Deadlock Prevention');
  const [marks, setMarks] = useState<'2' | '3' | '13' | '16'>('13');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedNotes, setGeneratedNotes] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleTopics = [
    'Operating System Deadlock Prevention',
    'Binary Search Tree Operations & AVL Balance',
    'Database Normalization (1NF to BCNF)',
    'Object-Oriented Programming Principles in Java',
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      let content = '';
      const subject = topic.trim() || 'Computer Science Subject Topic';

      if (marks === '2') {
        content = `EXAM NOTES: ${subject.toUpperCase()} (2 MARKS)
======================================================
1. DEFINITION:
   ${subject} is a fundamental computational mechanism designed to ensure deterministic system stability and resource safety during concurrent execution.

2. KEY HIGHLIGHT:
   Prevents unrecoverable starvation states by enforcing mutual validation invariants before granting resource control.`;
      } else if (marks === '3') {
        content = `EXAM NOTES: ${subject.toUpperCase()} (3 MARKS)
======================================================
1. CORE DEFINITION:
   ${subject} specifies the algorithmic constraints required for safe multi-task coordination and execution state management.

2. THREE ESSENTIAL CHARACTERISTICS:
   • Deterministic Pre-condition: Ensures resources are held only when cyclic wait conditions cannot occur.
   • Scalable Overhead: Minimal scheduling latency during average runtime operations.
   • Recovery Safeguard: Automated rollback capability to prior safe checkpoints in the event of system contention.`;
      } else if (marks === '13') {
        content = `EXAM NOTES: ${subject.toUpperCase()} (13 MARKS DESCRIPTIVE)
======================================================
I. INTRODUCTION & PROBLEM CONTEXT
   In modern computer systems, ${subject} addresses critical performance and consistency bottlenecks. Without strict formal control, concurrent threads can encounter race hazards or irreversible system freeze.

II. THEORETICAL PRINCIPLES & SYSTEM ARCHITECTURE
   • Resource Allocation Graphs (RAG): Models system processes and resources as directed bipartite graphs to detect potential cycles.
   • Banker's Algorithm Invariant: Computes whether granting an immediate request leaves the system in a globally safe state.
   • Four Coffman Conditions: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait. Nullifying any one of these four conditions guarantees freedom from deadlocks.

III. IMPLEMENTATION & PROTOCOL PHASES
   1. Request Verification Phase: Validates process allocation limits against available vector thresholds.
   2. Preemptive Release Phase: Safely deallocates peripheral handles if a higher priority process requests immediate execution.
   3. Checkpointing & State Snapshot: Periodically commits consistent memory states to durable non-volatile storage.

IV. ADVANTAGES & TRADE-OFFS
   • Advantages: Complete prevention of indefinite blocking, guaranteed thread termination within bounded latency.
   • Trade-offs: Conservative resource utilization due to worst-case reservation buffers.

V. CONCLUSION
   Implementing ${subject} provides robust fault tolerance, making it indispensable for real-time operating systems, distributed database engines, and mission-critical enterprise infrastructure.`;
      } else {
        content = `EXAM NOTES: ${subject.toUpperCase()} (16 MARKS COMPREHENSIVE ANALYSIS)
======================================================
I. EXHAUSTIVE OVERVIEW & DESIGN SPECIFICATION
   ${subject} represents an essential architectural pillar in university computer science curricula and industrial software engineering. This comprehensive answer explores foundational theory, mathematical models, implementation workflows, comparative trade-offs, and industrial case studies.

II. DETAILED SYSTEM COMPONENTS
   A. Process State Matrix (Allocation & Maximum Vectors)
      Tracks instantaneous resource requirements against process claim caps to compute available surplus.
   B. Precedence Graphs & Conflict Resolution
      Enforces topological sort ordering on interdependent subroutines.
   C. Watchdog & Heartbeat Monitors
      Continuously polls process responsiveness to trigger pre-emptive mitigation before timeout bounds expire.

III. STEP-BY-STEP ALGORITHMIC PROCEDURE
   Step 1: Process P_i issues request vector Req_i.
   Step 2: If Req_i <= Need_i, proceed; else raise runtime limit error.
   Step 3: If Req_i <= Available, temporarily assume allocation; verify safety algorithm.
   Step 4: If safe state persists, grant resource; otherwise block P_i and restore prior vectors.

IV. COMPARATIVE MATRIX (Prevention vs Avoidance vs Detection)
   • Prevention: Rigid protocol constraints; lower throughput but zero deadlock probability.
   • Avoidance: Dynamic state evaluation (Banker's Algorithm); moderate overhead with optimized throughput.
   • Detection & Recovery: Periodic cycle checking; highest runtime utilization but demands rollback mechanisms.

V. REAL-WORLD INDUSTRIAL APPLICATION
   Employed in Linux kernel scheduler lockdep diagnostics, high-throughput financial transaction logs, and cloud container orchestrators like Kubernetes.

VI. SUMMARY & CRITICAL FINDINGS
   A holistic understanding of ${subject} enables engineers to balance system throughput against safety guarantees, ensuring scalable concurrent execution across distributed environments.`;
      }

      setGeneratedNotes(content);
      setIsGenerating(false);
    }, 450);
  };

  const handleCopyToClipboard = () => {
    if (!generatedNotes) return;
    navigator.clipboard.writeText(generatedNotes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!generatedNotes) return;
    const blob = new Blob([generatedNotes], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/[^a-zA-Z0-9]/g, '_')}_${marks}Marks_Notes.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdf = () => {
    if (!generatedNotes) return;
    const doc = new jsPDF();
    doc.setFont('courier', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);

    const splitText = doc.splitTextToSize(generatedNotes, 180);
    doc.text(splitText, 15, 20);
    doc.save(`${topic.replace(/[^a-zA-Z0-9]/g, '_')}_${marks}Marks_Notes.pdf`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                Study Notes Generator · Live Interactive Demo
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Created by Aravindhan M (Python, HTML, CSS, ChatGPT API)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Topic Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Enter Academic Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Operating System Deadlock Prevention..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            />

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 mr-1">Suggestions:</span>
              {sampleTopics.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setTopic(s)}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Marks Selection (2, 3, 13, 16 marks per prompt) */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Target Answer Marks (University Pattern)
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {(['2', '3', '13', '16'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMarks(m)}
                  className={`py-2 px-3 rounded-xl text-center text-xs font-bold transition-all ${
                    marks === m
                      ? 'bg-teal-500 text-slate-950 shadow-sm scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="block text-sm">{m} Marks</span>
                  <span className="text-[10px] opacity-80 block font-normal">
                    {m === '2' ? 'Definition' : m === '3' ? 'Key Points' : m === '13' ? 'Descriptive' : 'Full Analysis'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim()}
            className="w-full py-2.5 px-4 bg-teal-400 hover:bg-teal-300 disabled:opacity-50 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                <span>Synthesizing Exam Notes...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Synthesize Exam Notes</span>
              </>
            )}
          </button>

          {/* Generated Result Output */}
          {generatedNotes && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-teal-500" />
                  Generated Output ({marks} Marks)
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyToClipboard}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handleDownloadTxt}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>TXT</span>
                  </button>

                  <button
                    onClick={handleDownloadPdf}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500/20 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto">
                {generatedNotes}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
