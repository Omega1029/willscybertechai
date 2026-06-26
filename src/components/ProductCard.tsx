import React, { useState } from 'react';
import { StripeProduct } from '../stripe-config';
import { supabase } from '../lib/supabase';
import { Loader2, AlertCircle } from 'lucide-react';

interface ProductCardProps {
  product: StripeProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: product.priceId,
          mode: product.mode,
          success_url: `${window.location.origin}/success`,
          cancel_url: window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        setError(data.error ?? 'Failed to start checkout. Please try again.');
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price);
  };

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 hover:border-emerald-500/30 transition-all p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-zinc-400 text-sm mb-6 flex-1">{product.description}</p>

      <div className="flex items-end justify-between mb-6">
        <span className="text-3xl font-bold text-white">
          {formatPrice(product.price, product.currency)}
        </span>
        {product.mode === 'subscription' ? (
          <span className="text-sm text-zinc-400">/ month</span>
        ) : (
          <span className="text-sm text-zinc-400">one-time</span>
        )}
      </div>

      {error && (
        <div className="flex items-start gap-2 mb-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-sm text-red-300">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          {error}
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          'Purchase Now'
        )}
      </button>
    </div>
  );
};
