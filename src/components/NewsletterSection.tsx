import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-16 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text description */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Pacific Northwest Lawn & Garden Advice</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Join Our Free Newsletter
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Get practical seasonal landscape tips straight to your inbox every month. Learn when to aerate Willamette Valley clay soil, manage rain runoff, prevent moss buildup, and keep your property immaculate all year long.
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400 pt-1">
                <span>✓ Monthly seasonal checklists</span>
                <span>✓ No spam, unsubscribe anytime</span>
                <span>✓ Written by Leon & Autumn</span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-6 bg-neutral-900/90 border border-emerald-500/50 rounded-xl space-y-3 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">You’re Subscribed!</h4>
                  <p className="text-xs text-neutral-300">
                    Welcome to the L&A Landscape community. Check your inbox for our seasonal Northwest Lawn Care Starter Checklist!
                  </p>
                  <button
                    onClick={() => setSubscribed(false)}
                    className="text-xs text-emerald-400 hover:underline pt-1"
                  >
                    Subscribe with another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-md pl-10 pr-3 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5"
                    >
                      {loading ? 'Subscribing...' : 'Subscribe Free'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-500">
                    We respect your privacy. No spam ever. Serving Springfield & Eugene residents.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
