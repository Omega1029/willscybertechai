import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Loader2, AlertCircle, ArrowRight, Clock } from 'lucide-react';
import { PricingTier, OPEN_ENDED_TIERS } from '../pricing-tiers';
import { supabase } from '../lib/supabase';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openEnded = OPEN_ENDED_TIERS.includes(tier.id);
  const suffix = openEnded ? '+' : '';
  const canCheckout = tier.cta === 'checkout' && tier.stripe !== null;

  const handleCheckout = async () => {
    if (!tier.stripe) return;
    try {
      setLoading(true);
      setError(null);

      if (!supabase) {
        setError('Checkout is unavailable right now. Please contact us and we will invoice you directly.');
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price_id: tier.stripe.setupPriceId,
            mode: 'payment',
            success_url: `${window.location.origin}/success`,
            cancel_url: window.location.href,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok || data.error) {
        setError(data.error ?? 'Failed to start checkout. Please try again.');
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col w-full rounded-2xl p-7 glass-dark transition-transform hover:-translate-y-1 ${
        tier.highlight ? 'glow-ring border-cyan-400/40' : 'border border-white/10'
      }`}
    >
      {tier.highlight && (
        <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-cyan-400 text-slate-900 text-[11px] font-bold uppercase tracking-wider">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
      <p className="text-xs uppercase tracking-[0.14em] text-cyan-300/80 mt-1.5">
        {tier.audience}
      </p>
      <p className="text-sm text-slate-400 leading-relaxed mt-4">{tier.blurb}</p>

      {/* Price block */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">
            {money(tier.setupFee)}{suffix}
          </span>
          <span className="text-sm text-slate-400">one-time setup</span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-semibold text-cyan-300">
            {money(tier.retainer)}{suffix}
            <span className="text-sm text-slate-400 font-normal">/mo</span>
          </span>
          {tier.legacyRetainer !== null && (
            <span className="text-sm text-slate-500 line-through">
              was {money(tier.legacyRetainer)}
            </span>
          )}
        </div>
      </div>

      {/* Scope */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {tier.scope.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-slate-900/60 border border-white/10 p-3">
        <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-400 leading-relaxed">{tier.allocation}</p>
      </div>

      {error && (
        <div className="flex items-start gap-2 mt-4 p-3 bg-red-500/10 border border-red-400/30 rounded-lg text-sm text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      {canCheckout ? (
        <>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full btn-cyber font-semibold py-3.5 px-4 rounded-xl mt-6 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Processing...
              </>
            ) : (
              <>
                {tier.ctaLabel} <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
            Checkout collects the {money(tier.setupFee)} setup fee. The{' '}
            {money(tier.retainer)}/mo retainer begins once onboarding is complete.
          </p>
        </>
      ) : (
        <Link
          to="/contact"
          className="w-full border border-white/15 text-slate-100 font-semibold py-3.5 px-4 rounded-xl mt-6 flex items-center justify-center gap-2 hover:bg-white/5 hover:border-white/25 transition-all"
        >
          {tier.ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default PricingTierCard;
