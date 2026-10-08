'use client';
import { useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    name: 'Full Service',
    fee: 7999,
    where: 'South Bay, Peninsula, East Bay, SF and Santa Cruz',
    blurb: 'A dedicated agent from first tour to closing.',
    featured: true,
    items: [
      'Unlimited private home tours',
      'Comparable-sales pricing for every offer',
      'Offer writing and negotiation',
      'Disclosure and inspection review',
      'Escrow management through closing',
    ],
  },
  {
    name: 'Offer Only',
    fee: 4999,
    where: 'Anywhere in California',
    blurb: 'You find and tour homes. We handle the deal.',
    featured: false,
    items: [
      'You tour homes on your own',
      'Comparable-sales pricing for every offer',
      'Offer writing and negotiation',
      'One visual inspection after your offer is accepted',
      'Disclosure review and escrow through closing',
    ],
  },
];

const COMPARE = [
  ['Where', 'Within ~60 miles of San Jose', 'Anywhere in California'],
  ['Flat fee', '$7,999', '$4,999'],
  ['Private home tours', 'Unlimited', 'You tour on your own'],
  ['Agent visual inspection', 'At your tours', 'Once, after acceptance'],
  ['Offer writing and negotiation', '✓', '✓'],
  ['Disclosure review', '✓', '✓'],
  ['Escrow through closing', '✓', '✓'],
  ['Cashback above our fee', '100%', '100%'],
];

const FAQS = [
  ['Does the seller still pay the buyer\u2019s agent?', 'Often, but not always. Since the 2024 NAR rule changes, buyer-agent compensation is no longer advertised on the MLS. We ask the seller to pay it as part of your offer.'],
  ['What if the seller pays buyer-agent compensation?', 'We keep our flat fee and credit everything above it back to you at closing, as cash toward closing costs or a rate buy-down, subject to your lender\u2019s rules.'],
  ['What if the seller pays nothing?', 'You pay our flat fee at closing. That is still far less than a typical 2 to 2.5% buyer\u2019s agent fee.'],
  ['Do I sign an agreement?', 'Yes. California requires a written buyer representation agreement. It states your plan, our flat fee, and exactly what is included.'],
  ['How long does launch pricing last?', 'Launch pricing applies to buyer agreements signed while it is shown on this page.'],
];

const MONEY = (n) => '$' + Math.round(n).toLocaleString('en-US');

export default function PlansPage() {
  const [price, setPrice] = useState(1360000);
  const [sellerRate, setSellerRate] = useState(0.025);
  const [openFaq, setOpenFaq] = useState(null);

  const sellerPays = price * sellerRate;
  const traditional = price * 0.025;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">Plans and Pricing</h1>
          <p className="text-white/60 text-lg">One flat fee. No percentages. Choose the level of help you want.</p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-20 bg-[#f9f6f0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {PLANS.map((p) => (
              <div key={p.name} className={`rounded-3xl p-10 border ${p.featured ? 'bg-[#0a1628] border-[#c9a84c] text-white' : 'bg-white border-gray-200'}`}>
                {p.featured && <span className="inline-block text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">Launch pricing</span>}
                <h2 className={`font-display text-3xl font-bold mb-2 ${p.featured ? 'text-white' : 'text-[#0a1628]'}`}>{p.name}</h2>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/60' : 'text-[#4a4a68]'}`}>{p.where}</p>
                <p className={`font-display text-4xl font-bold mb-2 ${p.featured ? 'text-[#c9a84c]' : 'text-[#0a1628]'}`}>
                  {MONEY(p.fee)} <span className="text-base font-normal opacity-60">flat fee</span>
                </p>
                <p className={`mb-6 ${p.featured ? 'text-white/70' : 'text-[#4a4a68]'}`}>{p.blurb}</p>
                <ul className={`space-y-2 mb-8 text-sm ${p.featured ? 'text-white/70' : 'text-[#4a4a68]'}`}>
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-3"><span className="text-[#c9a84c]">✓</span>{i}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-4 rounded-xl font-bold ${p.featured ? 'btn-gold' : 'border border-[#c9a84c] text-[#c9a84c]'}`}>Get started</Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4a4a68] text-sm">
            If the seller pays buyer-agent compensation, you get back everything above our flat fee at closing. If the seller pays nothing, you pay only our flat fee.
          </p>
        </div>
      </section>

      {/* Compare */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] text-center mb-12">Compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[#4a4a68] border-b border-gray-200">
                  <th className="pb-4"></th><th className="pb-4">Full Service</th><th className="pb-4">Offer Only</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-gray-100">
                    <td className="py-4 text-[#4a4a68]">{k}</td>
                    <td className="py-4 font-semibold text-[#0a1628]">{a}</td>
                    <td className="py-4 text-[#0a1628]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 bg-[#f9f6f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] text-center mb-12">See your numbers</h2>
          <div className="bg-white border border-gray-100 rounded-3xl p-10">
            <label className="block mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-[#4a4a68] text-sm">Purchase price</span>
                <span className="font-bold text-[#0a1628]">{MONEY(price)}</span>
              </div>
              <input type="range" min={300000} max={5000000} step={10000} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#c9a84c] bg-gray-200" />
            </label>
            <div className="mb-8">
              <p className="text-[#4a4a68] text-sm mb-3">Seller pays buyer&apos;s agent</p>
              <div className="flex gap-3">
                {[0, 0.02, 0.025].map((r) => (
                  <button key={r} onClick={() => setSellerRate(r)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${sellerRate === r ? 'bg-[#0a1628] text-white' : 'bg-gray-100 text-[#4a4a68]'}`}>
                    {r === 0 ? 'Nothing' : `${r * 100}%`}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PLANS.map((p) => {
                const diff = sellerPays - p.fee;
                return (
                  <div key={p.name} className="bg-[#f9f6f0] rounded-2xl p-6 text-center">
                    <p className="text-[#4a4a68] text-sm mb-1">{p.name}</p>
                    <p className={`font-display text-2xl font-bold ${diff >= 0 ? 'text-green-600' : 'text-[#0a1628]'}`}>{MONEY(Math.abs(diff))}</p>
                    <p className="text-xs text-gray-400 mt-1">{diff >= 0 ? 'Cashback to you' : 'You pay at closing'}</p>
                  </div>
                );
              })}
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <p className="text-[#4a4a68] text-sm mb-1">Typical 2.5% agent</p>
                <p className="font-display text-2xl font-bold text-[#0a1628]">{MONEY(traditional)}</p>
                <p className="text-xs text-gray-400 mt-1">Agent fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-[#0a1628] text-center mb-12">Pricing questions</h2>
          <div className="space-y-4 mb-10">
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[#0a1628]" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{q}</span>
                  <span className="text-[#c9a84c] text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="px-6 pb-5 text-[#4a4a68] border-t border-gray-100">{a}</p>}
              </div>
            ))}
          </div>
          <p className="text-center">
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">Talk to an agent</Link>
          </p>
        </div>
      </section>
    </>
  );
}
