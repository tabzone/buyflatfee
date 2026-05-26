'use client';
import { useState } from 'react';
import Link from 'next/link';

const FLAT_FEE = 7999;

function SavingsCalculator() {
  const [price, setPrice] = useState(1200000);
  const [commissionRate, setCommissionRate] = useState(2.5);

  const commission = price * (commissionRate / 100);
  const cashBack = Math.max(0, commission - FLAT_FEE);
  const traditionalCost = commission;

  const fmt = (n) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 md:p-12">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0a1628] mb-2">
        See Your Savings
      </h3>
      <p className="text-[#4a4a68] mb-8">Drag the slider to your home&apos;s purchase price.</p>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-[#4a4a68]">Purchase Price</label>
          <span className="text-[#0a1628] font-bold text-lg">{fmt(price)}</span>
        </div>
        <input
          type="range"
          min={300000}
          max={5000000}
          step={50000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#c9a84c]"
        />
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span>$300K</span><span>$5M</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-[#4a4a68]">Buyer&apos;s Agent Commission Offered</label>
          <span className="text-[#0a1628] font-bold">{commissionRate}%</span>
        </div>
        <input
          type="range"
          min={1.5}
          max={3}
          step={0.25}
          value={commissionRate}
          onChange={(e) => setCommissionRate(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#c9a84c]"
        />
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span>1.5%</span><span>3%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-[#4a4a68] uppercase tracking-wide mb-1">Traditional Agent</p>
          <p className="font-display text-2xl font-bold text-red-500">{fmt(traditionalCost)}</p>
          <p className="text-xs text-gray-400 mt-1">You keep $0</p>
        </div>
        <div className="bg-[#0a1628] rounded-2xl p-5 text-center">
          <p className="text-xs text-[#c9a84c] uppercase tracking-wide mb-1">Our Flat Fee</p>
          <p className="font-display text-2xl font-bold text-white">{fmt(FLAT_FEE)}</p>
          <p className="text-xs text-white/50 mt-1">That&apos;s all you pay us</p>
        </div>
        <div className="bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-2xl p-5 text-center">
          <p className="text-xs text-[#0a1628]/70 uppercase tracking-wide mb-1">Your Cash Back</p>
          <p className="font-display text-2xl font-bold text-[#0a1628]">{fmt(cashBack)}</p>
          <p className="text-xs text-[#0a1628]/60 mt-1">Back in your pocket</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        * Cash back processed through escrow. Subject to lender approval. DRE #XXXXXXX
      </p>
    </div>
  );
}

const steps = [
  {
    icon: '🔍',
    step: '01',
    title: 'Tell Us What You Want',
    desc: 'Share your home criteria, budget, and timeline. We\'ll set up personalized MLS alerts and start searching immediately.',
  },
  {
    icon: '🏡',
    step: '02',
    title: 'Tour & Discover',
    desc: 'We tour properties with you, provide expert market analysis, and help you identify the perfect home without pressure.',
  },
  {
    icon: '✍️',
    step: '03',
    title: 'Negotiate & Win',
    desc: 'Our experienced agents craft a competitive offer strategy to help you win — even in multiple-offer situations.',
  },
  {
    icon: '💰',
    step: '04',
    title: 'Close & Get Cash Back',
    desc: 'We handle everything through closing. Your cash-back rebate is paid through escrow. No surprises, no hidden fees.',
  },
];

const testimonials = [
  {
    name: 'Priya S.',
    location: 'Fremont, CA',
    purchase: '$1.35M home',
    cashback: '$25,776',
    text: 'We saved over $25K using BuyFlatFee. The service was outstanding — they negotiated hard and got us $40K under asking. Highly recommend.',
    stars: 5,
  },
  {
    name: 'Marcus T.',
    location: 'San Jose, CA',
    purchase: '$980K home',
    cashback: '$16,501',
    text: 'I was skeptical at first but they were just as attentive and knowledgeable as any full-service agent I\'ve used. The cash back was a game-changer for renovations.',
    stars: 5,
  },
  {
    name: 'Jenny & Carlos R.',
    location: 'Oakland, CA',
    purchase: '$760K home',
    cashback: '$11,001',
    text: 'First-time buyers and they made it so easy. Answered every question patiently and the rebate helped with our closing costs. 10/10.',
    stars: 5,
  },
];

const faqs = [
  {
    q: 'Do I get less service with a flat-fee agent?',
    a: 'Absolutely not. You receive full buyer representation — home search, tours, offer negotiation, inspection coordination, and closing support. The only difference is you pay a flat fee instead of a percentage.',
  },
  {
    q: 'How does the cash-back rebate work?',
    a: 'The seller typically offers 2–3% to the buyer\'s agent. We take our flat fee from that commission and refund the rest to you through escrow at closing. No separate transaction needed.',
  },
  {
    q: 'Is this legal in California?',
    a: 'Yes, California explicitly permits buyer rebates. We are licensed California real estate brokers and handle everything compliantly. DRE #XXXXXXX',
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen bg-[#0a1628] flex items-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#4a7c6f]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
              <span className="text-[#c9a84c] text-sm font-medium">California Licensed Buyer&apos;s Agent</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Buy Your Home.{' '}
              <span className="text-gold-gradient">Keep the</span>{' '}
              Commission.
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Expert buyer&apos;s agent representation for a single flat fee of{' '}
              <strong className="text-[#c9a84c]">${FLAT_FEE.toLocaleString()}</strong>.
              The rest of the commission comes back to you as cash — often{' '}
              <strong className="text-white">$20,000–$50,000+</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-gold px-8 py-4 rounded-xl text-base font-bold text-center"
              >
                Get Your Free Consultation →
              </Link>
              <Link
                href="/calculator"
                className="btn-outline-gold px-8 py-4 rounded-xl text-base font-semibold text-center"
              >
                Calculate My Savings
              </Link>
            </div>
          </div>

          {/* Right: Mini calculator preview */}
          <div className="lg:pl-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Quick Estimate</p>
              <QuickCalc />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 900 0 720 30C540 60 240 10 0 40L0 80Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════ TRUST BADGES ═══════════════════ */}
      <section className="bg-[#f9f6f0] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🏛️', label: 'Licensed Broker', sub: '' },
              { icon: '🔒', label: 'Fiduciary Duty', sub: 'Always on your side' },
              { icon: '💸', label: '$0 Hidden Fees', sub: 'One flat fee, period' },
              { icon: '🌎', label: 'All California', sub: 'Bay Area specialists' },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{b.icon}</span>
                <p className="font-semibold text-[#0a1628] text-sm">{b.label}</p>
                {/* <p className="text-[#4a4a68] text-xs">{b.sub}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]">
              How BuyFlatFee Works
            </h2>
            <p className="text-[#4a4a68] mt-4 text-lg max-w-2xl mx-auto">
              Full buyer representation. Flat price. Cash back at closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {steps.map((s) => (
              <div key={s.step} className="relative card-hover animate-fade-up opacity-0">
                <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 shadow-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg">
                    {s.icon}
                  </div>
                  <span className="text-[#c9a84c] text-xs font-bold tracking-widest">STEP {s.step}</span>
                  <h3 className="font-display text-xl font-bold text-[#0a1628] mt-2 mb-3">{s.title}</h3>
                  <p className="text-[#4a4a68] text-sm leading-relaxed">{s.desc}</p>
                </div>
                {/* Connector arrow (not last) */}
                <div className="hidden lg:block absolute top-1/2 -right-4 text-[#c9a84c] text-2xl z-10">→</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">
              Learn More About Our Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CALCULATOR ═══════════════════ */}
      <section className="py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Savings Calculator</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              How Much Will You Save?
            </h2>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]">
              Real Buyers. Real Savings.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-[#c9a84c] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#4a4a68] leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0a1628]">{t.name}</p>
                    <p className="text-sm text-[#4a4a68]">{t.location}</p>
                    <p className="text-xs text-gray-400">{t.purchase}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#4a4a68] uppercase tracking-wide">Cash Back</p>
                    <p className="font-display text-xl font-bold text-[#c9a84c]">{t.cashback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ PREVIEW ═══════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[#0a1628] hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#c9a84c] text-xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#4a4a68] leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#c9a84c] font-semibold hover:underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] to-[#132040] relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Your Dream Home.{' '}
            <span className="text-gold-gradient">Thousands Back.</span>
          </h2>
          <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of California homebuyers who paid less and got more. Schedule a free, no-pressure consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold">
              Book Free Consultation →
            </Link>
            <a
              href="tel:+14151234567"
              className="btn-outline-gold px-10 py-5 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
            >
              📞 (415) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function QuickCalc() {
  const [price, setPrice] = useState(1500000);
  const commission = price * 0.025;
  const cashBack = Math.max(0, commission - FLAT_FEE);
  const fmt = (n) => '$' + Math.round(n).toLocaleString();

  return (
    <div>
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <span className="text-white/70 text-sm">Home Price</span>
          <span className="text-white font-bold">{fmt(price)}</span>
        </div>
        <input
          type="range"
          min={400000}
          max={4000000}
          step={100000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#c9a84c] bg-white/20"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/10 rounded-2xl p-4 text-center">
          <p className="text-white/50 text-xs mb-1">You Pay Us</p>
          <p className="font-display text-xl font-bold text-[#c9a84c]">{fmt(FLAT_FEE)}</p>
        </div>
        <div className="bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-2xl p-4 text-center">
          <p className="text-[#0a1628]/70 text-xs mb-1">Cash Back</p>
          <p className="font-display text-xl font-bold text-[#0a1628]">{fmt(cashBack)}</p>
        </div>
      </div>
      <Link
        href="/calculator"
        className="block text-center text-[#c9a84c] text-sm font-medium mt-4 hover:text-[#e8c97a] transition-colors"
      >
        Full Calculator →
      </Link>
    </div>
  );
}