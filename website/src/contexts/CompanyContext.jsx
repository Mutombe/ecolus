import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const companies = {
  group: {
    id: 'group',
    name: 'Ecolus Group',
    tagline: 'Building Zimbabwe\'s Future',
    logo: '/logos/egroup.png',
    logoDark: '/logos/egroup.png',
    logoLight: '/logos/egroup.png',
    basePath: '/',
    navLinks: [
      { name: 'Home', path: '/' },
      { name: 'Energy', path: '/energy' },
      { name: 'Transport', path: '/transport' },
      { name: 'Construction', path: '/construction' },
      { name: 'Petroleum', path: '/petroleum' },
      { name: 'Gas', path: '/gas' },
      { name: 'Logistics', path: '/logistics' },
    ],
  },
  energy: {
    id: 'energy',
    name: 'Ecolus Energy',
    tagline: 'Energy for the Long Run',
    logo: '/logo.png',
    logoDark: '/logo.png',
    logoLight: '/logo.png',
    basePath: '/energy',
    navLinks: [
      {
        name: 'Solar Solutions',
        children: [
          { name: 'Solar Installations', path: '/energy/services/solar-installations', description: 'Complete residential & commercial solar panel systems' },
          { name: 'Solar Geysers', path: '/energy/services/solar-geysers', description: 'High-efficiency solar water heating solutions' },
          { name: 'Solar Water Pumps', path: '/energy/services/solar-water-pumps', description: 'Off-grid borehole & irrigation pumping' },
          { name: 'How Solar Works', path: '/energy/how-it-works', description: 'Learn about solar energy technology' },
          { name: 'Our Process', path: '/energy/services#process', description: 'From consultation to commissioning' },
        ],
      },
      {
        name: 'Products',
        children: [
          { name: 'Solar Shop', path: '/energy/shop', description: 'Browse panels, inverters & batteries' },
          { name: 'Project Gallery', path: '/energy/gallery', description: 'View our completed installations' },
          { name: 'Product Warranty', path: '/energy/services#warranty', description: 'Industry-leading warranty coverage' },
        ],
      },
      {
        name: 'About Ecolus',
        children: [
          { name: 'About Us', path: '/energy/about', description: 'Our mission, vision & team' },
          { name: 'Careers', path: '/energy/careers', description: 'Join Zimbabwe\'s solar energy leader' },
          { name: 'FAQ', path: '/energy/about#faq', description: 'Frequently asked questions' },
        ],
      },
      {
        name: 'Support',
        children: [
          { name: 'Contact Us', path: '/energy/contact', description: 'Get in touch with our team' },
          { name: 'Get a Quote', path: '/energy/contact', description: 'Request a free solar consultation' },
        ],
      },
    ],
  },
  transport: {
    id: 'transport',
    name: 'Ecolus Transport',
    tagline: 'Moving Zimbabwe Forward',
    logo: '/logos/etransport.png',
    basePath: '/transport',
    navLinks: [],
  },
  construction: {
    id: 'construction',
    name: 'Ecolus Construction',
    tagline: 'Building with Purpose',
    logo: '/logos/econstruction.png',
    basePath: '/construction',
    navLinks: [],
  },
  petroleum: {
    id: 'petroleum',
    name: 'Ecolus Petroleum',
    tagline: 'Fuelling Progress',
    logo: '/logos/epetrolium.png',
    basePath: '/petroleum',
    navLinks: [],
  },
  gas: {
    id: 'gas',
    name: 'Ecolus Gas',
    tagline: 'Powering Every Home',
    logo: '/logos/egas.png',
    basePath: '/gas',
    navLinks: [],
  },
  logistics: {
    id: 'logistics',
    name: 'Ecolus Logistics',
    tagline: 'Delivering Excellence',
    logo: '/logos/elogistics.png',
    basePath: '/logistics',
    navLinks: [],
  },
};

const subsidiaryIds = ['transport', 'construction', 'petroleum', 'gas', 'logistics'];

const CompanyContext = createContext({
  activeCompany: companies.group,
  isGroupPage: true,
  isSubsidiaryPlaceholder: false,
});

export function CompanyProvider({ children }) {
  const location = useLocation();

  const value = useMemo(() => {
    const path = location.pathname;

    if (path.startsWith('/energy')) {
      return { activeCompany: companies.energy, isGroupPage: false, isSubsidiaryPlaceholder: false };
    }

    for (const id of subsidiaryIds) {
      if (path === `/${id}` || path.startsWith(`/${id}/`)) {
        return { activeCompany: companies[id], isGroupPage: false, isSubsidiaryPlaceholder: true };
      }
    }

    return { activeCompany: companies.group, isGroupPage: true, isSubsidiaryPlaceholder: false };
  }, [location.pathname]);

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
}

export const useCompany = () => useContext(CompanyContext);
