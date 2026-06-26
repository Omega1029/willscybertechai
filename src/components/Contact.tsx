import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Ready to secure your knowledge infrastructure? Let's talk.
          </p>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-8">

          {/* Calendly */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden mb-12">
            <div className="p-8 border-b border-zinc-800">
              <h3 className="text-xl font-semibold text-white mb-1">Book a Strategy Call</h3>
              <p className="text-zinc-400 text-sm">Schedule a 30-minute consultation to discuss your AI needs</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://calendly.com/willscybertech/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a Strategy Call"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Airtable Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-8 border-b border-zinc-800">
              <h3 className="text-xl font-semibold text-white mb-1">Send Us a Message</h3>
              <p className="text-zinc-400 text-sm">Fill out the form and we'll be in touch shortly</p>
            </div>
            <div className="p-6">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appRwTy67k4QiQOS5/shrO3rnrbK5Ux83oO"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid rgba(63,63,70,0.5)', borderRadius: '8px' }}
                title="Contact Form"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
