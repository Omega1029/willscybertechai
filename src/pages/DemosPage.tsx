import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';

const demos = [
  {
    id: 'retail-location',
    icon: 'location_on',
    title: 'Retail AI Location Strategy',
    description: 'Comprehensive business location analysis using Google ADK + Gemini. Understand market saturation, competitor positioning, and strategic site selection.',
    features: ['Competitor mapping', 'Market research', 'Strategic reports'],
    link: '/ai-agent',
    external: false,
  },
  {
    id: 'tax-consultation',
    icon: 'calculate',
    title: 'Tax Consultation AI',
    description: 'Interactive AI system for tax consultation and advice. Real-time responses grounded in current tax code and your specific scenario.',
    features: ['Custom AI logic', 'Interactive interface', 'Real-time responses'],
    link: 'https://taxpro.netlify.app/',
    external: true,
  },
];

const DemosPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 cyber-grid" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Live Prototypes
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Demos</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Interactive demonstrations of our AI solutions in action
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo) => (
              <div key={demo.id} className="gradient-border rounded-2xl p-10 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-6">
                  <span className="material-symbols-outlined text-cyan-300" style={{ fontSize: '32px' }}>{demo.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{demo.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{demo.description}</p>
                <ul className="space-y-2 mb-8">
                  {demo.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="material-symbols-outlined text-cyan-300" style={{ fontSize: '16px' }}>check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {demo.external ? (
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 hover:gap-3 hover:text-cyan-200 transition-all"
                  >
                    Launch Demo
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
                  </a>
                ) : (
                  <Link
                    to={demo.link}
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 hover:gap-3 hover:text-cyan-200 transition-all"
                  >
                    Launch Demo
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need a Custom AI Demo?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            We can build specialized AI demonstrations tailored to your specific business needs and workflows.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 btn-cyber font-semibold py-4 px-12 rounded-xl hover:-translate-y-0.5 transition-transform"
          >
            Get Started
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemosPage;
