import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  {
    icon: 'location_on',
    title: 'Competitor Mapping',
    description: 'Google Maps API for real competitor locations and density analysis',
  },
  {
    icon: 'search',
    title: 'Market Research',
    description: 'Live web search for market trends, demographics, and insights',
  },
  {
    icon: 'bar_chart',
    title: 'Strategic Reports',
    description: 'AI-generated executive reports with viability scores and infographics',
  },
];

const examples = [
  '"I want to open a coffee shop in downtown Seattle"',
  '"Analyze Austin, Texas for a fitness studio"',
  '"Where should I open a bakery in Dubai Marina?"',
];

const AIAgentPage = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-primary-container/10 p-5 rounded-2xl border border-primary-container/20 w-fit mx-auto mb-8">
            <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '48px' }}>location_on</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container text-label-caps mb-6">
            Powered by Google ADK + Gemini
          </span>
          <h1 className="text-headline-xl text-on-surface mb-6">Retail AI Location Strategy</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tell me where you want to open your business, and I'll run a comprehensive analysis using live market data, competitor mapping, and AI-powered strategy recommendations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-8 rounded-xl text-center">
                <div className="bg-primary-container/10 p-4 rounded-xl border border-primary-container/20 w-fit mx-auto mb-6">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '32px' }}>{f.icon}</span>
                </div>
                <h3 className="text-headline-sm text-on-surface mb-3">{f.title}</h3>
                <p className="text-on-surface-variant">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <a
            href="https://my-retail-agent-496311446948.us-east1.run.app/dev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed font-bold py-4 px-12 rounded-xl hover:shadow-[0_0_20px_rgba(160,120,255,0.4)] transition-all mb-16"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>rocket_launch</span>
            Launch AI Agent
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
          </a>

          <div className="glass-card p-8 rounded-xl text-left">
            <h3 className="text-headline-sm text-on-surface mb-6">Try these examples:</h3>
            <div className="space-y-4">
              {examples.map((ex) => (
                <div key={ex} className="bg-surface-container-lowest border border-slate-800 rounded-lg p-4 text-on-surface-variant text-sm">
                  {ex}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgentPage;
