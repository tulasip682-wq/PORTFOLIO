import React, { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/tulasip682-wq", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tulasi-priya-0bb183321/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:tulasip682@gmail.com", label: "Email" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch max-w-5xl mx-auto">
      {/* Contact Details Card */}
      <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/10 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            I am currently open to internship opportunities, full-time engineering positions, and project collaborations. Fill out the form or reach out through my socials!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</p>
                <a href="mailto:tulasip682@gmail.com" className="text-sm font-medium hover:text-blue-400 transition-colors">
                  tulasip682@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">LinkedIn</p>
                <a href="https://www.linkedin.com/in/tulasi-priya-0bb183321/" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-blue-400 transition-colors">
                  tulasi-priya-0bb183321
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Badges Grid */}
        <div className="mt-8">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Follow & Find Me</p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/10 transition-all hover:scale-110 active:scale-95"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500 text-white placeholder-slate-600 outline-none text-sm transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500 text-white placeholder-slate-600 outline-none text-sm transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration Proposal"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500 text-white placeholder-slate-600 outline-none text-sm transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Tulasi, I'd like to discuss a project..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 focus:border-blue-500 text-white placeholder-slate-600 outline-none text-sm transition-all resize-none"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-400 text-xs font-medium">{error}</p>}

          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold tracking-wide transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/30 disabled:opacity-50 active:scale-95 shrink-0"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {isSuccess && (
              <div className="flex items-center gap-2 text-green-400 text-xs font-bold animate-pulse">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message Sent Successfully!</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
