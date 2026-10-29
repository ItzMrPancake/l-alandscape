/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectGallery } from './components/ProjectGallery';
import { BookingEstimator } from './components/BookingEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectItem, ServiceItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [estimateTargetService, setEstimateTargetService] = useState<string>('Landscape Maintenance');

  const scrollToEstimate = (serviceToSelect?: string) => {
    if (serviceToSelect) {
      setEstimateTargetService(serviceToSelect);
    }
    const elem = document.getElementById('estimate');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenEstimate={() => scrollToEstimate()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEstimate={() => scrollToEstimate()} />

        {/* Services Showcase */}
        <ServicesSection
          onSelectServiceForEstimate={(serviceTitle) => scrollToEstimate(serviceTitle)}
          onOpenServiceModal={(service) => setSelectedServiceModal(service)}
          onOpenContact={scrollToContact}
        />

        {/* Completed Projects Gallery */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestQuoteForProject={(categoryLabel) => scrollToEstimate(categoryLabel)}
        />

        {/* Free Estimate Calculator & Booking Form */}
        <BookingEstimator initialService={estimateTargetService} />

        {/* Client Testimonials & Google Reviews Hub */}
        <TestimonialsSection />

        {/* About Leon & Autumn Sturtz & Credentials */}
        <AboutSection onOpenEstimate={() => scrollToEstimate()} />

        {/* Free Lawn & Garden Newsletter */}
        <NewsletterSection />

        {/* Contact & Business Hours */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Spec / High-Res Zoom Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestEstimate={(serviceName) => scrollToEstimate(serviceName)}
      />

      {/* Service Detail & Scope Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onRequestEstimate={(serviceName) => scrollToEstimate(serviceName)}
      />
    </div>
  );
}
