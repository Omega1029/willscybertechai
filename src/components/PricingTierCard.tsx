import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { PricingTier, OPEN_ENDED_TIERS } from '../pricing-tiers';

const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(n);

interface Props {
  tier: PricingTier;
}

export const PricingTierCard: React.FC<Props> = ({ tier }) => {
  const openEnded = OPEN_ENDED_TIERS.includes(tier.id);
  const suffix = openEnded ? '+' : '';
  // Buying goes straight to Stripe's hosted page — no account, no sign-in.
  const buyUrl = tier.cta === 'checkout' ? tier.paymentLink : null;

  return (
    <div
      className={`relative flex flex-col w-full rounded-2xl p-7 bg-zinc-900 transition-transform hover:-translate-y-1 ${
        tier.highlight ? 'border-2 border-emerald-500' : 'border border-zinc-800'
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-emerald-500 text-black text-[11px] font-bold uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
      <p className="text-xs uppercase tracking-[0.14em] text-emerald-400/80 mt-1.5">
        {tier.audience}
      </p>
      <p className="text-sm text-zinc-400 leading-relaxed mt-4">{tier.blurb}</p>

      {/* Price block */}
      <div className="mt-6 pt-6 border-t border-zinc-800">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">
            {money(tier.setupFee)}{suffix}
          </span>
          <span className="text-sm text-zinc-400">one-time setup</span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-semibold text-emerald-400">
            {money(tier.retainer)}{suffix}
            <span className="text-sm text-zinc-400 font-normal">/mo</span>
          </span>
        </div>
      </div>

      {/* Scope */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {tier.scope.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-zinc-950 border border-zinc-800 p-3">
        <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">{tier.allocation}</p>
      </div>

      {buyUrl ? (
        <>
          <a
            href={buyUrl}
            className="w-full btn-cyber font-semibold py-3.5 px-4 rounded-xl mt-6 flex items-center justify-center gap-2"
          >
            {tier.ctaLabel} <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-zinc-500 text-center mt-3 leading-relaxed">
            Checkout collects the {money(tier.setupFee)} setup fee. The{' '}
            {money(tier.retainer)}/mo retainer begins once onboarding is complete.
          </p>
        </>
      ) : (
        <Link
          to="/contact"
          className="w-full border border-zinc-700 text-slate-100 font-semibold py-3.5 px-4 rounded-xl mt-6 flex items-center justify-center gap-2 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
        >
          {tier.cta === 'checkout' ? 'Get Started' : tier.ctaLabel}{' '}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default PricingTierCard;
