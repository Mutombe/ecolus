import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import React,{ useRef } from 'react';
import {
  Sun, Zap, Droplets, Thermometer, ArrowRight, CheckCircle2,
  Shield, Award, Gauge, Sparkles, Settings, Battery, ArrowUpRight,
  Home as HomeIcon, Building2, Leaf, Phone, Star, Clock, Wrench
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig, companyInfo } from '../utils/seoConfig';

/* ─── Service data used across pages ─── */
export const servicesData = [
  {
    slug: 'solar-installations',
    num: '01',
    icon: Sun,
    title: 'Solar System Installations',
    shortTitle: 'Solar Installations',
    tagline: 'Power your home and business with the sun',
    desc: 'Complete end-to-end solar panel installations for residential and commercial properties. From initial engineering assessment to final commissioning, our certified team handles every detail with precision and care.',
    longDesc: 'Our solar installation service covers every step of your solar journey. We begin with a comprehensive site assessment using GPS-guided precision mapping and shadow analysis to determine the optimal panel placement for your property. Our certified engineers then design a custom system tailored to your energy consumption patterns, roof geometry, and budget. Installation is carried out by our highly trained technicians using only premium components from world-leading manufacturers like Canadian Solar, JA Solar, and LONGi.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80',
    blendImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    stats: { value: '500+', label: 'Installations' },
    features: ['Rooftop Systems', 'Ground-Mounted Arrays', 'Hybrid Inverters', 'Battery Storage', 'Net Metering Setup', 'Real-Time Monitoring'],
    benefits: [
      { title: 'Up to 80% bill savings', desc: 'Dramatically reduce your monthly electricity costs from day one.' },
      { title: '25-year panel warranty', desc: 'Premium panels backed by industry-leading manufacturer guarantees.' },
      { title: 'Increase property value', desc: 'Solar installations boost your property market value by up to 20%.' },
      { title: 'Energy independence', desc: 'Reduce reliance on the grid with optional battery storage solutions.' },
    ],
    applications: [
      { icon: HomeIcon, title: 'Residential', desc: 'Homes of all sizes, from cottages to estates' },
      { icon: Building2, title: 'Commercial', desc: 'Offices, warehouses, shopping centres' },
      { icon: Leaf, title: 'Agricultural', desc: 'Farms, greenhouses, irrigation systems' },
    ],
    accent: 'from-ecolus-400 to-lime-accent',
    accentBg: 'from-ecolus-500/20 to-lime-accent/10',
  },
  {
    slug: 'solar-geysers',
    num: '02',
    icon: Thermometer,
    title: 'Solar Geyser Systems',
    shortTitle: 'Solar Geysers',
    tagline: 'Hot water powered entirely by sunlight',
    desc: 'High-efficiency solar water heating systems available in both gravity-fed and pressurised configurations. Engineered for Zimbabwe\'s climate to deliver reliable hot water year-round.',
    longDesc: 'Our solar geyser systems harness Zimbabwe\'s abundant sunshine to heat your water efficiently and affordably. We offer both gravity-fed systems (ideal for areas with consistent water pressure) and pressurised systems (perfect for multi-story buildings requiring consistent pressure on all floors). Each system is designed to meet your household or business hot water demands while achieving up to 60% savings on water heating costs.',
    image: '/33.webp',
    heroImage: '/21.webp',
    blendImage: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    stats: { value: '60%', label: 'Savings' },
    features: ['Gravity-Fed Systems', 'Pressurised Systems', 'Flat Plate Collectors', 'Evacuated Tubes', 'Electric Backup Element', 'Frost Protection'],
    benefits: [
      { title: '60% water heating savings', desc: 'Slash your water heating bill with free solar energy.' },
      { title: 'Works in all weather', desc: 'Evacuated tube technology captures heat even on overcast days.' },
      { title: 'Quick installation', desc: 'Most systems installed in a single day with minimal disruption.' },
      { title: '5-year warranty', desc: 'Full workmanship warranty plus manufacturer guarantees on all components.' },
    ],
    applications: [
      { icon: HomeIcon, title: 'Residential', desc: 'Family homes, townhouses, apartments' },
      { icon: Building2, title: 'Hospitality', desc: 'Hotels, lodges, guest houses' },
      { icon: Wrench, title: 'Industrial', desc: 'Factories, laundries, food processing' },
    ],
    accent: 'from-emerald-400 to-teal-400',
    accentBg: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    slug: 'solar-water-pumps',
    num: '03',
    icon: Droplets,
    title: 'Solar Water Pumps',
    shortTitle: 'Water Pumps',
    tagline: 'Zero-grid water pumping for agriculture',
    desc: 'Reliable DC and AC solar-powered water pumping solutions for agriculture, boreholes, and irrigation systems. Zero electricity grid required — harness pure solar power for your water needs.',
    longDesc: 'Our solar water pump systems provide a complete off-grid pumping solution for farms, rural communities, and agricultural operations across Zimbabwe. Using advanced DC and AC pump technology powered directly by solar panels, these systems eliminate the need for grid electricity or diesel generators. We design each system based on your specific water requirements, borehole depth, and daily volume needs.',
    image: '/33.jpg',
    heroImage: '/20.webp',
    blendImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    stats: { value: '100%', label: 'Off-Grid' },
    features: ['Borehole Pumps', 'Surface Pumps', 'Submersible Systems', 'Irrigation Controllers', 'Livestock Watering', 'Remote Monitoring'],
    benefits: [
      { title: 'Zero running costs', desc: 'No electricity bills or diesel fuel — powered entirely by sunlight.' },
      { title: 'Remote operation', desc: 'Perfect for off-grid farms and rural locations with no grid access.' },
      { title: 'Low maintenance', desc: 'Robust DC pump technology with minimal moving parts for years of service.' },
      { title: 'Scalable systems', desc: 'Easily expand capacity as your irrigation or livestock needs grow.' },
    ],
    applications: [
      { icon: Leaf, title: 'Agriculture', desc: 'Crop irrigation, greenhouse watering' },
      { icon: Droplets, title: 'Boreholes', desc: 'Deep well and borehole extraction' },
      { icon: HomeIcon, title: 'Rural Homes', desc: 'Domestic water supply off-grid' },
    ],
    accent: 'from-lime-400 to-ecolus-400',
    accentBg: 'from-lime-500/20 to-ecolus-500/10',
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      <SEOHead {...seoConfig.services} />

      {/* ═══════════════ HERO: Full-bleed cinematic ═══════════════ */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-24 -bottom-24">
          <img
            src="/19.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-transparent" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(34,139,34,0.12) 0%, transparent 55%)' }} />

        {/* Floating leaves */}
        <motion.div animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-28 right-[10%] hidden lg:block opacity-15">
          <Leaf className="w-20 h-20 text-lime-accent" />
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green">
                <Settings className="w-3.5 h-3.5 text-lime-accent" />
                <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Our Services</span>
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Solar Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 via-lime-accent to-emerald-400">Engineered</span>{' '}
              for You
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-white/45 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Comprehensive solar energy services tailored for Zimbabwe's homes, businesses, and agricultural operations. From panels to pumps, we've got you covered.
            </motion.p>

            {/* Quick service nav pills */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3">
              {servicesData.map((s) => (
                <a key={s.slug} href={`#${s.slug}`} className="group flex items-center gap-2 px-5 py-2.5 glass hover:glass-green rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all">
                  <s.icon className="w-4 h-4 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                  {s.shortTitle}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STICKY SERVICE NAV ═══════════════ */}
      <nav className="sticky top-20 z-40 glass border-y border-white/5 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {servicesData.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
              >
                <s.icon className="w-4 h-4 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                {s.shortTitle}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10 mx-2" />
            <a
              href="#process"
              className="px-4 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Our Process
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════ SERVICE SECTIONS ═══════════════ */}
      {servicesData.map((service, idx) => (
        <ServiceBlock key={service.slug} service={service} index={idx} />
      ))}

      {/* ═══════════════ PROCESS: How we work ═══════════════ */}
      <section id="process" className="relative py-24 sm:py-32 overflow-hidden dark-section">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-obsidian/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34,139,34,0.08) 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <Gauge className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Our Process</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Work</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
              Professional site visits ensure 100% accuracy in every installation we deliver.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {[
              { icon: Gauge, num: '01', title: 'Site Assessment', desc: 'GPS-guided mapping with shadow analysis and structural assessment for optimal placement.' },
              { icon: Sparkles, num: '02', title: 'Custom Design', desc: 'Every system uniquely designed to match your energy profile and roof geometry.' },
              { icon: Sun, num: '03', title: 'Installation', desc: 'Expert installation by certified technicians with minimal disruption.' },
              { icon: Shield, num: '04', title: 'Commissioning', desc: 'System testing, grid connection, and handover with full monitoring setup.' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="group text-center p-6 sm:p-8 rounded-3xl glass hover:glass-green transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-ecolus-500/0 to-lime-accent/0 group-hover:from-ecolus-500/5 group-hover:to-lime-accent/3 transition-all duration-500" />
                  <div className="relative">
                    <span className="text-4xl font-black text-ecolus-500/10 font-[family-name:var(--font-display)] block mb-3 group-hover:text-lime-accent/15 transition-colors">{item.num}</span>
                    <div className="w-14 h-14 rounded-2xl bg-ecolus-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-ecolus-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-ecolus-400 group-hover:text-lime-accent transition-colors" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════ WARRANTY ═══════════════ */}
      <section id="warranty" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-ecolus-500/3 blur-[150px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-green p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-lime-accent/5 blur-[100px]" />
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-ecolus-500/5 hidden lg:block" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                  <Shield className="w-3.5 h-3.5 text-lime-accent" />
                  <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Warranty</span>
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-5">
                  Industry-Leading{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Warranties</span>
                </h2>
                <p className="text-white/50 mb-8 leading-relaxed text-sm sm:text-base">
                  Every Ecolus Energy installation comes with comprehensive warranty coverage that protects your investment for decades.
                </p>
                <Link to="/energy/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 rounded-2xl text-white font-bold text-sm transition-all hover:shadow-xl hover:shadow-ecolus-500/20">
                  <Phone className="w-4 h-4" />
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>

              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {[
                  { val: '25', unit: 'Years', desc: 'Solar Panel Warranty', icon: Sun },
                  { val: '10', unit: 'Years', desc: 'Inverter Warranty', icon: Zap },
                  { val: '5', unit: 'Years', desc: 'Workmanship Warranty', icon: Wrench },
                  { val: '24/7', unit: '', desc: 'Monitoring & Support', icon: Gauge },
                ].map((w, i) => (
                  <StaggerItem key={i}>
                    <div className="group p-5 rounded-2xl glass text-center hover:-translate-y-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-ecolus-500/20 transition-colors">
                        <w.icon className="w-5 h-5 text-ecolus-400" />
                      </div>
                      <p className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                        {w.val}<span className="text-sm text-lime-accent/60 ml-1">{w.unit}</span>
                      </p>
                      <p className="text-white/40 text-xs mt-1">{w.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ═══════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="text-white/25 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase">We Install Products From</p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {['Canadian Solar', 'JA Solar', 'Deye', 'Growatt', 'LONGi', 'Trina Solar', 'Huawei', 'BYD'].map((brand, i) => (
              <motion.div key={brand} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="text-white/15 hover:text-white/35 transition-colors font-[family-name:var(--font-display)] text-sm font-semibold tracking-wider">
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════ SERVICE BLOCK COMPONENT ═══════════════ */
function ServiceBlock({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section id={service.slug} className="relative py-24 sm:py-32 overflow-hidden">
      {isEven ? <div className="absolute inset-0 mesh-gradient-dark" /> : <div className="absolute inset-0 mesh-gradient-green" />}
      {!isEven && <div className="absolute inset-0 dot-pattern opacity-8" />}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />

      {/* Organic blobs */}
      <div className={`absolute ${isEven ? 'top-20 -right-40' : 'bottom-20 -left-40'} w-[500px] h-[500px] rounded-full bg-ecolus-500/3 blur-[150px]`} />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
          {/* Image side */}
          <AnimatedSection variant={isEven ? 'fadeLeft' : 'fadeRight'} className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group dark-section">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              {/* Green ecosystem overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-ecolus-900/20" />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Leaf decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Leaf className="w-6 h-6 text-lime-accent/30" />
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-3 right-4 sm:bottom-6 sm:right-6 glass-green rounded-2xl p-4 border border-ecolus-500/10 shadow-xl shadow-ecolus-500/5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-lime-accent/15 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-lime-accent" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white font-[family-name:var(--font-display)]">{service.stats.value}</p>
                  <p className="text-white/40 text-[10px] font-[family-name:var(--font-mono)]">{service.stats.label.toUpperCase()}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection variant={isEven ? 'fadeRight' : 'fadeLeft'} delay={0.2} className={!isEven ? 'lg:[direction:ltr]' : ''}>
            <div className="flex items-center gap-3 mb-5">
              <span className={`px-3 py-1 rounded-full text-xs font-bold font-[family-name:var(--font-mono)] bg-gradient-to-r ${service.accentBg}`}>
                <span className="text-lime-accent">{service.num}</span>
              </span>
              <span className="text-white/25 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase">Service</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-2 leading-tight">
              {service.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.accent}`}>
                {service.title.split(' ').slice(-1)}
              </span>
            </h2>
            <p className="text-ecolus-400/70 text-sm font-[family-name:var(--font-mono)] mb-5">{service.tagline}</p>

            <p className="text-white/45 leading-relaxed mb-8 text-sm sm:text-base">{service.desc}</p>

            {/* Feature checklist */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {service.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 group/feat">
                  <CheckCircle2 className="w-4 h-4 text-ecolus-400 flex-shrink-0 group-hover/feat:text-lime-accent transition-colors" />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>

            {/* Applications */}
            <div className="flex flex-wrap gap-3 mb-8">
              {service.applications.map((app) => (
                <div key={app.title} className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-white/50">
                  <app.icon className="w-3.5 h-3.5 text-ecolus-400" />
                  {app.title}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/energy/contact" className="group flex items-center gap-2 px-7 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 rounded-2xl text-white font-bold text-sm transition-all hover:shadow-xl hover:shadow-ecolus-500/20">
                Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to={`/energy/services/${service.slug}`} className="group flex items-center gap-2 px-7 py-3.5 glass hover:glass-green rounded-2xl text-white/70 font-semibold text-sm transition-all">
                Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}