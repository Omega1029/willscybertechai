import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Check, Minus } from 'lucide-react';
import { PRICING_TIERS, OPEN_ENDED_TIERS } from '../pricing-tiers';
import PricingTierCard from '../components/PricingTierCard';
import { ProductCard } from '../components/ProductCard';
import { STRIPE_PRODUCTS } from '../stripe-config';

const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(n);

const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: 'Custom design system', values: [false, false, true, true, true] },
  { label: 'Pages included', values: ['1', '1–3', 'Up to 8', 'Unlimited', 'Bespoke'] },
  { label: 'Semantic SEO', values: [false, true, true, true, true] },
  { label: 'Contact-to-CRM pipeline', values: [false, true, true, true, true] },
  { label: 'CMS / market commentary', values: [false, false, true, true, true] },
  { label: 'AI lead-qualification agent', values: [false, false, false, true, true] },
  { label: 'Automated booking', values: [false, false, false, true, true] },
  { label: 'Analytics dashboards', values: [false, false, false, true, true] },
  { label: 'Backend integrations', values: [false, false, false, false, true] },
  { label: 'Uptime SLA', values: [false, false, false, false, true] },
  {
    label: 'Monthly support',
    values: ['Hourly', '20 hrs', '60 hrs', '100 hrs + priority', 'Continuous'],
  },
];

const faqs = [
  {
    q: 'Who owns the site and the data once it is built?',
    a: 'You do. The domain, the codebase and every record captured through your forms belong to your firm. If we part ways, we hand over the repository and hosting configuration — there is no proprietary platform holding your content hostage.',
  },
  {
    q: 'How do you handle prospect data captured through intake forms?',
    a: 'Submissions route directly into the email inbox or CRM your firm already uses. We configure the pipeline and can scope it so records land only in systems your firm already controls — keeping your existing books-and-records process the system of record.',
  },
  {
    q: 'Can our compliance team review content before it goes live?',
    a: 'Yes. From the Professional tier upward, the CMS supports a draft-and-approve workflow, so commentary and blog posts can be reviewed and archived before publication rather than after.',
  },
  {
    q: 'What exactly does the monthly retainer cover?',
    a: 'Hosting, SSL, uptime monitoring and the allocation of active change hours listed on each tier. Unused hours do not roll over, and work beyond the allocation is quoted before it starts — never billed as a surprise.',
  },
  {
    q: 'What happens if we need more work than our tier includes?',
    a: 'You can move up a tier at any time, and the setup fee difference is prorated against what you have already paid. One-off projects outside your allocation are quoted separately at a fixed price.',
  },
  {
    q: 'How long does the build take?',
    a: 'Essentials and Foundation typically ship within one to two weeks of receiving your content. Professional runs three to four weeks, and Growth and Custom engagements are scheduled against a scope agreed up front.',
  },
];

export const Pricing: React.FC = () => {
  const alaCarte = STRIPE_PRODUCTS;

  return (
    <div className="bg-[#0a0a0a] text-slate-100 overflow-hidden" style={{ marginTop: '-5rem' }}>
      {/* ===== Hero ===== */}
      <section className="relative">
        
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-emerald-500/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-7">
            <Sparkles className="w-3.5 h-3.5" /> Built for Financial Practices
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Pricing built for{" "}
            <span className="text-gradient-bright">financial advisory firms.</span>
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Every engagement pairs a one-time build with a monthly retainer that keeps the
            site fast, monitored and current. Transparent scope, fixed allocations, and no
            surprise invoices.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> You own the code and the data
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Scope agreed before work starts
            </span>
          </div>
        </div>
      </section>

      {/* ===== Tier grid ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex"
            >
              <PricingTierCard tier={tier} />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-500 mt-8 max-w-2xl mx-auto leading-relaxed">
          Figures shown in USD. Setup fees are billed once at kickoff; retainers bill monthly
          and can be cancelled with 30 days&rsquo; notice. Custom engagements start at the
          published figure and are quoted against final scope.
        </p>
      </section>

      {/* ===== Comparison table ===== */}
      <section className="relative border-t border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">Compare every tier</h2>
          <p className="text-center text-zinc-400 mb-12">
            The full scope of each engagement, side by side.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-zinc-900 border border-zinc-800">
            <table className="w-full min-w-[52rem] text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left font-semibold text-zinc-400 p-4 w-56">Feature</th>
                  {PRICING_TIERS.map((t) => (
                    <th key={t.id} className="p-4 text-center font-semibold text-white">
                      {t.name}
                      <span className="block mt-1 text-xs font-normal text-emerald-400">
                        {money(t.retainer)}
                        {OPEN_ENDED_TIERS.includes(t.id) ? '+' : ''}/mo
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 ? 'bg-zinc-950' : undefined}
                  >
                    <td className="p-4 text-zinc-300">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {typeof v === 'boolean' ? (
                          v ? (
                            <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                          ) : (
                            <Minus className="w-4 h-4 text-zinc-700 mx-auto" />
                          )
                        ) : (
                          <span className="text-zinc-200">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-zinc-800">
                  <td className="p-4 text-zinc-300 font-semibold">One-time setup</td>
                  {PRICING_TIERS.map((t) => (
                    <td key={t.id} className="p-4 text-center font-semibold text-white">
                      {money(t.setupFee)}
                      {OPEN_ENDED_TIERS.includes(t.id) ? '+' : ''}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== A la carte ===== */}
      {alaCarte.length > 0 && (
        <section className="relative border-t border-zinc-800 py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-3">Single engagements</h2>
            <p className="text-center text-zinc-400 mb-12">
              Not ready for a retainer? Start with a one-off session.
            </p>
            <div className="flex flex-wrap justify-center gap-6 [&>*]:w-full [&>*]:sm:w-80">
              {alaCarte.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <section className="relative border-t border-zinc-800 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions finance firms ask
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-5 border border-zinc-800"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-white">
                  {f.q}
                  <span className="ml-4 shrink-0 text-emerald-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="relative border-t border-zinc-800 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Not sure which tier fits your practice?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-9">
            Tell us how your firm brings in clients today and we will tell you which tier
            actually makes sense — including when the answer is the cheapest one.
          </p>
          <Link
            to="/contact"
            className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
