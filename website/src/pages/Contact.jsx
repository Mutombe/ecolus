import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  Instagram, Facebook, Linkedin, Twitter, ArrowRight, CheckCircle2
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import SEOHead from '../components/layout/SEOHead';
import { seoConfig, companyInfo } from '../utils/seoConfig';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+263 712 017 222', '+263 712 094 535', '+263 778 138 528'],
    action: 'tel:+263712017222',
    actionLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@ecolusenergy.co.zw'],
    action: 'mailto:info@ecolusenergy.co.zw',
    actionLabel: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Visit Our Showroom',
    details: ['218 Samora Machel Ave', 'Harare, Zimbabwe'],
    action: 'https://maps.google.com/?q=218+Samora+Machel+Ave+Harare',
    actionLabel: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon – Fri: 8:00 AM – 5:00 PM', 'Sat: 8:00 AM – 1:00 PM'],
    action: null,
    actionLabel: null,
  },
];

const serviceOptions = [
  'Solar System Installation',
  'Solar Geyser',
  'Solar Water Pump',
  'Battery Storage',
  'Maintenance & Support',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <SEOHead {...seoConfig.contact} />

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
              <MessageSquare className="w-3.5 h-3.5 text-lime-accent" />
              <span className="text-ecolus-300 text-xs font-medium font-[family-name:var(--font-mono)] tracking-wider uppercase">
                Get In Touch
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Let's Power Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                Future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-lg max-w-2xl mx-auto"
            >
              Ready to switch to solar? Get a free consultation and quote from our expert team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Contact Methods ─── */}
      <section className="relative py-16">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {contactMethods.map((method, i) => (
              <StaggerItem key={i}>
                <div className="p-6 rounded-2xl glass hover:glass-green transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-ecolus-500/10 flex items-center justify-center mb-4 group-hover:bg-ecolus-500/20 transition-colors">
                    <method.icon className="w-5 h-5 text-ecolus-400" />
                  </div>
                  <h3 className="text-white font-semibold font-[family-name:var(--font-display)] mb-3">{method.title}</h3>
                  <div className="flex-1">
                    {method.details.map((d, j) => (
                      <p key={j} className="text-white/50 text-sm">{d}</p>
                    ))}
                  </div>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-ecolus-400 text-sm font-medium mt-4 hover:text-lime-accent transition-colors"
                    >
                      {method.actionLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Form + Map ─── */}
      <section className="relative py-24">
        <div className="absolute inset-0 mesh-gradient-green" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
              <div className="rounded-3xl glass p-6 sm:p-8 lg:p-10">
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-2">
                  Request a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecolus-400 to-lime-accent">
                    Free Quote
                  </span>
                </h2>
                <p className="text-white/40 text-sm mb-8">
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-ecolus-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-ecolus-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-[family-name:var(--font-display)] mb-2">Message Sent!</h3>
                    <p className="text-white/50">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+263 7XX XXX XXX"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all appearance-none"
                        >
                          <option value="" className="bg-obsidian">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s} className="bg-obsidian">{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 font-[family-name:var(--font-mono)]">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, property type, energy needs..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-ecolus-500 focus:ring-1 focus:ring-ecolus-500 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-ecolus-500 hover:bg-ecolus-400 rounded-xl text-white font-semibold text-sm transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Sidebar Info */}
            <AnimatedSection variant="fadeRight" delay={0.2} className="lg:col-span-2">
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden glass mb-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ4LjAiUyAzMcKwMDMnMDAuMCJF!5e0!3m2!1sen!2szw!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ecolus Energy Location"
                />
              </div>

              {/* Social Links */}
              <div className="rounded-2xl glass p-6">
                <h3 className="text-white font-semibold font-[family-name:var(--font-display)] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/ecolusenergy', label: 'Instagram' },
                    { icon: Facebook, href: 'https://facebook.com/ecolusenergy', label: 'Facebook' },
                    { icon: Linkedin, href: 'https://linkedin.com/company/ecolusenergy', label: 'LinkedIn' },
                    { icon: FaXTwitter, href: 'https://twitter.com/ecolusenergy', label: 'Twitter' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-ecolus-500/20 flex items-center justify-center text-white/40 hover:text-ecolus-400 transition-all"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/263712017222?text=Hi%20Ecolus%20Energy%2C%20I'm%20interested%20in%20your%20solar%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 p-5 rounded-2xl glass-green hover:bg-ecolus-500/15 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/40 text-xs">Quick response, direct support</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-ecolus-400 group-hover:translate-x-1 transition-all" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
