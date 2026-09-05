import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Download, Mail, BookOpen, Calendar, 
  MapPin, GraduationCap, Award, Shield, Sparkles, Check 
} from 'lucide-react';

import Typewriter from '../components/Typewriter';
import CanvasParticles from '../components/CanvasParticles';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';
import GithubDashboard from '../components/GithubDashboard';
import LinkedInCard from '../components/LinkedInCard';
import ContactForm from '../components/ContactForm';
import { useGitHubData } from '../hooks/useGitHubData';

const Home = () => {
  const { profile } = useGitHubData();
  const [activeSkillTab, setActiveSkillTab] = useState('all');

  const roles = [
    'Computer Science with Data Analytics Student',
    'Full Stack MERN Developer',
    'Java Developer'
  ];

  const passions = [
    'MERN Stack', 'Java', 'Full Stack Development', 
    'Problem Solving', 'Data Analytics', 
    'Building scalable web applications', 'Learning new technologies'
  ];

  const skillCategories = {
    languages: ['Java', 'JavaScript', 'HTML', 'CSS'],
    frontend: ['React', 'Bootstrap'],
    backend: ['Node.js', 'Express.js'],
    database: ['MongoDB', 'MySQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Thunder Client']
  };

  const allSkills = [
    ...skillCategories.languages,
    ...skillCategories.frontend,
    ...skillCategories.backend,
    ...skillCategories.database,
    ...skillCategories.tools
  ];

  const projects = [
    {
      title: 'ShopSphere Analytics Dashboard',
      description: 'A complete MERN Stack Sales Analytics Dashboard featuring dynamic data visualizations and responsive panels.',
      highlights: [
        'JWT Authentication & protected endpoints',
        'Sales and revenue analytics tracking widgets',
        'Monthly reports generator & top customers breakdown',
        'Real-time updates via Socket.IO & MongoDB Atlas'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Chart.js'],
      liveUrl: '', // Placeholder
      gitUrl: 'https://github.com/tulasip682-wq/ShopSphere-Dashboard'
    },
    {
      title: 'TravelEase',
      description: 'Responsive travel booking web application featuring interactive forms and payment simulators.',
      highlights: [
        'User authentication & login forms',
        'Travel package query & search capabilities',
        'Dynamic booking selections & ticket reservation flows',
        'Secure payment simulation with Bootstrap UI components'
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: '', // Placeholder
      gitUrl: 'https://github.com/tulasip682-wq/TravelEase'
    },
    {
      title: 'Hebron Enterprises',
      description: 'An integrated digital business platform powered by Flask and SQLite for managing client products and inquiries.',
      highlights: [
        'Admin dashboard for managing and categorizing products',
        'Search and filter controls for seamless product discovery',
        'Customer inquiry portal storing submissions in SQLite database',
        'Robust secure session handling and custom error template pages'
      ],
      tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
      liveUrl: '', // Placeholder
      gitUrl: 'https://github.com/tulasip682-wq/hebron_enterprises'
    }
  ];

  const GITHUB_CERT_BASE = 'https://raw.githubusercontent.com/tulasip682-wq/PORTFOLIO/main/public/certificates';

  const certificates = [
    { title: 'HackerRank Java (Basic)', issuer: 'HackerRank', credentialUrl: `${GITHUB_CERT_BASE}/Hackerrank%20-%20Java.pdf` },
    { title: 'EY Techathon Participation', issuer: 'Ernst & Young', credentialUrl: `${GITHUB_CERT_BASE}/ey%20hackathon.pdf` },
    { title: 'Data Analytics Masterclass', issuer: 'Data Analytics Academy', credentialUrl: `${GITHUB_CERT_BASE}/Data%20Analytics%20-%20Masterclass%20Certificate.pdf` },
    { title: 'HackerRank Problem Solving (Basic)', issuer: 'HackerRank', credentialUrl: `${GITHUB_CERT_BASE}/Problem%20Solving(Basic)%20-%20Hackerrank.pdf` },
    { title: 'Deloitte Job Simulation', issuer: 'Deloitte', credentialUrl: `${GITHUB_CERT_BASE}/Deloitte%20certificate.pdf` },
    { title: 'UX Job Simulation', issuer: 'Lloyds Banking Group', credentialUrl: `${GITHUB_CERT_BASE}/LLYODS%20Banking%20Groups-UX%20Certificate.pdf` },
    { title: 'Java Developer Internship Completion', issuer: 'Internship Completion', credentialUrl: `${GITHUB_CERT_BASE}/Internship%20Completion%20Certificate.pdf` },
    { title: 'Java Developer Internship Offer', issuer: 'Internship Offer', credentialUrl: `${GITHUB_CERT_BASE}/Internship%20Offer%20Letter%20Certificate.pdf` }
  ];

  const achievements = [
    { title: 'Star Performer', desc: 'Consistently recognized for stellar academic project execution.' },
    { title: 'MERN Projects', desc: 'Successfully deployed analytical dashboards with full database synchronization.' },
    { title: 'GitHub Contributions', desc: 'Active commit cycle driving constant modular codebase refactoring.' },
    { title: 'Continuous Learning', desc: 'Proactively acquiring professional badges in Cloud AI, Java, and Analytics.' }
  ];

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  const getFilteredSkills = () => {
    if (activeSkillTab === 'all') return allSkills;
    return skillCategories[activeSkillTab] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="text-slate-100 min-h-screen">
      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <CanvasParticles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-bold uppercase tracking-widest text-xs sm:text-sm bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Tulasi Priya G
              </span>
            </motion.h1>

            {/* Typewriter roles */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 min-h-[40px] sm:min-h-[45px] flex items-center justify-center"
            >
              <Typewriter words={roles} />
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Passionate Computer Science with Data Analytics student building premium web applications using the MERN stack and Java. Focused on crafting responsive interfaces and data-driven client architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => handleScrollTo('#projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-500/20 active:scale-95 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wide transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              
              <a
                href={`${GITHUB_CERT_BASE}/Internship%20Completion%20Certificate.pdf`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-dashed border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 animate-bounce" />
                Download Resume / CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Description Text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold text-white leading-tight">
                CS Student & Aspiring Software Engineer
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a third-year <strong className="text-white font-semibold">Computer Science with Data Analytics</strong> undergraduate studying at <strong className="text-white font-semibold">KPR College of Arts Science and Research (2024 - 2027)</strong>. I combine programming logic with data analytics to engineer beautiful and performance-oriented software structures.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My primary expertise lies in creating MERN (MongoDB, Express, React, Node.js) stack applications and building core object-oriented structures with Java. I love translating numbers and data charts into meaningful, real-time client dashboards.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-blue-400" /> B.Sc. CS + Data Analytics</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-purple-400" /> Expected Graduation: 2027</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> Tamil Nadu, India</span>
              </div>
            </div>

            {/* Passions / Key Focus Area Tags */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Key Areas of Focus
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {passions.map((passion) => (
                  <span
                    key={passion}
                    className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300"
                  >
                    {passion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section id="skills" className="py-20 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Skills & Toolkit</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Modular tech stack that I work with daily</p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto bg-slate-950/80 p-1.5 rounded-2xl border border-white/10">
            {['all', 'languages', 'frontend', 'backend', 'database', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all capitalize ${
                  activeSkillTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab === 'all' ? 'All Tech' : tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {getFilteredSkills().map((skill) => (
              <motion.div
                layout
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <SkillCard name={skill} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Selected design deployments showcasing implementation structures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {projects.map((proj, idx) => (
              <div key={idx}>
                <ProjectCard project={proj} isPlaceholder={false} />
              </div>
            ))}
            <div>
              <ProjectCard isPlaceholder={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Education & Certifications Timeline */}
      <section id="education" className="py-20 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Education Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                  Education
                </h2>
                <div className="h-1 w-16 bg-blue-500 mt-3 rounded-full" />
              </div>

              <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-xl space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  2024 – 2027
                </span>
                
                <h3 className="text-xl font-bold text-white pt-2">
                  Bachelor of Computer Science with Data Analytics
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-semibold">
                  KPR College of Arts Science and Research
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Focusing on statistical analytical structures, Python/Java paradigms, structural databases, and clean algorithm integrations.
                </p>
              </div>
            </div>

            {/* Right: Certifications Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
                  <Award className="w-8 h-8 text-purple-500" />
                  Certifications
                </h2>
                <div className="h-1 w-16 bg-purple-500 mt-3 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, idx) => (
                  <div key={idx}>
                    <CertificateCard cert={cert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Achievements</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Key milestones achieved in my development journey</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-blue-500/20 text-center relative group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {ach.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {ach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GitHub Section */}
      <section id="github" className="py-20 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">GitHub Dashboard</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Dynamic code repository feed compiled from GitHub REST API</p>
          </div>

          <GithubDashboard />
        </div>
      </section>

      {/* 8. LinkedIn Section */}
      <section id="linkedin" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">LinkedIn Connect</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Professional social credentials</p>
          </div>

          <LinkedInCard profilePic={profile?.avatar_url} />
        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contact" className="py-20 bg-slate-950/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-400 text-sm mt-4">Have an opportunity or question? Shoot a message!</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
