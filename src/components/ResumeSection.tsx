import React, { useState } from 'react';
import { Download, Printer, Eye, FileText, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'pdf'>('preview');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              08. Curriculum Vitae
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Resume & Credentials
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Download the official PDF resume or review the formatted interactive document preview below.
            </p>
          </div>

          {/* Action buttons & View mode toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </button>

              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'pdf'
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Embedded PDF</span>
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Primary Download Button */}
            <a
              href={portfolioData.resume.downloadPath}
              download={portfolioData.resume.fileName}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 transition-colors shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Embedded Viewer Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
          {activeTab === 'pdf' ? (
            /* Embedded PDF Iframe Preview */
            <div className="w-full h-[700px] bg-slate-950 flex flex-col">
              <div className="p-3 bg-slate-800/90 text-slate-300 text-xs flex items-center justify-between px-6 border-b border-slate-700">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>Viewing: {portfolioData.resume.fileName}</span>
                </span>
                <a
                  href={portfolioData.resume.downloadPath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:underline"
                >
                  Open in New Tab
                </a>
              </div>
              <iframe
                src={`${portfolioData.resume.downloadPath}#toolbar=0&navpanes=0`}
                title="Aravindhan M Resume PDF Preview"
                className="w-full flex-1 border-0"
              />
            </div>
          ) : (
            /* Styled Interactive Document View (Print-Ready) */
            <div className="p-8 sm:p-12 max-w-4xl mx-auto space-y-8 print-area">
              {/* Resume Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {portfolioData.personal.name}
                    </h3>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                      {portfolioData.personal.role}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 sm:text-right font-medium">
                    <p>{portfolioData.personal.email}</p>
                    <p>{portfolioData.personal.displayPhone}</p>
                    <p>{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Profile Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {portfolioData.personal.profileSummary}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-teal-500" />
                  <span>Education</span>
                </h4>

                <div className="space-y-3">
                  {portfolioData.education.map((edu) => (
                    <div key={edu.id} className="text-xs sm:text-sm">
                      <div className="flex justify-between items-baseline font-semibold text-slate-900 dark:text-white">
                        <span>{edu.degree} · {edu.institution}</span>
                        <span className="font-mono text-teal-600 dark:text-teal-400 font-bold shrink-0">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {edu.period} · {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Technical & Professional Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Programming:</span>{' '}
                    <span className="text-slate-600 dark:text-slate-300">Java, Python</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Web Technologies:</span>{' '}
                    <span className="text-slate-600 dark:text-slate-300">HTML5, CSS3, Responsive Design</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Mobile & Backend:</span>{' '}
                    <span className="text-slate-600 dark:text-slate-300">Flutter, Firebase (Learning)</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">Soft Skills:</span>{' '}
                    <span className="text-slate-600 dark:text-slate-300">Teamwork, Problem-solving, Pitching</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Key Projects
                </h4>

                <div className="space-y-4">
                  {portfolioData.projects.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        <span>{proj.title} – {proj.subtitle}</span>
                        <span className="text-xs text-slate-400 font-mono shrink-0">{proj.period}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {proj.description}
                      </p>
                      <p className="text-[11px] font-mono text-teal-600 dark:text-teal-400">
                        Tech: {proj.techStack.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience & Achievements */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Experience & Key Achievements
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Web Development Intern · MECHNIDO
                    </span>{' '}
                    (13 June 2026 – 29 June 2026): Completed hands-on web development training with experienced professionals.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      3rd Place · Design Thinking (DT) Expo:
                    </span>{' '}
                    SNS College of Technology innovation challenge.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Competitive Hackathons:
                    </span>{' '}
                    Participated in 6 Hackathons (3 in 2nd year [2 online, 1 offline], 3 in 1st year) + 1 Idea Pitching event.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
