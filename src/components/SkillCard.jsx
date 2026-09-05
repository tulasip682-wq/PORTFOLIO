import React from 'react';
import { Code2, Monitor, Database, Terminal, ShieldAlert } from 'lucide-react';

const getTechColor = (name) => {
  const colors = {
    // Languages
    'Java': 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30 hover:shadow-orange-500/10',
    'JavaScript': 'from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30 hover:shadow-yellow-500/10',
    'HTML': 'from-orange-600/20 to-amber-600/20 text-orange-400 border-orange-600/30 hover:shadow-orange-600/10',
    'CSS': 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30 hover:shadow-blue-500/10',

    // Frontend
    'React': 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 hover:shadow-cyan-500/10',
    'Bootstrap': 'from-purple-600/20 to-indigo-600/20 text-purple-400 border-purple-600/30 hover:shadow-purple-600/10',
    'Tailwind CSS': 'from-teal-400/20 to-cyan-400/20 text-teal-400 border-teal-400/30 hover:shadow-teal-400/10',

    // Backend
    'Node.js': 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30 hover:shadow-green-500/10',
    'Express.js': 'from-slate-400/20 to-slate-500/20 text-slate-300 border-slate-500/30 hover:shadow-slate-500/10',

    // Database
    'MongoDB': 'from-green-600/20 to-emerald-600/20 text-emerald-400 border-green-600/30 hover:shadow-green-600/10',
    'MySQL': 'from-blue-600/20 to-sky-600/20 text-sky-400 border-blue-600/30 hover:shadow-blue-600/10',

    // Tools
    'Git': 'from-orange-600/20 to-red-600/20 text-orange-400 border-orange-600/30 hover:shadow-orange-600/10',
    'GitHub': 'from-slate-300/20 to-slate-500/20 text-slate-200 border-slate-400/30 hover:shadow-slate-300/10',
    'VS Code': 'from-blue-500/20 to-sky-500/20 text-sky-400 border-blue-500/30 hover:shadow-blue-500/10',
    'Postman': 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30 hover:shadow-orange-500/10',
    'Thunder Client': 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30 hover:shadow-violet-500/10',
  };
  return colors[name] || 'from-slate-800/20 to-slate-700/20 text-slate-300 border-slate-700/30';
};

const SkillCard = ({ name }) => {
  const colorClass = getTechColor(name);

  return (
    <div
      className={`relative overflow-hidden group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-tr border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colorClass}`}
    >
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <span className="font-semibold text-sm sm:text-base tracking-wide">{name}</span>
    </div>
  );
};

export default SkillCard;
