import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import {
  ArrowRight, ArrowLeft, CheckCircle2, Leaf, Phone, Star,
  ArrowUpRight, Shield, Clock, Zap, Award, ChevronRight
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { companyInfo } from '../utils/seoConfig';
import { servicesData } from './Services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/services" replace />;

  const currentIdx = servicesData.indexOf(service);
  const nextService = servicesData[(currentIdx + 1) % servicesData.length];
  const prevService = servicesData[(currentIdx - 1 + servicesData.length) % servicesData.length];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEOHead
        title={`${service.title} | Ecolus Energy`}
        description={service.desc}
        canonicalUrl={`https://ecolusenergy.co.zw/services/${service.slug}`}
      />

      {/* ═══════════════ HERO: Immersive full-screen ═══════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-24 -bottom-24">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Green ecosystem overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(34,139,34,0.12) 0%, transparent 50%)' }} />

        {/* Floating leaf */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-[15%] hidden lg:block opacity-15"
        >
          <Leaf className="w-16 h-16 text-lime-accent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-32 w-full">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-xs text-white/30 font-[family-name:var(--font-mono)] mb-8"
          >
            <Link to="/" className="hover:text-white/50 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ecolus-400">{service.shortTitle}</span>
          </motion.nav>

          <div className="max-w-3xl">
            {/* Service number badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green`}>
                <service.icon className="w-4 h-4 text-lime-accent" />
                <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                  Service {service.num}
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-5"
            >
              {service.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>
                {service.title.split(' ').slice(-1)}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/40 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            >
              {service.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${companyInfo.phone[0].replace(/ /g, "")}`} className="group flex items-center gap-3 px-8 py-4 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm">
                <Phone className="w-4 h-4 text-ecolus-400" />
                Call Us Now
              </a>
            </motion.div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="hidden lg:block absolute bottom-24 right-8 xl:right-16"
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="glass-green rounded-2xl p-5 border border-ecolus-500/10 shadow-2xl shadow-ecolus-500/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-lime-accent/15 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-lime-accent" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white font-[family-name:var(--font-display)]">{service.stats.value}</p>
                  <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] tracking-wider">{service.stats.label.toUpperCase()}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-ecolus-500/3 blur-[150px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-6">
                  About This{' '}
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>Service</span>
                </h2>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-8">
                  {service.longDesc}
                </p>
              </AnimatedSection>

              {/* Features grid */}
              <AnimatedSection delay={0.2}>
                <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-xl mb-5">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl glass group hover:glass-green transition-all duration-300"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-ecolus-400 flex-shrink-0 group-hover:text-lime-accent transition-colors" />
                      <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              {/* Applications */}
              <AnimatedSection delay={0.1}>
                <div className="rounded-3xl glass-green p-6 sm:p-8 mb-6">
                  <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-lg mb-5">Applications</h3>
                  <div className="space-y-4">
                    {service.applications.map((app, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ecolus-500/20 transition-colors">
                          <app.icon className="w-5 h-5 text-ecolus-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-0.5">{app.title}</h4>
                          <p className="text-white/40 text-xs">{app.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick CTA card */}
              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl glass p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-lime-accent/5 blur-[60px]" />
                  <div className="relative">
                    <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-lg mb-3">Ready to Get Started?</h3>
                    <p className="text-white/40 text-sm mb-5">Get a free site assessment and customised quote within 48 hours.</p>
                    <Link to="/contact" className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 rounded-2xl text-white font-bold text-sm transition-all">
                      Request Free Assessment
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href={`tel:${companyInfo.phone[0].replace(/ /g, "")}`} className="flex items-center justify-center gap-2 mt-3 text-white/40 hover:text-ecolus-400 text-sm transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      Or call {companyInfo.phone[0]}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS: Bento grid ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Nature backdrop */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-obsidian/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34,139,34,0.08) 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Star className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Benefits</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>
                {service.shortTitle}
              </span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
            {service.benefits.map((b, i) => (
              <StaggerItem key={i}>
                <div className="group p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center group-hover:bg-ecolus-500/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                      </div>
                      <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-base sm:text-lg">{b.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed pl-[52px]">{b.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-ecolus-500/4 blur-[150px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-lime-accent/10 border border-lime-accent/20 flex items-center justify-center mx-auto mb-8">
              <service.icon className="w-8 h-8 text-lime-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Start Your{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>
                {service.shortTitle}
              </span>{' '}
              Journey Today
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Contact us for a free consultation and customised proposal. Our team will assess your needs and design the perfect system for your property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="group flex items-center justify-center gap-3 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm w-full sm:w-auto">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${companyInfo.phone[0].replace(/ /g, "")}`} className="group flex items-center justify-center gap-3 px-8 py-4 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm w-full sm:w-auto">
                <Phone className="w-4 h-4 text-ecolus-400" />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ NAVIGATE: Prev / Next service ═══════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-green" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Previous */}
            <Link to={`/services/${prevService.slug}`} className="group flex items-center gap-4 p-5 sm:p-6 rounded-2xl glass hover:glass-green transition-all duration-300">
              <ArrowLeft className="w-5 h-5 text-ecolus-400 group-hover:text-lime-accent group-hover:-translate-x-1 transition-all flex-shrink-0" />
              <div>
                <p className="text-white/30 text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider mb-0.5">Previous</p>
                <p className="text-white font-bold font-[family-name:var(--font-display)] text-sm sm:text-base">{prevService.shortTitle}</p>
              </div>
            </Link>

            {/* Next */}
            <Link to={`/services/${nextService.slug}`} className="group flex items-center justify-end gap-4 p-5 sm:p-6 rounded-2xl glass hover:glass-green transition-all duration-300 text-right">
              <div>
                <p className="text-white/30 text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider mb-0.5">Next</p>
                <p className="text-white font-bold font-[family-name:var(--font-display)] text-sm sm:text-base">{nextService.shortTitle}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-ecolus-400 group-hover:text-lime-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}