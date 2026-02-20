import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { CompanyProvider } from './contexts/CompanyContext';
import Navbar from './components/layout/Navbar';
import Breadcrumbs from './components/layout/Breadcrumbs';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import BackToTop from './components/ui/BackToTop';

const GroupLanding = lazy(() => import('./pages/GroupLanding'));
const SubsidiaryPlaceholder = lazy(() => import('./pages/SubsidiaryPlaceholder'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Shop = lazy(() => import('./pages/Shop'));
const Careers = lazy(() => import('./pages/Careers'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));

function RedirectServiceDetail() {
  const { slug } = useParams();
  return <Navigate to={`/energy/services/${slug}`} replace />;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-ecolus-500 border-t-transparent animate-spin" />
        <p className="text-white/30 text-sm font-[family-name:var(--font-mono)]">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <CompanyProvider>
            <ScrollToTop />
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <div className="min-h-screen bg-obsidian text-white">
              <Navbar />
              <Breadcrumbs />
              <main id="main-content">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Group Landing */}
                    <Route path="/" element={<GroupLanding />} />

                    {/* Energy Pages */}
                    <Route path="/energy" element={<Home />} />
                    <Route path="/energy/about" element={<About />} />
                    <Route path="/energy/services" element={<Services />} />
                    <Route path="/energy/services/:slug" element={<ServiceDetail />} />
                    <Route path="/energy/shop" element={<Shop />} />
                    <Route path="/energy/careers" element={<Careers />} />
                    <Route path="/energy/gallery" element={<Gallery />} />
                    <Route path="/energy/how-it-works" element={<HowItWorks />} />
                    <Route path="/energy/contact" element={<Contact />} />

                    {/* Subsidiary Placeholders */}
                    <Route path="/transport" element={<SubsidiaryPlaceholder />} />
                    <Route path="/construction" element={<SubsidiaryPlaceholder />} />
                    <Route path="/petroleum" element={<SubsidiaryPlaceholder />} />
                    <Route path="/gas" element={<SubsidiaryPlaceholder />} />
                    <Route path="/logistics" element={<SubsidiaryPlaceholder />} />

                    {/* Redirects for old URLs */}
                    <Route path="/about" element={<Navigate to="/energy/about" replace />} />
                    <Route path="/services" element={<Navigate to="/energy/services" replace />} />
                    <Route path="/services/:slug" element={<RedirectServiceDetail />} />
                    <Route path="/shop" element={<Navigate to="/energy/shop" replace />} />
                    <Route path="/careers" element={<Navigate to="/energy/careers" replace />} />
                    <Route path="/gallery" element={<Navigate to="/energy/gallery" replace />} />
                    <Route path="/contact" element={<Navigate to="/energy/contact" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />

              <FloatingWhatsApp />
              <BackToTop />
            </div>
          </CompanyProvider>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
