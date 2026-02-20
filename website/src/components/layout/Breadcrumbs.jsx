import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useCompany } from '../../contexts/CompanyContext';

const labelMap = {
  energy: 'Ecolus Energy',
  about: 'About',
  services: 'Services',
  shop: 'Shop',
  gallery: 'Gallery',
  careers: 'Careers',
  contact: 'Contact',
  'how-it-works': 'How Solar Works',
};

export default function Breadcrumbs() {
  const { isGroupPage, isSubsidiaryPlaceholder, activeCompany } = useCompany();
  const location = useLocation();

  // Hide on group landing page
  if (isGroupPage) return null;

  const segments = location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  // Build crumbs
  const crumbs = [{ label: 'Ecolus Group', path: '/' }];

  if (isSubsidiaryPlaceholder) {
    crumbs.push({ label: activeCompany.name, path: null });
  } else {
    // Energy pages
    let currentPath = '';
    segments.forEach((seg, i) => {
      currentPath += `/${seg}`;
      const isLast = i === segments.length - 1;
      crumbs.push({
        label: labelMap[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        path: isLast ? null : currentPath,
      });
    });
  }

  return (
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 breadcrumb-bar">
      <div className="bg-obsidian/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 h-10 text-xs font-[family-name:var(--font-mono)]" aria-label="Breadcrumb">
            {crumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <ChevronRight className="w-3 h-3 text-white/20 flex-shrink-0" />}
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-white/40 hover:text-ecolus-400 transition-colors truncate"
                  >
                    {i === 0 ? (
                      <span className="flex items-center gap-1">
                        <Home className="w-3 h-3" />
                        <span className="hidden sm:inline">{crumb.label}</span>
                      </span>
                    ) : crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70 truncate">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
