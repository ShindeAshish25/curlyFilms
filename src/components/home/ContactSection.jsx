import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, ArrowUpRight, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO } from '../../data/studioData';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Wedding Photography & Films',
    date: '',
    location: '',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number';
    if (!formData.message.trim()) errs.message = 'Please share a brief note about your project';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedRef = `LUM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryRef(generatedRef);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B59B78', '#FAF9F6', '#252525', '#CBB494']
        });
      } catch {
        // ignore if canvas not supported
      }

      if (showToast) {
        showToast(`Inquiry ${generatedRef} submitted successfully! Our director will contact you within 24 hours.`);
      }
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Wedding Photography & Films',
      date: '',
      location: '',
      budget: '$5,000 - $10,000',
      message: '',
    });
    setErrors({});
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
          COMMISSION RESERVATIONS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#252525] font-normal leading-tight">
          Let's Create Something <br />
          <span className="italic font-light">Beautiful Together.</span>
        </h2>
        <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
          Tell us about your story, your vision, or your next project. We'd love to hear from you and bring it to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Coordinates */}
        <div className="lg:col-span-5 space-y-8 bg-[#FAF9F6] border border-[#252525]/10 p-8 sm:p-10 rounded-sm shadow-sm">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold">
              HEADQUARTERS
            </span>
            <h3 className="font-serif text-2xl text-[#252525]">
              Direct Contacts
            </h3>
            <p className="text-xs font-sans text-[#252525]/70 font-light leading-relaxed">
              Available for private consultations in our studio or virtually across all time zones.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-[#252525]/10 text-xs font-sans">
            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#252525]/50 block">Direct Telephone</span>
                <a href={`tel:${STUDIO_INFO.phone}`} className="text-sm font-medium text-[#252525] hover:text-[#B59B78] transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#252525]/50 block">Electronic Mail</span>
                <a href={`mailto:${STUDIO_INFO.email}`} className="text-sm font-medium text-[#252525] hover:text-[#B59B78] transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#252525]/50 block">Atelier Location</span>
                <p className="text-xs text-[#252525]/80 leading-relaxed font-light">
                  {STUDIO_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#252525]/50 block">Studio Hours</span>
                <p className="text-xs text-[#252525]/80 leading-relaxed font-light">
                  {STUDIO_INFO.hours} <br />
                  <span className="text-[#B59B78] font-medium italic">Visits strictly by prior appointment.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#252525]/10 space-y-3">
            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 py-3 px-4 rounded bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 text-xs font-semibold hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp Concierge</span>
            </a>

            <a
              href={STUDIO_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 py-3 px-4 rounded bg-white text-[#252525] border border-[#252525]/20 text-xs font-medium hover:border-[#B59B78] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#B59B78]" />
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#252525]/50" />
            </a>
          </div>
        </div>

        {/* Working Booking Form */}
        <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#252525]/10 p-8 sm:p-12 rounded-sm shadow-sm relative">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#B59B78]/20 text-[#B59B78] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold">
                  INQUIRY RECEIVED
                </span>
                <h3 className="font-serif text-3xl text-[#252525]">
                  Thank you, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-xs font-mono text-[#252525]/60">
                  Booking Reference: <span className="font-bold text-[#B59B78]">{inquiryRef}</span>
                </p>
              </div>

              <p className="text-sm font-sans text-[#252525]/75 font-light max-w-md mx-auto leading-relaxed">
                We have received your project details regarding <strong>{formData.service}</strong>. Our creative producer will review our production availability and get back to you via <strong>{formData.email}</strong> within 24 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.15em] font-semibold rounded-sm hover:bg-[#252525] hover:text-white transition-all shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#252525]/10 pb-4">
                <h3 className="font-serif text-2xl text-[#252525]">
                  Project Inquiry Form
                </h3>
                <p className="text-xs font-sans text-[#252525]/60 mt-1">
                  Please provide as much context as possible regarding your schedule and aesthetic goals.
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                  Full Name <span className="text-[#B59B78]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Rohan & Ananya Kapoor"
                  className={`w-full px-4 py-3 bg-[#F8F6F2] border rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors ${
                    errors.fullName ? 'border-rose-400' : 'border-[#252525]/15'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                    Email Address <span className="text-[#B59B78]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@example.com"
                    className={`w-full px-4 py-3 bg-[#F8F6F2] border rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors ${
                      errors.email ? 'border-rose-400' : 'border-[#252525]/15'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                    Phone Number <span className="text-[#B59B78]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 bg-[#F8F6F2] border rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors ${
                      errors.phone ? 'border-rose-400' : 'border-[#252525]/15'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                  Select Service <span className="text-[#B59B78]">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#252525]/15 rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors cursor-pointer"
                >
                  <option value="Wedding Photography & Films">Wedding Photography & Films</option>
                  <option value="Fashion & Editorial">Fashion & Editorial Campaign</option>
                  <option value="Commercial & Product">Commercial & Product Photography</option>
                  <option value="Brand Film Production">Brand Film Production</option>
                  <option value="Portraits & Executive Profiling">Portraits & Executive Profiling</option>
                  <option value="Post-Production & Color Grading">Post-Production & Color Grading</option>
                  <option value="Custom Project">Custom Project / Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                    Event / Project Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#252525]/15 rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                    Destination / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Udaipur, Lake Como, Mumbai"
                    className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#252525]/15 rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                  Estimated Budget Tier
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8F6F2] border border-[#252525]/15 rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors cursor-pointer"
                >
                  <option value="Under $5,000 / INR 4 Lakhs">Under $5,000 / INR 4 Lakhs</option>
                  <option value="$5,000 - $10,000 / INR 4 - 8 Lakhs">$5,000 - $10,000 / INR 4 - 8 Lakhs</option>
                  <option value="$10,000 - $20,000 / INR 8 - 16 Lakhs">$10,000 - $20,000 / INR 8 - 16 Lakhs</option>
                  <option value="$20,000+ / INR 16+ Lakhs (Grand Scale)">$20,000+ / INR 16+ Lakhs (Grand Scale)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans uppercase tracking-wider text-[#252525]/80 font-medium">
                  Tell Us About Your Project <span className="text-[#B59B78]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your wedding plans, aesthetic ideas, desired delivery timeline, or any special requests..."
                  className={`w-full px-4 py-3 bg-[#F8F6F2] border rounded-sm text-sm font-sans text-[#252525] focus:outline-none focus:border-[#B59B78] transition-colors resize-y ${
                    errors.message ? 'border-rose-400' : 'border-[#252525]/15'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-500 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.2em] font-semibold rounded-sm hover:bg-[#252525] hover:text-white transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending Transmission...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Google Maps */}
      <div className="space-y-4 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#252525]/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
              LOCATION & DIRECTIONS
            </span>
            <h3 className="font-serif text-2xl text-[#252525]">
              Our Baner Studio, Pune
            </h3>
          </div>

          <a
            href={STUDIO_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans text-[#B59B78] hover:text-[#252525] font-semibold transition-colors"
          >
            <span>Get Turn-by-Turn Directions</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-[#252525]/15 shadow-md bg-neutral-200">
          <iframe
            title="Lumina Studio Location — Pride Purple Accord, Baner, Pune"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3591963287044!2d73.78440007519253!3d18.55787698254247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec7d5f0e38d%3A0xc3cfcebfb597c5e5!2sPride%20Purple%20Accord!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(15%) contrast(105%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
