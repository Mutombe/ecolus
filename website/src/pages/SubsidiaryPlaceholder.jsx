import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
import { useCompany } from '../contexts/CompanyContext';
import { useTheme } from '../contexts/ThemeContext';
import SEOHead from '../components/layout/SEOHead';

export default function SubsidiaryPlaceholder() {
  const { activeCompany } = useCompany();
  const { isDark } = useTheme();

  return (
    <>
      <SEOHead
        title={`${activeCompany.name} | Coming Soon - Ecolus Group`}
        description={`${activeCompany.name} - ${activeCompany.tagline}. Part of the Ecolus Group of companies. Coming soon.`}
      />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient-hero opacity-30" />
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ecolus-500/5 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          {/* Logo with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-ecolus-500/20 rounded-full blur-[40px] scale-150 animate-pulse" />
              <img
                src={activeCompany.logo}
                alt={activeCompany.name}
                className={`relative h-32 sm:h-40 w-auto object-contain ${isDark ? 'brightness-0 invert' : 'mix-blend-multiply'}`}
                style={!isDark ? { filter: 'drop-shadow(0 0 30px rgba(34, 139, 34, 0.3))' } : undefined}
              />
            </div>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-ecolus-400 text-xs font-semibold font-[family-name:var(--font-mono)] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-ecolus-400 animate-pulse" />
              Coming Soon
            </span>
          </motion.div>

          {/* Company name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {activeCompany.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/50 font-[family-name:var(--font-body)] mb-4"
          >
            {activeCompany.tagline}
          </motion.p>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/30 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed"
          >
            We're working on something exciting. This subsidiary of the Ecolus Group will be launching soon.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/5 text-white/70 hover:text-white font-medium text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Ecolus Group
            </Link>
            <Link
              to="/energy"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-ecolus-500 hover:bg-ecolus-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-ecolus-500/25"
            >
              <Zap className="w-4 h-4" />
              Visit Ecolus Energy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
