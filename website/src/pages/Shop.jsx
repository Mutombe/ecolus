import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Sun, Battery, Gauge, Zap, Filter, Grid3X3, LayoutList, Search,
  ShoppingCart, Star, ArrowRight, ArrowUpRight, ChevronDown, Heart,
  Eye, Package, Truck, ShieldCheck, Tag, Sparkles, CircleDot, Box,
  X, Mail, MessageCircle, Phone, CheckCircle2, Leaf, ExternalLink,
  Info, ChevronRight, Send
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig, companyInfo } from '../utils/seoConfig';

/* ══════════════════════════════ PRODUCT DATA ══════════════════════════════ */
const categories = [
  { id: 'all', name: 'All Products', icon: Grid3X3 },
  { id: 'panels', name: 'Solar Panels', icon: Sun },
  { id: 'inverters', name: 'Inverters', icon: Zap },
  { id: 'batteries', name: 'Batteries', icon: Battery },
  { id: 'accessories', name: 'Accessories', icon: Package },
];

const products = [
  {
    id: 1, category: 'panels', name: 'Canadian Solar 550W Mono PERC',
    brand: 'Canadian Solar', price: 189, rating: 4.9, reviews: 127, badge: 'Best Seller',
    specs: ['550W Output', 'Mono PERC', '21.3% Efficiency', '25-Year Warranty'],
    description: 'High-performance monocrystalline PERC solar panel delivering exceptional energy yield. Ideal for residential and commercial rooftop installations. Features half-cut cell technology for superior shade tolerance and lower power loss.',
    highlights: ['Industry-leading 21.3% module efficiency', 'Half-cut cell technology for better shade performance', 'PID-resistant and salt-mist corrosion certified', 'Compatible with all major inverter brands'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    id: 2, category: 'panels', name: 'JA Solar 540W Bi-Facial Module',
    brand: 'JA Solar', price: 210, rating: 4.8, reviews: 89, badge: 'Premium',
    specs: ['540W Output', 'Bi-Facial', '22.1% Efficiency', '30-Year Warranty'],
    description: 'Premium bi-facial solar module that captures sunlight from both sides for up to 25% additional energy gain. Perfect for ground-mount arrays and elevated installations where reflected light can reach the rear side.',
    highlights: ['Bi-facial technology captures light from both sides', 'Up to 25% additional energy yield', 'Extended 30-year linear power warranty', 'Excellent low-light and high-temperature performance'],
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80',
  },
  {
    id: 3, category: 'panels', name: 'LONGi 500W Hi-MO 5',
    brand: 'LONGi', price: 165, rating: 4.7, reviews: 203, badge: null,
    specs: ['500W Output', 'Half-Cell', '20.8% Efficiency', '25-Year Warranty'],
    description: 'LONGi Hi-MO 5 series delivers reliable high-power output with proven gallium-doped technology. A cost-effective choice for large residential and commercial projects requiring excellent value per watt.',
    highlights: ['Gallium-doped for zero LID degradation', 'Excellent cost-per-watt ratio', 'Robust frame design rated for heavy snow and wind loads', 'Tier 1 bankable manufacturer'],
    image: '/26.png',
  },
  {
    id: 4, category: 'inverters', name: 'Deye 8kW Hybrid Inverter',
    brand: 'Deye', price: 1250, rating: 4.9, reviews: 64, badge: 'Popular',
    specs: ['8kW Capacity', 'Hybrid', 'MPPT Tracker', 'WiFi Monitoring'],
    description: 'Versatile hybrid inverter supporting grid-tied, off-grid, and battery storage configurations. Built-in WiFi allows real-time monitoring via mobile app. Supports parallel connection for system expansion up to 48kW.',
    highlights: ['Seamless grid-tied and off-grid switching', 'Dual MPPT trackers for flexible array design', 'Built-in WiFi monitoring with mobile app', 'Expandable to 48kW with parallel connection'],
    image: '/30.avif',
  },
  {
    id: 5, category: 'inverters', name: 'Growatt 5kW String Inverter',
    brand: 'Growatt', price: 780, rating: 4.6, reviews: 156, badge: null,
    specs: ['5kW Capacity', 'String', 'Dual MPPT', 'App Control'],
    description: 'Compact and efficient string inverter ideal for small to medium residential systems. Features dual MPPT inputs for flexible panel configurations and real-time monitoring through the ShinePhone app.',
    highlights: ['Compact lightweight design for easy installation', 'Dual MPPT for flexible panel layout', 'Real-time monitoring via ShinePhone app', 'IP65-rated for outdoor installation'],
    image: '/31.webp',
  },
  {
    id: 6, category: 'inverters', name: 'Huawei SUN2000 10kW',
    brand: 'Huawei', price: 1890, rating: 4.9, reviews: 42, badge: 'Premium',
    specs: ['10kW Capacity', 'AI Powered', '98.6% Efficiency', 'Smart IV Curve'],
    description: 'Flagship AI-powered inverter with industry-leading 98.6% conversion efficiency. Smart IV Curve Diagnosis automatically detects and reports string-level faults. Built for large residential and commercial projects.',
    highlights: ['AI-powered Smart IV Curve fault detection', '98.6% peak conversion efficiency', 'Integrated arc fault circuit interrupter (AFCI)', 'Compatible with Huawei LUNA2000 battery system'],
    image: '/29.png',
  },
  {
    id: 7, category: 'batteries', name: 'BYD Premium LVS 15.4kWh',
    brand: 'BYD', price: 4200, rating: 4.8, reviews: 31, badge: 'Premium',
    specs: ['15.4kWh', 'LiFePO4', '10,000+ Cycles', '10-Year Warranty'],
    description: 'Modular lithium iron phosphate battery system with industry-best cycle life. Stackable design allows flexible capacity from 3.8kWh to 256kWh. Cobalt-free chemistry ensures maximum safety and longevity.',
    highlights: ['Cobalt-free LiFePO4 for maximum safety', 'Modular design: 3.8kWh to 256kWh', '10,000+ cycle life for decade-long service', 'Compatible with all major hybrid inverters'],
    image: '/28.jpg',
  },
  {
    id: 8, category: 'batteries', name: 'Pylontech US3000C 3.5kWh',
    brand: 'Pylontech', price: 890, rating: 4.7, reviews: 198, badge: 'Best Value',
    specs: ['3.5kWh', 'LiFePO4', '6,000+ Cycles', 'Stackable'],
    description: 'Affordable and reliable lithium battery module with easy plug-and-play stackable design. Stack up to 8 units for 28kWh of storage. The most popular residential storage choice in Zimbabwe.',
    highlights: ['Plug-and-play stackable design', 'Stack up to 8 units (28kWh total)', 'Built-in BMS for safe operation', 'Most popular residential battery in Zimbabwe'],
    image: '/32.jpg',
  },
  {
    id: 9, category: 'accessories', name: 'Solar Panel Mounting Kit (Roof)',
    brand: 'Ecolus', price: 120, rating: 4.5, reviews: 87, badge: null,
    specs: ['Aluminium Rails', 'Clamps Included', 'Wind-Rated', 'Universal Fit'],
    description: 'Complete rooftop mounting system with anodised aluminium rails, mid and end clamps, and all necessary hardware. Engineered for Zimbabwe\'s wind conditions and compatible with all standard panel frames.',
    highlights: ['Anodised aluminium for corrosion resistance', 'Universal fit for all standard panel sizes', 'Wind-rated for local conditions', 'Includes all hardware and fixings'],
    image: '/27.jpg',
  },
  {
    id: 10, category: 'accessories', name: 'Smart Energy Monitoring System',
    brand: 'Ecolus', price: 350, rating: 4.8, reviews: 45, badge: 'New',
    specs: ['Real-Time Data', 'WiFi + 4G', 'App Dashboard', 'Usage Analytics'],
    description: 'Advanced energy monitoring system that tracks your solar generation, battery status, grid usage, and energy consumption in real time. Features a mobile app dashboard with historical analytics and smart alerts.',
    highlights: ['Real-time generation and consumption tracking', 'WiFi + 4G connectivity for remote monitoring', 'Smart alerts for faults and anomalies', 'Historical analytics and export reports'],
    image: '/23.webp',
  },
];

const trustBadges = [
  { icon: Truck, label: 'Free Delivery', desc: 'On orders over $500' },
  { icon: ShieldCheck, label: 'Warranty Covered', desc: 'Up to 25 years' },
  { icon: Package, label: 'Expert Installation', desc: 'Professional setup' },
  { icon: Tag, label: 'Price Match', desc: 'Best price guaranteed' },
];

/* Helper: generate inquiry links */
const WHATSAPP_NUM = '263712017222';
const EMAIL = companyInfo?.email || 'info@ecolusenergy.co.zw';

function getWhatsAppLink(product) {
  const msg = encodeURIComponent(
    `Hi Ecolus Energy 👋\n\nI'm interested in the *${product.name}* (${product.brand}) listed at $${product.price.toLocaleString()} on your website.\n\nCould you please provide more details on:\n• Availability & lead time\n• Installation options\n• Any current promotions\n\nThank you!`
  );
  return `https://wa.me/${WHATSAPP_NUM}?text=${msg}`;
}

function getEmailLink(product) {
  const subject = encodeURIComponent(`Product Inquiry: ${product.name}`);
  const body = encodeURIComponent(
    `Hello Ecolus Energy,\n\nI am interested in the ${product.name} (${product.brand}) listed at $${product.price.toLocaleString()} on your website.\n\nPlease provide me with:\n- Current availability and lead time\n- Installation options and costs\n- Any promotions or bundle deals\n\nKind regards`
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}


/* ══════════════════════════════ PRODUCT MODAL ══════════════════════════════ */
function ProductModal({ product, onClose }) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!product) return null;

  const categoryLabel = categories.find(c => c.id === product.category)?.name || product.category;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-md dark-section" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass border border-white/10 shadow-2xl shadow-ecolus-500/5 dark-section"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl glass hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Image section */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl dark-section">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-ecolus-900/20 via-transparent to-lime-accent/5" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ecolus-500 text-white text-xs font-bold tracking-wide">
              {product.badge}
            </div>
          )}

          {/* Price overlay */}
          <div className="absolute bottom-4 left-6">
            <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] mb-1">{categoryLabel}</p>
            <p className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-display)]">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-ecolus-400 text-xs font-bold font-[family-name:var(--font-mono)] tracking-wider uppercase">{product.brand}</span>
              <div className="flex items-center gap-1 ml-auto">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-white/60 text-xs">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-white">{product.name}</h2>
          </div>

          {/* Description */}
          <p className="text-white/45 text-sm leading-relaxed mb-6">{product.description}</p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {product.specs.map((spec) => (
              <div key={spec} className="px-3 py-2.5 rounded-xl glass text-center">
                <p className="text-white text-xs font-semibold">{spec}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-white font-bold text-sm font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-accent" />
              Key Highlights
            </h3>
            <div className="space-y-2">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Leaf className="w-3.5 h-3.5 text-ecolus-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5 mb-6" />

          {/* Inquiry CTA section */}
          <div className="space-y-3">
            <p className="text-white font-bold font-[family-name:var(--font-display)] text-sm mb-4">Interested? Get in touch:</p>

            {/* WhatsApp */}
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 w-full p-4 rounded-2xl glass hover:glass-green transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-semibold text-sm">WhatsApp Inquiry</p>
                <p className="text-white/35 text-xs">Opens WhatsApp with a prefilled message</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Email */}
            <a
              href={getEmailLink(product)}
              className="group flex items-center gap-4 w-full p-4 rounded-2xl glass hover:glass-green transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ecolus-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-ecolus-500/25 transition-colors">
                <Mail className="w-6 h-6 text-ecolus-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-semibold text-sm">Email Inquiry</p>
                <p className="text-white/35 text-xs">Opens your email app with a prefilled message</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-ecolus-400 transition-colors" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone[0].replace(/ /g, '')}`}
              className="group flex items-center gap-4 w-full p-4 rounded-2xl glass hover:glass-green transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-lime-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-lime-accent" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-semibold text-sm">Call Us Directly</p>
                <p className="text-white/35 text-xs">{companyInfo.phone[0]}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-lime-accent transition-colors" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


/* ══════════════════════════════ HERO ══════════════════════════════ */
function ShopHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 -top-24 -bottom-24">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 to-transparent" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 50%, rgba(34,139,34,0.12) 0%, transparent 55%)' }} />

      {/* Floating leaf */}
      <motion.div animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-24 right-[12%] hidden lg:block opacity-15">
        <Leaf className="w-16 h-16 text-lime-accent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-8">
              <Sparkles className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Premium Solar Products</span>
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            Power Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 via-lime-accent to-emerald-400">Future</span>{' '}
            Today
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-white/45 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            Shop premium solar panels, inverters, batteries and accessories from world-leading brands. Every product comes with professional installation support.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
            <a href="#products" className="group flex items-center gap-3 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm">
              Browse Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/energy/contact" className="flex items-center gap-3 px-8 py-4 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm">
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


/* ══════════════════════════════ TRUST BAR ══════════════════════════════ */
function TrustBar() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-obsidian/80 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 py-5 px-4 border-r border-white/5 last:border-r-0"
            >
              <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-ecolus-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{badge.label}</div>
                <div className="text-xs text-white/30">{badge.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════ PRODUCT CARD ══════════════════════════════ */
function ProductCard({ product, index, onOpenModal }) {
  const categoryColors = {
    panels: 'from-ecolus-500/80 to-emerald-600/80',
    inverters: 'from-lime-500/80 to-ecolus-500/80',
    batteries: 'from-emerald-500/80 to-teal-500/80',
    accessories: 'from-teal-500/80 to-ecolus-500/80',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative glass rounded-3xl overflow-hidden hover:border-ecolus-500/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-ecolus-500 text-white text-[10px] font-bold tracking-wider uppercase">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden dark-section">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
        {/* Green ecosystem overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[product.category] || 'from-ecolus-500/60 to-emerald-600/60'} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Leaf decoration on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Leaf className="w-5 h-5 text-lime-accent/40" />
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onOpenModal(product)}
            className="px-5 py-2.5 bg-ecolus-500/90 backdrop-blur-sm text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-ecolus-400 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4" /> View Details
          </button>
        </div>

        {/* Category pill inside image */}
        <div className="absolute bottom-3 left-4">
          <span className="text-[10px] px-2.5 py-1 rounded-full glass text-white/60 font-[family-name:var(--font-mono)] uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Brand + Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-ecolus-400 text-xs font-bold font-[family-name:var(--font-mono)] uppercase tracking-wider">{product.brand}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-white/50 text-xs">{product.rating}</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-white font-bold font-[family-name:var(--font-display)] text-sm mb-3 line-clamp-2 flex-1">{product.name}</h3>

        {/* Specs pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.specs.slice(0, 3).map((spec) => (
            <span key={spec} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">{spec}</span>
          ))}
        </div>

        {/* Price + Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <p className="text-xl font-black text-white font-[family-name:var(--font-display)]">
            ${product.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-2">
            {/* WhatsApp quick btn */}
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp inquiry"
              className="w-9 h-9 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/25 flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </a>
            {/* View details btn */}
            <button
              onClick={() => onOpenModal(product)}
              className="flex items-center gap-1.5 px-4 py-2 bg-ecolus-500/10 hover:bg-ecolus-500 text-ecolus-300 hover:text-white rounded-xl text-xs font-semibold transition-all"
            >
              Details <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


/* ══════════════════════════════ PRODUCTS SECTION ══════════════════════════════ */
function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ecolus-500/20 to-transparent" />
        <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-ecolus-500/3 blur-[150px]" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6">
              <ShoppingCart className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">Product Range</span>
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">Products</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
              Premium solar products from world-leading manufacturers. Every product is tested, certified, and backed by our installation guarantee.
            </p>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 glass rounded-2xl text-white placeholder:text-white/25 text-sm focus:outline-none focus:ring-1 focus:ring-ecolus-500/50 bg-transparent"
              />
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-ecolus-500 text-white shadow-lg shadow-ecolus-500/20'
                      : 'glass text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="text-xs text-white/25 font-[family-name:var(--font-mono)] mb-6 tracking-wider">
            SHOWING {filtered.length} OF {products.length} PRODUCTS
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onOpenModal={setModalProduct} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Box className="w-14 h-14 text-white/10 mx-auto mb-4" />
              <p className="text-white/40 text-lg font-[family-name:var(--font-display)]">No products found</p>
              <p className="text-white/25 text-sm mt-1">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalProduct && <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />}
      </AnimatePresence>
    </>
  );
}


/* ══════════════════════════════ BRANDS ══════════════════════════════ */
function BrandsSection() {
  const brands = ['Canadian Solar', 'JA Solar', 'LONGi', 'Trina Solar', 'Deye', 'Growatt', 'Huawei', 'BYD', 'Pylontech', 'Victron'];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-green" />
      <div className="absolute inset-0 dot-pattern opacity-8" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-white/25 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase">Trusted Partners</p>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mt-2">
            We Stock Only the <span className="text-ecolus-400">Best Brands</span>
          </h3>
        </AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand, i) => (
            <motion.div key={brand} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="text-white/15 hover:text-white/35 transition-colors font-[family-name:var(--font-display)] text-sm font-semibold tracking-wider">
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════ CTA ══════════════════════════════ */
function ConsultationCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden dark-section">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80" alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-obsidian/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(34,139,34,0.1) 0%, transparent 60%)' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-2xl bg-lime-accent/10 border border-lime-accent/20 flex items-center justify-center mx-auto mb-8">
            <CircleDot className="w-8 h-8 text-lime-accent" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Not Sure What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">You Need?</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Our solar experts will assess your property and recommend the perfect system tailored to your energy needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/energy/contact" className="group flex items-center gap-3 px-8 py-4 bg-ecolus-500 hover:bg-ecolus-400 text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-ecolus-500/20 text-sm w-full sm:w-auto justify-center">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hi Ecolus Energy! I'd like a free consultation about solar solutions for my property.")}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 glass hover:glass-green text-white/80 font-semibold rounded-2xl transition-all text-sm w-full sm:w-auto justify-center">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


/* ══════════════════════════════ SHOP PAGE ══════════════════════════════ */
export default function Shop() {
  return (
    <>
      <SEOHead {...seoConfig.shop} />
      <ShopHero />
      <TrustBar />
      <ProductsSection />
      <BrandsSection />
      <ConsultationCTA />
    </>
  );
}