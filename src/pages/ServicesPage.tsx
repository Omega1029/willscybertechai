import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';
import AirtableForm from '../components/AirtableForm';

interface ServiceFormModal {
  title: string;
  src: string;
}

const services = [
  {
    icon: 'automation',
    title: 'AI Automation & Analytics',
    description: 'Automate responses and inquiries while performing intelligent actions across your business. Handle customer interactions and analyze data automatically through every communication channel.',
    examples: ['WhatsApp, Instagram & phone automation', 'Analytics dashboards and metrics', 'Email and lead generation automation'],
    link: '/ai-automation',
    formModal: null,
  },
  {
    icon: 'smart_toy',
    title: 'AI Assistants & Chatbots',
    description: 'AI that supports your team and customers 24/7. Build assistants that answer questions, handle requests, and support customers — freeing your team for higher-value work.',
    examples: ['Customer support chatbots', 'Internal knowledge assistants', 'Website and helpdesk AI'],
    link: '/ai-assistants',
    formModal: null,
  },
  {
    icon: 'psychology',
    title: 'Custom AI Solutions',
    description: 'AI built specifically for your business needs. Custom solutions tailored to your workflows, data, and goals — without forcing you into generic software.',
    examples: ['Website creation', 'Appointment booking', 'AI workflow automation'],
    link: '/custom-ai',
    formModal: null,
  },
  {
    icon: 'folder_open',
    title: 'Document Intelligence',
    description: 'Transform static document libraries into queryable knowledge bases. Index, understand, and extract insights from any document type at enterprise scale.',
    examples: ['PDF & contract indexing', 'Compliance monitoring', 'Knowledge base Q&A'],
    link: null,
    formModal: {
      title: 'Document Intelligence (Neural Index) – Technical Discovery Form',
      src: 'https://airtable.com/embed/appRwTy67k4QiQOS5/pagYgEcQfT53M4Qn7/form',
    },
  },
  {
    icon: 'verified_user',
    title: 'Compliance AI',
    description: 'Continuously monitor your documentation for regulatory gaps, inconsistencies, and risks — with real-time alerts and audit-ready reports.',
    examples: ['SOC2, HIPAA & GDPR readiness', 'Policy gap detection', 'Audit trail generation'],
    link: null,
    formModal: {
      title: 'Compliance AI Discovery & Risk Management',
      src: 'https://airtable.com/embed/appRwTy67k4QiQOS5/pagYgEcQfT53M4Qn7/form',
    },
  },
  {
    icon: 'cloud_sync',
    title: 'Cloud & On-Premise Deployment',
    description: 'Deploy on the infrastructure that matches your security requirements. Managed cloud hosting or fully air-gapped on-premise systems with total data sovereignty.',
    examples: ['Managed cloud hosting', 'On-premise deployment', 'Hybrid architecture'],
    link: null,
    formModal: {
      title: 'Cloud & On-Premise Deployment – Technical Discovery Form',
      src: 'https://airtable.com/embed/appRwTy67k4QiQOS5/pagyJDayvaxID1ZIT/form',
    },
  },
];

const ServicesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [serviceForm, setServiceForm] = useState<ServiceFormModal | null>(null);

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

      {serviceForm && (
        <div
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-start justify-center z-50 overflow-y-auto py-8 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setServiceForm(null); }}
        >
          <div className="glass-dark rounded-2xl glow-ring w-full max-w-2xl shadow-2xl my-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-lg font-bold text-white">{serviceForm.title}</h2>
                <p className="text-sm text-slate-400 mt-0.5">Fill out the form and we'll be in touch shortly</p>
              </div>
              <button
                onClick={() => setServiceForm(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>close</span>
              </button>
            </div>
            <div className="p-6">
              <AirtableForm src={serviceForm.src} title={serviceForm.title} />
            </div>
          </div>
        </div>
      )}

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 cyber-grid" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            What We Build
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Production-ready AI solutions designed for real business challenges in compliance-heavy industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="gradient-border rounded-2xl p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-6">
                  <span className="material-symbols-outlined text-cyan-300">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="material-symbols-outlined text-cyan-300" style={{ fontSize: '16px' }}>check_circle</span>
                      {ex}
                    </li>
                  ))}
                </ul>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 group-hover:gap-3 transition-all hover:text-cyan-200"
                  >
                    Learn More
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => setServiceForm(service.formModal)}
                    className="flex items-center gap-2 text-sm font-bold text-cyan-300 hover:gap-3 hover:text-cyan-200 transition-all w-fit"
                  >
                    Get Started
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you automate processes, improve efficiency, and drive growth.
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

export default ServicesPage;
