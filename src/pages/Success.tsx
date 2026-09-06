import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
    if (sessionId) {
      setOrderDetails({
        sessionId,
        message: 'Your payment has been processed successfully!'
      });
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-emerald-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Payment Successful!
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Thank you for your purchase. Your consultation has been confirmed.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-emerald-400 mt-0.5">✓</span>
              <span className="ml-2">You'll receive a confirmation email shortly</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-emerald-400 mt-0.5">✓</span>
              <span className="ml-2">Our team will contact you within 24 hours to schedule your consultation</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-emerald-400 mt-0.5">✓</span>
              <span className="ml-2">You can view your purchase history in your account</span>
            </li>
          </ul>
        </div>

        {sessionId && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-xs text-zinc-400">
              Session ID: {sessionId}
            </p>
          </div>
        )}

        <div className="flex flex-col space-y-3">
          <Link
            to="/dashboard"
            className="w-full flex justify-center items-center px-4 py-3 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/"
            className="w-full flex justify-center items-center px-4 py-3 border border-zinc-700 rounded-xl text-sm font-semibold text-zinc-100 hover:bg-zinc-800 transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
