import React from 'react';
import { Target, Compass, Sparkles, BookOpen, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
            01. Background & Vision
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me & Passion
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Passion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-base space-y-4">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                {personal.profileSummary}
              </p>

              <p>
                My journey in computer science began with curious exploration of algorithms and building small tools in Python and Java. Over time, that curiosity evolved into a dedicated drive to engineer end-to-end digital experiences—spanning responsive web interfaces and mobile solutions.
              </p>

              <p>
                Whether it's competing against time at hackathons to pitch a solution or building scalable modules during my web development internship at MECHNIDO, I thrive in environments that challenge me to learn rapidly and collaborate effectively.
              </p>
            </div>

            {/* Passion Highlight Box */}
            <div className="p-5 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold text-sm">
                <Target className="w-4 h-4" />
                <span>My Core Passion</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {personal.passion}
              </p>
            </div>
          </div>

          {/* Quick Info & Focus Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Details Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Quick Profile Facts
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Current Status</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    CSE Student (SNSCT)
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Degree</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    B.E. Computer Science
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    Tamil Nadu, India
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Languages</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-right">
                    English, Tamil
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Core Focus</span>
                  <span className="font-semibold text-teal-600 dark:text-teal-400 text-right">
                    Software Dev & Problem Solving
                  </span>
                </div>
              </div>
            </div>

            {/* What Drives Me */}
            <div className="p-5 rounded-2xl bg-teal-500/5 dark:bg-teal-950/20 border border-teal-500/20 space-y-3">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>Development Philosophy</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                "Simple, well-crafted code that directly benefits people always beats over-complicated architecture. Build with empathy, test with rigor, and ship with pride."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
