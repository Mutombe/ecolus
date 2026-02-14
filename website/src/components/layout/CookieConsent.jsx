import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ecolus-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ecolus-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ecolus-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[90]"
        >
          <div className="glass rounded-2xl p-6 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-ecolus-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1 font-[family-name:var(--font-display)]">
                  We Value Your Privacy
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
              <button onClick={handleDecline} className="text-white/30 hover:text-white/60 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 py-2.5 bg-ecolus-500 hover:bg-ecolus-400 text-white text-sm font-semibold rounded-xl transition-all"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 py-2.5 glass hover:bg-white/5 text-white/70 text-sm font-medium rounded-xl transition-all"
              >
                Decline
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-3">
              <Shield className="w-3 h-3 text-ecolus-500" />
              <span className="text-white/30 text-[10px]">Your data is protected and never sold to third parties.</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
