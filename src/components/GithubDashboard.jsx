import React, { useState } from 'react';
import { useGitHubData } from '../hooks/useGitHubData';
import { Folder, Star, GitFork, Users, BookOpen, ExternalLink, Loader2 } from 'lucide-react';
import { Github } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';

const GithubDashboard = () => {
  const { profile, repos, stats, loading, error } = useGitHubData();
  const [activeTab, setActiveTab] = useState('top'); // 'top' or 'latest'

  const gitHubProfileUrl = "https://github.com/tulasip682-wq";

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[350px] p-8 rounded-3xl bg-slate-900/40 border border-white/10 max-w-4xl mx-auto">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400 text-sm">Dynamically loading live GitHub profile metrics...</p>
      </div>
    );
  }

  // Fallbacks if data fails to load but fallback utility handles it
  const user = profile || {
    avatar_url: 'https://avatars.githubusercontent.com/u/161474581?v=4',
    name: 'Tulasi Priya G',
    login: 'tulasip682-wq',
    bio: 'Computer Science with Data Analytics Student | Full Stack Developer',
    followers: 0,
    following: 0,
    public_repos: 0
  };

  const listRepos = activeTab === 'top' ? stats.topRepos : stats.latestRepos;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* GitHub Profile Summary Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10 shrink-0">
            <img src={user.avatar_url} alt={user.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              {user.name}
              <span className="text-xs font-normal text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                @{user.login}
              </span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
              {user.bio}
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                <Users className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-semibold text-white">{user.followers}</span> Followers
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                <Users className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-semibold text-white">{user.following}</span> Following
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">{user.public_repos}</span> Public Repos
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 flex justify-center">
          <a
            href={gitHubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-blue-500/30 text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Grid of Languages & Repository List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Language Statistics */}
        <div className="p-6 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 lg:col-span-1 shadow-xl">
          <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-1.5 h-3 rounded-full bg-blue-500" />
            Languages Used
          </h4>
          
          {stats.languages && stats.languages.length > 0 ? (
            <div className="space-y-4">
              {stats.languages.slice(0, 5).map((lang) => {
                const getBarColor = (name) => {
                  const colors = {
                    'JavaScript': 'bg-yellow-400 shadow-yellow-400/20',
                    'HTML': 'bg-orange-500 shadow-orange-500/20',
                    'CSS': 'bg-blue-500 shadow-blue-500/20',
                    'Java': 'bg-orange-600 shadow-orange-600/20',
                    'Vue': 'bg-emerald-500 shadow-emerald-500/20',
                    'Python': 'bg-sky-500 shadow-sky-500/20',
                  };
                  return colors[name] || 'bg-slate-500 shadow-slate-500/20';
                };
                return (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                      <span className="font-semibold text-slate-300">{lang.name}</span>
                      <span className="font-bold text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${getBarColor(lang.name)}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-slate-500 text-sm">No language data found.</p>
          )}
        </div>

        {/* Repository Dashboard Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('top')}
                className={`pb-3 text-sm sm:text-base font-bold tracking-wide relative transition-colors ${
                  activeTab === 'top' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Top Repositories
                {activeTab === 'top' && (
                  <motion.div layoutId="activeTabGlow" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-500" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('latest')}
                className={`pb-3 text-sm sm:text-base font-bold tracking-wide relative transition-colors ${
                  activeTab === 'latest' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Latest Repositories
                {activeTab === 'latest' && (
                  <motion.div layoutId="activeTabGlow" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-500" />
                )}
              </button>
            </div>
            
            <span className="text-xs text-slate-500 font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded-md hidden sm:inline-block">
              Live GitHub REST Data
            </span>
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {listRepos.length > 0 ? (
                  listRepos.map((repo) => (
                    <a
                      key={repo.id || repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-5 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-blue-500/20 hover:bg-slate-900/60 shadow-md hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-blue-400 mb-2">
                          <Folder className="w-4 h-4 shrink-0 text-blue-500" />
                          <span className="font-bold text-sm text-slate-100 group-hover:text-blue-400 transition-colors truncate">
                            {repo.name}
                          </span>
                        </div>
                        
                        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                          {repo.description || "No description provided."}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-white/5">
                        {repo.language && (
                          <span className="font-semibold text-slate-400">
                            {repo.language}
                          </span>
                        )}
                        
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-yellow-500/80 fill-current" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5 text-blue-500/80" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-10 text-slate-500 text-sm">
                    No repositories found to list.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubDashboard;
