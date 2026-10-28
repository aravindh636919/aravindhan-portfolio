import React, { useState } from 'react';
import {
  Code2,
  Coffee,
  FileCode,
  Palette,
  Layout,
  Braces,
  Smartphone,
  Flame,
  Users,
  Brain,
  Presentation,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<'all' | string>('all');

  // Helper for dynamic icon mapping
  const renderSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-500" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'Braces':
        return <Braces className="w-5 h-5 text-yellow-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-violet-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-pink-400" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
    }
  };

  const filteredCategories =
    selectedFilter === 'all'
      ? skills
      : skills.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              03. Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              An honest, transparent overview of technologies I actively code in, frameworks I am currently learning, and collaboration skills.
            </p>
          </div>

          {/* Interactive filter tabs (Allowed as segmented buttons per Frontend Design Constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl w-fit">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skills.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedFilter === cat.id
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 transition-colors shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  {category.badge && (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Skills Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-3 group hover:border-teal-500/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                          {renderSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>

                      {skill.level && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 shrink-0 font-mono">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Note for Mobile/Backend */}
              {category.id === 'mobile-backend' && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-xs text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Currently building GigTrust using Flutter & Firebase</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
