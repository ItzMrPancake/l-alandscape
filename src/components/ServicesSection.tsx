import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';
import { ArrowRight, Check, Sparkles, HelpCircle, ExternalLink } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate,
  onOpenServiceModal,
  onOpenContact,
}) => {
  return (
    <section id="services" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Services
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Tailored grounds care, heavy property cleanouts, and turf renovations built to withstand Oregon’s rainy winters and lush summers.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <span>Residential</span>
            <span aria-hidden="true">·</span>
            <span>Commercial</span>
            <span aria-hidden="true">·</span>
            <span>Free On-Site Quotes</span>
          </div>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-200"
            >
              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="font-mono text-emerald-400 font-semibold">0{index + 1}</span>
                  <span className="text-neutral-400 font-medium">{service.target}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Key feature list */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenServiceModal(service)}
                  className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  View Details & Scope
                </button>

                <button
                  onClick={() => onSelectServiceForEstimate(service.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:text-neutral-950 hover:bg-emerald-400 border border-emerald-400/40 rounded-md transition-colors"
                >
                  Estimate
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Partners Notice Callout */}
        <div className="mt-12 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Looking for additional services?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              If your property requires specialized tree felling, large masonry retainers, or certified backflow engineering, contact us and we’ll connect you with one of our trusted, vetted referral partners throughout Eugene and Springfield.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Ask About Referral Partners</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
