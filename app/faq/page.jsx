'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqCategories = [
  {
    category: 'The Basics',
    icon: '💡',
    faqs: [
      {
        q: 'What is a flat-fee buyer\'s agent?',
        a: 'A flat-fee buyer\'s agent provides the same full-service home purchase representation as a traditional buyer\'s agent — but instead of taking a percentage commission (typically 2–3% of the purchase price), we charge one fixed flat fee of $7,999. The rest of the commission offered by the seller comes back to you as cash.',
      },
      {
        q: 'Do I get less service because I\'m paying a flat fee?',
        a: 'Absolutely not. You receive complete buyer representation: home search, unlimited tours, market analysis, offer strategy, negotiation, inspection coordination, disclosure review, and full escrow/closing support. The only difference is the price structure — you pay less and get cash back.',
      },
      {
        q: 'How is BuyFlatFee different from other discount brokers?',
        a: 'Many "discount" brokers cut the service to cut the price. We don\'t. We provide genuinely full-service buyer representation with experienced, licensed agents. We also operate buyers-only — meaning we have zero conflict of interest with sellers.',
      },
      {
        q: 'Where do you work?',
        a: 'We are Bay Area specialists and work extensively in San Francisco, Oakland, San Jose, and surrounding communities. We can also assist with purchases anywhere in California.',
      },
    ],
  },
  {
    category: 'The Money',
    icon: '💰',
    faqs: [
      {
        q: 'How does the cash-back rebate work?',
        a: 'In California, the seller typically offers 2–3% of the purchase price to the buyer\'s agent as commission. When you work with us, we take our flat fee of $7,999 from that commission and refund the remainder directly to you through escrow at closing. It\'s clean, legal, and processed entirely within the transaction.',
      },
      {
        q: 'When do I pay the $7,999 flat fee?',
        a: 'You pay nothing upfront. Our fee is deducted from the buyer\'s agent commission offered by the seller at closing. If you don\'t successfully purchase a home, you owe us nothing.',
      },
      {
        q: 'Is the cash-back rebate legal in California?',
        a: 'Yes, absolutely. California is one of the most rebate-friendly states in the US. CA Business and Professions Code §10176 explicitly permits buyer rebates. We are licensed California brokers and handle all rebates in full compliance with state law.',
      },
      {
        q: 'Can I use the cash back toward my down payment?',
        a: 'This depends on your lender. Most lenders allow buyer rebates to be applied toward closing costs, which can free up other funds. Some loan programs also allow rebates toward the down payment. We\'ll connect you with lender-friendly options and help you structure it optimally.',
      },
      {
        q: 'What if the seller offers less than $7,999 commission?',
        a: 'In rare situations where the offered commission is less than our flat fee, we\'ll have a transparent conversation with you before you make an offer. We will never bill you extra without your full knowledge and agreement.',
      },
      {
        q: 'Are there any other fees I should know about?',
        a: 'No hidden fees from us. Standard home-buying closing costs still apply — title insurance, escrow fees, lender fees, property taxes — but those are the same regardless of your agent. Our fee is simply $7,999, full stop.',
      },
    ],
  },
  {
    category: 'The Process',
    icon: '🗺️',
    faqs: [
      {
        q: 'How quickly can you get started?',
        a: 'We can begin the same day you contact us. After a brief consultation call, we\'ll set up your personalized MLS alerts within 24 hours and start actively searching.',
      },
      {
        q: 'How many homes can I tour?',
        a: 'Unlimited. We will show you as many homes as you need to find the right one. There is no per-tour fee or limit.',
      },
      {
        q: 'What happens if my offer isn\'t accepted?',
        a: 'We keep searching and keep trying. There is no additional fee for multiple offers. We analyze what happened, adjust strategy, and go again.',
      },
      {
        q: 'Do you help with new construction purchases?',
        a: 'Yes. New construction purchases can be tricky because the builder\'s on-site agent represents the builder, not you. Having your own buyer\'s agent (us) at no additional cost to you is especially valuable in new construction.',
      },
      {
        q: 'Can you help me buy an investment property?',
        a: 'Yes. We work with investors on single-family, multi-family, and mixed-use properties. Our team has personal investment experience and can help evaluate deals from an investor\'s perspective.',
      },
    ],
  },
  {
    category: 'Working With Us',
    icon: '🤝',
    faqs: [
      {
        q: 'Do I have to sign a long-term contract?',
        a: 'We use a standard California Buyer Representation Agreement as required by law. We keep terms reasonable and believe if we\'re doing our job well, you\'ll want to stay. Talk to us if you have concerns about terms.',
      },
      {
        q: 'How responsive is the team?',
        a: 'We\'re available 7 days a week via phone, text, and email. In competitive Bay Area markets, speed matters — we respond quickly and act decisively when needed.',
      },
      {
        q: 'Can I work with a specific agent on your team?',
        a: 'Yes. After your initial consultation you\'ll be matched with the agent best suited to your needs, and you can request to work with a specific agent if you have a preference.',
      },
      {
        q: 'What if I\'m not happy with the service?',
        a: 'Your satisfaction matters to us. If you have any concerns, please raise them directly with us and we will do everything we can to address them. We\'ve maintained a 5-star average across dozens of reviews because we genuinely care.',
      },
    ],
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-[#0a1628] leading-snug">{faq.q}</span>
        <span className={`text-[#c9a84c] text-xl flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-1 text-[#4a4a68] leading-relaxed border-t border-gray-100">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('The Basics');

  const current = faqCategories.find((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-4">Got Questions?</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Everything you need to know about buying a home with BuyFlatFee.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1100 55 800 0 600 25C400 50 150 5 0 30L0 60Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-[#f9f6f0] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category nav */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 sticky top-28">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-3 py-2">Categories</p>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all text-sm font-medium ${
                      activeCategory === cat.category
                        ? 'bg-[#0a1628] text-white'
                        : 'text-[#4a4a68] hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ items */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="font-display text-3xl font-bold text-[#0a1628]">
                  {current.icon} {current.category}
                </h2>
              </div>
              <div className="space-y-3">
                {current.faqs.map((faq) => (
                  <FAQItem key={faq.q} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-5">💬</div>
          <h2 className="font-display text-4xl font-bold text-[#0a1628] mb-4">Still Have Questions?</h2>
          <p className="text-[#4a4a68] text-lg mb-8">
            We&apos;re happy to answer anything. Schedule a free call and ask us directly — no sales pressure, just honest answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-bold inline-block">
              Book Free Consultation →
            </Link>
            <a href="tel:+14151234567" className="btn-outline-gold px-8 py-4 rounded-xl font-semibold inline-block">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
