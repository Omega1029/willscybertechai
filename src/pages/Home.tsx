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
} from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const stats = [
  { value: '100%', label: 'Self-hosted / on-prem' },
  { value: 'Zero', label: 'Data leaves your network' },
  { value: '<50ms', label: 'Avg. query latency' },
  { value: 'Offline', label: 'Air-gap capable' },
];

const features = [
  {
    icon: Server,
    title: 'Runs On Your Infrastructure',
    body: 'Deploy on your own servers, private cloud, or a single offline machine. You own the model and the data — nothing is sent to a third-party cloud.',
  },
  {
    icon: MessageSquare,
    title: 'Chat With Your Documents',
    body: 'Employees ask questions in plain language and get instant, sourced answers drawn straight from your internal files and wikis.',
  },
  {
    icon: WifiOff,
    title: 'Works Fully Offline',
    body: 'Air-gapped and disconnected environments are first-class. No internet connection required to index or query your knowledge.',
  },
  {
    icon: ShieldCheck,
    title: 'Your Data Stays Yours',
    body: 'Sensitive documents never leave your network. Bank-grade encryption, role-based access and full audit trails come standard.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    body: 'Understands meaning, not just keywords. Ask the way you think and get the exact passage you need, with citations.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    body: 'Built for regulated industries — keep data residency, retention and access fully under your own control.',
  },
];

const steps = [
  {
    icon: FileStack,
    title: 'Connect your documents',
    body: 'Point Neural Index at your files, wikis and shares — no migration, no engineering lift.',
  },
  {
    icon: Cpu,
    title: 'Index on your hardware',
    body: 'Everything is processed and embedded locally into a private, searchable knowledge engine.',
  },
  {
    icon: Sparkles,
    title: 'Employees just ask',
    body: 'Your team chats with the assistant and gets instant, sourced answers — entirely in-house.',
  },
];

const otherServices = [
  {
    icon: Code2,
    title: 'Custom AI Development',
    body: 'Bespoke models and assistants tailored to your workflows and data.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    body: 'Automate repetitive document, support and operations tasks end to end.',
  },
  {
    icon: Boxes,
    title: 'Integrations & API',
    body: 'Connect the assistant to your existing tools, intranet and internal apps.',
  },
  {
    icon: Cpu,
    title: 'AI Strategy & Consulting',
    body: 'Hands-on guidance to deploy private AI safely across your organization.',
  },
];

const testimonials = [
  {
    quote:
      'Our staff finally get answers from policy docs in seconds — and not a single file ever leaves our servers.',
    author: 'Sarah Chen',
    position: 'VP of Operations, Meridian Health',
  },
  {
    quote:
      'Running fully on-prem sealed the deal. We let employees query sensitive legal documents with total confidence.',
    author: 'David Okafor',
    position: 'General Counsel, Lattice Legal',
  },
  {
    quote:
      'New hires onboard themselves by chatting with our internal handbook. Setup took an afternoon, all in-house.',
    author: 'Priya Nair',
    position: 'Head of People, Northwind Systems',
  },
];

const logos = ['MERIDIAN', 'LATTICE', 'NORTHWIND', 'AXIOM', 'VERTEX', 'CALDERA'];

export const Home: React.FC = () => {
  return (
    <div className="bg-cyber-dark text-slate-100 overflow-hidden" style={{ marginTop: '-5rem' }}>
      {/* ===== Hero ===== */}
      <section className="relative">
        <div className="absolute inset-0 cyber-grid" aria-hidden="true" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-blue-500/20 blur-[120px]" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase mb-7">
              <Sparkles className="w-3.5 h-3.5" /> Self-Hosted &middot; Private AI
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Let your team chat with your documents.{' '}
              <span className="text-gradient-bright">Privately.</span>
            </h1>
            <p className="text-lg text-slate-300/90 leading-relaxed mb-10 max-w-xl">
              Neural Index turns your internal documents into a secure AI assistant
              your employees can chat with — self-hosted on your own infrastructure,
              so sensitive data never leaves your network. Works fully offline.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white/15 text-slate-100 font-semibold py-4 px-8 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all inline-flex items-center gap-2"
              >
                View Pricing <CreditCard className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> On-prem &amp; air-gapped ready
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Your data never leaves your network
              </span>
            </div>
          </div>

          {/* Product mock card */}
          <div className="relative animate-floaty">
            <div className="glass-dark rounded-2xl p-5 glow-ring">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-semibold text-white">Internal Knowledge Assistant</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-emerald-400" /> Running on-prem &middot; offline
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2.5 mb-4">
                <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-sm text-slate-300">How many vacation days do new employees get?</span>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-cyan-400/20 p-4 mb-4">
                <p className="text-sm text-slate-200 leading-relaxed">
                  New full-time employees accrue{' '}
                  <span className="text-cyan-300 font-semibold">15 days</span> of paid
                  leave in year one, increasing to 20 days after two years.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">employee_handbook.pdf &middot; p.8</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">pto_policy.docx &middot; §3</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: 'Sources', v: '2' },
                  { k: 'Latency', v: '42ms' },
                  { k: 'Cloud', v: 'None' },
                ].map((m) => (
                  <div key={m.k} className="rounded-lg bg-slate-900/60 border border-white/10 p-3 text-center">
                    <p className="text-lg font-bold text-white">{m.v}</p>
                    <p className="text-[11px] uppercase tracking-wide text-slate-400">{m.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo trust bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((name) => (
              <span
                key={name}
                className="text-slate-500/80 font-bold tracking-[0.15em] text-sm hover:text-slate-300 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats band ===== */}
      <section className="relative border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-gradient-bright mb-1">{s.value}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase">Why Neural Index</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Private AI for your{' '}
              <span className="text-gradient-bright">internal knowledge</span>
            </h2>
            <p className="text-slate-400 text-lg">
              A document assistant your employees can trust — running entirely on your own terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="gradient-border rounded-2xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-5 group-hover:glow-ring transition-shadow">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase">How it works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Live in three steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative text-center px-4">
                <div className="mx-auto mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl glass-dark text-cyan-300 relative">
                  <Icon className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase">Customer stories</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
              Trusted by teams that keep data in-house
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
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase">Beyond document chat</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-4">
              Other services
            </h2>
            <p className="text-slate-400 text-lg">
              Document chat is the core — but we help you put private AI to work across the business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-6 hover:border-cyan-400/30 transition-colors"
              >
                <Icon className="w-7 h-7 text-cyan-300 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="pb-28 pt-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 px-8 py-20 text-center bg-gradient-to-br from-blue-600/20 via-slate-900/40 to-cyan-500/10">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[40rem] rounded-full bg-cyan-500/20 blur-[100px]" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
                Put your documents to work —{' '}
                <span className="text-gradient-bright">without giving them away</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
                Give your employees a private AI assistant for your internal knowledge,
                hosted entirely on your own infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/dashboard"
                  className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/20 text-slate-100 font-semibold py-4 px-8 rounded-xl hover:bg-white/5 transition-all"
                >
                  Book a Demo
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
