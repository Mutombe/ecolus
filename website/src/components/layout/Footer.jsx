import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import { Leaf, Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Project Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ],
  Services: [
    { name: 'Solar Installations', path: '/services#solar-installations' },
    { name: 'Solar Geysers', path: '/services#solar-geysers' },
    { name: 'Solar Water Pumps', path: '/services#solar-water-pumps' },
    { name: 'Site Assessment', path: '/services#process' },
    { name: 'Maintenance', path: '/services' },
  ],
  Resources: [
    { name: 'Solar Shop', path: '/shop' },
    { name: 'Solar Calculator', path: '/contact' },
    { name: 'FAQs', path: '/about#faq' },
    { name: 'Blog', path: '/' },
    { name: 'Testimonials', path: '/#testimonials' },
  ],
};

const socialLinks = [
  { Icon: Instagram, url: 'https://instagram.com/ecolusenergy', label: 'Instagram' },
  { Icon: Facebook, url: 'https://facebook.com/ecolusenergy', label: 'Facebook' },
  { Icon: Linkedin, url: 'https://linkedin.com/company/ecolusenergy', label: 'LinkedIn' },
  { Icon: FaXTwitter, url: 'https://twitter.com/ecolusenergy', label: 'Twitter' },
];

export default function Footer({ onOpenPolicy, onOpenPrivacy }) {
  return (
    <footer className="relative mt-32">
      {/* CTA Banner above footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ecolus-600 to-ecolus-800" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-accent/10 rounded-full blur-[100px]" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Go Solar?
              </h3>
              <p className="text-white/70 max-w-lg text-sm sm:text-base">
                Get a free consultation and custom solar design for your property. 
                Start saving on electricity costs today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-ecolus-800 font-bold rounded-2xl hover:bg-white/90 transition-all text-center text-sm sm:text-base"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+263712017222"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="bg-obsidian border-t border-white/5 pt-36 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img
                  src="/logo-dark.png"
                  alt="Ecolus Energy"
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                Zimbabwe's premier solar energy company delivering world-class installations, 
                solar geysers, and water pump solutions for residential and commercial properties.
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

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Ecolus Energy. All rights reserved.
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
