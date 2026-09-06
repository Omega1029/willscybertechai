import React from 'react';
import { BarChart3, Users, TrendingUp, DollarSign, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSubscription } from '../hooks/useSubscription';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { loading, planName, isActive } = useSubscription();

  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-900/30 border border-emerald-700/20' },
    { label: 'Revenue', value: '$12,345', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-900/30 border border-emerald-700/20' },
    { label: 'Growth', value: '+12.5%', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-900/30 border border-emerald-700/20' },
    { label: 'Analytics', value: 'View Reports', icon: BarChart3, color: 'text-emerald-400', bg: 'bg-emerald-900/30 border border-emerald-700/20' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
          <p className="text-zinc-400">Welcome back, {user?.email}</p>

          {!loading && (
            <div className="mt-5">
              {isActive && planName ? (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 border border-emerald-700/20 rounded-lg text-emerald-400 text-sm font-semibold">
                  <Crown className="w-4 h-4" />
                  Current Plan: {planName}
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                  <p className="text-amber-300 text-sm">
                    No active subscription.{' '}
                    <Link to="/pricing" className="font-semibold text-amber-200 underline hover:no-underline">
                      View plans
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center gap-4">
                <div className={`${bg} p-3 rounded-lg`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="text-lg font-bold text-white">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="px-6 py-5 border-b border-zinc-800">
            <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
          </div>
          <div className="p-6 space-y-5">
            {[
              { icon: Users, bg: 'bg-emerald-900/30 border border-emerald-700/20', color: 'text-emerald-400', label: 'New user registered', time: '2 minutes ago' },
              { icon: DollarSign, bg: 'bg-emerald-900/30 border border-emerald-700/20', color: 'text-emerald-400', label: 'Payment received', time: '5 minutes ago' },
              { icon: TrendingUp, bg: 'bg-emerald-900/30 border border-emerald-700/20', color: 'text-emerald-400', label: 'Analytics updated', time: '10 minutes ago' },
            ].map(({ icon: Icon, bg, color, label, time }) => (
              <div key={label} className="flex items-center gap-4">
                <div className={`${bg} p-2 rounded-full`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-xs text-zinc-400">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
