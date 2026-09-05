import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Github } from './SocialIcons';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, isPlaceholder }) => {
  if (isPlaceholder) {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative overflow-hidden h-full min-h-[300px] flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-dashed border-white/20 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-50" />
        <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center mb-4 border border-white/10 text-purple-400 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-200 mb-2">More Coming Soon</h3>
        <p className="text-slate-400 max-w-[240px] text-sm">
          Working on some exciting new projects involving Data Analytics and Full Stack Development.
        </p>
      </motion.div>
    );
  }

  const { title, description, tech, liveUrl, gitUrl, highlights } = project;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative overflow-hidden h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
    >
      {/* Background Gradient Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm sm:text-base mb-4 leading-relaxed">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-1.5 mb-6">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all active:scale-95"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
