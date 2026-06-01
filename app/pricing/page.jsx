import Link from 'next/link';

export const metadata = {
  title: 'Pricing & Fees',
  description: 'Simple, transparent pricing. One flat fee of $7,999 for full buyer\'s agent representation anywhere in California.',
};

const included = [
  { icon: '🔍', title: 'Personalized Home Search', desc: 'Custom MLS alerts, off-market access, and proactive searching in your target neighborhoods.' },
  { icon: '🏡', title: 'Unlimited Property Tours', desc: 'In-person and virtual tours with no limit — we\'ll show you as many homes as it takes.' },
  { icon: '📊', title: 'Comparative Market Analysis', desc: 'Detailed CMA reports for every home you\'re serious about so you never overpay.' },
  { icon: '✍️', title: 'Offer Writing & Strategy', desc: 'Professionally crafted offers with strategic terms designed to win in competitive markets.' },
  { icon: '🤝', title: 'Full Negotiation', desc: 'Expert counter-offer negotiation on price, repairs, credits, and closing timelines.' },
  { icon: '🔬', title: 'Inspection Coordination', desc: 'We schedule, attend, and review all inspections and negotiate any issues found.' },
  { icon: '📄', title: 'Disclosure Review', desc: 'Thorough review of all seller disclosures and advisory documentation.' },
  { icon: '🏦', title: 'Escrow & Close Management', desc: 'End-to-end coordination with lender, title, and escrow through final close.' },
  { icon: '💰', title: 'Cash-Back Rebate', desc: 'All commission above our flat fee is returned to you through escrow at closing.' },
  { icon: '📱', title: '7-Day Availability', desc: 'We\'re reachable 7 days a week via call, text, or email throughout your entire search.' },
];

const notIncluded = [
  'Home staging or photography (seller services)',
  'Listing services (we\'re buyers-only)',
  'Property management after purchase',
  'Legal or title insurance (handled by title company)',
];

const faqs = [
  {
    q: 'What if the seller offers less than $7,999 in commission?',
    a: 'In rare cases where the offered commission is less than our flat fee, we will discuss the situation with you transparently before you make an offer. We never surprise you with extra costs.',
  },
  {
    q: 'When do I pay the flat fee?',
    a: 'You don\'t pay anything upfront. Our $7,999 fee is deducted from the buyer\'s agent commission offered by the seller at closing. You only pay when you successfully purchase a home.',
  },
  {
    q: 'Is there a fee if I don\'t buy a home?',
    a: 'No. There is zero upfront cost and no fee if you don\'t close on a home. We only get paid if you successfully purchase.',
  },
  {
    q: 'Can I use the cash back for a down payment?',
    a: 'Many lenders allow rebates to be applied toward closing costs. Down payment usage depends on your lender\'s guidelines. We\'ll help you understand your options.',
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            One Price. Everything Included.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            No percentage commissions. No hidden fees. No surprises.
            Just one flat fee — and you keep everything else.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* Pricing card */}
      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main pricing card */}
            <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-[#0a1628] p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative">
                  <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Flat-Fee Buyer Representation</p>
                  <div className="flex items-start justify-center gap-2">
                    <span className="text-white text-3xl font-bold mt-3">$</span>
                    <span className="font-display text-8xl font-bold text-white leading-none">7,999</span>
                  </div>
                  <p className="text-white/60 mt-3 text-lg">Flat. No percentage. No surprises.</p>
                  <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/30 rounded-full px-5 py-2 mt-5">
                    <span className="text-[#c9a84c] text-sm font-medium">Paid at closing from commission — $0 out of pocket upfront</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-[#0a1628] mb-5 uppercase tracking-wide text-xs text-[#c9a84c]">Everything Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {included.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-[#0a1628] text-sm">{item.title}</p>
                        <p className="text-[#4a4a68] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-[#0a1628] mb-4 uppercase tracking-wide text-xs text-gray-400">Not Included</h3>
                  <ul className="space-y-2">
                    {notIncluded.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="text-gray-300">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Side panel */}
            <div className="space-y-6">
              {/* Cash back box */}
              <div className="bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-3xl p-8 text-center shadow-lg">
                <p className="text-[#0a1628]/70 text-sm font-semibold uppercase tracking-wide mb-3">Typical Cash Back</p>
                <p className="font-display text-5xl font-bold text-[#0a1628]">$20K–<br />$50K+</p>
                <p className="text-[#0a1628]/70 text-sm mt-3">On a $1M–$2M purchase</p>
                <div className="mt-4 border-t border-[#0a1628]/10 pt-4">
                  <Link href="/calculator" className="text-[#0a1628] font-bold text-sm underline">
                    Calculate your exact savings →
                  </Link>
                </div>
              </div>

              {/* No upfront risk */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-bold text-[#0a1628] mb-2">Zero Upfront Risk</h3>
                <p className="text-[#4a4a68] text-sm leading-relaxed">
                  You pay nothing until you close. If you don&apos;t buy a home, you owe us nothing. Simple as that.
                </p>
              </div>

              {/* Service area */}
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-[#0a1628] mb-2">Where We Work</h3>
                <ul className="text-sm text-[#4a4a68] space-y-1">
                  {['SF Bay Area (primary)', 'Los Angeles County', 'San Diego County', 'Sacramento Area', 'All of California'].map((area) => (
                    <li key={area} className="flex items-center gap-2">
                      <span className="text-[#c9a84c]">✓</span>{area}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-gold w-full py-4 rounded-xl font-bold text-center text-lg block">
                Get Started Free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">Pricing Questions</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-100 rounded-2xl p-6 bg-gray-50">
                <p className="font-semibold text-[#0a1628] mb-2">{faq.q}</p>
                <p className="text-[#4a4a68] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Simple Pricing. Serious Savings.</h2>
          <p className="text-white/70 text-lg mb-8">Talk to us today — no obligation, no pressure.</p>
          <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold inline-block">
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
