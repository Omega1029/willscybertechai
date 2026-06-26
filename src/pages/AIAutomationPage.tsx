import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';
import AirtableForm from '../components/AirtableForm';

const services = [
  {
    icon: 'bolt',
    title: 'Multi-Channel Communication',
    description: 'WhatsApp, Instagram, and phone number automation — handle every channel automatically.',
  },
  {
    icon: 'bar_chart',
    title: 'Analytics & Dashboards',
    description: 'Real-time analytics dashboards to monitor performance metrics and gain actionable insights.',
  },
  {
    icon: 'send',
    title: 'Email & Lead Generation',
    description: 'Automated email workflows and lead generation pipelines that convert without manual effort.',
  },
];

const benefits = [
  'Less manual work',
  'Faster turnaround times',
  'Fewer errors',
  'Consistent processes',
  'Better use of team time',
];

const steps = [
  { number: '01', title: 'Review your workflows', description: 'We analyze how your team currently handles routine tasks' },
  { number: '02', title: 'Identify opportunities', description: 'Find the best processes to automate for maximum impact' },
  { number: '03', title: 'Build and test', description: 'Create custom automation solutions tailored to your needs' },
  { number: '04', title: 'Deploy and monitor', description: 'Launch your automation and track performance over time' },
];

const AIAutomationPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            AI Automation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            AI Automation That Reduces Manual Work
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            We help businesses automate repetitive tasks and workflows using AI — so teams can focus on higher-value work instead of busywork.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-400 text-black font-semibold py-4 px-10 rounded-xl inline-flex items-center gap-2 transition-colors">
              Get Started
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-zinc-700 text-zinc-100 font-semibold py-4 px-10 rounded-xl hover:bg-zinc-800 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What AI Automation Is</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-400">
            AI automation helps businesses handle routine tasks automatically — data entry, follow-ups, internal requests, and basic decision-making — without human intervention.
          </p>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Automate</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-700/20 mb-6">
                  <span className="material-symbols-outlined text-blue-400">{s.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits for Your Business</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex items-center gap-4">
                <span className="material-symbols-outlined text-blue-400 flex-shrink-0">check_circle</span>
                <span className="text-zinc-400">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
                <div className="text-3xl font-black text-blue-400 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to reduce manual work and streamline your processes?</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Fill out the form below and we'll be in touch to discuss how AI automation can work for your business.
            </p>
          </div>
          <AirtableForm
            src="https://airtable.com/embed/appRwTy67k4QiQOS5/shrO3rnrbK5Ux83oO"
            title="AI Automation & Analytics Discovery Form"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;
