import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="space-y-3">
            <a 
              href="#" 
              className="text-base font-extrabold tracking-tight text-white hover:text-emerald-400 transition-colors inline-block"
            >
              <span className="text-emerald-500">L&A</span> LANDSCAPE
            </a>
            <p className="text-neutral-400 leading-relaxed text-xs">
              Exceptional residential & commercial landscape care in Eugene and Springfield, Oregon.
            </p>
            <div className="text-[11px] font-mono text-emerald-400">
              {COMPANY_INFO.licenseLcb} · {COMPANY_INFO.licenseCcb}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Navigation</div>
            <ul className="space-y-1.5">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Completed Projects</a></li>
              <li><a href="#estimate" className="hover:text-emerald-400 transition-colors">Request Free Estimate</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Leon & Autumn</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Key Services</div>
            <ul className="space-y-1.5">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Residential Maintenance</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Sod Install & Renovations</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Commercial Maintenance</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Property Clean Up</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Pressure Washing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Seasonal Deicing</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">Springfield Headquarters</div>
            <p className="text-neutral-300">
              {COMPANY_INFO.address}<br />
              {COMPANY_INFO.cityStateZip}
            </p>
            <p className="pt-1">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-400 transition-colors">
                Phone: {COMPANY_INFO.phoneFormatted}
              </a>
            </p>
            <p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 transition-colors">
                Email: {COMPANY_INFO.email}
              </a>
            </p>
            <p className="text-[11px] text-neutral-500 pt-1">
              Hours: {COMPANY_INFO.hours}
            </p>
          </div>
        </div>

        {/* Quiet Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            Copyright © {new Date().getFullYear()} L&A Landscape in Springfield, Oregon. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>LCB #9925</span>
            <span aria-hidden="true">·</span>
            <span>CCB #241637</span>
            <span aria-hidden="true">·</span>
            <a href={COMPANY_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
              Google Verified
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
