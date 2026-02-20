import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

export default function NavDropdown({ item, isActive, isScrolled, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const enterTimer = useRef(null);
  const leaveTimer = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleEnter = () => {
    clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => setIsOpen(true), 150);
  };

  const handleLeave = () => {
    clearTimeout(enterTimer.current);
    leaveTimer.current = setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLinkClick = (e, path) => {
    const hashIndex = path.indexOf('#');
    if (hashIndex === -1) return; // normal navigation, let Link handle it

    e.preventDefault();
    const basePath = path.substring(0, hashIndex);
    const hash = path.substring(hashIndex + 1);

    if (location.pathname === basePath) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(basePath);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors font-[family-name:var(--font-body)] ${
          isActive || isOpen ? 'text-white' : 'text-white/70 hover:text-white'
        }`}
      >
        {item.name}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ecolus-400"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className={`min-w-[320px] rounded-2xl shadow-2xl border overflow-hidden py-2 backdrop-blur-xl ${
              isScrolled
                ? isDark
                  ? 'bg-obsidian/95 border-white/10'
                  : 'bg-white/95 border-black/10 shadow-lg'
                : 'glass border-white/5'
            }`}>
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  onClick={(e) => handleLinkClick(e, child.path)}
                  className="flex items-start gap-3 px-5 py-3.5 hover:bg-white/5 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-ecolus-400 transition-colors">
                      {child.name}
                    </p>
                    {child.description && (
                      <p className="text-white/40 text-xs mt-0.5 leading-relaxed">{child.description}</p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-ecolus-400 transition-all mt-0.5 shrink-0" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
