'use client';
import { useState } from 'react';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
const budgetRanges = ['Under $600K', '$600K – $900K', '$900K – $1.2M', '$1.2M – $1.8M', '$1.8M – $2.5M', '$2.5M+'];
const timelines = ['ASAP (within 60 days)', '3–6 months', '6–12 months', 'Just exploring'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', budget: '', timeline: '', timeSlot: '', message: '', type: 'purchase',
  });

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Find Your Home.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Free, no-obligation consultation. We&apos;ll explain the process, answer every question,
            and help you figure out if BuyFlatFee is the right fit.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-display text-xl font-bold text-[#0a1628] mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] flex-shrink-0">📞</div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Phone / Text</p>
                    <a href="tel:+14151234567" className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors">(415) 123-4567</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] flex-shrink-0">✉️</div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <a href="mailto:hello@buyflatfee.com" className="font-semibold text-[#0a1628] hover:text-[#c9a84c] transition-colors">hello@buyflatfee.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] flex-shrink-0">🕐</div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Hours</p>
                    <p className="font-medium text-[#0a1628] text-sm">Mon–Sat: 9AM–7PM</p>
                    <p className="text-[#4a4a68] text-sm">Sun: By appointment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] flex-shrink-0">📍</div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Service Area</p>
                    <p className="font-medium text-[#0a1628] text-sm">SF Bay Area</p>
                    <p className="text-[#4a4a68] text-sm">All of California</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-3xl p-8">
              <h3 className="font-display text-xl font-bold text-[#0a1628] mb-2">Prefer to Call?</h3>
              <p className="text-[#0a1628]/70 text-sm mb-5 leading-relaxed">
                Speak directly with a buyer&apos;s agent. No gatekeeping, no assistant — just the expert.
              </p>
              <a
                href="tel:+14151234567"
                className="bg-[#0a1628] text-[#c9a84c] px-6 py-3 rounded-xl font-bold text-sm inline-block hover:bg-[#132040] transition-colors w-full text-center"
              >
                📞 Call (415) 123-4567
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-[#0a1628] mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'We respond within 2 business hours',
                  '30-min consultation call or Zoom',
                  'No sales pressure, ever',
                  'Free — no obligation to proceed',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a68]">
                    <span className="text-[#c9a84c] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-7xl mb-6">🎉</div>
                <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-3">We Got Your Message!</h2>
                <p className="text-[#4a4a68] text-lg max-w-md">
                  Thanks, {form.name.split(' ')[0]}! We&apos;ll be in touch within 2 business hours to confirm your consultation.
                </p>
                <div className="mt-8 bg-[#f9f6f0] rounded-2xl p-6 text-left w-full max-w-sm">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Next Steps</p>
                  <ul className="space-y-2 text-sm text-[#4a4a68]">
                    <li className="flex gap-2"><span className="text-[#c9a84c]">1.</span> Check your email for a confirmation</li>
                    <li className="flex gap-2"><span className="text-[#c9a84c]">2.</span> We call within 2 business hours</li>
                    <li className="flex gap-2"><span className="text-[#c9a84c]">3.</span> 30-min free consultation</li>
                    <li className="flex gap-2"><span className="text-[#c9a84c]">4.</span> Start your home search!</li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-display text-3xl font-bold text-[#0a1628] mb-2">Book Your Free Consultation</h2>
                <p className="text-[#4a4a68] mb-8">Tell us a little about your situation and we&apos;ll reach out to confirm a time.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="jane@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="(415) 555-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors"
                    />
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Purchase Budget</label>
                      <select
                        value={form.budget}
                        onChange={set('budget')}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors bg-white"
                      >
                        <option value="">Select range...</option>
                        {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Timeline</label>
                      <select
                        value={form.timeline}
                        onChange={set('timeline')}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors bg-white"
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Preferred time */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0a1628] mb-2">Preferred Call Time</label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, timeSlot: slot }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            form.timeSlot === slot
                              ? 'bg-[#0a1628] text-white border-[#0a1628]'
                              : 'border-gray-200 text-[#4a4a68] hover:border-[#c9a84c]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Anything else? (optional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Target neighborhoods, property type, questions you have..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-4 rounded-xl font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Book My Free Consultation →'
                    )}
                  </button>

                  {/* <p className="text-xs text-gray-400 text-center">
                    Your information is private and will never be sold. CA DRE #XXXXXXX
                  </p> */}
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
