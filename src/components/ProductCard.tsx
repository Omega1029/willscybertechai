import { Link } from 'react-router-dom';
import { StripeProduct } from '../stripe-config';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: StripeProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

      {/* Buying goes straight to Stripe's hosted page — no account, no sign-in. */}
      {product.paymentLink ? (
        <a
          href={product.paymentLink}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Purchase Now <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <Link
          to="/contact"
          className="w-full border border-zinc-700 text-slate-100 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 hover:bg-zinc-800 hover:border-zinc-600"
        >
          Enquire <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};
