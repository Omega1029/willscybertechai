import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Server,
  WifiOff,
  Lock,
  ShieldCheck,
  Users,
  Database,
  Key,
  FileText,
  CheckCircle2,
  Globe,
  EyeOff,
} from 'lucide-react';

const coreProtections = [
  {
    icon: Server,
    title: '100% On-Premise Deployment',
    body: 'Runs entirely on hardware inside your office. No cloud servers, no external hosting.',
  },
  {
    icon: WifiOff,
    title: 'Zero External Connections',
    body: 'No outbound API calls, no telemetry, no data transmitted outside your building.',
  },
  {
    icon: EyeOff,
    title: 'Client Confidentiality Protected',
    body: 'No data leaves your premises, eliminating the risk of inadvertent disclosure.',
  },
  {
    icon: Lock,
    title: 'No Third-Party Access',
    body: 'No external company can access, read, train on, or store your financial documents.',
  },
];

const accessControl = [
  {
    icon: Users,
    title: 'Role-Based Permissions',
    body: 'Partners, managers, seniors, and staff each get tailored access levels.',
  },
  {
    icon: CheckCircle2,
    title: 'Unlimited Users, No Extra Cost',
    body: 'Every employee at your firm gets access. No per-seat licensing.',
  },
  {
    icon: Key,
    title: 'Authentication Integration',
    body: 'Works with Active Directory, SSO, and enterprise authentication systems.',
  },
  {
    icon: FileText,
    title: 'Audit Logging',
    body: 'Full audit trail of who accessed what and when. Meet compliance requirements.',
  },
];

const compliance = [
  {
    icon: ShieldCheck,
    title: 'SOX Compliance',
    body: 'Designed to support Sarbanes-Oxley controls around data access and audit trails.',
  },
  {
    icon: CheckCircle2,
    title: 'GAAP & IFRS Ready',
    body: 'Understands accounting standards and can reference them in document analysis.',
  },
  {
    icon: Globe,
    title: 'Data Sovereignty',
    body: 'Your data physically resides in your office. No questions about jurisdiction.',
  },
  {
    icon: WifiOff,
    title: 'Air-Gap Capable',
    body: 'For firms with the strictest security requirements, operates fully disconnected from the internet.',
  },
];

const CustomAIPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Security
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Security That Meets the Standard
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Cloud AI means your confidential client financials travel across the internet. Our on-premise solution keeps everything within your four walls — by design, not by promise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-400 text-black font-semibold py-4 px-10 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border border-zinc-700 text-zinc-100 font-semibold py-4 px-10 rounded-xl hover:bg-zinc-800 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Core Protections */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Core Protections</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Your Data Never Leaves
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Built from the ground up to ensure sensitive client financials stay inside your firm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreProtections.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex items-start gap-5"
              >
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Access Control</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Everyone Has Access, Nobody Has Too Much
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Granular permissions so the right people see the right documents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessControl.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex items-start gap-5"
              >
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Built for Financial Compliance
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Designed for the regulatory environment accounting and finance firms operate in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliance.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex items-start gap-5"
              >
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop sending client financials to the cloud
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            See how Neural Index gives your firm all the power of AI without ever exposing sensitive client data.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-black font-semibold py-4 px-12 rounded-xl transition-colors"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CustomAIPage;
