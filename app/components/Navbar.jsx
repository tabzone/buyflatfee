'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/calculator', label: 'Savings Calculator' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="BuyFlatFee Logo"
            width={220}
            height={60}
            priority
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
        !text-white
        hover:!text-[#c9a84c]
        text-base
        font-medium
        transition-colors
        duration-200
        relative
        group
      "
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a84c] group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14151234567"
            className="text-white/70 hover:text-[#c9a84c] text-sm font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (415) 123-4567
          </a>
          <Link
            href="/contact"
            className="btn-gold px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''} mb-1.5`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''} mb-1.5`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-[#0a1628]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#c9a84c] text-base font-medium py-1 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold px-5 py-3 rounded-xl text-sm font-semibold text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}