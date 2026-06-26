import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  FileText,
  Search,
  ShieldCheck,
  FileStack,
  Sparkles,
  BarChart2,
  DollarSign,
  Calculator,
  Database,
  Clock,
  WifiOff,
  Users,
  Cpu,
  Workflow,
  GitBranch,
} from 'lucide-react';

const coreCapabilities = [
  {
    icon: BarChart2,
    title: 'Financial Statement Analysis',
    body: 'Query P&Ls, balance sheets, and cash flow statements in seconds.',
  },
  {
    icon: FileText,
    title: 'Tax Document Processing',
    body: 'Extract data from returns, W-2s, 1099s, and filings instantly.',
  },
  {
    icon: Search,
    title: 'Audit Workpaper Review',
    body: 'Summarize workpapers, flag discrepancies, surface key findings.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Review',
    body: 'Cross-reference documents against GAAP, SOX, and regulatory requirements.',
  },
  {
    icon: FileStack,
    title: 'Client Report Drafting',
    body: 'Generate professional client summaries and correspondence from your data.',
  },
  {
    icon: Sparkles,
    title: 'Fully Customizable',
    body: 'Train the model on your chart of accounts, templates, and firm workflows.',
  },
];

const advanced = [
  {
    icon: Database,
    title: 'Document Intelligence',
    body: 'Extract key figures, dates, and obligations from any financial document format.',
  },
  {
    icon: Search,
    title: 'Knowledge Base Search',
    body: "Turn your firm's entire document history into a searchable knowledge base.",
  },
  {
    icon: TrendingUp,
    title: 'Variance Analysis',
    body: 'Automatically compare actuals vs. budget/prior period and surface key variances.',
  },
  {
    icon: BarChart2,
    title: 'Data Visualization',
    body: 'Generate charts and summaries from financial data for reports and presentations.',
  },
  {
    icon: Clock,
    title: 'Timeline Generation',
    body: 'Build chronologies from transaction logs, audit trails, and correspondence.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    body: 'Automate reconciliations, data entry, period-end checklists, and reporting tasks.',
  },
];

const platform = [
  {
    icon: Users,
    title: 'Multi-User Access',
    body: 'Every staff member, accountant, and manager accesses the AI from their workstation.',
  },
  {
    icon: Cpu,
    title: 'Local Data Processing',
    body: 'All processing happens on your hardware. Financial data never leaves your premises.',
  },
  {
    icon: Clock,
    title: 'Fast Response Times',
    body: 'No cloud latency. Get answers in seconds, not minutes.',
  },
  {
    icon: WifiOff,
    title: 'No Internet Required',
    body: 'Once deployed, the system operates completely independently. Air-gap capable.',
  },
];

const AIAssistantsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Features
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Built for Financial Work, Not Generic Chat
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            A purpose-built AI trained on financial frameworks, accounting standards, and the nuances of financial language.
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

      {/* Core Capabilities */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Everything Your Finance Team Needs
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Designed from the ground up for accounting and finance workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex mb-5">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Advanced</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Beyond Basic AI
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Advanced capabilities that go further than simple document search.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advanced.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex mb-5">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase">Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              How It Runs
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Everything runs on your hardware — no cloud dependency, no data exposure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platform.map(({ icon: Icon, title, body }) => (
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
            See how Neural Index keeps your financial documents secure while making them instantly queryable by your entire team.
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

export default AIAssistantsPage;
