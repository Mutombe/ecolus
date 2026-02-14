import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Filter, Sun, Droplets, Thermometer } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig } from '../utils/seoConfig';

const categories = [
  { id: 'all', label: 'All Projects', icon: Filter },
  { id: 'installations', label: 'Solar Installations', icon: Sun },
  { id: 'geysers', label: 'Solar Geysers', icon: Thermometer },
  { id: 'pumps', label: 'Water Pumps', icon: Droplets },
];

const projects = [
  {
    id: 1, category: 'installations', title: 'Residential 10kW System',
    location: 'Borrowdale, Harare', description: 'Complete rooftop solar installation with battery backup for a modern family home.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    id: 2, category: 'installations', title: 'Commercial 50kW Array',
    location: 'Msasa, Harare', description: 'Large-scale commercial installation for a warehouse and office complex.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
  },
  {
    id: 3, category: 'geysers', title: '300L Pressurised Geyser',
    location: 'Mt Pleasant, Harare', description: 'High-pressure solar geyser installation with evacuated tube collectors.',
    image: '/10.jpg',
  },
  {
    id: 4, category: 'pumps', title: 'Farm Borehole Pump',
    location: 'Mazowe, Mashonaland', description: 'Solar-powered submersible pump supplying water to a 50-hectare farm.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    id: 5, category: 'installations', title: 'School Solar Project',
    location: 'Chitungwiza', description: 'Off-grid solar system powering a primary school with 20 classrooms.',
    image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&q=80',
  },
  {
    id: 6, category: 'installations', title: 'Lodge Solar Solution',
    location: 'Victoria Falls', description: 'Hybrid solar system for a luxury safari lodge with zero grid dependency.',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80',
  },
  {
    id: 7, category: 'geysers', title: 'Gravity-Fed Geyser',
    location: 'Highlands, Harare', description: 'Cost-effective gravity-fed solar geyser for a residential property.',
    image: '/18.jpg',
  },
  {
    id: 8, category: 'pumps', title: 'Irrigation System',
    location: 'Chinhoyi', description: 'Solar-powered surface pump for crop irrigation across multiple fields.',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
  },
  {
    id: 9, category: 'installations', title: 'Residential Hybrid System',
    location: 'Greendale, Harare', description: 'Grid-tied hybrid system with Deye inverter and BYD battery storage.',
    image: 'https://images.unsplash.com/photo-1592833159117-ac790d4066e4?w=800&q=80',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev + 1) % filtered.length);
  const prevImage = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <>
      <SEOHead {...seoConfig.gallery} />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-8"
            >
              <Camera className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Our Work
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Project{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Gallery
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-lg max-w-2xl mx-auto"
            >
              Browse our portfolio of completed solar installations across Zimbabwe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Filter Tabs ─── */}
      <section className="relative py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-ecolus-500 text-white shadow-lg shadow-ecolus-500/25'
                    : 'glass text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="relative py-16">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer rounded-2xl overflow-hidden glass hover:glow-green transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-xs text-ecolus-400 font-[family-name:var(--font-mono)] mb-1">{project.location}</p>
                      <h3 className="text-white font-bold font-[family-name:var(--font-display)]">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-ecolus-400 font-[family-name:var(--font-mono)] mb-1">{project.location}</p>
                    <h3 className="text-white font-semibold text-sm font-[family-name:var(--font-display)]">{project.title}</h3>
                    <p className="text-white/40 text-xs mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/50 hover:text-white z-10">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/50 hover:text-white z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="w-full rounded-2xl max-h-[75vh] object-contain"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold font-[family-name:var(--font-display)]">
                  {filtered[lightbox].title}
                </h3>
                <p className="text-ecolus-400 text-sm mt-1">{filtered[lightbox].location}</p>
                <p className="text-white/40 text-sm mt-2 max-w-xl mx-auto">{filtered[lightbox].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <section className="relative py-24">
        <div className="absolute inset-0 mesh-gradient-green" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl glass-green p-8 sm:p-12 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                  Solar Journey
                </span>?
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-8">
                Join hundreds of satisfied clients who have made the switch to clean, affordable solar energy.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 rounded-xl text-white font-semibold transition-all"
              >
                Get Your Free Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
