import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sun, Zap, Battery, Monitor, ArrowRight, CheckCircle2,
  Plug, Globe, TrendingUp, Shield, Phone, Leaf,
  Building2, Home as HomeIcon
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { companyInfo } from '../utils/seoConfig';

const seo = {
  title: 'How Solar Works | Ecolus Energy - Solar Energy Explained',
  description: 'Learn how solar energy works — from photovoltaic panels to battery storage. Understand system types, components, and the installation process with Ecolus Energy.',
  keywords: 'how solar works, solar energy explained, photovoltaic, solar panels, inverters, battery storage, grid-tied solar, off-grid solar, hybrid solar, Zimbabwe',
};

const components = [
  { icon: Sun, title: 'Solar Panels', desc: 'Photovoltaic modules convert sunlight directly into DC electricity using semiconductor cells. Modern panels achieve 20-22% efficiency.', accent: 'from-amber-400 to-orange-500' },
  { icon: Zap, title: 'Inverters', desc: 'Convert DC power from panels into AC electricity used by your appliances. Hybrid inverters also manage battery charging.', accent: 'from-ecolus-400 to-lime-accent' },
  { icon: Battery, title: 'Battery Storage', desc: 'Store excess solar energy for use at night or during load shedding. Lithium-ion batteries offer 10+ year lifespans.', accent: 'from-emerald-400 to-teal-500' },
  { icon: Monitor, title: 'Monitoring', desc: 'Real-time monitoring systems track energy production, consumption, and savings from your phone or computer.', accent: 'from-blue-400 to-indigo-500' },
];

const systemTypes = [
  {
    title: 'Grid-Tied',
    desc: 'Connected to the utility grid. Excess power feeds back to the grid, reducing your electricity bill. Most affordable option.',
    pros: ['Lowest upfront cost', 'Net metering savings', 'Simple installation'],
    cons: ['No power during outages', 'Dependent on grid availability'],
    icon: Plug,
    accent: 'from-ecolus-400 to-lime-accent',
  },
  {
    title: 'Off-Grid',
    desc: 'Completely independent from the utility grid. Ideal for remote locations with no grid access. Requires battery storage.',
    pros: ['Total energy independence', 'No electricity bills', 'Works anywhere'],
    cons: ['Higher upfront cost', 'Requires battery bank', 'Needs careful sizing'],
    icon: Globe,
    accent: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Hybrid',
    desc: 'Best of both worlds — grid connection plus battery backup. Powers your home during load shedding and stores excess energy.',
    pros: ['Battery backup for outages', 'Grid fallback available', 'Maximum flexibility'],
    cons: ['Highest upfront cost', 'More complex setup'],
    icon: Battery,
    accent: 'from-amber-400 to-orange-500',
  },
];

const processSteps = [
  { num: '01', title: 'Free Consultation', desc: 'We discuss your energy needs, budget, and goals to recommend the ideal solar solution.' },
  { num: '02', title: 'Site Assessment', desc: 'Our engineers visit your property for GPS-guided precision mapping and shadow analysis.' },
  { num: '03', title: 'Custom Design', desc: 'We design a system tailored to your roof geometry, energy consumption, and budget.' },
  { num: '04', title: 'Installation', desc: 'Our certified technicians install your system with minimal disruption, typically in 2-5 days.' },
  { num: '05', title: 'Commissioning', desc: 'System testing, grid connection, and handover with full training on your monitoring system.' },
  { num: '06', title: 'Ongoing Support', desc: 'Warranty coverage, maintenance packages, and lifetime technical support for your system.' },
];

const savings = [
  { value: '80%', label: 'Electricity Bill Reduction', desc: 'Average savings on monthly electricity costs' },
  { value: '25yr', label: 'Panel Lifespan', desc: 'Premium panels backed by manufacturer warranty' },
  { value: '20%', label: 'Property Value Increase', desc: 'Solar adds long-term value to your home' },
  { value: '3-5yr', label: 'Payback Period', desc: 'Typical return on investment timeline' },
];

export default function HowItWorks() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <SEOHead {...seo} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} id="hero" className="relative min-h-[80vh] flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-24 -bottom-24">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
            alt="Solar panels on rooftop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sun className="w-3.5 h-3.5 text-ecolus-400" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Solar Education</span>
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 max-w-3xl">
              How{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Solar Energy</span>{' '}
              Works
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Understand the technology behind clean, renewable solar power — from sunlight hitting your panels to electricity powering your home.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Link
              to="/energy/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ecolus-500 hover:bg-ecolus-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-ecolus-500/25"
            >
              <Phone className="w-4 h-4" />
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </motion.div>
      </section>

      {/* ═══════════════ HOW SOLAR ENERGY WORKS ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Zap className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">The Science</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Sunlight to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Electricity</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Solar panels use the photovoltaic effect to convert sunlight into usable electricity. Here's the journey from photon to power outlet.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sunlight Hits Panels', desc: 'Photons from sunlight strike the silicon cells in your solar panels, exciting electrons and creating a flow of direct current (DC) electricity.', icon: Sun },
              { step: '2', title: 'DC Converts to AC', desc: 'An inverter converts the DC electricity from your panels into alternating current (AC) — the type of electricity your home appliances use.', icon: Zap },
              { step: '3', title: 'Power Your Home', desc: 'AC electricity flows through your electrical panel to power lights, appliances, and devices. Excess energy is stored in batteries or fed to the grid.', icon: HomeIcon },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 h-full relative overflow-hidden group hover:bg-white/[0.03] transition-all">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/[0.03] font-[family-name:var(--font-display)]">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ecolus-500/20 to-lime-accent/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-ecolus-400" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SYSTEM COMPONENTS ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-ecolus-500/5 blur-[150px]" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Shield className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Components</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              System{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Components</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Every solar system is built from high-quality components designed to work together for maximum efficiency and longevity.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((comp) => (
              <StaggerItem key={comp.title}>
                <div className="glass rounded-2xl p-6 h-full group hover:bg-white/[0.03] transition-all">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${comp.accent} flex items-center justify-center mb-4 opacity-80`}>
                    <comp.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{comp.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{comp.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ SOLAR SYSTEM TYPES ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Building2 className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">System Types</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Solar System</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Each system type suits different needs. We'll help you choose the right one based on your location, budget, and energy goals.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {systemTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group hover:bg-white/[0.03] transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.accent} flex items-center justify-center mb-5 opacity-80`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">{type.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{type.desc}</p>

                  <div className="mt-auto space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ecolus-400 font-[family-name:var(--font-mono)] mb-2">Advantages</p>
                      {type.pros.map((pro) => (
                        <div key={pro} className="flex items-start gap-2 mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ecolus-400 mt-0.5 shrink-0" />
                          <span className="text-white/60 text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400/70 font-[family-name:var(--font-mono)] mb-2">Considerations</p>
                      {type.cons.map((con) => (
                        <div key={con} className="flex items-start gap-2 mb-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 mt-1.5 shrink-0" />
                          <span className="text-white/40 text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ INSTALLATION PROCESS ═══════════════ */}
      <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-lime-accent/5 blur-[150px]" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Leaf className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Our Process</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Installation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Timeline</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              From your first call to powering on your system, here's what to expect at every stage.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="glass rounded-2xl p-6 h-full relative overflow-hidden group hover:bg-white/[0.03] transition-all">
                  <span className="text-5xl font-bold text-white/[0.03] font-[family-name:var(--font-display)] absolute top-3 right-4">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-ecolus-500/10 flex items-center justify-center mb-4">
                    <span className="text-ecolus-400 text-sm font-bold font-[family-name:var(--font-mono)]">{step.num}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ ENERGY SAVINGS ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Savings</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              The Numbers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Speak</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
              Solar energy isn't just good for the planet — it's a smart financial investment that pays for itself.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savings.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass rounded-2xl p-6 text-center h-full group hover:bg-white/[0.03] transition-all">
                  <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent font-[family-name:var(--font-display)] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white font-medium text-sm mb-1">{stat.label}</p>
                  <p className="text-white/40 text-xs">{stat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-ecolus-500/5 blur-[150px]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Ready to Go{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Solar</span>?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
              Get a free consultation and custom solar design for your property. Our team will guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/energy/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-ecolus-500 hover:bg-ecolus-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-ecolus-500/25"
              >
                <Phone className="w-4 h-4" />
                Get a Free Quote
              </Link>
              <Link
                to="/energy/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass hover:bg-white/5 text-white/70 hover:text-white font-medium transition-all"
              >
                View Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
