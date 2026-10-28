import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData, ProjectItem } from '../portfolioData';
import { InteractiveStudyNotesModal } from './InteractiveStudyNotesModal';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedDemoProject, setSelectedDemoProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            04. Engineered Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Practical technology solutions built to solve real-world community and academic challenges.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim for contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Status & Date Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md shadow-xs ${
                        project.status === 'In Progress'
                          ? 'bg-amber-400/90 text-slate-950'
                          : 'bg-teal-400/90 text-slate-950'
                      }`}
                    >
                      {project.status === 'In Progress' ? '● In Progress' : '✓ Completed'}
                    </span>

                    <span className="text-[11px] font-medium text-slate-200 bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-teal-500 font-bold shrink-0">·</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack (Unboxed text with dots per constitution) */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans font-bold">
                      Stack:
                    </span>
                    {project.techStack.map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        {tIdx > 0 && <span aria-hidden="true">·</span>}
                        <span className="text-slate-700 dark:text-slate-300">{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 pt-0 flex items-center gap-3 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.hasInteractiveDemo ? (
                  <button
                    onClick={() => setSelectedDemoProject(project.id)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Try Live Demo</span>
                  </button>
                ) : (
                  <a
                    href={project.liveDemoUrl || '#'}
                    onClick={(e) => {
                      if (!project.liveDemoUrl || project.liveDemoUrl === '#') {
                        e.preventDefault();
                        alert('GigTrust is currently in active development. Stay tuned for the APK and test flight deployment!');
                      }
                    }}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-500/10 border border-teal-500/30 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Modal */}
      <InteractiveStudyNotesModal
        isOpen={selectedDemoProject === 'study-notes-generator'}
        onClose={() => setSelectedDemoProject(null)}
      />
    </section>
  );
};
