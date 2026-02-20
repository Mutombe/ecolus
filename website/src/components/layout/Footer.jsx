import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowRight, Instagram, Facebook, Linkedin, Zap } from 'lucide-react';
import { useCompany, companies } from '../../contexts/CompanyContext';

const energyFooterLinks = {
  Company: [
    { name: 'About Us', path: '/energy/about' },
    { name: 'Our Services', path: '/energy/services' },
    { name: 'Project Gallery', path: '/energy/gallery' },
    { name: 'Careers', path: '/energy/careers' },
    { name: 'Contact', path: '/energy/contact' },
  ],
  Services: [
    { name: 'Solar Installations', path: '/energy/services#solar-installations' },
    { name: 'Solar Geysers', path: '/energy/services#solar-geysers' },
    { name: 'Solar Water Pumps', path: '/energy/services#solar-water-pumps' },
    { name: 'Site Assessment', path: '/energy/services#process' },
    { name: 'Maintenance', path: '/energy/services' },
  ],
  Resources: [
    { name: 'Solar Shop', path: '/energy/shop' },
    { name: 'Solar Calculator', path: '/energy/contact' },
    { name: 'FAQs', path: '/energy/about#faq' },
    { name: 'Blog', path: '/energy' },
    { name: 'Testimonials', path: '/energy#testimonials' },
  ],
};

const groupFooterLinks = {
  'Our Companies': [
    { name: 'Ecolus Energy', path: '/energy' },
    { name: 'Ecolus Transport', path: '/transport' },
    { name: 'Ecolus Construction', path: '/construction' },
    { name: 'Ecolus Petroleum', path: '/petroleum' },
    { name: 'Ecolus Gas', path: '/gas' },
    { name: 'Ecolus Logistics', path: '/logistics' },
  ],
  'Quick Links': [
    { name: 'About the Group', path: '/#about' },
    { name: 'Ecolus Energy', path: '/energy' },
    { name: 'Contact Us', path: '/energy/contact' },
  ],
};

const socialLinks = [
  { Icon: Instagram, url: 'https://instagram.com/ecolusenergy', label: 'Instagram' },
  { Icon: Facebook, url: 'https://facebook.com/ecolusenergy', label: 'Facebook' },
  { Icon: Linkedin, url: 'https://linkedin.com/company/ecolusenergy', label: 'LinkedIn' },
  { Icon: FaXTwitter, url: 'https://twitter.com/ecolusenergy', label: 'Twitter' },
];

export default function Footer({ onOpenPolicy, onOpenPrivacy }) {
  const { activeCompany, isGroupPage, isSubsidiaryPlaceholder } = useCompany();

  const isEnergy = activeCompany.id === 'energy';
  const showEnergyFooter = isEnergy;
  const footerLinks = showEnergyFooter ? energyFooterLinks : groupFooterLinks;

  // CTA content based on context
  const ctaTitle = showEnergyFooter ? 'Ready to Go Solar?' : 'Discover Our Companies';
  const ctaDescription = showEnergyFooter
    ? 'Get a free consultation and custom solar design for your property. Start saving on electricity costs today.'
    : 'Explore the Ecolus Group family of companies driving Zimbabwe\'s growth across energy, transport, construction, and more.';
  const ctaLink = showEnergyFooter ? '/energy/contact' : '/#our-companies';
  const ctaLabel = showEnergyFooter ? 'Get Free Quote' : 'Explore Companies';

  // Footer brand info
  const brandName = showEnergyFooter ? 'Ecolus Energy' : 'Ecolus Group';
  const brandDescription = showEnergyFooter
    ? 'Zimbabwe\'s premier solar energy company delivering world-class installations, solar geysers, and water pump solutions for residential and commercial properties.'
    : 'A diversified Zimbabwean conglomerate operating across energy, transport, construction, petroleum, gas, and logistics.';
  const brandLogo = showEnergyFooter ? '/logo-dark.png' : '/logos/egroup.png';
  const brandBasePath = showEnergyFooter ? '/energy' : '/';
  const copyrightName = showEnergyFooter ? 'Ecolus Energy' : 'Ecolus Group';

  return (
    <footer className="relative mt-32 dark-section">
      {/* CTA Banner above footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ecolus-600 to-ecolus-800" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/10 rounded-full blur-[100px]" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                {ctaTitle}
              </h3>
              <p className="text-white/70 max-w-lg text-sm sm:text-base">
                {ctaDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to={ctaLink}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-ecolus-800 font-bold rounded-2xl hover:bg-white/90 transition-all text-center text-sm sm:text-base"
              >
                {ctaLabel}
              </Link>
              {showEnergyFooter && (
                <a
                  href="tel:+263712017222"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              )}
              {!showEnergyFooter && (
                <Link
                  to="/energy"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Zap className="w-4 h-4" />
                  Visit Ecolus Energy
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="bg-obsidian border-t border-white/5 pt-36 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to={brandBasePath} className="flex items-center gap-2 mb-6">
                <img
                  src={brandLogo}
                  alt={brandName}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                {brandDescription}
              </p>
              <div className="space-y-3 mb-6">
                <a href="tel:+263712017222" className="flex items-center gap-3 text-white/50 hover:text-ecolus-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 text-ecolus-500" />
                  +263 712 017 222
                </a>
                <a href="mailto:info@ecolusenergy.co.zw" className="flex items-center gap-3 text-white/50 hover:text-ecolus-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 text-ecolus-500" />
                  info@ecolusenergy.co.zw
                </a>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-ecolus-500 mt-0.5 flex-shrink-0" />
                  218 Samora Machel Ave, Harare
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-ecolus-400 hover:bg-ecolus-500/10 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-5">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/40 hover:text-ecolus-400 transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="rounded-2xl glass-green p-6">
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-2">Stay Updated</h3>
              <p className="text-white/40 text-xs mb-4">Get solar tips, promotions, and industry news delivered to your inbox.</p>
              <form onSubmit={(e) => { e.preventDefault(); /* future integration */ }} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all"
                />
                <button type="submit" className="px-5 py-2.5 bg-ecolus-500 hover:bg-ecolus-400 rounded-xl text-white text-sm font-semibold transition-all flex-shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mb-8" />

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} {copyrightName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={onOpenPrivacy}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={onOpenPolicy}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={onOpenPolicy}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
