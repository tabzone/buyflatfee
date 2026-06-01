# Google Ads Setup Guide for BuyFlatFee

## 1. Google Tag Manager Setup

Replace `AW-XXXXXXXXXX` and `G-XXXXXXXXXX` in `app/layout.jsx` with your real IDs:
- `AW-XXXXXXXXXX` → Your Google Ads Conversion ID (from Google Ads → Tools → Conversions)
- `G-XXXXXXXXXX` → Your Google Analytics 4 Measurement ID

## 2. Conversion Tracking

Add this to your Contact page `handleSubmit` function after successful form submit:

```javascript
// Fire Google Ads conversion when form submitted
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'conversion', {
    send_to: 'AW-XXXXXXXXXX/YOUR_CONVERSION_LABEL',
    value: 1.0,
    currency: 'USD',
  });
}
```

## 3. Recommended Google Ads Campaigns

### Campaign 1: Branded Search
- Keywords: "buyflatfee", "buy flat fee real estate", "flat fee buyers agent california"
- Bid strategy: Target CPA
- Budget: $20/day

### Campaign 2: Competitor / Category Search
- Keywords: 
  - "flat fee buyers agent bay area"
  - "buyers agent rebate california"
  - "discount buyers agent san francisco"
  - "cash back real estate buyer california"
  - "buyers agent commission rebate"
- Negative keywords: "seller", "listing agent", "flat fee mls listing"
- Budget: $50/day

### Campaign 3: Remarketing
- Audience: Visited /calculator or /pricing but didn't contact
- Ad copy: "Still calculating? Lock in $7,999 flat — See your savings"
- Budget: $15/day

## 4. Recommended Ad Copy

**Headline 1:** Flat-Fee Buyer's Agent CA  
**Headline 2:** Pay $7,999. Keep the Rest.  
**Headline 3:** Save $20K–$50K on Your Home  
**Description:** Expert buyer representation for a single flat fee. Full service. Big cash back. Bay Area specialists. Free consultation.

## 5. SEO Keywords to Target (Content/Blog)

- "how much does a buyer's agent cost in california" (high volume)
- "buyer agent commission california 2024" (high volume)
- "can i get a rebate from my real estate agent california" (high intent)
- "flat fee real estate agent buyer san francisco"
- "cash back home purchase california"
- "buyer rebate california law"
- "how to save money buying a house california"

## 6. Local SEO

Add your business to:
- Google Business Profile (free, very important)
- Yelp for Business
- Zillow Agent Profile
- Realtor.com Agent Profile

Use consistent NAP (Name, Address, Phone) across all listings.
