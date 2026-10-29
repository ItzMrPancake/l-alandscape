import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight, Calendar, UserCheck } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestEstimate: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestEstimate,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-neutral-950/80 hover:bg-neutral-950 text-neutral-300 hover:text-white rounded-full border border-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Visual Image */}
        <div className="relative aspect-[16/8] w-full bg-neutral-950">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
              {service.target} Service
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Included Scope */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              What’s Included in Our Scope
            </h4>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For & Timing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl space-y-1">
              <div className="text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                Ideal For
              </div>
              <div className="text-xs text-neutral-300">
                {service.idealFor}
              </div>
            </div>

            <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-xl space-y-1">
              <div className="text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                Seasonality & Schedule
              </div>
              <div className="text-xs text-neutral-300">
                {service.seasonality}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestEstimate(service.title);
              }}
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-2"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
