import React from 'react';
import { COMPANY_INFO, projectCommercialGroundsImg } from '../data/siteData';
import { Shield, Award, Users, HeartHandshake, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="about" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              About L&A Landscape
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dedicated to Enhancing the Beauty and Functionality of Your Outdoor Spaces
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              At L&A Landscape, we are dedicated to providing exceptional services to homeowners and businesses seeking to enhance the beauty and functionality of their outdoor spaces. With a team of skilled professionals and a commitment to customer satisfaction, we offer a comprehensive range of services designed to meet the unique needs of each client.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Founded and led by <span className="text-white font-medium">Leon and Autumn Sturtz</span> in Springfield, Oregon, our company is grounded in high standards, fair teamwork, and clear communication. We equip our team with top-tier equipment and safety protocols so every project—from routine mowing to multi-ton stone dry creek beds—is delivered with pride.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Oregon State Licensed</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {COMPANY_INFO.licenseLcb} · {COMPANY_INFO.licenseCcb}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Equipped for Success</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    High safety standards, fair wages & trained staff.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Local Accountability</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Direct communication with Autumn & Leon on every job.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Full-Scope Services</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Residential care, commercial contracts & trusted partners.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
              >
                Schedule an On-Site Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Visual Card with Company Credentials */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={projectCommercialGroundsImg}
                  alt="L&A Landscape commercial grounds in Springfield OR"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium">
                  28 West Q Street Suite H, Springfield, OR
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-400">OREGON REGISTRY VERIFICATION</div>
                <div className="text-sm text-neutral-300 space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-neutral-900">
                    <span className="text-neutral-500">Business Name</span>
                    <span className="text-white font-medium">L&A Landscape LLC</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-900">
                    <span className="text-neutral-500">LCB License</span>
                    <span className="text-emerald-400 font-semibold font-mono">#9925</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-900">
                    <span className="text-neutral-500">CCB License</span>
                    <span className="text-emerald-400 font-semibold font-mono">#241637</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-900">
                    <span className="text-neutral-500">Owners</span>
                    <span className="text-white">Autumn & Leon Sturtz</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500">Service Territory</span>
                    <span className="text-white">Eugene & Springfield, OR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
