import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { getProductByPriceId } from '../stripe-config';
import { Loader2, Crown } from 'lucide-react';

export const SubscriptionStatus: React.FC = () => {
  const { subscription, loading, error } = useSubscription();

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-gray-500">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-sm">Loading subscription...</span>
      </div>
    );
  }

  if (error || !subscription) {
    return null;
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const isActive = subscription.subscription_status === 'active';

  if (!isActive || !product) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 bg-blue-900/30 border border-blue-700/20 text-blue-400 px-3 py-1 rounded-full">
      <Crown className="w-4 h-4" />
      <span className="text-sm font-medium">{product.name}</span>
    </div>
  );
};