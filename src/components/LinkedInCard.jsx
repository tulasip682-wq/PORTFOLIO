import React from 'react';
import { Users, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';

const LinkedInCard = ({ profilePic }) => {
  const linkedInUrl = "https://www.linkedin.com/in/tulasi-priya-0bb183321/";
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative max-w-xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl hover:border-blue-500/30 transition-all"
    >
      {/* LinkedIn Header Banner */}
      <div className="h-32 bg-gradient-to-r from-blue-700 via-indigo-800 to-indigo-950 relative">
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-yellow-400 px-3 py-1 rounded-full uppercase">
          Premium
        </div>
      </div>

      {/* Profile Details Container */}
      <div className="px-6 pb-6 pt-0 relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
        {/* Avatar */}
        <div className="-mt-16 w-28 h-28 rounded-full border-4 border-slate-950 overflow-hidden bg-slate-800 shadow-xl shrink-0">
          <img
            src={profilePic || 'https://avatars.githubusercontent.com/u/161474581?v=4'}
            alt="Tulasi Priya G"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Identity & Details */}
        <div className="pt-2 flex-grow">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            Tulasi Priya G
            <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
              1st
            </span>
          </h3>
          
          <p className="text-slate-200 font-semibold text-sm sm:text-base mt-1">
            Computer Science with Data Analytics Student
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
            Full Stack MERN Developer | Java Developer
          </p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Tamil Nadu, India
            </span>
            <span className="flex items-center gap-1 text-blue-400 font-medium">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              500+ connections
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mx-6" />

      {/* Summary / Bio */}
      <div className="p-6">
        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-blue-500" />
          About Summary
        </h4>
        <p className="text-slate-300 text-sm leading-relaxed">
          I am a passionate Computer Science with Data Analytics student specializing in Full Stack MERN development and Java programming. I enjoy building analytical interfaces, solving complex programmatic puzzles, and constructing scalable web architecture. Let's connect!
        </p>

        {/* Visit Button */}
        <div className="mt-6 flex justify-center sm:justify-end">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            Visit LinkedIn Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedInCard;
