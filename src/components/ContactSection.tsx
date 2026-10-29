import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Contact Us
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Whether you’re inquiring about residential maintenance, large property cleanouts, or commercial grounds contracts, Autumn & Leon are ready to assist.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Phone</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {COMPANY_INFO.phoneFormatted}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Direct call with Leon & crew</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Email</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Send blueprints or quote details</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Business Hours</div>
                  <div className="text-sm font-bold text-white">
                    {COMPANY_INFO.hours}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {COMPANY_INFO.weekendHours}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl">
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Physical Address</div>
                  <div className="text-sm font-bold text-white">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-xs text-neutral-300">
                    {COMPANY_INFO.cityStateZip}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Serving Eugene, Springfield & Lane County
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Direct Message Form & Interactive Map Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">Send Us a Direct Message</h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Have a quick question about service availability or our referral partner network? Leave your note below.
              </p>

              {submitted ? (
                <div className="p-8 bg-neutral-900 border border-emerald-500/50 rounded-xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-neutral-300">
                    Thanks for reaching out! Autumn or Leon will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-400 hover:underline pt-2"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(541) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can Leon and Autumn help with your property?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md p-3 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500">
                      Average response time &lt; 2 business hours
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Service Radius Indicator Box */}
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Primary Service Radius: Eugene, Springfield, Coburg & Thurston</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px]">Lane County, OR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
