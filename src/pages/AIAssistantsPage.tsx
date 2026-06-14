import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';
import AirtableForm from '../components/AirtableForm';

const services = [
  {
    icon: 'chat',
    title: 'Customer Support Chatbots',
    description: 'Handle common customer questions and reduce support ticket volume automatically — 24/7.',
    demo: null,
  },
  {
    icon: 'help',
    title: 'Internal Knowledge Assistants',
    description: 'Help employees quickly find answers from internal documents, policies, and FAQs.',
    demo: null,
  },
  {
    icon: 'support_agent',
    title: 'Website & Helpdesk AI',
    description: 'Guide visitors, route requests, and provide instant support directly on your website or helpdesk.',
    demo: { label: 'See Phone Demo', phone: '+1 (678) 203-2281' },
  },
];

const benefits = [
  'Faster response times',
  'Reduced manual workload',
  'Consistent answers',
  '24/7 availability',
  'Easy to integrate into existing workflows',
];

const steps = [
  { number: '01', title: 'Understand your needs', description: 'We learn about your business and support challenges' },
  { number: '02', title: 'Design the AI assistant', description: 'Create a solution tailored to your specific requirements' },
  { number: '03', title: 'Train on your content', description: 'Use your existing knowledge base and documentation' },
  { number: '04', title: 'Deploy and improve', description: 'Launch your assistant and continuously optimize performance' },
];

const AIAssistantsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const showPhoneDemo = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm';
    modal.innerHTML = `
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <span class="material-symbols-outlined text-purple-500 mb-4 block" style="font-size:48px">call</span>
        <h3 class="text-2xl font-bold text-white mb-2">Shipping Expert Demo</h3>
        <p class="text-slate-400 mb-6">Call our AI assistant to see how it handles shipping questions</p>
        <div class="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
          <div class="text-2xl font-bold text-purple-400 mb-1">+1 (678) 203-2281</div>
          <div class="text-sm text-purple-300">Available 24/7</div>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="bg-purple-500 hover:bg-purple-400 text-slate-950 px-6 py-2 rounded-lg font-bold transition-colors">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container text-label-caps mb-6">
            AI Assistants
          </span>
          <h1 className="text-headline-xl text-on-surface mb-6 max-w-4xl mx-auto">
            AI Assistants That Support Your Team and Customers 24/7
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            We build AI assistants that answer questions, handle requests, and support customers — freeing your team to focus on higher-value work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="bg-primary-container text-on-primary-fixed font-bold py-4 px-10 rounded-xl hover:shadow-[0_0_20px_rgba(160,120,255,0.4)] transition-all flex items-center gap-2">
              Get Started
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-purple-500/50 text-purple-500 font-bold py-4 px-10 rounded-xl hover:bg-purple-500/5 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What They Do */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-headline-md text-on-surface mb-4">What AI Assistants Do</h2>
          <div className="h-1 w-20 bg-primary-container mx-auto mb-8"></div>
          <p className="text-body-lg text-on-surface-variant">
            AI assistants help businesses respond faster, stay consistent, and reduce repetitive work by handling common questions and requests automatically.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-on-surface mb-4">How We Can Help</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-8 rounded-xl">
                <div className="bg-primary-container/10 p-3 rounded-lg border border-primary-container/20 w-fit mb-6">
                  <span className="material-symbols-outlined text-primary-container">{s.icon}</span>
                </div>
                <h3 className="text-headline-sm text-on-surface mb-3">{s.title}</h3>
                <p className="text-on-surface-variant mb-4">{s.description}</p>
                {s.demo && (
                  <button onClick={showPhoneDemo} className="flex items-center gap-2 text-sm font-bold text-primary-container hover:gap-3 transition-all mt-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                    {s.demo.label}
                  </button>
                )}
                {s.title === 'Customer Support Chatbots' && (
                  <p className="text-xs text-on-surface-variant mt-2">Try our chatbot in the bottom right corner!</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-on-surface mb-4">Benefits for Your Business</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="glass-card p-5 rounded-xl flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container flex-shrink-0">check_circle</span>
                <span className="text-on-surface-variant">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-on-surface mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-primary-container mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="glass-card p-8 rounded-xl text-center">
                <div className="text-3xl font-black text-primary-container mb-4">{step.number}</div>
                <h3 className="text-headline-sm text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-headline-xl text-on-surface mb-4">Ready to see how an AI assistant can support your business?</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Fill out the form below and we'll be in touch to discuss how we can build the right AI assistant for your team.
            </p>
          </div>
          <AirtableForm
            src="https://airtable.com/embed/appRwTy67k4QiQOS5/pagZTgKPxp6J6SNoK/form"
            title="AI Assistants & Chatbots Discovery Form"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAssistantsPage;
