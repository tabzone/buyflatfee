import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Meet the BuyFlatFee team — California-licensed buyer\'s agents committed to transparent, ethical, and expert home buying.',
};

const values = [
  { icon: '🔍', title: 'Radical Transparency', desc: 'We show you exactly how much commission is being offered and exactly what we take. No smoke, no mirrors.' },
  { icon: '🤝', title: 'Fiduciary First', desc: 'As your buyer\'s agent, our legal duty is to you — not to close deals quickly, not to push price. Always.' },
  { icon: '🎓', title: 'Genuine Expertise', desc: 'Deep Bay Area market knowledge with hundreds of transactions. We know how to win in competitive markets.' },
  { icon: '💰', title: 'Your Money Stays Yours', desc: 'We built this model because traditional commission structures are broken. You deserve what you\'re owed.' },
];

const stats = [
  { number: '200+', label: 'Homes Purchased' },
  { number: '$2M+', label: 'Cash Back Paid to Clients' },
  { number: '5★', label: 'Average Review Rating' },
  { number: '12+', label: 'Years Combined Experience' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Real Estate Done Right.
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            BuyFlatFee was built on one simple belief: homebuyers deserve full expert representation
            without paying a percentage commission on a million-dollar purchase.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-[#f9f6f0] py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 card-hover">
              <p className="font-display text-4xl font-bold text-[#c9a84c]">{s.number}</p>
              <p className="text-[#4a4a68] text-sm mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Our Story */}
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Why We Exist</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-6">
              The Commission System Was Broken. We Fixed It.
            </h2>
            <div className="space-y-5 text-[#4a4a68] leading-relaxed">
              <p>
                When our founder purchased their first home in the Bay Area, they were shocked.
                Their buyer&apos;s agent collected $37,500 in commission on a $1.5M purchase —
                for a transaction that took about 40 hours of actual work.
              </p>
              <p>
                That&apos;s nearly <strong className="text-[#0a1628]">$900 per hour</strong>. And the buyer had no choice, no visibility,
                and no say in how that money was allocated.
              </p>
              <p>
                BuyFlatFee was founded to change that. We provide the same expert, full-service
                representation — but charge a fair, transparent flat fee. Everything above that
                goes back to you.
              </p>
              <p>
                We&apos;re licensed California real estate brokers with deep Bay Area roots.
                We&apos;ve helped over 200 families buy homes and returned more than $2 million
                in cash back that would have gone to commissions.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {/* Agent card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center text-2xl font-display font-bold text-[#0a1628]">
                  A
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0a1628]">Lead Buyer&apos;s Agent</h3>
                  {/* <p className="text-[#4a4a68] text-sm">CA DRE #XXXXXXX</p> */}
                  <p className="text-[#c9a84c] text-sm font-medium">SF Bay Area Specialist</p>
                </div>
              </div>
              <p className="text-[#4a4a68] text-sm leading-relaxed">
                10+ years in Bay Area real estate. Expert in competitive multiple-offer markets, investment properties, and first-time buyer guidance. Personally invested in real estate and brings that investor mindset to every client relationship.
              </p>
            </div>
            {/* <div className="bg-[#0a1628] rounded-3xl p-8 text-white">
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Our License</p>
              <p className="text-white/70 text-sm leading-relaxed">
                BuyFlatFee is a fully licensed California real estate brokerage operating under CA DRE #XXXXXXX.
                All agents are individually licensed and comply with all California real estate laws and fiduciary obligations.
              </p>
              <div className="mt-5 flex gap-3">
                <div className="bg-white/10 rounded-xl px-4 py-2 text-xs text-white/70">CA Licensed Broker</div>
                <div className="bg-white/10 rounded-xl px-4 py-2 text-xs text-white/70">NAR Member</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f9f6f0] rounded-3xl p-8 card-hover">
                <div className="w-14 h-14 bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] rounded-2xl flex items-center justify-center text-2xl mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0a1628] mb-3">{v.title}</h3>
                <p className="text-[#4a4a68] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a1628] py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-white/70 text-lg mb-8">Book a free consultation and see how much you could save on your next home purchase.</p>
          <Link href="/contact" className="btn-gold px-10 py-5 rounded-xl text-lg font-bold inline-block">
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
