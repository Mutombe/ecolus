import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function NavMobileItem({ item, isActive, index, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    const hashIndex = path.indexOf('#');
    if (hashIndex !== -1) {
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
    }
    onNavigate?.();
  };

  // Flat link (no children)
  if (!item.children) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <Link
          to={item.path}
          onClick={(e) => handleLinkClick(e, item.path)}
          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
            isActive
              ? 'bg-ecolus-500/10 text-ecolus-400'
              : 'text-white/70 hover:bg-white/5 hover:text-white'
          }`}
        >
          {item.name}
          <ChevronRight className="w-4 h-4 opacity-30" />
        </Link>
      </motion.div>
    );
  }

  // Dropdown parent
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
          isActive ? 'text-ecolus-400' : 'text-white/70 hover:bg-white/5 hover:text-white'
        }`}
      >
        {item.name}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <ChevronDown className="w-4 h-4 opacity-50" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-0.5">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.path}
                  onClick={(e) => handleLinkClick(e, child.path)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
                >
                  <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
                  {child.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
