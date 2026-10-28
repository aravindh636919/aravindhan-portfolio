import React from 'react';
import { Trophy, Award, CheckCircle2, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const CertificationsAndAchievements: React.FC = () => {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            06. Recognitions & Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            Verified course completions and competitive awards earned through innovation and applied design.
          </p>
        </div>

        {/* Top Highlight: 3rd Place Design Thinking (DT) Expo */}
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-violet-500/10 dark:from-amber-950/30 dark:via-slate-900/80 dark:to-violet-950/30 border-2 border-amber-400/50 dark:border-amber-500/40 shadow-lg relative overflow-hidden"
          >
            {/* Ambient background sparkle */}
            <div
              className="absolute -right-8 -top-8 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Prominent Golden Trophy Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shrink-0">
                <Trophy className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-amber-400 text-slate-950 uppercase tracking-wider">
                    Distinguished Award
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {ach.place} · {ach.event}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {ach.title} · {ach.event}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                  Issued by: {ach.issuer}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Certifications Grid */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-500" />
            <span>Course Certifications & Project Expos</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                    {cert.category}
                  </span>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </span>
                  {cert.date && <span className="font-mono">{cert.date}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
