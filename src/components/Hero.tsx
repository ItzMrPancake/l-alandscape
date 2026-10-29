import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { COMPANY_INFO, heroLandscapeImg } from '../data/siteData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-neutral-950">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLandscapeImg}
          alt="L&A Landscape craftsmanship in Eugene and Springfield Oregon"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-75 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed regional credibility kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400">
            <span>Serving Eugene & Springfield</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">Oregon LCB #9925</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">CCB #241637</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1]">
            Elevating Eugene & Springfield Outdoor Spaces with Dedicated Craftsmanship.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            From lush sod lawn renovations and custom dry creek beds to reliable commercial grounds maintenance, 
            <span className="text-white font-medium"> Autumn & Leon</span> deliver exceptional, detail-oriented landscaping for homes and businesses.
          </p>

          {/* Primary Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-lg shadow-emerald-950/40 whitespace-nowrap"
            >
              Request Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call {COMPANY_INFO.phoneFormatted}
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors whitespace-nowrap"
            >
              View Our Work
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold">5.0 Star Rated</span>
              <span className="text-neutral-500">on Google</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed, Bonded & Insured in Oregon</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Residential & Commercial Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
