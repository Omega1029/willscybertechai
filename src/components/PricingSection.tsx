import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_TIERS, OPEN_ENDED_TIERS } from '../pricing-tiers';

const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(n);

/** Homepage teaser: the three middle tiers, linking through to /pricing. */
const featured = PRICING_TIERS.filter((t) =>
  ['foundation', 'professional', 'growth'].includes(t.id),
);

export const PricingSection: React.FC = () => (
  <section className="py-24 border-t border-zinc-900 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Engagements for <span className="text-gradient-bright">financial practices</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          A one-time build paired with a monthly retainer that keeps everything fast,
          monitored and current. Five tiers, from a single credible page to a bespoke
          client portal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-2xl p-7 bg-zinc-900 flex flex-col ${
              tier.highlight ? 'border-2 border-emerald-500' : 'border border-zinc-800'
            }`}
          >
            {tier.highlight && (
              <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-emerald-500 text-black text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-bold text-white">{tier.name}</h3>
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-400/80 mt-1.5">
              {tier.audience}
            </p>
            <div className="mt-5 pt-5 border-t border-zinc-800">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">
                  {money(tier.setupFee)}
                  {OPEN_ENDED_TIERS.includes(tier.id) ? '+' : ''}
                </span>
                <span className="text-xs text-zinc-400">setup</span>
              </div>
              <p className="text-sm text-emerald-400 mt-1.5">
                then {money(tier.retainer)}/mo
              </p>
            </div>
            <ul className="mt-5 space-y-2 flex-1">
              {tier.scope.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/pricing"
          className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
        >
          See All Five Tiers <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

export default PricingSection;
