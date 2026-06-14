import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const useCases = [
  {
    icon: 'settings',
    title: 'Operations Automation',
    description: 'Streamline complex business processes with intelligent automation systems.',
    examples: [
      'Invoice processing and approval workflows',
      'Customer service ticket routing',
      'Inventory management and reordering',
      'Quality assurance automation',
    ],
    metrics: '60-80% reduction in manual work',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'monitor',
    title: 'Intelligent Monitoring',
    description: 'Deploy AI systems that continuously monitor operations and detect anomalies in real time.',
    examples: [
      'Equipment health monitoring',
      'Network security threat detection',
      'Performance anomaly identification',
      'Predictive maintenance alerts',
    ],
    metrics: '90% faster issue detection',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: 'description',
    title: 'Document & Image Processing',
    description: 'Extract insights from documents, images, and unstructured data at scale.',
    examples: [
      'Contract analysis and extraction',
      'Medical image analysis',
      'Receipt and form processing',
      'Content moderation systems',
    ],
    metrics: '95% accuracy in data extraction',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 cyber-grid" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Real Applications
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Use Cases</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real-world AI applications that deliver measurable business value.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-24">
            {useCases.map((uc, index) => (
              <div key={uc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-6">
                    <span className="material-symbols-outlined text-cyan-300">{uc.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{uc.title}</h3>
                  <p className="text-lg text-slate-400 mb-6">{uc.description}</p>
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Common Applications</h4>
                    <ul className="space-y-3">
                      {uc.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-cyan-300 flex-shrink-0" style={{ fontSize: '18px' }}>arrow_forward</span>
                          <span className="text-slate-400">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 font-bold text-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                    {uc.metrics}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-dark rounded-2xl overflow-hidden glow-ring">
                    <img
                      src={uc.image}
                      alt={uc.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">See Your Use Case Here?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how AI can solve your specific business challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 btn-cyber font-semibold py-4 px-12 rounded-xl hover:-translate-y-0.5 transition-transform"
          >
            Discuss Your Use Case
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCasesPage;
