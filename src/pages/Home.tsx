import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Search,
  Server,
  WifiOff,
  MessageSquare,
  Lock,
  FileStack,
  CheckCircle2,
  Sparkles,
  Cpu,
  Workflow,
  Code2,
  Boxes,
  TrendingUp,
  FileText,
  BarChart2,
  DollarSign,
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const stats = [
  { value: '100%', label: 'Self-hosted / on-prem' },
  { value: 'Zero', label: 'Client data leaves your network' },
  { value: '<50ms', label: 'Avg. query latency' },
  { value: 'Offline', label: 'Air-gap capable' },
];

const features = [
  {
    icon: Server,
    title: 'Runs On Your Infrastructure',
    body: 'Deploy on your own servers or air-gapped machines. Models and data stay inside your firm.',
  },
  {
    icon: BarChart2,
    title: 'Query Financial Documents',
    body: 'Staff ask questions in plain English and get instant, sourced answers from P&Ls, balance sheets, and audit files.',
  },
  {
    icon: WifiOff,
    title: 'Works Fully Offline',
    body: 'Air-gapped environments supported. No internet needed to index or query financial records.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Data Stays Yours',
    body: 'Sensitive financials never leave your network. Role-based access and full audit trails.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    body: 'Understands financial language and context. Find the exact figure or clause you need, with citations.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    body: 'Built for regulated industries — SOX, GAAP, IRS. Keep data residency fully under your control.',
  },
];

const steps = [
  {
    icon: FileStack,
    title: 'Connect your documents',
    body: 'Point Neural Index at your financial files, workpapers, and client records.',
  },
  {
    icon: Cpu,
    title: 'Index on your hardware',
    body: 'Everything is processed and embedded locally into a private, searchable knowledge engine.',
  },
  {
    icon: Sparkles,
    title: 'Your team just asks',
    body: 'Staff chat with the assistant and get instant, sourced answers — entirely in-house.',
  },
];

const otherServices = [
  {
    icon: Code2,
    title: 'Custom AI Development',
    body: 'Bespoke models trained on your chart of accounts, templates, and workflows.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    body: 'Automate repetitive financial reporting, reconciliation, and compliance tasks.',
  },
  {
    icon: Boxes,
    title: 'Integrations & API',
    body: 'Connect to your ERP, accounting software, and document management systems.',
  },
  {
    icon: Cpu,
    title: 'AI Strategy & Consulting',
    body: 'Hands-on guidance to deploy private AI across your finance operations.',
  },
];

const testimonials = [
  {
    quote:
      'Our audit team now pulls figures from thousands of workpapers in seconds. Nothing leaves our servers.',
    author: 'Michael Torres',
    position: 'Managing Partner, Torres & Associates CPA',
  },
  {
    quote:
      'We query client tax files and financial statements instantly. The on-prem deployment was non-negotiable for us.',
    author: 'Jennifer Park',
    position: 'Director of Finance, Northstar Capital',
  },
  {
    quote:
      'New staff onboard themselves by querying our internal procedures and prior-year files. Game changer.',
    author: 'Robert Chen',
    position: 'CFO, Meridian Group',
  },
];

const logos = ['TORRES CPA', 'NORTHSTAR', 'MERIDIAN', 'AXIOM', 'VERTEX', 'CALDERA'];

export const Home: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-slate-100 overflow-hidden" style={{ marginTop: '-5rem' }}>
      {/* ===== Hero ===== */}
      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-7">
              <Sparkles className="w-3.5 h-3.5" /> Self-Hosted &middot; Private AI for Finance
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Let your team chat with your financial documents.{' '}
              <span className="text-emerald-400">Privately.</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Neural Index turns your firm's financial documents into a secure AI assistant
              your staff can query — self-hosted on your own infrastructure, so sensitive
              client data never leaves your network.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-colors"
              >
                Book a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-zinc-700 text-slate-100 font-semibold py-4 px-8 rounded-xl hover:bg-zinc-900 hover:border-zinc-600 transition-all inline-flex items-center gap-2"
              >
                View Pricing <CreditCard className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> SOX &amp; GAAP Ready
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Client data stays on-prem
              </span>
            </div>
          </div>

          {/* Product mock card */}
          <div className="relative animate-floaty">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-semibold text-white">Financial Document Assistant</p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-emerald-400" /> Running on-prem &middot; offline
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2.5 mb-4">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-sm text-zinc-300">What were Q3 revenue variances vs budget?</span>
              </div>

              <div className="rounded-lg bg-emerald-900/20 border border-emerald-700/20 p-4 mb-4">
                <p className="text-sm text-zinc-200 leading-relaxed">
                  Q3 revenue was{' '}
                  <span className="text-emerald-400 font-semibold">$4.2M</span>, unfavorable
                  to budget by <span className="text-emerald-400 font-semibold">$318K (7%)</span>.
                  Primary driver was a shortfall in advisory fees, partially offset by stronger
                  tax service revenue.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">Q3_financials.xlsx &middot; Tab 3</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">board_report.pdf &middot; p.12</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: 'Sources', v: '2' },
                  { k: 'Latency', v: '38ms' },
                  { k: 'Cloud', v: 'None' },
                ].map((m) => (
                  <div key={m.k} className="rounded-lg bg-zinc-950 border border-zinc-800 p-3 text-center">
                    <p className="text-lg font-bold text-white">{m.v}</p>
                    <p className="text-[11px] uppercase tracking-wide text-zinc-400">{m.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo trust bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Trusted by firms at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((name) => (
              <span
                key={name}
                className="text-zinc-500/80 font-bold tracking-[0.15em] text-sm hover:text-zinc-300 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="relative bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-emerald-400 mb-1">{s.value}</p>
              <p className="text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase">Why Neural Index</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Private AI for your{' '}
              <span className="text-emerald-400">financial documents</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              A document assistant your accounting team can trust — running entirely on your own terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-5">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase">How it works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Live in three steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative text-center px-4">
                <div className="mx-auto mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-emerald-400 relative">
                  <Icon className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase">Customer stories</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Trusted by firms that keep client data in-house
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} isDark />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Other Services ===== */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase">Beyond document chat</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Other services
            </h2>
            <p className="text-zinc-400 text-lg">
              Document chat is the core — but we help you put private AI to work across the firm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-emerald-500/30 transition-colors"
              >
                <Icon className="w-7 h-7 text-emerald-400 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            >
              Explore all features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 px-8 py-20 text-center bg-zinc-900">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
                Put your financial documents to work —{' '}
                <span className="text-emerald-400">without giving them away</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
                Give your team a private AI assistant for your financial documents,
                hosted entirely on your own infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-colors"
                >
                  Book a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-zinc-700 text-slate-100 font-semibold py-4 px-8 rounded-xl hover:bg-zinc-800 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
