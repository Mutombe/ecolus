import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

const policies = {
  privacy: {
    title: 'Privacy Policy',
    icon: Shield,
    lastUpdated: 'January 2025',
    sections: [
      {
        heading: 'Information We Collect',
        content: 'We collect personal information you provide directly to us, such as your name, email address, phone number, and property details when you request a quote or contact us. We also collect usage data through cookies and analytics tools to improve our services.',
      },
      {
        heading: 'How We Use Your Information',
        content: 'Your information is used to provide and improve our solar energy services, process your inquiries, send you relevant communications about our products and services, and ensure the security of our platform. We never sell your personal data to third parties.',
      },
      {
        heading: 'Data Protection',
        content: 'We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest. Access to personal data is restricted to authorized personnel only.',
      },
      {
        heading: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications. Contact us at privacy@ecolusenergy.co.zw for any data-related requests.',
      },
      {
        heading: 'Third-Party Services',
        content: 'We may use third-party services for analytics, payment processing, and communication. These services have their own privacy policies and we ensure they meet our data protection standards.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    lastUpdated: 'January 2025',
    sections: [
      {
        heading: 'Service Agreement',
        content: 'By engaging Ecolus Energy for solar installation services, you agree to these terms. Our services include site assessment, system design, equipment supply, installation, and commissioning of solar energy systems.',
      },
      {
        heading: 'Warranty & Guarantees',
        content: 'We provide manufacturer warranties on all solar panels (typically 25 years) and inverters (5-10 years). Our workmanship warranty covers installation quality for 5 years from the date of commissioning.',
      },
      {
        heading: 'Payment Terms',
        content: 'A deposit is required upon acceptance of a quotation. Progress payments are made according to the agreed schedule. Final payment is due upon system commissioning and handover.',
      },
      {
        heading: 'Limitations of Liability',
        content: 'Ecolus Energy is not liable for force majeure events, grid failures, or circumstances beyond our control. Our liability is limited to the value of the contracted services.',
      },
      {
        heading: 'Dispute Resolution',
        content: 'Any disputes arising from our services will be resolved through good-faith negotiation first, followed by mediation if necessary, in accordance with Zimbabwean law.',
      },
    ],
  },
};

export default function PolicyModal({ type, isOpen, onClose }) {
  const policy = policies[type] || policies.privacy;
  const Icon = policy.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:top-[5%] sm:left-1/2 sm:-translate-x-1/2 sm:w-[90%] sm:max-w-2xl sm:max-h-[90vh] z-[101] flex flex-col"
          >
            <div className="glass rounded-2xl overflow-hidden flex flex-col max-h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ecolus-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-ecolus-400" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold font-[family-name:var(--font-display)]">{policy.title}</h2>
                    <p className="text-white/40 text-xs">Last updated: {policy.lastUpdated}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4 text-white/50" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-6">
                {policy.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-white font-semibold text-sm mb-2 font-[family-name:var(--font-display)]">
                      {i + 1}. {section.heading}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{section.content}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white/30 text-xs">
                    For questions about these {type === 'privacy' ? 'privacy practices' : 'terms'}, 
                    contact us at{' '}
                    <a href="mailto:legal@ecolusenergy.co.zw" className="text-ecolus-400 hover:underline">
                      legal@ecolusenergy.co.zw
                    </a>
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/5 flex-shrink-0">
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-ecolus-500 hover:bg-ecolus-400 text-white text-sm font-semibold rounded-xl transition-all"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
