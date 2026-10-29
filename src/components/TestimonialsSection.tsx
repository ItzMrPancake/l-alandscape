import React, { useState } from 'react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/siteData';
import { TestimonialItem } from '../types';
import { Star, MessageSquarePlus, ExternalLink, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newService, setNewService] = useState('Landscape Maintenance');
  const [newLocation, setNewLocation] = useState('Eugene, OR');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newQuote) return;

    const newEntry: TestimonialItem = {
      id: `review-${Date.now()}`,
      quote: newQuote,
      author: newAuthor,
      roleOrRelation: 'Client',
      location: newLocation,
      serviceReceived: newService,
      rating: newRating,
      date: 'Just now',
      verified: true,
    };

    setReviews([newEntry, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setIsReviewModalOpen(false);
      setNewAuthor('');
      setNewQuote('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              We Pride Ourselves on Customer Satisfaction
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Read firsthand experiences from homeowners, property managers, and team members who know Leon and Autumn’s dedication to excellence.
            </p>
          </div>

          {/* Review actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors flex items-center gap-2"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-emerald-400" />
              <span>Leave a Review</span>
            </button>

            <a
              href={COMPANY_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-2"
            >
              <span>Review us on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Rating Breakdown Strip */}
        <div className="mb-10 bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-extrabold text-white tabular-nums">5.0</div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-neutral-400">
                100% Positive Client Rating in Eugene & Springfield
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Verified Homeowners</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed Oregon Contractors</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-emerald-400" />
              <span>Locally Owned & Operated</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500">{item.date}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  “{item.quote.replace(/^[“"']+|[”"']+$/g, '')}”
                </p>
              </div>

              {/* Author & Service info */}
              <div className="pt-4 border-t border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.author}</h4>
                    <p className="text-xs text-neutral-400">
                      {item.roleOrRelation} {item.location && `· ${item.location}`}
                    </p>
                  </div>
                  {item.verified && (
                    <span className="text-[10px] font-medium text-emerald-400 bg-neutral-950 border border-emerald-500/30 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[11px] text-neutral-500 font-medium">
                  Service: {item.serviceReceived}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">Share Your Experience with L&A Landscape</h3>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Thank You for Your Review!</h4>
                <p className="text-xs text-neutral-400">
                  Your feedback helps Leon, Autumn, and our crew maintain the highest standards.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Linda K."
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Eugene, OR"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                    >
                      <option value={5}>5 Stars - Outstanding</option>
                      <option value={4}>4 Stars - Great Service</option>
                      <option value={3}>3 Stars - Good</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Service Performed</label>
                  <select
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Dry Creek Bed & Landscape Design">Dry Creek Bed & Landscape Design</option>
                    <option value="Sod Install & Renovations">Sod Install & Renovations</option>
                    <option value="Landscape Maintenance">Landscape Maintenance</option>
                    <option value="Property Clean Up & Gutters">Property Clean Up & Gutters</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Seasonal Deicing">Seasonal Deicing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about the project and working with Autumn and Leon..."
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-md p-3 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
