import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Zap, Truck, Building2, Fuel, Flame, Package,
  Globe, Users, Award, TrendingUp, ChevronRight, Phone, Mail, MapPin
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { companies } from '../contexts/CompanyContext';
import { useTheme } from '../contexts/ThemeContext';

const subsidiaries = [
  {
    ...companies.energy,
    icon: Zap,
    description: 'Zimbabwe\'s premier solar energy provider delivering world-class installations, geysers, and water pump solutions.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.3)',
    featured: true,
    stats: '500+ Projects',
    status: 'active',
  },
  {
    ...companies.transport,
    icon: Truck,
    description: 'Reliable fleet management and transportation services across Zimbabwe and beyond.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.2)',
    featured: false,
    status: 'coming-soon',
  },
  {
    ...companies.construction,
    icon: Building2,
    description: 'Quality construction and infrastructure development for residential and commercial projects.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.2)',
    featured: false,
    status: 'coming-soon',
  },
  {
    ...companies.petroleum,
    icon: Fuel,
    description: 'Petroleum distribution and fuel solutions driving Zimbabwe\'s growth.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.2)',
    featured: false,
    status: 'coming-soon',
  },
  {
    ...companies.gas,
    icon: Flame,
    description: 'Gas supply and distribution powering homes and industries nationwide.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.2)',
    featured: false,
    status: 'coming-soon',
  },
  {
    ...companies.logistics,
    icon: Package,
    description: 'End-to-end logistics and supply chain solutions for efficient delivery.',
    color: 'from-ecolus-500 to-emerald-600',
    glowColor: 'rgba(34, 139, 34, 0.2)',
    featured: false,
    status: 'coming-soon',
  },
];

const groupStats = [
  { icon: Globe, value: '6', label: 'Companies' },
  { icon: Users, value: '200+', label: 'Employees' },
  { icon: Award, value: '8+', label: 'Years' },
  { icon: TrendingUp, value: '500+', label: 'Projects' },
];

const marqueeItems = ['ENERGY', 'TRANSPORT', 'CONSTRUCTION', 'PETROLEUM', 'GAS', 'LOGISTICS'];

export default function GroupLanding() {
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEOHead
        title="Ecolus Group | Building Zimbabwe's Future"
        description="Ecolus Group is a diversified Zimbabwean conglomerate spanning energy, transport, construction, petroleum, gas, and logistics. Discover our companies."
        keywords="Ecolus Group, Zimbabwe conglomerate, Ecolus Energy, Ecolus Transport, Ecolus Construction"
      />

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 mesh-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        {/* Animated geometric squares - referencing logo motif */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-ecolus-500/10 rounded-lg"
              style={{
                width: 60 + i * 40,
                height: 60 + i * 40,
                top: `${15 + i * 12}%`,
                left: `${10 + (i % 3) * 30}%`,
              }}
              animate={{
                rotate: [0, 90],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Green aura behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ecolus-500/10 rounded-full blur-[150px]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Group Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-ecolus-500/20 rounded-full blur-[60px] scale-[2] animate-[pulseGlow_4s_ease-in-out_infinite]" />
              <img
                src="/logos/egroup.png"
                alt="Ecolus Group"
                className="relative h-28 sm:h-36 lg:h-44 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 40px rgba(34, 139, 34, 0.4))' }}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-ecolus-400 text-xs font-semibold font-[family-name:var(--font-mono)] uppercase tracking-wider mb-6">
              A Diversified Conglomerate
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building Zimbabwe's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
              Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-[family-name:var(--font-body)]"
          >
            Six companies. One vision. From energy to logistics, Ecolus Group drives progress across Zimbabwe's key industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#our-companies"
              className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold text-sm transition-all hover:shadow-xl hover:shadow-ecolus-500/25"
            >
              Discover Our Companies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/energy"
              className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl glass hover:bg-white/5 text-white/70 hover:text-white font-semibold text-sm transition-all"
            >
              <Zap className="w-4 h-4 text-ecolus-400" />
              Visit Ecolus Energy
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-ecolus-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SUBSIDIARIES GRID ===== */}
      <section id="our-companies" className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-ecolus-400 text-xs font-semibold font-[family-name:var(--font-mono)] uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Companies
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-2xl mx-auto">
              Six industry-leading subsidiaries working together to power Zimbabwe's growth and development.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((company) => {
              const Icon = company.icon;
              return (
                <StaggerItem key={company.id}>
                  <Link
                    to={company.basePath}
                    className={`group block relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                      company.featured
                        ? 'md:col-span-2 lg:col-span-1 ring-1 ring-ecolus-500/30 hover:ring-ecolus-400/50'
                        : 'ring-1 ring-white/5 hover:ring-white/10'
                    }`}
                  >
                    {/* Card background */}
                    <div className="absolute inset-0 glass" />
                    {company.featured && (
                      <div className="absolute inset-0 bg-gradient-to-br from-ecolus-500/5 to-transparent" />
                    )}

                    <div className="relative p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={company.logo}
                              alt={company.name}
                              className={`h-12 w-12 object-contain rounded-xl ${isDark ? 'brightness-0 invert' : 'mix-blend-multiply'}`}
                              style={!isDark ? { filter: 'drop-shadow(0 0 10px ' + company.glowColor + ')' } : undefined}
                            />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white group-hover:text-ecolus-400 transition-colors">
                              {company.name}
                            </h3>
                            <p className="text-white/40 text-xs font-[family-name:var(--font-mono)]">
                              {company.tagline}
                            </p>
                          </div>
                        </div>
                        {company.status === 'active' ? (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ecolus-500/10 text-ecolus-400 text-[10px] font-semibold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-ecolus-400" />
                            Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-white/40 text-[10px] font-semibold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
                            Soon
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-white/40 text-sm leading-relaxed mb-6">
                        {company.description}
                      </p>

                      {/* Icon + CTA */}
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="flex items-center gap-1 text-white/30 text-sm group-hover:text-ecolus-400 transition-colors">
                          {company.featured ? 'Explore' : 'Learn More'}
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>

                      {/* Featured stats */}
                      {company.featured && company.stats && (
                        <div className="mt-6 pt-6 border-t border-white/5">
                          <p className="text-ecolus-400 text-xs font-[family-name:var(--font-mono)]">
                            {company.stats} completed across Zimbabwe
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== STATS MARQUEE ===== */}
      <section className="relative py-8 overflow-hidden border-y border-white/5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {marqueeItems.map((item, i) => (
                <React.Fragment key={`${setIdx}-${i}`}>
                  <span className="mx-4 sm:mx-8 text-xl sm:text-2xl md:text-3xl font-bold text-white/10 font-[family-name:var(--font-display)] uppercase tracking-wider">
                    {item}
                  </span>
                  <span className="mx-4 text-ecolus-500/30 text-2xl">&#9670;</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ===== ABOUT THE GROUP ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column - text */}
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-ecolus-400 text-xs font-semibold font-[family-name:var(--font-mono)] uppercase tracking-wider mb-4">
                About Ecolus Group
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                A Diversified Conglomerate{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                  Driving Growth
                </span>
              </h2>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                Ecolus Group is a Zimbabwean conglomerate operating across six key sectors.
                From pioneering solar energy solutions to building infrastructure and powering logistics,
                our companies share a common mission: to deliver excellence and drive sustainable development
                across Zimbabwe and the region.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Founded with a vision to transform industries, we invest in people, technology, and
                innovation to create lasting value for our customers, partners, and communities.
              </p>

              {/* Group Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {groupStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="glass rounded-xl p-4 text-center">
                      <Icon className="w-5 h-5 text-ecolus-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                        {stat.value}
                      </p>
                      <p className="text-white/40 text-xs">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Right column - orbiting logos */}
            <AnimatedSection className="flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Center logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-ecolus-500/20 rounded-full blur-[30px] scale-150" />
                    <img
                      src="/logos/egroup.png"
                      alt="Ecolus Group"
                      className="relative h-16 sm:h-20 lg:h-24 w-auto object-contain"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(34, 139, 34, 0.4))' }}
                    />
                  </div>
                </div>

                {/* Orbit ring */}
                <div className="absolute inset-4 rounded-full border border-ecolus-500/10" />
                <div className="absolute inset-12 rounded-full border border-ecolus-500/5" />

                {/* Orbiting subsidiary logos */}
                <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]">
                  {subsidiaries.map((company, i) => {
                    const angle = (i * 360) / subsidiaries.length;
                    const radius = 45; // percentage from center
                    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                    return (
                      <div
                        key={company.id}
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 -translate-x-1/2 -translate-y-1/2 animate-[counter-orbit_30s_linear_infinite]"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="glass rounded-xl p-1.5 sm:p-2 hover:scale-110 transition-transform">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className={`w-full h-full object-contain ${isDark ? 'brightness-0 invert' : 'mix-blend-multiply'}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== ENERGY SPOTLIGHT ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ecolus-900/50 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden dark-section">
              <div className="absolute inset-0 glass" />
              <div className="absolute inset-0 bg-gradient-to-r from-ecolus-900/80 via-ecolus-900/60 to-transparent" />

              {/* Background image */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'url(/solar-panel-hero.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="relative p-6 sm:p-10 lg:p-16">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ecolus-500/10 text-ecolus-400 text-xs font-semibold font-[family-name:var(--font-mono)] uppercase tracking-wider mb-6">
                    <Zap className="w-3 h-3" />
                    Flagship Company
                  </span>

                  <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Ecolus Energy
                  </h2>
                  <p className="text-ecolus-400 text-lg font-[family-name:var(--font-body)] mb-4">
                    Energy for the Long Run
                  </p>
                  <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                    Zimbabwe's premier solar energy company. From residential rooftops to commercial
                    installations, we deliver world-class solar solutions including panels, geysers,
                    and water pump systems.
                  </p>

                  {/* Stats row */}
                  <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
                    <div>
                      <p className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">500+</p>
                      <p className="text-white/40 text-xs">Projects Completed</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">3</p>
                      <p className="text-white/40 text-xs">Core Services</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">8+</p>
                      <p className="text-white/40 text-xs">Years Experience</p>
                    </div>
                  </div>

                  <Link
                    to="/energy"
                    className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold text-sm transition-all hover:shadow-xl hover:shadow-ecolus-500/25"
                  >
                    Explore Ecolus Energy
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GROUP CONTACT ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-white/40 text-base mb-10">
              Interested in partnering with or learning more about the Ecolus Group?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <a href="tel:+263712017222" className="glass rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all group text-center">
                <Phone className="w-5 h-5 text-ecolus-400 mx-auto mb-3" />
                <p className="text-white/70 text-xs sm:text-sm group-hover:text-white transition-colors">+263 712 017 222</p>
              </a>
              <a href="mailto:info@ecolusenergy.co.zw" className="glass rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all group text-center">
                <Mail className="w-5 h-5 text-ecolus-400 mx-auto mb-3" />
                <p className="text-white/70 text-xs sm:text-sm group-hover:text-white transition-colors break-all sm:break-normal">info@ecolusenergy.co.zw</p>
              </a>
              <div className="glass rounded-2xl p-4 sm:p-6 text-center">
                <MapPin className="w-5 h-5 text-ecolus-400 mx-auto mb-3" />
                <p className="text-white/70 text-xs sm:text-sm">Harare, Zimbabwe</p>
              </div>
            </div>

            <Link
              to="/energy/contact"
              className="group inline-flex items-center gap-2 text-ecolus-400 text-sm font-semibold hover:text-lime-accent transition-colors"
            >
              Contact Ecolus Energy directly
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
