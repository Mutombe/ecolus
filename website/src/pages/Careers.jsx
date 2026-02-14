import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, ChevronDown, ChevronRight, ArrowRight,
  ArrowUpRight, Users, Heart, Zap, Globe, GraduationCap, Shield,
  Sun, Leaf, Code2, Wrench, Megaphone, HeadphonesIcon, TrendingUp,
  Building2, Star, Coffee, Target, Lightbulb, Rocket
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig } from '../utils/seoConfig';

/* ────── DATA ────── */
const cultureValues = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We encourage creative solutions and embrace new technologies to stay at the forefront of renewable energy.' },
  { icon: Users, title: 'Team Spirit', desc: 'Collaboration is in our DNA. Every project is a team effort from design to commissioning.' },
  { icon: Target, title: 'Impact Driven', desc: 'Every installation we complete moves Zimbabwe closer to energy independence.' },
  { icon: Rocket, title: 'Growth Mindset', desc: 'Continuous learning and professional development are core to our culture.' },
];

const perks = [
  { icon: Sun, title: 'Flexible Hours', desc: 'Work-life balance matters' },
  { icon: GraduationCap, title: 'Training & Certs', desc: 'Paid certifications' },
  { icon: Heart, title: 'Health Benefits', desc: 'Medical aid coverage' },
  { icon: TrendingUp, title: 'Career Growth', desc: 'Clear promotion paths' },
  { icon: Coffee, title: 'Team Socials', desc: 'Monthly team events' },
  { icon: Shield, title: 'Job Security', desc: 'Growing industry' },
];

const departments = [
  { id: 'all', name: 'All Departments', icon: Building2 },
  { id: 'engineering', name: 'Engineering', icon: Wrench },
  { id: 'sales', name: 'Sales & Marketing', icon: Megaphone },
  { id: 'tech', name: 'Technology', icon: Code2 },
  { id: 'support', name: 'Customer Support', icon: HeadphonesIcon },
];

const jobListings = [
  {
    id: 1, title: 'Senior Solar Installation Engineer',
    department: 'engineering', location: 'Harare', type: 'Full-time',
    experience: '5+ years', posted: '2 days ago',
    description: 'Lead residential and commercial solar installation projects. Oversee site assessments, system design, and installation crews.',
    requirements: ['5+ years solar installation experience', 'ZERA certification', 'Team leadership skills', 'Valid driver\'s license'],
  },
  {
    id: 2, title: 'Solar Design Engineer',
    department: 'engineering', location: 'Harare', type: 'Full-time',
    experience: '3+ years', posted: '5 days ago',
    description: 'Design custom solar PV systems for residential and commercial clients using industry-standard software tools.',
    requirements: ['Electrical engineering degree', 'PVsyst/AutoCAD proficiency', 'Understanding of NEC codes', 'Strong analytical skills'],
  },
  {
    id: 3, title: 'Sales Executive — Solar Solutions',
    department: 'sales', location: 'Harare / Bulawayo', type: 'Full-time',
    experience: '2+ years', posted: '1 week ago',
    description: 'Drive revenue by generating leads, conducting site visits, and closing solar installation deals across Zimbabwe.',
    requirements: ['B2B sales experience', 'Solar industry knowledge preferred', 'Own reliable vehicle', 'Excellent communication skills'],
  },
  {
    id: 4, title: 'Digital Marketing Specialist',
    department: 'sales', location: 'Harare', type: 'Full-time',
    experience: '2+ years', posted: '3 days ago',
    description: 'Manage digital campaigns, social media, SEO, and content strategy to grow Ecolus Energy\'s online presence.',
    requirements: ['Digital marketing experience', 'SEO/SEM proficiency', 'Content creation skills', 'Analytics tools experience'],
  },
  {
    id: 5, title: 'Full-Stack Developer',
    department: 'tech', location: 'Remote / Harare', type: 'Full-time',
    experience: '3+ years', posted: '1 day ago',
    description: 'Build and maintain our customer portal, monitoring dashboards, and internal tools using modern web technologies.',
    requirements: ['React/Next.js experience', 'Node.js or Python backend', 'Database design skills', 'API development experience'],
  },
  {
    id: 6, title: 'Customer Support Specialist',
    department: 'support', location: 'Harare', type: 'Full-time',
    experience: '1+ years', posted: '4 days ago',
    description: 'Provide exceptional post-installation support, handle inquiries, and coordinate maintenance schedules.',
    requirements: ['Customer service experience', 'Technical aptitude', 'Problem-solving skills', 'CRM software familiarity'],
  },
];

/* ────── HERO: Asymmetric Split ────── */
function CareersHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-[20%] left-[5%] w-80 h-80 rounded-full border border-ecolus-500/10 hidden lg:block" />
      <div className="absolute bottom-[10%] right-[8%] w-60 h-60 rounded-full border border-lime-accent/10 hidden lg:block" />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 right-[20%] w-4 h-4 bg-ecolus-400/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-40 left-[15%] w-3 h-3 bg-lime-accent/30 rounded-full hidden lg:block"
      />

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Text - takes 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green text-ecolus-300 text-sm mb-6">
                <Briefcase className="w-4 h-4" />
                <span>We're Hiring — {jobListings.length} Open Positions</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                <span className="text-white">Build the</span>
                <br />
                <span className="bg-gradient-to-r from-ecolus-400 via-lime-accent to-ecolus-300 bg-clip-text text-transparent">
                  Energy Future
                </span>
              </h1>
              <p className="text-lg text-white/50 max-w-xl leading-relaxed mb-8">
                Join Zimbabwe's leading solar energy company and be part of a mission that powers
                homes, businesses, and a sustainable tomorrow.
              </p>
              <a href="#openings" className="group inline-flex items-center gap-2 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white rounded-2xl font-semibold transition-all">
                View Open Positions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Stats cards - takes 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { number: '50+', label: 'Team Members', icon: Users },
              { number: '8+', label: 'Years Growing', icon: TrendingUp },
              { number: '100%', label: 'Green Mission', icon: Leaf },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass rounded-2xl p-5 flex items-center gap-5 group hover:border-ecolus-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-ecolus-500/10 flex items-center justify-center shrink-0 group-hover:bg-ecolus-500/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-ecolus-400" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ────── CULTURE VALUES ────── */
function CultureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection variant="fadeRight">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                {/* Vision: Team of solar engineers in green uniforms walking together on a project site, seen from behind with a sunset */}
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Ecolus Energy team culture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[200px]"
              >
                <Star className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-white font-semibold text-sm">Great Place to Work</div>
                <div className="text-white/50 text-xs mt-1">Rated by our team</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Values */}
          <div>
            <AnimatedSection variant="fadeLeft">
              <p className="text-ecolus-400 font-medium uppercase tracking-wider text-sm mb-3">Our Culture</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                Where <span className="text-ecolus-400">Passion</span> Meets Purpose
              </h2>
              <p className="text-white/50 leading-relaxed mb-10">
                At Ecolus Energy, we don't just install solar panels — we're building a cleaner,
                more sustainable Zimbabwe. Our culture reflects our commitment to excellence,
                innovation, and community.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-5">
              {cultureValues.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-ecolus-500/10 flex items-center justify-center shrink-0 group-hover:bg-ecolus-500/20 transition-colors">
                      <value.icon className="w-6 h-6 text-ecolus-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
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

/* ────── PERKS GRID ────── */
function PerksSection() {
  return (
    <section className="py-24 mesh-gradient-green relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-14">
          <p className="text-ecolus-300 font-medium uppercase tracking-wider text-sm mb-3">Perks & Benefits</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Why You'll <span className="text-lime-accent">Love</span> Working Here
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {perks.map((perk) => (
            <StaggerItem key={perk.title}>
              <div className="glass rounded-2xl p-6 text-center hover:border-ecolus-500/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-ecolus-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-7 h-7 text-ecolus-400" />
                </div>
                <h3 className="text-white font-semibold mb-1">{perk.title}</h3>
                <p className="text-white/50 text-sm">{perk.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────── JOB LISTING CARD ────── */
function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden hover:border-ecolus-500/30 transition-all"
    >
      <div
        className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-ecolus-500/10 text-ecolus-300 font-medium">{job.type}</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50">{job.experience}</span>
            <span className="text-xs text-white/35">{job.posted}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {departments.find(d => d.id === job.department)?.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            onClick={(e) => e.stopPropagation()}
            className="px-5 py-2.5 bg-ecolus-500 hover:bg-ecolus-400 text-white rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
          >
            Apply <ArrowUpRight className="w-4 h-4" />
          </Link>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5">
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{job.description}</p>
              <h4 className="text-white font-medium text-sm mb-2">Requirements</h4>
              <div className="space-y-1.5">
                {job.requirements.map((req) => (
                  <div key={req} className="flex items-start gap-2 text-sm text-white/50">
                    <ChevronRight className="w-4 h-4 text-ecolus-400 shrink-0 mt-0.5" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ────── JOB OPENINGS ────── */
function OpeningsSection() {
  const [activeDept, setActiveDept] = useState('all');

  const filtered = jobListings.filter(
    (job) => activeDept === 'all' || job.department === activeDept
  );

  return (
    <section id="openings" className="py-24 mesh-gradient-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp" className="text-center mb-12">
          <p className="text-ecolus-400 font-medium uppercase tracking-wider text-sm mb-3">Open Positions</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Find Your <span className="text-ecolus-400">Role</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            We're looking for talented individuals to join our mission.
          </p>
        </AnimatedSection>

        {/* Department Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10 justify-center">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDept(dept.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeDept === dept.id
                  ? 'bg-ecolus-500 text-white'
                  : 'glass text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <dept.icon className="w-4 h-4" />
              {dept.name}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Briefcase className="w-12 h-12 text-white/25 mx-auto mb-4" />
            <p className="text-white/50">No openings in this department currently.</p>
          </div>
        )}

        {/* Speculative Application */}
        <AnimatedSection variant="fadeUp" className="mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Don't See Your Role?</h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto text-sm">
              We're always looking for exceptional talent. Send us your CV and tell us how you can contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/5 text-white rounded-xl font-medium transition-all"
            >
              Submit Speculative Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────── CAREERS PAGE ────── */
export default function Careers() {
  return (
    <>
      <SEOHead {...seoConfig.careers} />
      <CareersHero />
      <CultureSection />
      <PerksSection />
      <OpeningsSection />
    </>
  );
}
