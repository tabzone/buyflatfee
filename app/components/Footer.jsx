import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-[#0a1628] text-2xl md:text-3xl font-bold">
              Ready to save thousands on your home purchase?
            </h3>
            <p className="text-[#0a1628]/70 mt-1 font-medium">
              Talk to a flat-fee buyer&apos;s agent today — no obligation.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#0a1628] text-[#c9a84c] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#132040] transition-colors whitespace-nowrap shadow-lg"
          >
            Book Free Consultation →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-lg font-display">B</span>
            </div>
            <span className="font-display text-white font-bold text-xl">BuyFlatFee</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            California&apos;s premier flat-fee buyer&apos;s agency. Expert representation for a single flat fee — you keep the rest as cash back.
          </p>
          <div className="flex gap-4">
            {['facebook', 'instagram', 'linkedin', 'youtube'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#c9a84c]/20 hover:text-[#c9a84c] flex items-center justify-center transition-colors"
              >
                <span className="text-xs capitalize">{s[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest text-[#c9a84c]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/calculator', label: 'Savings Calculator' },
              { href: '/pricing', label: 'Pricing & Fees' },
              { href: '/about', label: 'About Us' },
              { href: '/faq', label: 'FAQ' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest text-[#c9a84c]">Services</h4>
          <ul className="space-y-3">
            {[
              'Home Purchase Representation',
              'Property Search & Tours',
              'Offer & Negotiation',
              'Inspection Coordination',
              'Escrow & Close Support',
              'Cash Back Rebates',
            ].map((s) => (
              <li key={s} className="text-white/60 text-sm">{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest text-[#c9a84c]">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#c9a84c] mt-0.5">📍</span>
              <span className="text-white/60 text-sm">San Francisco Bay Area, CA<br />Serving all of California</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a84c]">📞</span>
              <a href="tel:+14151234567" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">(415) 123-4567</a>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a84c]">✉️</span>
              <a href="mailto:hello@buyflatfee.com" className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">hello@buyflatfee.com</a>
            </li>
            <li className="flex gap-3">
              <span className="text-[#c9a84c]">🕐</span>
              <span className="text-white/60 text-sm">Mon–Sat: 9AM – 7PM<br />Sun: By appointment</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {currentYear} BuyFlatFee. All rights reserved. </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
