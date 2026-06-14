import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container text-label-caps mb-6">
            Reach Out
          </span>
          <h1 className="text-headline-xl text-on-surface mb-6">Contact Us</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Ready to secure your knowledge infrastructure? Let's talk.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-8">

          {/* Calendly */}
          <div className="glass-card rounded-xl overflow-hidden mb-12">
            <div className="p-8 border-b border-slate-100">
              <h3 className="text-headline-sm text-on-surface mb-1">Book a Strategy Call</h3>
              <p className="text-on-surface-variant text-sm">Schedule a 30-minute consultation to discuss your AI needs</p>
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
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-8 border-b border-slate-100">
              <h3 className="text-headline-sm text-on-surface mb-1">Send Us a Message</h3>
              <p className="text-on-surface-variant text-sm">Fill out the form and we'll be in touch shortly</p>
            </div>
            <div className="p-6">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appRwTy67k4QiQOS5/shrO3rnrbK5Ux83oO"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid #e2e8f0', borderRadius: '8px' }}
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
