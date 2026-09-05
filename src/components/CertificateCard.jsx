import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificateCard = ({ cert }) => {
  const { title, issuer, credentialUrl } = cert;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="relative overflow-hidden p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between h-full group"
    >
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-colors duration-300" />
      
      <div>
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
          <Award className="w-6 h-6" />
        </div>
        
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
          {title}
        </h4>
        <p className="text-slate-400 text-sm mb-4">
          {issuer}
        </p>
      </div>

      <div>
        <a
          href={credentialUrl || '#'}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          Verify Credential
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
