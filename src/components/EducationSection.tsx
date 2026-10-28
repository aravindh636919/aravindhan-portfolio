import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            02. Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            My structured learning journey and foundational milestones in computer science and academics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30 dark:border-teal-500/20 space-y-10">
          {education.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-400 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-teal-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  {/* Clean unboxed grade metric with tabular nums */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 font-mono text-xs font-bold w-fit">
                    <Award className="w-3.5 h-3.5 text-teal-500" />
                    <span>{item.grade}</span>
                  </div>
                </div>

                {/* Subtitle & Metadata (Unboxed text with dots) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {item.institution}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1 font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
