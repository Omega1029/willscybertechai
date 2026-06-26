import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { STRIPE_PRODUCTS } from '../stripe-config';

export const Pricing: React.FC = () => {
  const subscriptionProducts = STRIPE_PRODUCTS.filter(p => p.mode === 'subscription');
  const oneTimeProducts = STRIPE_PRODUCTS.filter(p => p.mode === 'payment');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Select the perfect solution for your business needs
          </p>
        </div>

        {subscriptionProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              AI Assistant Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subscriptionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {oneTimeProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              One-Time Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oneTimeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
