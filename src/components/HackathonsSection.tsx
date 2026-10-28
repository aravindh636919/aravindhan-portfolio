import React, { useEffect, useState, useRef } from 'react';
import { Flame, Target, Users, Zap, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const HackathonsSection: React.FC = () => {
  const { hackathons } = portfolioData;
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter state
  const [totalCount, setTotalCount] = useState(0);
  const [secondYearCount, setSecondYearCount] = useState(0);
  const [firstYearCount, setFirstYearCount] = useState(0);
  const [pitchCount, setPitchCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setTotalCount(Math.round(6 * progress));
            setSecondYearCount(Math.round(3 * progress));
            setFirstYearCount(Math.round(3 * progress));
            setPitchCount(Math.round(1 * progress));

            if (currentStep >= steps) {
              clearInterval(interval);
              setTotalCount(6);
              setSecondYearCount(3);
              setFirstYearCount(3);
              setPitchCount(1);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="hackathons"
      ref={sectionRef}
      className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            07. Competitive Sprints
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hackathons & Activities
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
            {hackathons.summary}
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Hackathons */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-3">
              <Flame className="w-5 h-5" />
            </div>
            <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
              {totalCount}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mt-2">
              Total Hackathons
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sprint competitions across 1st & 2nd year
            </p>
          </div>

          {/* 2nd Year Hackathons */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
              {secondYearCount}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mt-2">
              2nd Year Hackathons
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              2 Online sprints + 1 Offline hackathon
            </p>
          </div>

          {/* 1st Year Hackathons */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
              {firstYearCount}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mt-2">
              1st Year Hackathons
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Early sprint coding & team collaboration
            </p>
          </div>

          {/* Idea Pitching Event */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
              {pitchCount}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mt-2">
              Idea Pitching Event
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              1st Year competitive pitch to jury
            </p>
          </div>
        </div>

        {/* Detailed Timeline Breakdown */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
            Activities & Participation Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hackathons.activities.map((act, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="font-mono">{act.timeline}</span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400">
                      {act.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {act.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
