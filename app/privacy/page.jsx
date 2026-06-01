export const metadata = {
  title: 'Privacy Policy',
  description: 'BuyFlatFee privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#0a1628] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 mt-3">Last updated: January 1, 2025</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1100 35 800 0 600 15C400 30 150 3 0 20L0 40Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </section>
      <section className="bg-[#f9f6f0] py-20">
        <div className="max-w-3xl mx-auto px-6 prose prose-gray max-w-none">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 space-y-8 text-[#4a4a68]">
            {[
              {
                title: '1. Information We Collect',
                content: 'We collect information you provide directly, such as your name, email address, phone number, and home purchase preferences when you complete our contact form or speak with our agents. We also collect standard web analytics data (pages visited, time on site) through Google Analytics.',
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use your information to: respond to your inquiries, schedule consultations, provide buyer representation services, send relevant market updates (with your consent), and improve our website and services. We do not sell your personal information to third parties.',
              },
              {
                title: '3. Google Ads & Remarketing',
                content: 'We use Google Ads to advertise our services. Google may use cookies to show you our ads on other websites based on your visit to buyflatfee.com. You can opt out of personalized advertising at google.com/settings/ads.',
              },
              {
                title: '4. Cookies',
                content: 'Our website uses cookies for analytics and advertising purposes. You can disable cookies in your browser settings, though some features may not work as intended.',
              },
              {
                title: '5. Data Security',
                content: 'We implement reasonable technical and organizational measures to protect your personal information. However, no internet transmission is 100% secure.',
              },
              {
                title: '6. Contact Us',
                content: 'If you have questions about this Privacy Policy, please contact us at hello@buyflatfee.com or (415) 123-4567.',
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-[#0a1628] mb-3">{section.title}</h2>
                <p className="leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
