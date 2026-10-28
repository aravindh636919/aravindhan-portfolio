import React from 'react';
import { Github, Star, GitFork, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const GitHubSection: React.FC = () => {
  const repos = [
    {
      name: 'GigTrust',
      description: 'Hyper-local mobile service discovery and worker rating platform built with Flutter and Firebase.',
      language: 'Dart',
      languageColor: '#00B4AB',
      stars: 4,
      forks: 1,
      url: 'https://github.com/aravindh636919/GigTrust',
    },
    {
      name: 'Study-Notes-Generator',
      description: 'Python & Web app synthesizing university exam-oriented answers for 2, 3, 13, and 16 mark patterns using AI.',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 6,
      forks: 2,
      url: 'https://github.com/aravindh636919/Study-Notes-Generator',
    },
    {
      name: 'mechnido-web-dev-training',
      description: 'Structured responsive frontend components, DOM utilities, and training exercises from MECHNIDO internship.',
      language: 'HTML / CSS',
      languageColor: '#e34c26',
      stars: 3,
      forks: 0,
      url: 'https://github.com/aravindh636919',
    },
    {
      name: 'java-dsa-problem-solving',
      description: 'Foundational algorithms, recursion, binary search, and data structures implemented in Java for competitive programming.',
      language: 'Java',
      languageColor: '#b07219',
      stars: 5,
      forks: 1,
      url: 'https://github.com/aravindh636919',
    },
  ];

  return (
    <section className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & GitHub CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
              09. Open Source & Code
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <Github className="w-8 h-8 text-slate-900 dark:text-white" />
              <span>GitHub Activity</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl">
              Explore my codebases, experimental prototypes, and academic project repositories on GitHub.
            </p>
          </div>

          <a
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm flex items-center gap-2 w-fit whitespace-nowrap"
          >
            <Github className="w-4 h-4" />
            <span>View All Repositories (@aravindh636919)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              {/* Repo Footer Metadata */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {repo.language}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
