'use client';
import { useState } from 'react';
import Link from 'next/link';

const FLAT_FEE = 7999;

export default function CalculatorPage() {
  const [price, setPrice] = useState(1200000);
  const [commRate, setCommRate] = useState(2.5);
  const [useFor, setUseFor] = useState('closing');

  const commission = price * (commRate / 100);
  const cashBack = Math.max(0, commission - FLAT_FEE);
  const traditional = commission;
  const savings = traditional - FLAT_FEE;

  const fmt = (n) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const useCases = [
    { id: 'closing', label: 'Closing Costs', icon: '🏦', desc: `Use ${fmt(cashBack)} to cover closing costs, lender points, and escrow fees — potentially tax-deductible.` },
    { id: 'renovation', label: 'Renovations', icon: '🔨', desc: `Put ${fmt(cashBack)} toward kitchen updates, bathrooms, or landscaping to instantly add equity.` },
    { id: 'offer', label: 'Stronger Offer', icon: '🏆', desc: `Apply ${fmt(cashBack)} as a price increase to beat competing offers without spending extra out of pocket.` },
    { id: 'savings', label: 'Keep It', icon: '💰', desc: `Simply keep ${fmt(cashBack)} as cash in your bank account. No conditions, no restrictions.` },
  ];

  // Breakeven point
  const breakEven = Math.ceil(FLAT_FEE / (commRate / 100));

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Savings Calculator</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            How Much Will You Save?
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            On a typical California home purchase, our clients save{' '}
            <strong className="text-[#c9a84c]">$15,000–$50,000+</strong> compared to a traditional buyer&apos;s agent.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Inputs */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
              <h2 className="font-display text-2xl font-bold text-[#0a1628] mb-6">Your Purchase</h2>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-[#4a4a68]">Purchase Price</label>
                  <span className="font-bold text-[#0a1628] text-lg">{fmt(price)}</span>
                </div>
                <input
                  type="range" min={300000} max={5000000} step={25000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#c9a84c] bg-gray-200"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$300K</span><span>$5M</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[750000, 1200000, 1800000].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPrice(p)}
                      className={`text-xs py-2 rounded-xl border font-medium transition-colors ${price === p ? 'bg-[#0a1628] text-white border-[#0a1628]' : 'border-gray-200 text-[#4a4a68] hover:border-[#c9a84c]'}`}
                    >
                      {fmt(p)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-[#4a4a68]">Buyer&apos;s Agent Commission</label>
                  <span className="font-bold text-[#0a1628]">{commRate}%</span>
                </div>
                <input
                  type="range" min={1.5} max={3} step={0.25}
                  value={commRate}
                  onChange={(e) => setCommRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#c9a84c] bg-gray-200"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1.5%</span><span>3%</span>
                </div>
              </div>

              <div className="bg-[#f9f6f0] rounded-2xl p-4 text-sm text-[#4a4a68]">
                <p className="font-semibold text-[#0a1628] mb-1">Break-even Point</p>
                <p>Our flat fee makes sense for any home over <strong className="text-[#c9a84c]">{fmt(breakEven)}</strong> at {commRate}% commission.</p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Main numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100">
                  <p className="text-xs text-[#4a4a68] uppercase tracking-widest mb-2">Commission Offered</p>
                  <p className="font-display text-3xl font-bold text-[#0a1628]">{fmt(commission)}</p>
                  <p className="text-xs text-gray-400 mt-1">Total from seller</p>
                </div>
                <div className="bg-[#0a1628] rounded-3xl p-6 text-center shadow-lg">
                  <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Our Flat Fee</p>
                  <p className="font-display text-3xl font-bold text-white">{fmt(FLAT_FEE)}</p>
                  <p className="text-xs text-white/40 mt-1">All you pay us</p>
                </div>
                <div className="bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-3xl p-6 text-center shadow-lg">
                  <p className="text-xs text-[#0a1628]/70 uppercase tracking-widest mb-2">Your Cash Back</p>
                  <p className="font-display text-3xl font-bold text-[#0a1628]">{fmt(cashBack)}</p>
                  <p className="text-xs text-[#0a1628]/60 mt-1">Back to you at close</p>
                </div>
              </div>

              {/* Visual bar comparison */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-[#0a1628] mb-6">Traditional vs. BuyFlatFee</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#4a4a68]">Traditional Agent Cost</span>
                      <span className="font-bold text-red-500">{fmt(traditional)}</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-300 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#4a4a68]">BuyFlatFee Cost</span>
                      <span className="font-bold text-[#4a7c6f]">{fmt(FLAT_FEE)}</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#4a7c6f] to-[#6aad9d] rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(2, (FLAT_FEE / traditional) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-[#f9f6f0] rounded-2xl p-4 flex justify-between items-center">
                  <span className="font-semibold text-[#0a1628]">Total Savings</span>
                  <span className="font-display text-2xl font-bold text-[#c9a84c]">{fmt(savings)}</span>
                </div>
              </div>

              {/* Use your cash back */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-[#0a1628] mb-5">What Will You Do With {fmt(cashBack)}?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {useCases.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => setUseFor(u.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all ${useFor === u.id ? 'border-[#c9a84c] bg-[#c9a84c]/5' : 'border-gray-100 hover:border-gray-200'}`}
                    >
                      <span className="text-2xl">{u.icon}</span>
                      <p className="font-semibold text-[#0a1628] text-sm mt-1">{u.label}</p>
                    </button>
                  ))}
                </div>
                {useCases.find((u) => u.id === useFor) && (
                  <div className="mt-4 bg-[#f9f6f0] rounded-2xl p-4 text-sm text-[#4a4a68]">
                    {useCases.find((u) => u.id === useFor).desc}
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            * Estimates only. Actual commission offered varies by property. Cash back subject to lender approval and processed through escrow.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let&apos;s talk through your specific situation and make sure you&apos;re positioned to maximize your savings.
          </p>
          <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold inline-block">
            Get My Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
