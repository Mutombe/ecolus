import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronRight, Phone, MapPin, Leaf } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

// Searchable content mapping - maps keywords to sections/pages
const searchableContent = [
  { keywords: ['solar', 'installation', 'panel', 'rooftop', 'mount'], title: 'Solar Installations', path: '/services', section: 'solar-installations' },
  { keywords: ['geyser', 'water heating', 'hot water', 'gravity', 'pressure'], title: 'Solar Geysers', path: '/services', section: 'solar-geysers' },
  { keywords: ['pump', 'water pump', 'borehole', 'irrigation', 'dc', 'ac'], title: 'Solar Water Pumps', path: '/services', section: 'solar-water-pumps' },
  { keywords: ['about', 'mission', 'vision', 'team', 'company', 'who'], title: 'About Us', path: '/about', section: 'hero' },
  { keywords: ['contact', 'phone', 'email', 'address', 'quote', 'consultation'], title: 'Contact Us', path: '/contact', section: 'hero' },
  { keywords: ['shop', 'buy', 'product', 'price', 'inverter', 'battery', 'store'], title: 'Solar Shop', path: '/shop', section: 'hero' },
  { keywords: ['career', 'job', 'work', 'hiring', 'vacancy', 'apply', 'position'], title: 'Careers', path: '/careers', section: 'hero' },
  { keywords: ['gallery', 'project', 'portfolio', 'photo', 'image', 'work'], title: 'Project Gallery', path: '/gallery', section: 'hero' },
  { keywords: ['benefit', 'save', 'cost', 'electricity', 'bill', 'property value'], title: 'Benefits of Solar', path: '/', section: 'benefits' },
  { keywords: ['residential', 'home', 'house'], title: 'Residential Solar', path: '/services', section: 'solar-installations' },
  { keywords: ['commercial', 'business', 'office', 'factory', 'industrial'], title: 'Commercial Solar', path: '/services', section: 'solar-installations' },
  { keywords: ['site visit', 'assessment', 'survey', 'mapping'], title: 'Professional Site Visits', path: '/services', section: 'process' },
  { keywords: ['warranty', 'guarantee', 'maintenance'], title: 'Warranty & Support', path: '/services', section: 'warranty' },
  { keywords: ['showroom', 'samora machel', '218'], title: 'Visit Our Showroom', path: '/contact', section: 'map' },
  { keywords: ['privacy', 'policy', 'cookie', 'terms'], title: 'Privacy & Policies', path: '/contact', section: 'hero' },
];

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    setQuery('');
    setResults([]);
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matches = searchableContent.filter(item =>
      item.keywords.some(kw => kw.includes(q)) ||
      item.title.toLowerCase().includes(q)
    );
    setResults(matches);
  }, [query]);

  const handleSelect = (result) => {
    navigate(result.path);
    onClose();
    setTimeout(() => {
      const el = document.getElementById(result.section);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-[101]"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
                <Search className="w-5 h-5 text-ecolus-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, products, pages..."
                  className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-white/30 font-[family-name:var(--font-body)]"
                />
                <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto py-2">
                  {results.map((result, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(result)}
                      className="w-full flex items-center justify-between px-6 py-3.5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-ecolus-500/10 flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-ecolus-400" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-medium text-sm">{result.title}</p>
                          <p className="text-white/40 text-xs">{result.path}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-ecolus-400 transition-colors" />
                    </button>
                  ))}
                </div>
              )}
              {query && results.length === 0 && (
                <div className="px-6 py-8 text-center text-white/30">
                  No results found for "{query}"
                </div>
              )}
              {!query && (
                <div className="px-6 py-6">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Quick Links</p>
                  <div className="flex flex-wrap gap-2">
                    {['Solar Panels', 'Geysers', 'Water Pumps', 'Get Quote', 'Careers'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag.toLowerCase())}
                        className="px-3 py-1.5 rounded-full text-xs glass hover:bg-ecolus-500/10 text-white/60 hover:text-ecolus-400 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo-dark.png"
                alt="Ecolus Energy"
                loading='eager'
                className="h-15 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors font-[family-name:var(--font-body)] ${
                    location.pathname === link.path
                      ? 'text-ecolus-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ecolus-400"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-white/5 transition-all group"
              >
                <Search className="w-4 h-4 text-white/50 group-hover:text-ecolus-400 transition-colors" />
                <span className="hidden sm:inline text-xs text-white/30 font-[family-name:var(--font-mono)]">
                  ⌘K
                </span>
              </button>

              <Link
                to="/contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ecolus-500 hover:bg-ecolus-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-ecolus-500/25"
              >
                <Phone className="w-3.5 h-3.5" />
                Get Quote
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-xl glass hover:bg-white/5 transition-all"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                        location.pathname === link.path
                          ? 'bg-ecolus-500/10 text-ecolus-400'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-30" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 px-4 flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ecolus-500 text-white font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Get a Free Quote
                  </Link>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <MapPin className="w-4 h-4" />
                    218 Samora Machel Ave, Harare
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
