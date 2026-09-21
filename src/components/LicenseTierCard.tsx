import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users } from 'lucide-react';
import { LicenseTier } from '../pricing-tiers';

const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(n);

const billingLabel: Record<LicenseTier['billing'], string> = {
  'one-time': 'one-time',
  annual: 'per year',
  quote: '',
};

interface Props {
  tier: LicenseTier;
}

export const LicenseTierCard: React.FC<Props> = ({ tier }) => {
  // Buying goes straight to LemonSqueezy's hosted page — no account, no sign-in.
  const buyUrl = tier.cta === 'checkout' ? tier.checkoutUrl : null;

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
            {tier.price === null ? 'Custom' : money(tier.price)}
          </span>
          {billingLabel[tier.billing] && (
            <span className="text-sm text-zinc-400">{billingLabel[tier.billing]}</span>
          )}
        </div>
        <p className="text-xs text-zinc-500 leading-relaxed mt-2">{tier.priceNote}</p>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {tier.features.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-300">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-zinc-950 border border-zinc-800 p-3">
        <Users className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">{tier.seats}</p>
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
            Your licence key is emailed as soon as the payment clears.
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

export default LicenseTierCard;
