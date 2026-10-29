import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl font-extrabold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-emerald-500 font-black">L&A</span> LANDSCAPE
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#services" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Services</a>
          <a href="#gallery" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Gallery</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">About</a>
          <a href="#testimonials" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Reviews</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">Contact</a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span>{COMPANY_INFO.phoneFormatted}</span>
          </a>

          <button
            onClick={onOpenEstimate}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all shadow-sm hover:shadow-emerald-950/30 whitespace-nowrap shrink-0"
          >
            Get Free Estimate
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Services
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Gallery of Work
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              About Leon & Autumn
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Client Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-400"
            >
              Contact & Hours
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Call {COMPANY_INFO.phoneFormatted}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-emerald-400 rounded-md text-center"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
