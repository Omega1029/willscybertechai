export type TierCta = 'checkout' | 'contact';

export interface PricingTier {
  id: string;
  name: string;
  audience: string;
  blurb: string;
  setupFee: number;
  retainer: number;
  /** Prior rate, rendered struck through beside the current retainer. */
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
    allocation: '1 hour per month of maintenance included.',
    cta: 'checkout',
    ctaLabel: 'Start Foundation',
    highlight: false,
    stripe: {
      setupPriceId: 'price_1UCigyD13Nn7arbMAJQy9nBa',
      retainerPriceId: 'price_1UCigyD13Nn7arbMR2r44ge4',
    },
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
    allocation: 'Up to 3 hours per month of active changes.',
    cta: 'contact',
    ctaLabel: 'Book a Discovery Call',
    highlight: true,
    stripe: null,
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
  },
];

/** Tiers whose published figures are a floor rather than a fixed fee. */
export const OPEN_ENDED_TIERS = ['custom'];
