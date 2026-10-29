import React from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, Check, ArrowRight, Quote } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestEstimate: (serviceTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestEstimate,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-neutral-950/80 hover:bg-neutral-950 text-neutral-300 hover:text-white rounded-full border border-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High Res Project Photo */}
        <div className="relative aspect-[16/9] w-full bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-neutral-950/90 border border-neutral-800 text-emerald-400 text-xs font-semibold px-3 py-1 rounded">
            {project.categoryLabel}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.completionDate}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Project Execution & Materials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-800/80">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client quote if available */}
          {project.clientQuote && (
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Quote className="w-3.5 h-3.5" />
                <span>Client Feedback</span>
              </div>
              <p className="text-xs italic text-neutral-300">
                {project.clientQuote}
              </p>
              <div className="text-[11px] text-neutral-400 font-medium">
                — {project.clientName}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Back to Gallery
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestEstimate(project.categoryLabel);
              }}
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-2"
            >
              <span>Get Estimate for This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
