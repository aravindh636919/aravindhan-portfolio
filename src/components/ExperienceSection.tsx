import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const ExperienceSection: React.FC = () => {
  const { internships } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            05. Professional Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Practical industry exposure and structured training under seasoned engineering professionals.
          </p>
        </div>

        {/* Internship Experience Cards */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-teal-500/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {internship.role}
                    </h3>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                      {internship.company}
                    </p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80">
                    <Calendar className="w-3.5 h-3.5 text-teal-500" />
                    <span>{internship.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    <span>{internship.location}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {internship.description}
                </p>

                {/* Highlights */}
                {internship.highlights && internship.highlights.length > 0 && (
                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      Key Takeaways & Contributions:
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {internship.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
