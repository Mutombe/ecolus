import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronRight, Phone, MapPin, Leaf, Sun, Moon, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCompany } from '../../contexts/CompanyContext';
import NavDropdown from './NavDropdown';
import NavMobileItem from './NavMobileItem';

// Searchable content mapping - maps keywords to sections/pages
const searchableContent = [
  { keywords: ['solar', 'installation', 'panel', 'rooftop', 'mount'], title: 'Solar Installations', path: '/energy/services', section: 'solar-installations' },
  { keywords: ['geyser', 'water heating', 'hot water', 'gravity', 'pressure'], title: 'Solar Geysers', path: '/energy/services', section: 'solar-geysers' },
  { keywords: ['pump', 'water pump', 'borehole', 'irrigation', 'dc', 'ac'], title: 'Solar Water Pumps', path: '/energy/services', section: 'solar-water-pumps' },
  { keywords: ['about', 'mission', 'vision', 'team', 'company', 'who'], title: 'About Us', path: '/energy/about', section: 'hero' },
  { keywords: ['contact', 'phone', 'email', 'address', 'quote', 'consultation'], title: 'Contact Us', path: '/energy/contact', section: 'hero' },
  { keywords: ['shop', 'buy', 'product', 'price', 'inverter', 'battery', 'store'], title: 'Solar Shop', path: '/energy/shop', section: 'hero' },
  { keywords: ['career', 'job', 'work', 'hiring', 'vacancy', 'apply', 'position'], title: 'Careers', path: '/energy/careers', section: 'hero' },
  { keywords: ['gallery', 'project', 'portfolio', 'photo', 'image', 'work'], title: 'Project Gallery', path: '/energy/gallery', section: 'hero' },
  { keywords: ['how', 'works', 'solar energy', 'technology', 'photovoltaic', 'pv', 'learn'], title: 'How Solar Works', path: '/energy/how-it-works', section: 'hero' },
  { keywords: ['benefit', 'save', 'cost', 'electricity', 'bill', 'property value'], title: 'Benefits of Solar', path: '/energy', section: 'benefits' },
  { keywords: ['residential', 'home', 'house'], title: 'Residential Solar', path: '/energy/services', section: 'solar-installations' },
  { keywords: ['commercial', 'business', 'office', 'factory', 'industrial'], title: 'Commercial Solar', path: '/energy/services', section: 'solar-installations' },
  { keywords: ['site visit', 'assessment', 'survey', 'mapping'], title: 'Professional Site Visits', path: '/energy/services', section: 'process' },
  { keywords: ['warranty', 'guarantee', 'maintenance'], title: 'Warranty & Support', path: '/energy/services', section: 'warranty' },
  { keywords: ['showroom', 'samora machel', '218'], title: 'Visit Our Showroom', path: '/energy/contact', section: 'map' },
  { keywords: ['privacy', 'policy', 'cookie', 'terms'], title: 'Privacy & Policies', path: '/energy/contact', section: 'hero' },
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] dark-section"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-[101]"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl dark-section">
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { activeCompany, isGroupPage, isSubsidiaryPlaceholder } = useCompany();

  // Detect platform for keyboard shortcut display
  useEffect(() => {
    const platform = navigator.platform || navigator.userAgent || '';
    setIsMac(/Mac|iPhone|iPod|iPad/i.test(platform));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
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

  // Determine logo based on context and theme
  const isEnergy = activeCompany.id === 'energy';
  const logoSrc = isEnergy
    ? (isDark ? activeCompany.logoDark : activeCompany.logoLight)
    : activeCompany.logo;

  // Dynamic nav links from active company
  const currentNavLinks = activeCompany.navLinks;

  // Check if current path matches link (exact or startsWith for nested routes)
  const isActive = (linkPath) => {
    if (linkPath === '/') return location.pathname === '/';
    const cleanPath = linkPath.split('#')[0];
    return location.pathname === cleanPath || location.pathname.startsWith(cleanPath + '/');
  };

  // Check if any child in a dropdown group is active
  const isDropdownActive = (item) => {
    if (item.children) return item.children.some((child) => isActive(child.path));
    return isActive(item.path);
  };

  // Show "Get Quote" only for Energy
  const showGetQuote = isEnergy;

  // Determine navbar background based on theme and scroll state
  const navbarBg = isScrolled
    ? isDark
      ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
      : 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm'
    : !isDark
      ? 'bg-white/40 backdrop-blur-sm'
      : 'bg-transparent';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to={activeCompany.basePath} className="flex items-center gap-2 group">
              <img
                src={logoSrc}
                alt={activeCompany.name}
                loading='eager'
                className={`h-10 sm:h-15 w-auto object-contain group-hover:opacity-80 transition-opacity ${
                  isDark ? 'brightness-0 invert' : (!isEnergy ? 'mix-blend-multiply' : '')
                }`}
                style={!isEnergy && !isDark ? { filter: 'drop-shadow(0 0 10px rgba(34, 139, 34, 0.2))' } : undefined}
              />
            </Link>

            {/* Desktop Nav */}
            {currentNavLinks.length > 0 && (
              <nav className="hidden lg:flex items-center gap-1">
                {currentNavLinks.map((link) =>
                  link.children ? (
                    <NavDropdown key={link.name} item={link} isActive={isDropdownActive(link)} isScrolled={isScrolled} isDark={isDark} />
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors font-[family-name:var(--font-body)] ${
                        isActive(link.path)
                          ? 'text-ecolus-400'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {isActive(link.path) && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ecolus-400"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  )
                )}
              </nav>
            )}

            {/* Placeholder page: show back to group link in nav area */}
            {isSubsidiaryPlaceholder && (
              <nav className="hidden lg:flex items-center">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-white/50 hover:text-ecolus-400 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Ecolus Group
                </Link>
              </nav>
            )}

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {!isSubsidiaryPlaceholder && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-white/5 transition-all group"
                >
                  <Search className="w-4 h-4 text-white/50 group-hover:text-ecolus-400 transition-colors" />
                  <span className="hidden sm:inline text-xs text-white/30 font-[family-name:var(--font-mono)]">
                    {isMac ? '\u2318K' : 'Ctrl+K'}
                  </span>
                </button>
              )}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl glass hover:bg-white/5 transition-all"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="w-4 h-4 text-white/50 hover:text-ecolus-400" /> : <Moon className="w-4 h-4 text-amber-500" />}
              </button>

              {showGetQuote && (
                <Link
                  to="/energy/contact"
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ecolus-500 hover:bg-ecolus-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-ecolus-500/25"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Get Quote
                </Link>
              )}

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
              className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t border-white/5 overflow-hidden dark-section"
            >
              <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-1">
                {isSubsidiaryPlaceholder ? (
                  <>
                    <Link
                      to="/"
                      className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-base font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Ecolus Group
                    </Link>
                    <Link
                      to="/energy"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ecolus-500 text-white font-semibold mt-4"
                    >
                      Visit Ecolus Energy
                    </Link>
                  </>
                ) : (
                  <>
                    {currentNavLinks.map((link, i) => (
                      <NavMobileItem
                        key={link.name}
                        item={link}
                        isActive={isDropdownActive(link)}
                        index={i}
                        onNavigate={() => setIsMobileOpen(false)}
                      />
                    ))}
                    {showGetQuote && (
                      <div className="pt-4 px-4 flex flex-col gap-3">
                        <Link
                          to="/energy/contact"
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
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="scroll-progress-bar" style={{ transform: `scaleX(${scrollProgress})` }} />
        </div>
      </motion.header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
