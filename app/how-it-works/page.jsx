import Link from 'next/link';

export const metadata = {
  title: 'How It Works',
  description: 'Learn how BuyFlatFee\'s flat-fee buyer\'s agent process works — from home search to closing and cash back.',
};

const steps = [
  {
    icon: '📋',
    step: '01',
    title: 'Free Consultation',
    duration: '30–45 min',
    desc: 'We start with a no-obligation call or meeting to understand your goals, budget, timeline, and must-haves. We explain exactly how the process works and answer every question.',
    bullets: [
      'Discuss your ideal home criteria',
      'Explain the flat-fee model and cash-back process',
      'Review current market conditions',
      'Outline next steps and set expectations',
    ],
  },
  {
    icon: '🔍',
    step: '02',
    title: 'Personalized Home Search',
    duration: 'Ongoing',
    desc: 'We set up customized MLS alerts and proactively search off-market opportunities. You get notified the moment a home matching your criteria hits the market.',
    bullets: [
      'Custom MLS search setup within 24 hours',
      'Access to off-market and pocket listings',
      'Weekly market reports for your target neighborhoods',
      'Guidance on what to look for and red flags to avoid',
    ],
  },
  {
    icon: '🏡',
    step: '03',
    title: 'Tours & Property Analysis',
    duration: 'As many as needed',
    desc: 'We tour homes with you and provide honest, detailed analysis of every property — condition, value, neighborhood trends, and potential issues.',
    bullets: [
      'In-person and virtual tour options',
      'Comparative market analysis (CMA) for each home',
      'Disclosure review and red flag identification',
      'School district, walkability, and neighborhood data',
    ],
  },
  {
    icon: '✍️',
    step: '04',
    title: 'Offer Strategy & Negotiation',
    duration: '1–3 days',
    desc: 'When you find the right home, we craft a competitive offer strategy designed to win — not just on price, but on terms that protect you.',
    bullets: [
      'Strategic pricing analysis to win without overpaying',
      'Contingency strategy tailored to your risk tolerance',
      'Cover letter and personal touch when appropriate',
      'Expert counter-offer negotiation',
    ],
  },
  {
    icon: '🔬',
    step: '05',
    title: 'Inspections & Due Diligence',
    duration: '7–17 days',
    desc: 'We coordinate all inspections and review every report with you. If issues arise, we negotiate repairs or price reductions on your behalf.',
    bullets: [
      'Coordinate general, pest, roof, and sewer inspections',
      'Review all seller disclosures in detail',
      'Negotiate credits or repairs based on findings',
      'Recommend contractors for any repair estimates',
    ],
  },
  {
    icon: '🏦',
    step: '06',
    title: 'Escrow, Closing & Cash Back',
    duration: '21–30 days',
    desc: 'We manage the entire closing process and work with escrow to ensure your cash-back rebate is processed cleanly at close.',
    bullets: [
      'Coordinate with lender, title, and escrow',
      'Final walkthrough before closing',
      'Review all closing documents with you',
      'Cash-back rebate paid directly through escrow',
    ],
  },
];

const comparisons = [
  { feature: 'Home Search & MLS Access', us: true, traditional: true },
  { feature: 'Property Tours', us: true, traditional: true },
  { feature: 'Offer Writing & Negotiation', us: true, traditional: true },
  { feature: 'Inspection Coordination', us: true, traditional: true },
  { feature: 'Escrow & Closing Support', us: true, traditional: true },
  { feature: 'Market Analysis (CMA)', us: true, traditional: true },
  { feature: 'Fiduciary Duty to Buyer', us: true, traditional: true },
  { feature: 'Cash-Back Rebate', us: true, traditional: false },
  { feature: 'Transparent Flat Fee', us: true, traditional: false },
  { feature: 'No % Commission', us: true, traditional: false },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">The Process</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            How BuyFlatFee Works
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Full-service buyer representation. One flat fee. Cash back at closing.
            Here&apos;s exactly what happens from first call to keys in hand.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.step} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 card-hover flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {s.icon}
                  </div>
                  <span className="text-[#c9a84c] font-bold text-sm tracking-widest">STEP {s.step}</span>
                  <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-3 py-1">{s.duration}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-[#0a1628] mb-3">{s.title}</h3>
                  <p className="text-[#4a4a68] leading-relaxed mb-5">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#4a4a68]">
                        <span className="text-[#c9a84c] mt-0.5 flex-shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-10">
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Side By Side</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">
              BuyFlatFee vs. Traditional Agent
            </h2>
            <p className="text-[#4a4a68] mt-3">Same full service. Radically different cost.</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="grid grid-cols-3 bg-[#0a1628] text-white">
              <div className="p-5 font-semibold text-white/60 text-sm">Feature</div>
              <div className="p-5 text-center font-bold text-[#c9a84c]">BuyFlatFee</div>
              <div className="p-5 text-center font-semibold text-white/60">Traditional Agent</div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-4 text-sm text-[#4a4a68] font-medium">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.us ? (
                    <span className="text-[#4a7c6f] text-xl">✓</span>
                  ) : (
                    <span className="text-red-400 text-xl">✗</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {row.traditional ? (
                    <span className="text-[#4a7c6f] text-xl">✓</span>
                  ) : (
                    <span className="text-red-400 text-xl">✗</span>
                  )}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 bg-[#0a1628] text-white border-t border-white/10">
              <div className="p-5 font-bold">Total Cost (on $1.5M home)</div>
              <div className="p-5 text-center font-display text-2xl font-bold text-[#c9a84c]">$7,999</div>
              <div className="p-5 text-center font-display text-2xl font-bold text-red-400">$37,500</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#4a4a68] text-lg mb-8">
            Schedule your free, no-obligation consultation today.
          </p>
          <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold inline-block">
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
