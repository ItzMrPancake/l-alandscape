import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/siteData';
import { ProjectItem } from '../types';
import { Maximize2, MapPin, Calendar, Check, SlidersHorizontal, Quote } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuoteForProject: (categoryLabel: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onSelectProject,
  onRequestQuoteForProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage for before/after comparison

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'creek', label: 'Dry Creek Beds' },
    { id: 'sod', label: 'Sod Renovations' },
    { id: 'maintenance', label: 'Commercial Grounds' },
    { id: 'washing', label: 'Pressure Washing' },
    { id: 'cleanup', label: 'Property Clean Up' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  // Marquee featured project for interactive before/after transformation showcase
  const featuredBeforeAfterProject = PROJECTS_DATA.find((p) => p.id === 'dry-creek-bed-residence') || PROJECTS_DATA[0];

  return (
    <section id="gallery" className="py-20 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Proven Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Gallery of Completed Projects
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Explore recent outdoor transformations across Eugene and Springfield. Every project represents our commitment to precision, curb appeal, and long-lasting quality.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-neutral-800 text-emerald-400 shadow-sm border border-neutral-700/60'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before & After Spotlight Feature */}
        <div className="mb-16 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Description */}
            <div className="lg:w-5/12 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive Transformation Slider</span>
                <span aria-hidden="true">·</span>
                <span>Eugene, OR</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {featuredBeforeAfterProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {featuredBeforeAfterProject.description}
              </p>

              {/* Client quote highlight */}
              {featuredBeforeAfterProject.clientQuote && (
                <div className="p-4 bg-neutral-950/80 border border-neutral-800 rounded-xl space-y-2">
                  <p className="text-xs italic text-neutral-300">
                    {featuredBeforeAfterProject.clientQuote}
                  </p>
                  <div className="text-xs font-semibold text-emerald-400">
                    — {featuredBeforeAfterProject.clientName} (Homeowner, Eugene)
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectProject(featuredBeforeAfterProject)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-md border border-neutral-700 transition-colors"
                >
                  View Full Specs
                </button>
                <button
                  onClick={() => onRequestQuoteForProject(featuredBeforeAfterProject.categoryLabel)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                >
                  Estimate Similar Project
                </button>
              </div>
            </div>

            {/* Right Interactive Slider Box */}
            <div className="lg:w-7/12 w-full">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden select-none border border-neutral-800 shadow-2xl">
                {/* "After" Image (Full background) */}
                <img
                  src={featuredBeforeAfterProject.image}
                  alt="Completed Landscape Transformation"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* "Before" Image (Clipped with slider width) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={featuredBeforeAfterProject.beforeImage || featuredBeforeAfterProject.image}
                    alt="Before Landscape Overhaul"
                    className="absolute inset-0 w-full h-full object-cover filter saturate-75 contrast-90"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-neutral-900/90 border border-neutral-700 text-neutral-200 text-[11px] font-semibold rounded">
                    Before Prep & Excavation
                  </div>
                </div>

                {/* After Label */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-[11px] font-semibold rounded">
                  Completed Dry Creek Bed
                </div>

                {/* Slider divider line and thumb */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-xl border-2 border-neutral-950 text-xs font-bold">
                    ⇄
                  </div>
                </div>

                {/* Invisible input range for accessible sliding */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Drag to compare before and after transformation"
                />
              </div>

              <div className="mt-2 text-center text-xs text-neutral-400">
                Drag the slider left and right to reveal the full transformation
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-200"
            >
              {/* Photo Box */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-neutral-950"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="absolute bottom-3 right-3 p-2 bg-neutral-950/80 hover:bg-neutral-900 text-white rounded-lg border border-neutral-700 backdrop-blur-sm transition-colors"
                  aria-label="Expand project photo"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <div className="absolute top-3 left-3 text-xs font-medium text-emerald-400 bg-neutral-950/85 border border-neutral-800 px-2.5 py-1 rounded">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.completionDate}</span>
                  </div>

                  <h4 
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {project.title}
                  </h4>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onRequestQuoteForProject(project.categoryLabel)}
                    className="font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    Request Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
