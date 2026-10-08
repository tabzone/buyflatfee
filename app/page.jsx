'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FLAT_FEE = 7999;

function CashbackCalc() {
  const [price, setPrice] = useState(2000000);
  const commission = price * 0.025;
  const cashBack = Math.max(0, commission - FLAT_FEE);

  const rows = [
    ['Purchase Price', price, price],
    ['Buyer\u2019s Agent Commission', FLAT_FEE, commission],
    ['Out of Pocket Cost', price - cashBack, price, true],
    ['Cash Back', cashBack, 0, true],
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/20 p-8 w-full">
      <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-2">Savings Estimator</p>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0a1628] mb-6">
        What could buying cost you with a flat fee?
      </h2>
      <label className="block mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-[#4a4a68]">Purchase Price:</span>
          <span className="font-bold text-[#0a1628]">${price.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min={0}
          max={5000000}
          step={50000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#c9a84c] bg-gray-200"
        />
      </label>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[#4a4a68]">
            <th className="pb-3"></th>
            <th className="pb-3">Buy Flat Fee</th>
            <th className="pb-3">Traditional Agent</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ours, traditional, big]) => (
            <tr key={label} className="border-t border-gray-100">
              <td className="py-3 text-[#4a4a68]">{label}</td>
              <td className={`py-3 font-semibold text-[#0a1628] ${big ? 'text-lg' : ''}`}>
                <span className="text-[#c9a84c]">$</span>{Math.round(ours).toLocaleString()}
              </td>
              <td className="py-3 text-[#4a4a68]">
                <span className="text-[#c9a84c]">$</span>{Math.round(traditional).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-4">* Assumes the seller offers 2.5% to the buyer&apos;s agent. Rebates are credited through escrow.</p>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4">
      <span className="w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center text-2xl text-[#0a1628]">▶</span>
      <span className="text-white/60 text-sm uppercase tracking-widest">Intro video — coming soon</span>
    </div>
  );
}

function ImageSlot({ label, className = '' }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/cashback-buyflatfee.webp"
        alt="Home buyers reviewing their real estate purchase with an agent"
        width={1200}
        height={900}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

const SERVICE_AREAS = [
  'San Jose', 'Santa Clara', 'Sunnyvale', 'Cupertino', 'Milpitas', 'Saratoga',
  'Los Altos', 'Gilroy', 'Fremont', 'Newark', 'Dublin', 'Livermore',
  'San Ramon', 'Tracy', 'Lathrop',
];

const SOURCES = ['Google', 'Yelp', 'Friend / Referral', 'Social Media', 'Blog', 'Other'];

const STEPS = [
  { n: '01', t: 'Discovery Call', d: 'Tell us about your budget, wish list and timeline. We set up tailored MLS alerts within 24 hours.' },
  { n: '02', t: 'Tours & Showings', d: 'We walk through homes with you across the Bay Area and share honest market comparisons.' },
  { n: '03', t: 'Offer & Negotiation', d: 'Data-backed pricing and strong negotiation to help you win the right home at the right price.' },
  { n: '04', t: 'Close & Save', d: 'We manage escrow to the finish line. Your cashback rebate is credited at closing.' },
];

function ConnectForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center text-white flex items-center justify-center min-h-[300px]">
        Thanks for reaching out! We&apos;ll be in touch shortly.
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-3xl px-8 mt-32"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input required name="name" placeholder="Name (First Last)" aria-label="Name" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#c9a84c]" />
      <input type="tel" name="phone" placeholder="Phone" aria-label="Phone" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#c9a84c]" />
      <input type="email" required name="email" placeholder="Email" aria-label="Email" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#c9a84c]" />
      <select name="source" defaultValue="" aria-label="How did you first hear about us?" className="bg-[#132040] border border-white/10 rounded-xl px-4 py-3 text-white/70 outline-none focus:border-[#c9a84c]">
        <option value="" disabled>How did you first hear about us?</option>
        {SOURCES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <textarea rows={4} name="message" placeholder="Do you have a house in mind, address?" aria-label="Message" className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none focus:border-[#c9a84c]" />
      <label className="flex items-start gap-3 text-white/60 text-sm">
        <input type="checkbox" name="consent" defaultChecked className="mt-1 accent-[#c9a84c]" />
        <span>
          I agree to receive text messages from the Buy Flat Fee team. Message and data rates may apply; reply STOP to opt out. See our{' '}
          <Link href="/privacy" className="text-[#c9a84c] underline">privacy policy</Link>.
        </span>
      </label>
      <button type="submit" className="btn-gold px-8 py-4 rounded-xl font-bold">Send Message</button>
    </form>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-block text-[#c9a84c] text-xs font-bold uppercase tracking-widest border border-[#c9a84c]/40 rounded-full px-4 py-2 mb-6">
              California Licensed Buyer&apos;s Agent
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to <span className="text-[#c9a84c]">Buy Flat Fee</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Full-service home buying across the Bay Area for one flat fee of $7,999. When the seller pays buyer-agent compensation, everything above our fee comes back to you as cashback at closing.
            </p>
            <VideoPlaceholder />
          </div>
          <CashbackCalc />
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="bg-[#f9f6f0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['$7,999', 'Flat Fee, No Surprises'], ['100%', 'Cashback Above Our Fee'], ['60 mi', 'Service Radius from San Jose'], ['DRE #02126387', 'Licensed & Brokered']].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-bold text-[#0a1628]">{v}</p>
              <p className="text-[#4a4a68] text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CASHBACK ═══ */}
      <section className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/cashback-buyflatfee.webp"
              alt="Home buyers reviewing their real estate purchase with an agent"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">How It Pays You Back</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-6">
              How does <span className="text-[#c9a84c]">Cashback</span> work?
            </h2>
            <p className="text-[#4a4a68] mb-4 leading-relaxed">
              In many transactions, the seller still sets aside a few percent for the buyer&apos;s agent. Because compensation is negotiated inside your offer today, we ask for it on your behalf — then pass back everything beyond our simple $7,999 fee.
            </p>
            <p className="text-[#4a4a68] mb-4">Smart ways buyers use their rebate:</p>
            <ul className="list-disc list-inside text-[#4a4a68] space-y-2 mb-6">
              <li>Cover closing costs or buy down your mortgage rate with lender points.</li>
              <li>Lower the effective sale price, which can also trim your property taxes.</li>
              <li>Make a stronger, more competitive offer.</li>
            </ul>
            <p className="font-semibold text-[#0a1628] mb-8">
              Rebates are credited through escrow, with no extra paperwork.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#0a1628] mb-2">Credit on your closing statement</h3>
                <p className="text-[#4a4a68] text-sm">The easiest way — your rebate is itemized as a credit at closing, so you bring less cash to escrow.</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-[#0a1628] mb-2">Check after escrow closes</h3>
                <p className="text-[#4a4a68] text-sm">Prefer cash in hand? Some clients choose to receive their rebate by check right after closing.</p>
              </div>
            </div>

            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">Get Started</Link>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">A clear path from search to keys</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-[#f9f6f0] rounded-3xl p-8 border border-gray-100">
                <span className="text-[#c9a84c] text-xs font-bold tracking-widest">STEP {s.n}</span>
                <h3 className="font-display text-xl font-bold text-[#0a1628] mt-2 mb-3">{s.t}</h3>
                <p className="text-[#4a4a68] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f9f6f0] border border-gray-100 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-[#0a1628] mb-6 text-center">Everything included with your flat fee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-[#4a4a68]">
              {[
                'Personal consultation and a tailored home search plan',
                'New listing alerts that match your criteria, sent daily',
                'Market watch updates and neighborhood insights',
                'Honest guidance on pricing, lenders and closing costs',
                'Offer writing, negotiation and full contract support',
                'Escrow coordination all the way to your keys',
              ].map((item) => (
                <p key={item} className="flex gap-3"><span className="text-[#c9a84c]">✓</span>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ═══ LOW FEE ═══ */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#071525] via-[#0a1b30] to-[#102a43] py-24 lg:py-28">
  
  {/* Decorative house / architectural outline */}
  <div className="absolute right-[28%] top-8 hidden lg:block opacity-20 pointer-events-none">
    <svg
      width="520"
      height="430"
      viewBox="0 0 520 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#c9a84c]"
    >
      <path
        d="M70 410V145L260 20L450 145V410"
        stroke="currentColor"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 410H430"
        stroke="currentColor"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </svg>
  </div>

  {/* Subtle glow */}
  <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none" />
  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#1d5a7a]/20 blur-3xl pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Text */}
      <div className="max-w-2xl">
        <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Why $7,999 Works
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          How are we able to keep our fee so low?
        </h2>

        <p className="text-white/75 leading-relaxed text-lg mb-7 max-w-xl">
          It comes down to efficiency. Smart automation, digital paperwork
          and a tightly organized team let us guide more buyers than a
          traditional brokerage — so our cost per client stays low and the
          savings stay with you.
        </p>

        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:text-white transition-colors"
        >
          See the details
          <span>→</span>
        </Link>
      </div>

      {/* Image */}
      <div className="relative">
        <div className="absolute -inset-3 rounded-3xl border border-[#c9a84c]/20" />

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/Friendly Home Buying Consultation.webp"
            alt="Home buyers reviewing their real estate purchase with an agent"
            width={1200}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ═══ SELL ═══ */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">Thinking of Selling?</p>
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-6">
            List your home for <span className="text-[#c9a84c]">1.5%</span>
          </h2>
          <p className="text-[#4a4a68] text-lg leading-relaxed mb-8">
            Full-service listing — pricing strategy, MLS exposure, showings, negotiation and escrow — for 1.5% of the sale price. On a $1.5M home, that is $22,500 instead of roughly $37,500 at a typical 2.5%.
          </p>
          {/* <Link href="/pricing" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">See selling details</Link> */}
          <Link href="/plans" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">See selling details</Link>
        </div>
      </section>

      {/* ═══ AREAS ═══ */}
      <section className="py-24 bg-[#f9f6f0] text-center">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">Coverage</p>
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-4">Areas we serve</h2>
          <p className="text-[#4a4a68] mb-10">Full Service within about 60 miles of San Jose, and Offer Only anywhere in California.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SERVICE_AREAS.map((city) => (
              <Link key={city} href="/contact" className="px-5 py-2 rounded-full border border-gray-200 bg-white text-[#0a1628] text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
                {city}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">All locations</Link>
        </div>
      </section>

      {/* ═══ CONNECT ═══ */}
      <section id="connect" className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Let&apos;s <span className="text-[#c9a84c]">Connect</span>
            </h2>
            <p className="text-white/60 mb-8">Thinking about buying? Share your details and we&apos;ll reach out to set up a time to talk.</p>
            <p className="text-white/60 leading-8">
              ✉ <a href="mailto:info@buyflatfee.com" className="text-[#c9a84c]">info@buyflatfee.com</a><br />
              ☎ <a href="tel:+14154886657" className="text-[#c9a84c]">(415) 488-6657</a>
            </p>
          </div>
          <ConnectForm />
        </div>
      </section>
    </>
  );
}
