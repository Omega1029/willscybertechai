export type TierCta = 'checkout' | 'contact';

export interface PricingTier {
  id: string;
  name: string;
  audience: string;
  blurb: string;
  setupFee: number;
  retainer: number;
  /** Prior rate. Retained for reference only — not shown on the site. */
  legacyRetainer: number | null;
  scope: string[];
  allocation: string;
  cta: TierCta;
  ctaLabel: string;
  highlight: boolean;
  /**
   * Live Stripe prices. The site charges `setupPriceId` only — the retainer is
   * started separately once onboarding completes, so `retainerPriceId` is kept
   * here for billing reference rather than for checkout.
   */
  stripe: { setupPriceId: string; retainerPriceId: string } | null;
  /**
   * Stripe Payment Link for the setup fee. Buyers go straight to Stripe's hosted
   * page — no account or sign-in required. Until this is set the card falls back
   * to the contact CTA, so an empty value never leaves a dead button on the page.
   */
  paymentLink: string | null;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    audience: 'Solo advisors and new RIAs',
    blurb:
      'A credible, fast, compliant-ready web presence for advisors who need to be findable and reachable — nothing more.',
    setupFee: 400,
    retainer: 118,
    legacyRetainer: 59,
    scope: [
      'Static single-page template',
      'Global edge hosting with SSL',
      'Continuous uptime monitoring',
      'Disclosure and ADV-link placement',
    ],
    allocation: 'No monthly edits included — changes billed at the standard hourly rate.',
    cta: 'checkout',
    ctaLabel: 'Start Essentials',
    highlight: false,
    stripe: {
      setupPriceId: 'price_1UCigxD13Nn7arbMEdQe6rum',
      retainerPriceId: 'price_1UCigxD13Nn7arbMVmVLkzRP',
    },
    // TODO: paste the Payment Link for the $400 Essentials setup fee.
    paymentLink: null,
  },
  {
    id: 'foundation',
    name: 'Foundation',
    audience: 'Established independent advisory practices',
    blurb:
      'A fast, search-visible site with prospect enquiries routed straight into the CRM your team already runs on.',
    setupFee: 1500,
    retainer: 298,
    legacyRetainer: 149,
    scope: [
      'High-speed single-page or 3-page site',
      'Semantic SEO built for advisor search intent',
      'Edge caching for sub-second load times',
      'Automated contact-to-email/CRM pipeline',
    ],
    allocation: '20 hours per month of maintenance included.',
    cta: 'checkout',
    ctaLabel: 'Start Foundation',
    highlight: false,
    stripe: {
      setupPriceId: 'price_1UCigyD13Nn7arbMAJQy9nBa',
      retainerPriceId: 'price_1UCigyD13Nn7arbMR2r44ge4',
    },
    // TODO: paste the Payment Link for the $1,500 Foundation setup fee.
    paymentLink: null,
  },
  {
    id: 'professional',
    name: 'Professional',
    audience: 'Multi-advisor firms building a brand',
    blurb:
      'A full custom design system and publishing workflow, so your team can put out market commentary without waiting on a developer.',
    setupFee: 2800,
    retainer: 498,
    legacyRetainer: 249,
    scope: [
      'Up to 8 custom-built pages',
      'Bespoke design system and brand kit',
      'Dynamic CMS for blog and market commentary',
      'Advanced client intake forms',
      'Quarterly performance review',
    ],
    allocation: 'Up to 60 hours per month of active changes.',
    cta: 'contact',
    ctaLabel: 'Book a Discovery Call',
    highlight: true,
    stripe: null,
    paymentLink: null,
  },
  {
    id: 'growth',
    name: 'Growth + Intelligence',
    audience: 'Wealth management groups scaling intake',
    blurb:
      'Everything in Professional, plus an AI agent that qualifies inbound prospects and books them onto your calendar around the clock.',
    setupFee: 4500,
    retainer: 998,
    legacyRetainer: 499,
    scope: [
      'Full custom multi-page site',
      'Interactive lead-qualification agent (vector/RAG grounded)',
      'Automated booking and calendar sync',
      'Analytics dashboards for pipeline visibility',
      'Priority support',
    ],
    allocation: 'Up to 5,000 bot interactions per month.',
    cta: 'contact',
    ctaLabel: 'Book a Discovery Call',
    highlight: false,
    stripe: null,
    paymentLink: null,
  },
  {
    id: 'custom',
    name: 'Custom / Advanced Systems',
    audience: 'Institutional and enterprise finance',
    blurb:
      'Bespoke portals and internal tooling wired into the systems your operations already depend on, with a contractual uptime commitment.',
    setupFee: 8500,
    retainer: 1700,
    legacyRetainer: 850,
    scope: [
      'Bespoke web application or client portal',
      'Custom backend integrations (AWS, EventBridge, webhooks)',
      'Database synchronisation across systems',
      'Dedicated uptime SLA',
      'Continuous system monitoring and tuning',
    ],
    allocation: 'Continuous monitoring with scope agreed per engagement.',
    cta: 'contact',
    ctaLabel: 'Talk to Us',
    highlight: false,
    stripe: null,
    paymentLink: null,
  },
];

/** Tiers whose published figures are a floor rather than a fixed fee. */
export const OPEN_ENDED_TIERS = ['custom'];

/* ------------------------------------------------------------------------- *
 * FinLocal software licences
 *
 * The desktop product, sold as a licence rather than an engagement. Figures and
 * per-tier capabilities mirror the app itself: prices come from the payments
 * README, and the feature rows come from `Tier::features()` in
 * crates/core/src/license/mod.rs — keep the two in step.
 * ------------------------------------------------------------------------- */

export type LicenseBilling = 'one-time' | 'annual' | 'quote';

export interface LicenseTier {
  id: string;
  name: string;
  audience: string;
  blurb: string;
  /** Null means the figure is quoted per engagement rather than published. */
  price: number | null;
  billing: LicenseBilling;
  /** Sits under the price — the renewal/update terms in plain words. */
  priceNote: string;
  seats: string;
  features: string[];
  cta: TierCta;
  ctaLabel: string;
  highlight: boolean;
  /**
   * LemonSqueezy hosted checkout. They are merchant of record and handle sales
   * tax/VAT; the licence key is issued by Keygen off the order webhook. Until
   * this is set the card falls back to the contact CTA rather than a dead button.
   */
  checkoutUrl: string | null;
  /** Keygen policy that issues this tier's key. Reference only — never used client-side. */
  keygenPolicyId: string;
}

export const LICENSE_TIERS: LicenseTier[] = [
  {
    id: 'solo',
    name: 'Solo Practitioner',
    audience: 'Independent advisors and single-seat users',
    blurb:
      'The full local engine on one machine. Your documents are indexed and queried on your own hardware, with nothing leaving the device.',
    price: 199,
    billing: 'one-time',
    priceNote: 'Perpetual licence, billed once, with an included update window.',
    seats: 'Single seat',
    features: [
      'Unlimited local document indexing',
      'Fully offline — air-gap capable',
      'Perpetual licence with update window',
      'Email support',
    ],
    cta: 'checkout',
    ctaLabel: 'Buy Solo',
    highlight: false,
    // TODO: paste the LemonSqueezy checkout URL for Solo Practitioner.
    checkoutUrl: null,
    keygenPolicyId: 'ec62487a-c7ec-4a18-80fe-8eda1b602783',
  },
  {
    id: 'practice',
    name: 'Practice / Firm',
    audience: 'Small advisory teams running a shared corpus',
    blurb:
      'Up to five seats, the advanced model library, and the integrations that wire FinLocal into the systems your practice already runs on.',
    price: 799,
    billing: 'annual',
    // A $1,299 perpetual alternative is noted in the payments README but is not
    // published here until the LemonSqueezy variant for it exists.
    priceNote: 'Billed annually. Includes updates for the duration of the term.',
    seats: 'Up to 5 seats',
    features: [
      'Everything in Solo',
      'Advanced model library',
      'Integrations with your existing systems',
      'Priority support',
    ],
    cta: 'checkout',
    ctaLabel: 'Buy Practice',
    highlight: true,
    // TODO: paste the LemonSqueezy checkout URL for Practice / Firm.
    checkoutUrl: null,
    keygenPolicyId: 'e71f042b-ecbf-41b8-aa89-e64d4bccbde6',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'Firms with compliance and audit obligations',
    blurb:
      'Unlimited seats, audit logging for every query, and integrations built against your own infrastructure. Invoiced against agreed scope.',
    price: null,
    billing: 'quote',
    priceNote: 'Invoiced per engagement — seat count and scope agreed up front.',
    seats: 'Unlimited seats',
    features: [
      'Everything in Practice',
      'Unlimited seats',
      'Audit logging',
      'Custom integrations',
      'Priority support',
    ],
    cta: 'contact',
    ctaLabel: 'Talk to Us',
    highlight: false,
    checkoutUrl: null,
    keygenPolicyId: 'cbc7991d-224f-4d94-8ac0-29aea3339ccb',
  },
];
