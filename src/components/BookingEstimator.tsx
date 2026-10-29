import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData';
import { CheckCircle2, Calendar, Clock, MapPin, Phone, Mail, FileText, Send, Sparkles, UploadCloud } from 'lucide-react';

interface BookingEstimatorProps {
  initialService?: string;
  onSuccessSubmit?: () => void;
}

export const BookingEstimator: React.FC<BookingEstimatorProps> = ({
  initialService,
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Eugene',
    propertyType: 'residential',
    selectedServices: initialService ? [initialService] : ['Landscape Maintenance'],
    estimatedSquareFootage: '2500-5000',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    notes: '',
    heardAboutUs: 'Google Search',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionRef, setSubmissionRef] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handleServiceToggle = (title: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(title);
      if (exists) {
        if (prev.selectedServices.length === 1) return prev; // keep at least 1
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== title),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, title],
        };
      }
    });
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f) => f.name);
      setUploadedPhotos((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'LA-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccessSubmit) onSuccessSubmit();
    }, 700);
  };

  // Ballpark calculation indicator
  const getEstimatedBallpark = () => {
    let base = 95;
    if (formData.propertyType === 'commercial') base = 250;
    if (formData.selectedServices.includes('Sod Install & Renovations')) base += 750;
    if (formData.selectedServices.includes('Pressure Washing')) base += 180;
    if (formData.selectedServices.includes('Property Clean Up')) base += 220;
    if (formData.selectedServices.includes('Seasonal Deicing')) base += 150;
    if (formData.estimatedSquareFootage === '5000-10000') base *= 1.35;
    if (formData.estimatedSquareFootage === '10000+') base *= 1.8;

    return {
      min: Math.round(base * 0.85 / 10) * 10,
      max: Math.round(base * 1.25 / 10) * 10,
    };
  };

  const ballpark = getEstimatedBallpark();

  return (
    <section id="estimate" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            Fast & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request Your Free Estimate
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Fill out the form below to receive a personalized quote for your residential or commercial property in Eugene or Springfield. No obligation, 100% free consultation.
          </p>
        </div>

        {submitted ? (
          <div className="max-w-2xl mx-auto bg-neutral-950 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 bg-emerald-950 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400">Confirmation Reference: #{submissionRef}</span>
              <h3 className="text-2xl font-bold text-white">Estimate Request Received!</h3>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-lg mx-auto">
                Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Autumn & Leon have received your request for your property in{' '}
                <span className="text-white font-medium">{formData.city}</span>. We will review your details and contact you within 24 business hours at{' '}
                <span className="text-white font-medium">{formData.phone}</span>.
              </p>
            </div>

            <div className="p-4 bg-neutral-900/90 border border-neutral-800 rounded-xl text-left space-y-2 text-xs text-neutral-300">
              <div className="font-semibold text-white">Summary of Requested Services:</div>
              <ul className="list-disc list-inside space-y-1 text-neutral-400">
                {formData.selectedServices.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <div className="pt-2 text-neutral-400 border-t border-neutral-800 flex justify-between">
                <span>Preferred Time:</span>
                <span className="text-neutral-200">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
              >
                Need Urgent Service? Call {COMPANY_INFO.phoneFormatted}
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8"
          >
            {/* Step 1: Services Selection */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                1. Select the Services You Need (Select one or more)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICES_DATA.map((service) => {
                  const isChecked = formData.selectedServices.includes(service.title);
                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => handleServiceToggle(service.title)}
                      className={`text-left p-3.5 rounded-lg border transition-all ${
                        isChecked
                          ? 'bg-neutral-900 border-emerald-500/70 text-white shadow-sm'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-white">{service.title}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                            isChecked
                              ? 'bg-emerald-500 border-emerald-500 text-neutral-950 font-bold'
                              : 'border-neutral-700'
                          }`}
                        >
                          {isChecked && '✓'}
                        </div>
                      </div>
                      <div className="text-[11px] text-neutral-400">{service.target}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Property Type & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-800/80">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Property Classification
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                      formData.propertyType === 'residential'
                        ? 'bg-neutral-800 text-emerald-400 border-emerald-500/60'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Residential Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                      formData.propertyType === 'commercial'
                        ? 'bg-neutral-800 text-emerald-400 border-emerald-500/60'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                    }`}
                  >
                    Commercial Property
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Approximate Yard / Lot Size
                </label>
                <select
                  value={formData.estimatedSquareFootage}
                  onChange={(e) => setFormData({ ...formData, estimatedSquareFootage: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="under-2500">Under 2,500 sq ft (Compact lot)</option>
                  <option value="2500-5000">2,500 – 5,000 sq ft (Standard residential)</option>
                  <option value="5000-10000">5,000 – 10,000 sq ft (Large lot)</option>
                  <option value="10000+">10,000+ sq ft / Acreage / Commercial Campus</option>
                </select>
              </div>
            </div>

            {/* Step 3: Preferred Timing & City */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  City Location
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="Eugene">Eugene, OR</option>
                  <option value="Springfield">Springfield, OR</option>
                  <option value="Surrounding Lane County">Surrounding Lane County</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Target Start Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Preferred Consultation Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
                >
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:30 PM)">Afternoon (12:00 PM – 4:30 PM)</option>
                  <option value="Anytime during business hours">Anytime during business hours</option>
                </select>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-4 pt-6 border-t border-neutral-800/80">
              <label className="block text-sm font-bold text-white">
                2. Contact & Property Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Linda Kowalski"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(541) 000-0000 or (360) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="youremail@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Street Address or Cross Streets</label>
                  <input
                    type="text"
                    placeholder="e.g. 28 West Q Street, Springfield"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md px-3.5 py-2.5 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-300 mb-1">
                  Project Notes, Problem Areas, or Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your yard needs (e.g., ivy cleanup over fence line, dry creek bed design, regular bi-weekly mowing schedule, pressure washing driveway moss)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-md p-3 text-xs placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Photo Upload Simulation */}
              <div className="p-4 bg-neutral-900/60 border border-dashed border-neutral-700 rounded-lg text-center space-y-2">
                <UploadCloud className="w-6 h-6 text-emerald-400 mx-auto" />
                <div className="text-xs text-neutral-300 font-medium">
                  Have photos of the property or problem spots? (Optional)
                </div>
                <div className="text-[11px] text-neutral-500">
                  Upload images to help Autumn & Leon prepare a more precise preliminary estimate.
                </div>
                <label className="inline-block cursor-pointer px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded border border-neutral-600 transition-colors">
                  <span>Browse Photos</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleSimulatedFileUpload}
                    className="hidden"
                  />
                </label>
                {uploadedPhotos.length > 0 && (
                  <div className="text-xs text-emerald-400 mt-2">
                    {uploadedPhotos.length} photo(s) selected: {uploadedPhotos.join(', ')}
                  </div>
                )}
              </div>
            </div>

            {/* Ballpark Estimator Indicator & Submit */}
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Preliminary Ballpark Guidance
                </div>
                <div className="text-lg font-bold text-white">
                  ${ballpark.min} – ${ballpark.max} <span className="text-xs text-neutral-400 font-normal">estimated range</span>
                </div>
                <div className="text-[11px] text-neutral-400">
                  Exact final quote provided after on-site or satellite aerial review.
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Estimate Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
