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
      <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <span class="material-symbols-outlined text-emerald-400 mb-4 block" style="font-size:48px">call</span>
        <h3 class="text-2xl font-bold text-white mb-2">Shipping Expert Demo</h3>
        <p class="text-zinc-400 mb-6">Call our AI assistant to see how it handles shipping questions</p>
        <div class="bg-emerald-900/30 border border-emerald-700/20 rounded-xl p-4 mb-6">
          <div class="text-2xl font-bold text-emerald-400 mb-1">+1 (678) 203-2281</div>
          <div class="text-sm text-emerald-400/70">Available 24/7</div>
        </div>
        <button onclick="this.closest('.fixed').remove()" class="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-lg font-bold transition-colors">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            AI Assistants
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            AI Assistants That Support Your Team and Customers 24/7
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            We build AI assistants that answer questions, handle requests, and support customers — freeing your team to focus on higher-value work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 px-10 rounded-xl inline-flex items-center gap-2 transition-colors">
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

      {/* What They Do */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What AI Assistants Do</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-400">
            AI assistants help businesses respond faster, stay consistent, and reduce repetitive work by handling common questions and requests automatically.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How We Can Help</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-900/30 border border-emerald-700/20 mb-6">
                  <span className="material-symbols-outlined text-emerald-400">{s.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 mb-4">{s.description}</p>
                {s.demo && (
                  <button onClick={showPhoneDemo} className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:gap-3 transition-all mt-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                    {s.demo.label}
                  </button>
                )}
                {s.title === 'Customer Support Chatbots' && (
                  <p className="text-xs text-zinc-400 mt-2">Try our chatbot in the bottom right corner!</p>
                )}
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
            <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-400 flex-shrink-0">check_circle</span>
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
            <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
                <div className="text-3xl font-black text-emerald-400 mb-4">{step.number}</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to see how an AI assistant can support your business?</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
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
