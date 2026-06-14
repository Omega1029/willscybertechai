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
    <div className="min-h-screen bg-background text-on-background font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container text-label-caps mb-6">
            Live Prototypes
          </span>
          <h1 className="text-headline-xl text-on-surface mb-6">AI Demos</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Interactive demonstrations of our AI solutions in action
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo) => (
              <div key={demo.id} className="glass-card p-10 rounded-xl flex flex-col group hover:border-primary-container/40 transition-all">
                <div className="bg-primary-container/10 p-4 rounded-xl border border-primary-container/20 w-fit mb-6">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '32px' }}>{demo.icon}</span>
                </div>
                <h3 className="text-headline-sm text-on-surface mb-3">{demo.title}</h3>
                <p className="text-on-surface-variant text-body-md mb-6 flex-1">{demo.description}</p>
                <ul className="space-y-2 mb-8">
                  {demo.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '16px' }}>check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {demo.external ? (
                  <a
                    href={demo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-primary-container hover:gap-3 transition-all"
                  >
                    Launch Demo
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
                  </a>
                ) : (
                  <Link
                    to={demo.link}
                    className="flex items-center gap-2 text-sm font-bold text-primary-container hover:gap-3 transition-all"
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
      <section className="py-24 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-headline-xl text-on-surface mb-6">Need a Custom AI Demo?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            We can build specialized AI demonstrations tailored to your specific business needs and workflows.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-bold py-4 px-12 rounded-xl hover:shadow-[0_0_20px_rgba(160,120,255,0.4)] transition-all"
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
