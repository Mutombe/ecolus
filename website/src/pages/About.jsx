import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target, Eye, Users, Award, Shield, Zap, ArrowRight, Heart, Sun,
  CheckCircle2, Leaf, Globe, Building2, Sparkles, ChevronDown,
  Phone, MapPin, Play, ArrowUpRight, Clock
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig, companyInfo } from '../utils/seoConfig';

export default function About() {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'Transparent pricing, honest assessments, and ethical business practices in every interaction.', accent: 'from-ecolus-500 to-emerald-600' },
    { icon: Award, title: 'Excellence', desc: 'Only the finest solar products and installation standards that exceed industry benchmarks.', accent: 'from-lime-500 to-ecolus-500' },
    { icon: Heart, title: 'Customer First', desc: 'Your energy needs drive everything we do — from design through lifetime support.', accent: 'from-emerald-500 to-teal-500' },
    { icon: Globe, title: 'Sustainability', desc: 'Committed to building a greener Zimbabwe, one rooftop at a time.', accent: 'from-teal-500 to-ecolus-500' },
  ];

  const milestones = [
    { year: '2017', title: 'Founded in Harare', desc: 'Ecolus Energy launched with a mission to make solar accessible across Zimbabwe.', icon: Building2 },
    { year: '2018', title: 'First 50 Installations', desc: 'Achieved our first major milestone with residential and small commercial projects.', icon: Sun },
    { year: '2020', title: 'Commercial Expansion', desc: 'Expanded into large-scale commercial and agricultural solar installations.', icon: Zap },
    { year: '2022', title: 'Showroom Launch', desc: 'Opened our showroom at 218 Samora Machel Ave, Harare for walk-in consultations.', icon: MapPin },
    { year: '2024', title: '500+ Projects', desc: 'Surpassed 500 successful solar installations serving 1,200+ satisfied clients.', icon: Award },
    { year: '2025', title: 'Regional Growth', desc: 'Expanding services across Southern Africa with new partnerships and technology.', icon: Globe },
  ];

  const team = [
    { name: 'Engineering Team', role: 'Solar System Design & Assessment', desc: 'Certified engineers with expertise in photovoltaic system design, structural analysis, and energy modeling.', image: '/DSC_2340.jpg' },
    { name: 'Installation Crew', role: 'On-Site Solar Installation', desc: 'Highly trained technicians who ensure every panel is perfectly placed for maximum energy generation.', image: '/Ecolus138.JPG' },
    { name: 'Client Success', role: 'Sales & After-Sales Support', desc: 'Dedicated consultants who guide you from initial inquiry through system monitoring and maintenance.', image: '/Ecolus1.jpg' },
  ];

  const faqs = [
    { q: 'How long does a solar installation take?', a: 'Residential installations typically take 2-5 days, while commercial projects range from 1-4 weeks depending on system size and complexity.' },
    { q: 'What size solar system do I need?', a: 'System size depends on your energy consumption, roof space, and budget. Our free site assessment will determine the optimal system for your needs.' },
    { q: 'Do you offer financing options?', a: 'Yes, we partner with financial institutions to offer flexible payment plans. Contact us for details on available financing options.' },
    { q: 'What warranties do you provide?', a: 'We offer 25-year warranties on solar panels, 5-10 years on inverters, and a 5-year workmanship warranty on all installations.' },
    { q: 'Can I go completely off-grid?', a: 'Yes! With the right battery storage system, you can achieve complete energy independence. We design hybrid and off-grid systems tailored to your needs.' },
    { q: 'Do you service systems after installation?', a: 'Absolutely. We provide ongoing maintenance, monitoring, and support packages to ensure your system performs optimally for its entire lifespan.' },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEOHead {...seoConfig.about} />

      {/* ═══════════════════ HERO: Cinematic full-bleed ═══════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-24 -bottom-24">
          <img
            src="/13.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Green ecosystem overlays — layered like EcoVibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(34,139,34,0.15) 0%, transparent 55%)' }} />

        {/* Organic floating leaves */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 right-[12%] hidden lg:block opacity-15"
        >
          <Leaf className="w-20 h-20 text-lime-accent" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-36 right-[22%] hidden lg:block opacity-10"
        >
          <Leaf className="w-12 h-12 text-ecolus-400" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* ── Left content ── */}
            <div className="lg:col-span-6 z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green">
                  <Leaf className="w-3.5 h-3.5 text-lime-accent" />
                  <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                    About Ecolus Energy
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6"
              >
                Building a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 via-lime-accent to-emerald-400">
                  Brighter
                </span>{' '}
                Zimbabwe
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/45 text-base sm:text-lg leading-relaxed max-w-lg mb-10"
              >
                Since 2017, Ecolus Energy has been at the forefront of Zimbabwe's solar revolution —
                delivering reliable, affordable, and world-class solar solutions to homes, businesses,
                and farms across the nation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  to="/energy/contact"
                  className="group flex items-center gap-3 px-7 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/energy/gallery"
                  className="group flex items-center gap-3 px-7 py-3.5 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm"
                >
                  <Play className="w-4 h-4 text-ecolus-400" />
                  View Our Work
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 sm:gap-10 pt-8 border-t border-white/10"
              >
                {[
                  { val: '8+', label: 'Years' },
                  { val: '500+', label: 'Projects' },
                  { val: '1200+', label: 'Clients' },
                  { val: '4.9', label: 'Rating' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl sm:text-3xl font-black text-white font-[family-name:var(--font-display)]">{s.val}</p>
                    <p className="text-white/30 text-[10px] tracking-wider uppercase font-[family-name:var(--font-mono)] mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: EcoVibe-inspired image composition with green glow ring ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glowing green ring (EcoVibe style) */}
                <div className="absolute inset-0 rounded-[2.5rem] scale-[1.08]" style={{ background: 'conic-gradient(from 180deg, rgba(34,139,34,0.4), rgba(132,204,22,0.3), rgba(16,185,129,0.2), rgba(34,139,34,0.05), rgba(34,139,34,0.4))' , filter: 'blur(20px)' }} />

                {/* Floating stats card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-14 top-1/3 glass-green rounded-2xl p-4 shadow-2xl shadow-ecolus-500/10 border border-ecolus-500/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lime-accent/15 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-lime-accent" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white font-[family-name:var(--font-display)]">80%</p>
                      <p className="text-white/40 text-[10px] font-[family-name:var(--font-mono)]">BILL SAVINGS</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative orbs */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-lime-accent/8 blur-xl" />
                <div className="absolute bottom-24 -left-20 w-3 h-3 rounded-full bg-lime-accent/50 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════ MISSION & VISION: Nature-blended cards ═══════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-ecolus-500/4 blur-[150px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Target className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Our Purpose
              </span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold">
              Driven by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Purpose
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <AnimatedSection variant="fadeLeft">
              <div className="group relative rounded-3xl overflow-hidden h-full min-h-[320px] dark-section">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian/90 via-obsidian/80 to-ecolus-900/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-ecolus-900/40 to-transparent" />
                <div className="relative p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-ecolus-500/15 flex items-center justify-center mb-6 border border-ecolus-500/10">
                    <Target className="w-7 h-7 text-ecolus-400" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                    To accelerate Zimbabwe's transition to clean energy by providing accessible, reliable, and
                    premium solar solutions that empower communities and protect our environment for future generations.
                  </p>
                  <div className="w-10 h-0.5 bg-lime-accent/40 mt-8 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection variant="fadeRight" delay={0.2}>
              <div className="group relative rounded-3xl overflow-hidden h-full min-h-[320px] dark-section">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-obsidian/90 via-obsidian/80 to-emerald-900/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
                <div className="relative p-8 sm:p-10 lg:p-12 h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-lime-accent/10 flex items-center justify-center mb-6 border border-lime-accent/10">
                    <Eye className="w-7 h-7 text-lime-accent" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                    To be Southern Africa's most trusted solar energy partner — recognized for engineering excellence,
                    unmatched service quality, and creating lasting impact in every community we serve.
                  </p>
                  <div className="w-10 h-0.5 bg-ecolus-400/40 mt-8 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CORE VALUES: Nature backdrop ═══════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden dark-section">
        {/* Full-bleed nature image (Harvest-inspired) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-obsidian/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34,139,34,0.1) 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Heart className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Our Values
              </span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Stand For
              </span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
              Our core values guide every decision we make, from product selection to customer service.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="group p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-500 hover:-translate-y-2 text-center h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-ecolus-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-ecolus-500/20 transition-colors border border-ecolus-500/5 group-hover:border-ecolus-500/20">
                      <v.icon className="w-6 h-6 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">{v.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ IMPACT STATS: Solak-inspired big numbers ═══════════════════ */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-green" />
        <div className="absolute inset-0 dot-pattern opacity-8" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.1}>
            {[
              { value: '4.5', suffix: 't', label: 'CO₂ Saved Per System / Year', icon: Leaf, color: 'text-lime-accent' },
              { value: '80', suffix: '%', label: 'Average Bill Reduction', icon: Zap, color: 'text-ecolus-400' },
              { value: '25', suffix: '+', label: 'Year Panel Warranty', icon: Shield, color: 'text-emerald-400' },
              { value: '218', suffix: '', label: 'Samora Machel — Visit Us', icon: MapPin, color: 'text-lime-accent' },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="group text-center p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-ecolus-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-ecolus-500/20 transition-colors">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-black text-white mb-2">
                    {stat.value}<span className="text-lime-accent">{stat.suffix}</span>
                  </p>
                  <p className="text-white/40 text-xs sm:text-sm font-[family-name:var(--font-mono)]">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ TIMELINE: Horizontal ═══════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-ecolus-500/3 blur-[150px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Clock className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Our Journey
              </span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Growing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Stronger
              </span>{' '}
              Every Year
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Horizontal line (desktop) */}
            <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-ecolus-500/30 to-transparent" />
            {/* Vertical line (mobile) */}
            <div className="md:hidden absolute left-[1.15rem] top-0 bottom-0 w-px bg-gradient-to-b from-ecolus-500/40 via-ecolus-500/20 to-transparent" />

            <div className="grid md:grid-cols-6 gap-8 md:gap-4">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.1} variant="fadeUp">
                  <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 group">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 md:mb-6">
                      <div className="w-10 h-10 rounded-full bg-obsidian border-2 border-ecolus-500/40 flex items-center justify-center group-hover:border-lime-accent/60 transition-colors z-10 relative">
                        <m.icon className="w-4 h-4 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-ecolus-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Content */}
                    <div className="md:text-center">
                      <span className="text-lime-accent text-xs font-bold font-[family-name:var(--font-mono)] tracking-wider">{m.year}</span>
                      <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-sm mt-1 mb-1">{m.title}</h3>
                      <p className="text-white/35 text-xs leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TEAM: Green ecosystem cards ═══════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-green" />
        <div className="absolute inset-0 dot-pattern opacity-8" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-lime-accent/3 blur-[120px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
                <Users className="w-3.5 h-3.5 text-lime-accent" />
                <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                  Our People
                </span>
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
                Meet Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                  Expert Team
                </span>
              </h2>
              <p className="text-white/40 max-w-lg text-sm sm:text-base">
                Certified professionals dedicated to delivering world-class solar installations.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-4 lg:mt-0">
              <Link to="/energy/careers" className="group inline-flex items-center gap-2 text-ecolus-400 text-sm font-semibold hover:text-lime-accent transition-colors">
                Join our team
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
            {team.map((t, i) => (
              <StaggerItem key={i}>
                <div className="group rounded-3xl overflow-hidden glass hover:glass-green transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden dark-section">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-ecolus-500/0 to-emerald-500/0 group-hover:from-ecolus-500/10 group-hover:to-emerald-500/10 transition-all duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Leaf className="w-5 h-5 text-lime-accent/40" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="w-8 h-0.5 bg-ecolus-500/30 mb-3 group-hover:bg-lime-accent/50 group-hover:w-12 transition-all duration-300" />
                    <p className="text-ecolus-400 text-xs font-[family-name:var(--font-mono)] mb-1.5 uppercase tracking-wider group-hover:text-lime-accent transition-colors">{t.role}</p>
                    <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)] mb-2">{t.name}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-ecolus-500/3 blur-[120px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                FAQ
              </span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Questions
              </span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base">
              Everything you need to know about going solar with Ecolus Energy.
            </p>
          </AnimatedSection>

          <StaggerContainer className="space-y-3" staggerDelay={0.08}>
            {faqs.map((faq, i) => (
              <StaggerItem key={i}>
                <FAQItem question={faq.q} answer={faq.a} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA below FAQ */}
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <p className="text-white/40 text-sm mb-4">Still have questions?</p>
            <Link
              to="/energy/contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm"
            >
              <Phone className="w-4 h-4" />
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl glass overflow-hidden group hover:glass-green transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <span className="text-white font-medium text-sm sm:text-base pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-lg bg-ecolus-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ecolus-500/20 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-ecolus-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <div className="w-8 h-px bg-ecolus-500/20 mb-3" />
          <p className="text-white/50 text-sm leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  );
}