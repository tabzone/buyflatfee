"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">

      <div className="max-w-7xl mx-auto px-8">

        <div className="h-24 flex items-center justify-between">

          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            BuyFlatFee
          </Link>

          <nav className="hidden lg:flex gap-10 text-sm">

            <Link href="/">Home</Link>

            <Link href="/how-it-works">
              How It Works
            </Link>

            <Link href="/pricing">
              Pricing
            </Link>

            <Link href="/faq">
              FAQ
            </Link>

          </nav>

          <button className="rounded-full bg-black px-7 py-3 text-white hover:scale-105 transition">
            Schedule Call
          </button>

        </div>

      </div>

    </header>
  );
}