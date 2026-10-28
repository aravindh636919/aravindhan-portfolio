import React from 'react';
import { Linkedin, Github, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#070b14] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {portfolioData.personal.role} · SNS College of Technology
            </p>
          </div>

          {/* Quick Anchor Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-teal-500 transition-colors">About</a>
            <a href="#education" className="hover:text-teal-500 transition-colors">Education</a>
            <a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-500 transition-colors">Experience</a>
            <a href="#hackathons" className="hover:text-teal-500 transition-colors">Hackathons</a>
            <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.socialLinks.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socialLinks.email}
              aria-label="Email"
              className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
