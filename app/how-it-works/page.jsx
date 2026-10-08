'use client';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  { title: 'House Tours', desc: 'We show you properties and open houses across the Bay Area, with honest feedback on every home.' },
  { title: 'Purchase Offers', desc: 'We prepare, submit and negotiate your offers so you compete confidently in any market.' },
  { title: 'Professional House Research', desc: 'Detailed property analysis, comps and inspection review before you commit.' },
  { title: 'Escrow & Closing', desc: 'We manage the final transaction stages through to the keys — and your cashback.' },
];

const counties = ['Santa Clara', 'Alameda', 'San Mateo', 'San Francisco', 'Contra Costa', 'Santa Cruz', 'San Benito'];

const faqs = [
  { q: 'What Bay Area cities and neighborhoods do you cover?', a: 'Full Service covers Santa Clara, Alameda, San Mateo, San Francisco, Contra Costa, Santa Cruz and San Benito counties — about a 60-mile drive from San Jose. Offer Only is available anywhere in California.' },
  { q: 'What services do you provide Bay Area home buyers?', a: 'House tours, purchase offers, professional house research, and escrow & closing support.' },
  { q: 'Is Buy Flat Fee fully licensed?', a: 'Yes. Buy Flat Fee holds DRE #02126387 and operates with full fiduciary responsibility to every buyer we represent.' },
  { q: 'Who will be my day-to-day point of contact?', a: 'A dedicated licensed agent on our team guides you from your first tour through closing.' },
  { q: 'Can you help me buy a new construction home?', a: 'Yes. We represent buyers on new construction as well as resale homes.' },
  { q: 'How much does it cost to work with you?', a: 'A flat fee of $7,999 for Full Service, or $4,999 for Offer Only. If the seller pays buyer-agent compensation, everything above our fee is rebated to you through escrow.' },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Buyer&apos;s Guide</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Our flat fee realtors walk you through a seamless process to find your dream home.
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] text-center mb-14">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-3xl p-8 border border-gray-100 card-hover">
                <h3 className="font-display text-xl font-bold text-[#0a1628] mb-3">{s.title}</h3>
                <p className="text-[#4a4a68] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-10">Coverage Area</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {counties.map((c) => (
              <span key={c} className="px-5 py-2 rounded-full border border-gray-200 text-[#0a1628] text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((f, i) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[#0a1628]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="text-[#c9a84c] text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="px-6 pb-5 text-[#4a4a68] border-t border-gray-100">{f.a}</p>}
              </div>
            ))}
          </div>
          <p className="text-center">
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold inline-block">Get Started</Link>
          </p>
        </div>
      </section>
    </>
  );
}
