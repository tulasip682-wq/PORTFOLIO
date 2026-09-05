import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

import Navbar from './components/Navbar';
import BackgroundGlows from './components/BackgroundGlows';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial portfolio page assets loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 bg-[#0b0f19] flex flex-col items-center justify-center"
          >
            {/* Pulsing Core */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/20"
              >
                <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 blur-xl opacity-30 animate-pulse" />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-center space-y-2"
            >
              <h2 className="text-xl font-bold tracking-wider bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Tulasi Priya G
              </h2>
              <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">
                Portfolio Initializing...
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glassmorphic Navigation */}
            <Navbar />
            
            {/* Visual Ambient Backgrounds */}
            <BackgroundGlows />
            
            {/* Sections Content */}
            <main>
              <Home />
            </main>
            
            {/* Scroll indicators & footer */}
            <footer className="py-8 bg-slate-950/80 border-t border-white/5 text-center text-xs sm:text-sm text-slate-500">
              <div className="max-w-7xl mx-auto px-4 space-y-2">
                <p>&copy; 2026 Tulasi Priya G. All Rights Reserved.</p>
                <p className="text-slate-600">
                  Designed & Developed with React & Tailwind CSS
                </p>
              </div>
            </footer>

            {/* Fast Scroll to Top Component */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
