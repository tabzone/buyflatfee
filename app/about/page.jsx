import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Meet the BuyFlatFee team — California-licensed buyer\'s agents committed to transparent, ethical, and expert home buying.',
};

const differentiators = [
  {
    title: 'Licensed General Contractors',
    desc: 'More than 10 years of combined residential and commercial construction experience, so we can spot real repair costs and hidden issues before you buy.',
  },
  {
    title: 'Education First',
    desc: 'We walk you through transaction basics, open house strategies, inspection reports, comparative market analysis and contract terms — so every decision is informed.',
  },
  {
    title: 'Fluent in Investor Language',
    desc: 'We work with portfolios and multifamily properties too, and can help with offering memorandums, DSCR lenders and hard-money loans.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">About Buy Flat Fee</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Buy for one flat fee of $7,999, or sell for 1.5%. Full professional representation, without the full commission.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4 text-center">Our Mission</p>
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-3 text-center">Why does Buy Flat Fee exist?</h2>
          <div className="space-y-5 text-[#4a4a68] leading-relaxed mt-8">
            <p>
              We started this company after going through the home-buying process ourselves and asking a simple question:
              does paying 2–2.5% of the purchase price really reflect the work a buyer&apos;s agent does — especially on a million-dollar home?
            </p>
            <p>
              Buy Flat Fee exists to give every buyer — whether it&apos;s your first condo or your fifth investment property —
              the same high-quality, honest representation, at a fair and predictable price.
            </p>
            <p>
              We&apos;re California-licensed real estate professionals with deep roots in the Bay Area, and we&apos;re proud to return
              thousands of dollars to our clients at every closing.
            </p>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">The Difference</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-[#f9f6f0] rounded-3xl p-8 card-hover">
                <h3 className="font-display text-xl font-bold text-[#0a1628] mb-3">{d.title}</h3>
                <p className="text-[#4a4a68] text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Your Agents</p>
            <h2 className="font-display text-4xl font-bold text-[#0a1628]">Meet Your Agents</h2>
            <p className="text-[#4a4a68] mt-4 max-w-2xl mx-auto">
              A husband-and-wife team of licensed REALTORS® with BRG Realty, helping Bay Area buyers and sellers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Reshma Sait', title: 'REALTOR®', bio: 'Reshma helps Bay Area buyers purchase homes for one flat fee, from the first tour through closing.' },
              { name: 'Tabrez Sait', title: 'REALTOR® and Mortgage Broker', bio: 'Tabrez helps Bay Area buyers price, write and negotiate strong offers for one flat fee — and can help with pre-approval and loan options through BuyLowRate.' },
            ].map((a) => (
              <div key={a.name} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center text-2xl font-display font-bold text-[#0a1628] mx-auto mb-5">
                  {a.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0a1628]">{a.name}</h3>
                <p className="text-[#c9a84c] text-sm font-medium mb-4">{a.title} · BRG Realty</p>
                <p className="text-[#4a4a68] text-sm leading-relaxed mb-6">{a.bio}</p>
                <Link href="/contact" className="btn-gold px-6 py-3 rounded-xl text-sm font-bold inline-block">
                  Contact {a.name.split(' ')[0]}
                </Link>
                {a.name === 'Tabrez Sait' && (
                  <a href="https://www.buylowrate.com" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-6 py-3 rounded-xl text-sm font-semibold inline-block ml-3">
                    Mortgage rates at BuyLowRate ↗
                  </a>
                )}
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
