import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'BuyFlatFee | California Flat-Fee Buyer\'s Agent — Save Thousands',
    template: '%s | BuyFlatFee',
  },
  description:
    'Buy your California home with a flat fee of $7,999 — keep the rest as cash back. Expert buyer\'s agent representation across the SF Bay Area and all of California.',
  keywords: [
    'flat fee buyers agent california',
    'buyer rebate california',
    'flat fee real estate buyer',
    'sf bay area buyers agent',
    'cash back home purchase california',
    'discount buyers agent',
    'real estate rebate california',
  ],
  authors: [{ name: 'BuyFlatFee' }],
  creator: 'BuyFlatFee',
  metadataBase: new URL('https://www.buyflatfee.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.buyflatfee.com',
    siteName: 'BuyFlatFee',
    title: 'BuyFlatFee | Flat-Fee Buyer\'s Agent — Keep the Cash Back',
    description:
      'Stop overpaying for buyer representation. Pay just $7,999 flat — period. The rest of the commission comes back to you as cash.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuyFlatFee — California Flat-Fee Buyer\'s Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuyFlatFee | Flat-Fee Buyer\'s Agent California',
    description: 'Pay just $7,999 flat. Keep the rest of the commission as cash back.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://www.buyflatfee.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global Tag — replace with real ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'BuyFlatFee',
              url: 'https://www.buyflatfee.com',
              description: 'California flat-fee buyer\'s agent offering expert home purchase representation for a flat fee of $7,999.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              areaServed: 'California',
              priceRange: '$7,999 flat fee',
              telephone: '+14151234567',
              email: 'hello@buyflatfee.com',
              sameAs: [
                'https://www.facebook.com/buyflatfee',
                'https://www.instagram.com/buyflatfee',
                'https://www.linkedin.com/company/buyflatfee',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
