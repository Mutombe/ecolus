import React,{ useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Sun, Zap, Droplets, ArrowRight, ArrowUpRight, ChevronRight,
  Shield, Award, Users, Star, Phone, CheckCircle2,
  Battery, Gauge, Thermometer, Leaf, Building2, Home as HomeIcon,
  TrendingUp, Globe, Clock, Sparkles
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig, companyInfo } from '../utils/seoConfig';
import { useCountUp } from '../hooks/useCountUp';

/* ───────────────────────── ANIMATED STAT ───────────────────────── */
function AnimatedStat({ end, suffix = '', label }) {
  const { count, ref } = useCountUp(end, { duration: 2000, suffix });
  return (
    <div ref={ref} className="text-center">
      <p className="text-white font-bold text-lg font-[family-name:var(--font-display)]">{count}{suffix}</p>
      <p className="text-white/30 text-[10px] tracking-wider uppercase font-[family-name:var(--font-mono)]">{label}</p>
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      subtitle: 'SOLAR INSTALLATIONS',
      mainWord: 'ENER',
      accentWord: 'GY',
      blendWord: 'SOLAR',
      desc: 'Transform your home with premium solar panel installations engineered for decades of clean, reliable power across Zimbabwe.',
      image: '/Ecolus9.jpg',
      blendImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
    },
    {
      subtitle: 'SOLAR GEYSERS',
      mainWord: 'HEA',
      accentWord: 'T',
      blendWord: 'GEYSER',
      desc: 'High-efficiency solar water heating systems that reduce your energy costs by up to 60% while delivering hot water year-round.',
      image: '/13.jpg',
      blendImage: '7.jpg',
    },
    {
      subtitle: 'WATER PUMPS',
      mainWord: 'WAT',
      accentWord: 'ER',
      blendWord: 'PUMPS',
      desc: 'Solar-powered borehole and irrigation pumps delivering 100% off-grid water supply for farms and rural communities.',
      image: '/34.jpg',
      blendImage: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
    },
  ];

  const current = slides[activeSlide];
  const nextSlide = () => setActiveSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setActiveSlide((p) => (p - 1 + slides.length) % slides.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <section ref={containerRef} id="hero" className="relative h-screen flex items-end overflow-hidden">
      {/* ── Background Image with parallax ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20">
        {slides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide.image}
            alt=""
            initial={false}
            animate={{ opacity: activeSlide === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            loading='eager'
          />
        ))}
      </motion.div>

      {/* ── Dark cinematic overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 40%, rgba(34,139,34,0.08) 0%, transparent 50%)' }} />

      {/* ── Left vertical accent line ── */}
      <div className="absolute left-8 sm:left-12 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ecolus-500/30 to-transparent hidden sm:block" />

      {/* ── Decorative geometry (right side) ── */}
      <motion.div
        style={{ y }}
        className="absolute right-[8%] top-[30%] hidden xl:flex flex-col items-center gap-4"
      >
        {/* Diamond 
        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-6 h-6 border border-white/20 rotate-45"
        />*/}
        {/* Dot grid */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-white/30"
            />
          ))}
        </div>
        {/* Vertical line 
        <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent mt-2" />*/}
      </motion.div>

      {/* ── Main content ── */}
      <motion.div style={{ opacity, scale }} className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 pt-16 sm:pt-20 lg:pt-24">

        {/* Happy Customers - mobile: inline above content, desktop: absolute top-right */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex items-center gap-3 mb-6 lg:mb-0 lg:absolute lg:top-20 lg:right-8 z-20"
        >
          <div className="flex -space-x-3">
            {[
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="Happy customer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="w-9 h-9 rounded-full border-2 border-obsidian object-cover"
              />
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="w-9 h-9 rounded-full border-2 border-obsidian bg-ecolus-500/30 flex items-center justify-center"
            >
              <span className="text-[9px] font-bold text-ecolus-300">+1k</span>
            </motion.div>
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-lime-accent text-lime-accent" />
              ))}
            </div>
            <p className="text-white/40 text-[10px] mt-0.5 font-[family-name:var(--font-mono)]">
              1,200+ Happy Customers
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-end">

          {/* Left column: content */}
          <div className="lg:col-span-5 xl:col-span-5 z-10">
            {/* Green subtitle badge */}
            <motion.div
              key={`badge-${activeSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-lime-accent text-xs font-bold tracking-[0.3em] font-[family-name:var(--font-mono)]">
                {current.subtitle}
              </span>
              <div className="h-px w-12 bg-lime-accent/50" />
            </motion.div>

            {/* Large split heading */}
            <div className="mb-6">
              <motion.div
                key={`heading-${activeSlide}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white/90">{current.mainWord}</span>
                  <span className="text-lime-accent">{current.accentWord}</span>
                </h1>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              key={`desc-${activeSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/45 text-sm sm:text-base leading-relaxed max-w-md mb-8"
            >
              {current.desc}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/energy/contact"
                className="group inline-flex items-center gap-3 text-white text-sm font-bold tracking-wider uppercase hover:text-lime-accent transition-colors"
              >
                <span className="relative">
                  GET A FREE QUOTE
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/30 group-hover:bg-lime-accent transition-colors" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 mt-10 pt-6 border-t border-white/10"
            >
              <AnimatedStat end={500} suffix="+" label="Projects" />
              <AnimatedStat end={1200} suffix="+" label="Clients" />
              <AnimatedStat end={8} suffix="+" label="Years" />
            </motion.div>
          </div>

          {/* Right column: Large blended text */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col items-end justify-end">
            <motion.div
              key={`blend-${activeSlide}`}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative select-none pointer-events-none w-full pb-16 "
            >
              {/* The massive text with nature image clipped inside */}
              <h2
                className="font-[family-name:var(--font-display)] font-black leading-[0.85] tracking-tighter text-center lg:text-right pr-4 sm:pr-8 lg:pr-12"
                style={{
                  fontSize: 'clamp(7rem, 22vw, 12rem)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: `url(${current.blendImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.7) contrast(1.2) saturate(1.3)',
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                }}
              >
                {current.blendWord}
              </h2>

              {/* Subtle green glow behind the text */}
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-20"
                style={{ background: 'radial-gradient(ellipse at center, #228B22, transparent 70%)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* ── Bottom navigation arrows ── */}
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-8 lg:right-8 flex items-center gap-3 z-10">
          <span className="text-white/30 text-xs font-[family-name:var(--font-mono)] mr-3">
            {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
            aria-label="Previous slide"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-lime-accent" />
        </motion.div>
        <span className="text-white/20 text-[9px] font-[family-name:var(--font-mono)] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── SERVICES PREVIEW ───────────────────────── */
function ServicesSection() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Installations',
      desc: 'Complete residential and commercial solar panel systems designed for maximum energy harvest.',
      image: '/Ecolus9.jpg',
      stats: '500+ installed',
      link: '/services#solar-installations',
      accent: 'from-ecolus-400/80 to-emerald-600/80',
    },
    {
      icon: Thermometer,
      title: 'Solar Geysers',
      desc: 'High-efficiency water heating systems in gravity and pressure configurations.',
      image: '21.webp',
      stats: '60% savings',
      link: '/services#solar-geysers',
      accent: 'from-emerald-500/80 to-teal-600/80',
    },
    {
      icon: Droplets,
      title: 'Solar Water Pumps',
      desc: 'Reliable DC & AC pumping solutions for agriculture, boreholes, and irrigation.',
      image: '/20.webp',
      stats: 'Zero grid needed',
      link: '/services#solar-water-pumps',
      accent: 'from-lime-500/80 to-ecolus-500/80',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/30 to-transparent" />
      {/* Organic blob backgrounds */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-ecolus-500/5 blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with ecosystem accent */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 sm:mb-20">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Sparkles className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Our Solutions
              </span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Complete Solar{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Energy Solutions
              </span>
            </h2>
            <p className="text-white/40 max-w-xl text-sm sm:text-base">
              End-to-end solar systems engineered for Zimbabwe's unique climate and energy needs.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-6 lg:mt-0">
            <Link
              to="/energy/services"
              className="group inline-flex items-center gap-2 text-ecolus-400 text-sm font-semibold hover:text-lime-accent transition-colors"
            >
              View all services
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.15} variant="fadeUp">
              <Link
                to={service.link}
                className="group block relative rounded-3xl overflow-hidden h-[480px] sm:h-[540px] dark-section"
              >
                {/* Image with green tint overlay */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Green ecosystem overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ecolus-900/40 via-transparent to-ecolus-900/20" />

                {/* Leaf pattern decoration on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Leaf className="w-8 h-8 text-lime-accent/30" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-ecolus-500/20 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                    </div>
                    <span className="px-3 py-1.5 rounded-full glass text-xs text-ecolus-300 font-medium font-[family-name:var(--font-mono)]">
                      {service.stats}
                    </span>
                  </div>

                  <div>
                    {/* Green accent line */}
                    <div className="w-8 h-0.5 bg-lime-accent/50 mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-3 group-hover:text-lime-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex items-center gap-2 text-ecolus-400 text-sm font-semibold group-hover:text-lime-accent transition-colors">
                      Explore Solution
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY CHOOSE US ───────────────────────── */
function BenefitsSection() {
  const benefits = [
    { icon: Clock, title: '25+ Year Lifespan', desc: 'Premium panels with industry-leading longevity guarantees', value: '25+', unit: 'years' },
    { icon: TrendingUp, title: 'Property Value Boost', desc: 'Solar installations increase property market value significantly', value: '20%', unit: 'increase' },
    { icon: Zap, title: 'Bill Reduction', desc: 'Dramatically reduce your monthly electricity expenses', value: '80%', unit: 'savings' },
    { icon: Shield, title: 'Energy Independence', desc: 'Reduce reliance on the grid with battery storage solutions', value: '100%', unit: 'off-grid' },
    { icon: Globe, title: 'Carbon Reduction', desc: 'Significantly lower your property\'s carbon footprint', value: '4.5t', unit: 'CO₂/yr saved' },
    { icon: Award, title: 'Full Warranty', desc: 'Comprehensive warranties on all products and workmanship', value: '5-25', unit: 'yr warranty' },
  ];

  return (
    <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 mesh-gradient-green" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-ecolus-500/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Nature-blended image composition */}
          <AnimatedSection variant="fadeLeft" className="relative hidden lg:block">
            <div className="relative dark-section">
              {/* Main image with green overlay blend */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/1.jpg"
                  alt="Modern home with solar installation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Green ecosystem overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ecolus-900/60 via-transparent to-emerald-900/40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/70" />
              </div>

              {/* Overlapping accent image with green border glow */}
              <div className="absolute -bottom-6 -right-6 w-52 h-52 rounded-2xl overflow-hidden border-2 border-ecolus-500/30 shadow-lg shadow-ecolus-500/10">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80"
                  alt="Solar panel detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-ecolus-900/50 to-transparent" />
              </div>

              {/* Floating nature stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-1/3 glass-green rounded-2xl p-4 shadow-2xl shadow-ecolus-500/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lime-accent/15 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-lime-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white font-[family-name:var(--font-display)]">4.5 tons</p>
                    <p className="text-white/40 text-[10px] font-[family-name:var(--font-mono)]">CO₂ SAVED / YEAR</p>
                  </div>
                </div>
              </motion.div>

              {/* Organic decorative elements */}
              <div className="absolute -top-3 -left-3 w-20 h-20 rounded-full bg-lime-accent/10 blur-xl" />
              <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-lime-accent/40 animate-pulse" />
              <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-ecolus-400/40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </AnimatedSection>

          {/* Right - Benefits Grid */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-accent" />
                <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                  Why Choose Ecolus
                </span>
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
                Benefits That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                  Keep Giving
                </span>
              </h2>
              <p className="text-white/40 mb-10 text-sm sm:text-base leading-relaxed">
                Solar energy isn't just good for the environment — it's a smart financial 
                decision that pays dividends for decades.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {benefits.map((benefit, i) => (
                <StaggerItem key={i}>
                  <div className="group p-5 rounded-2xl glass hover:glass-green transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    {/* Subtle green glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ecolus-500/0 to-lime-accent/0 group-hover:from-ecolus-500/5 group-hover:to-lime-accent/5 transition-all duration-500" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ecolus-500/20 transition-colors">
                        <benefit.icon className="w-5 h-5 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-semibold text-sm font-[family-name:var(--font-display)]">{benefit.title}</h3>
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed mb-2">{benefit.desc}</p>
                        <span className="text-lime-accent/70 text-xs font-bold font-[family-name:var(--font-mono)]">{benefit.value} {benefit.unit}</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROCESS ───────────────────────── */
function ProcessSection() {
  const steps = [
    { num: '01', title: 'Site Assessment', desc: 'Professional visit with precision mapping and energy audit of your property.', icon: Gauge },
    { num: '02', title: 'Custom Design', desc: 'Tailored solar system designed specifically for your energy needs and roof profile.', icon: Sparkles },
    { num: '03', title: 'Installation', desc: 'Expert installation by certified technicians with minimal disruption to your routine.', icon: Sun },
    { num: '04', title: 'Commissioning', desc: 'System testing, grid connection, and handover with full monitoring setup.', icon: Zap },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />
      {/* Organic green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ecolus-500/3 blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
            <Award className="w-3.5 h-3.5 text-lime-accent" />
            <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
              Our Process
            </span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            From Assessment to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
              Activation
            </span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Our streamlined 4-step process ensures your solar installation is completed on time, 
            on budget, and to the highest quality standards.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15} variant="fadeUp">
              <div className="relative group">
                {/* Connection line with green gradient */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[calc(100%+0px)] w-full h-px">
                    <div className="w-full h-px bg-gradient-to-r from-ecolus-500/40 to-transparent" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-ecolus-500/60" />
                  </div>
                )}
                <div className="relative p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  {/* Green glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ecolus-500/0 to-lime-accent/0 group-hover:from-ecolus-500/5 group-hover:to-lime-accent/3 transition-all duration-500" />
                  <div className="relative">
                    <div className="text-5xl font-[family-name:var(--font-display)] font-black text-ecolus-500/10 mb-4 group-hover:text-lime-accent/15 transition-colors">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-ecolus-500/10 flex items-center justify-center mb-5 group-hover:bg-ecolus-500/20 transition-colors">
                      <step.icon className="w-6 h-6 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS MARQUEE ───────────────────────── */
function StatsMarquee() {
  const stats = [
    'SOLAR INSTALLATIONS', '•', '500+ PROJECTS', '•', 'RESIDENTIAL', '•',
    'COMMERCIAL', '•', '25 YEAR WARRANTY', '•', 'ENERGY FOR THE LONG RUN', '•',
    'SOLAR GEYSERS', '•', 'WATER PUMPS', '•', 'SITE ASSESSMENT', '•',
    'CUSTOM DESIGN', '•', 'HARARE', '•', 'ZIMBABWE', '•',
  ];

  return (
    <div className="relative py-6 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...stats, ...stats].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-[family-name:var(--font-mono)] tracking-wider ${
              item === '•' ? 'text-ecolus-500' : 'text-white/20'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Tendai Moyo',
      role: 'Homeowner, Borrowdale',
      text: 'Ecolus Energy transformed our home with a 10kW system. Our electricity bill dropped by 85% and the installation was flawless. Best investment we have ever made.',
      rating: 5,
    },
    {
      name: 'Grace Chirwa',
      role: 'MD, Chirwa Industries',
      text: 'The commercial installation at our factory was completed ahead of schedule. The team was professional from assessment to commissioning. Outstanding service quality.',
      rating: 5,
    },
    {
      name: 'David Ncube',
      role: 'Farm Owner, Mazowe',
      text: 'The solar water pump system has been running perfectly for over two years now. No more diesel costs and our irrigation is now fully reliable year-round.',
      rating: 5,
    },
    {
      name: 'Sarah Mutasa',
      role: 'Homeowner, Mount Pleasant',
      text: 'From the free consultation to the final handover, every step was handled with care. The solar geyser alone saves us a fortune. Highly recommended company.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-green" />
      <div className="absolute top-0 right-[20%] w-[600px] h-[600px] rounded-full bg-ecolus-500/5 blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
            <Users className="w-3.5 h-3.5 text-lime-accent" />
            <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
              Client Stories
            </span>
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
              Thousands
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
              <div className="p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-300 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-lime-accent text-lime-accent" />
                  ))}
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ecolus-400 to-ecolus-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PARTNERS/BRANDS ───────────────────────── */
function PartnersSection() {
  const brands = ['Canadian Solar', 'JA Solar', 'Deye', 'Growatt', 'LONGi', 'Trina Solar', 'Huawei', 'BYD'];

  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-white/30 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase">
            Powered by World-Class Brands
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-white/20 hover:text-white/40 transition-colors font-[family-name:var(--font-display)] text-sm sm:text-base font-semibold tracking-wider"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GREEN CTA ───────────────────────── */
function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden dark-section">
      {/* Full bleed nature background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Deep green ecosystem overlays */}
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ecolus-900/90 via-obsidian/70 to-ecolus-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34,139,34,0.15) 0%, transparent 60%)' }} />
      </div>

      {/* Organic floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-[15%] hidden lg:block"
      >
        <Leaf className="w-12 h-12 text-lime-accent/10" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 right-[20%] hidden lg:block"
      >
        <Leaf className="w-8 h-8 text-ecolus-400/10" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-lime-accent/10 border border-lime-accent/20 flex items-center justify-center mx-auto mb-8"
            >
              <Sun className="w-8 h-8 text-lime-accent" />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Ready to Join the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 via-lime-accent to-emerald-400">
                Green Revolution
              </span>
              ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Get a free site assessment and customised solar proposal for your home or business. 
              Start saving from day one with Zimbabwe's most trusted solar company.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/energy/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm sm:text-base w-full sm:w-auto"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${companyInfo.phone.primary}`}
                className="group flex items-center justify-center gap-3 px-8 py-4 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm sm:text-base w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-ecolus-400" />
                Call Us Now
              </a>
            </div>
          </AnimatedSection>

          {/* Trust micro-bar */}
          <AnimatedSection delay={0.5}>
            <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-ecolus-400" />
                <span>Free assessment</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-ecolus-400" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-ecolus-400" />
                <span>Expert advice</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOME PAGE ───────────────────────── */
export default function Home() {
  return (
    <>
      <SEOHead {...seoConfig.home} />
      <HeroSection />
      <StatsMarquee />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}