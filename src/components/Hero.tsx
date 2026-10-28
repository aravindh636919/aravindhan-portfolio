import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  Mail,
  Linkedin,
  Github,
  Phone,
  Camera,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { portfolioData } from '../portfolioData';

interface HeroProps {
  onOpenPhotoModal: () => void;
  currentPhoto: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoModal, currentPhoto }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = portfolioData.personal.typingRoles;

  // Typing effect loop
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(100);

        if (displayedText.length + 1 === currentRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting characters
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(50);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs font-medium border border-teal-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Available for Software Development Roles & Projects</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400">{portfolioData.personal.name}</span>
              </h1>
              
              {/* Dynamic typing role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200">
                  I am a{' '}
                  <span className="text-teal-600 dark:text-teal-400 border-r-2 border-teal-500 pr-1 animate-pulse">
                    {displayedText}
                  </span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-xl mx-auto lg:mx-0">
              "{portfolioData.personal.tagline}"
            </p>

            {/* Profile Brief */}
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              B.E. Computer Science and Engineering student at SNS College of Technology.
              Passionate about building practical software, participating in competitive hackathons,
              and transforming ideas into reliable digital products.
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.resume.downloadPath}
                download
                className="px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-500/10 border border-teal-500/30 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                Connect
              </span>
              <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700"></span>

              <a
                href={portfolioData.socialLinks.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile of Aravindhan M"
                className="p-2 rounded-lg hover:text-teal-500 hover:bg-teal-500/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile of Aravindhan M"
                className="p-2 rounded-lg hover:text-teal-500 hover:bg-teal-500/10 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.socialLinks.email}
                aria-label="Email Aravindhan M"
                className="p-2 rounded-lg hover:text-teal-500 hover:bg-teal-500/10 transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={portfolioData.socialLinks.phone}
                aria-label="Call Aravindhan M"
                className="p-2 rounded-lg hover:text-teal-500 hover:bg-teal-500/10 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular / Rounded Hero Photo with subtle border & glow */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer decorative ambient glow ring */}
              <div
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-teal-500 via-cyan-400 to-violet-600 opacity-60 group-hover:opacity-90 blur-md transition duration-500"
                aria-hidden="true"
              />

              {/* Inner photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-slate-900 border-2 border-teal-400/40 shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={currentPhoto}
                  alt="Aravindhan M - B.E. Computer Science and Engineering student"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback container if local path fails
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Change photo overlay button */}
                <button
                  onClick={onOpenPhotoModal}
                  aria-label="Change or upload profile photo"
                  className="absolute bottom-3 right-3 bg-slate-900/90 text-teal-400 border border-teal-500/40 hover:bg-teal-400 hover:text-slate-950 p-2.5 rounded-full shadow-lg transition-all duration-200"
                  title="Customize or upload photo"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-3 -left-4 sm:left-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                    Achievement
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    3rd Place DT Expo
                  </p>
                </div>
              </div>
            </div>

            {/* Quick helper note */}
            <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 text-center">
              Coimbatore, Tamil Nadu · SNS College of Technology
            </p>
          </div>
        </div>

        {/* Domain Reference Compliant: Key metrics in a full-width row below the hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center sm:text-left">
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
              6
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Hackathons & Pitching
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">1st & 2nd Year sprints</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
              8.4
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              B.E. CSE CGPA
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">SNS College of Tech</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
              2+
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Core Projects
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">GigTrust & Study Notes</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
              MECHNIDO
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              Web Dev Intern
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">Industrial Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};
