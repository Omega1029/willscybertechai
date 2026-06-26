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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-900/30 border border-blue-700/20 mx-auto mb-8">
            <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '48px' }}>location_on</span>
          </div>
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Powered by Google ADK + Gemini
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Retail AI Location Strategy</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Tell me where you want to open your business, and I'll run a comprehensive analysis using live market data, competitor mapping, and AI-powered strategy recommendations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-900/30 border border-blue-700/20 mx-auto mb-6">
                  <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '32px' }}>{f.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <a
            href="https://my-retail-agent-496311446948.us-east1.run.app/dev-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-black font-semibold py-4 px-12 rounded-xl transition-colors mb-16"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>rocket_launch</span>
            Launch AI Agent
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
          </a>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-left">
            <h3 className="text-xl font-semibold text-white mb-6">Try these examples:</h3>
            <div className="space-y-4">
              {examples.map((ex) => (
                <div key={ex} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-400 text-sm">
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
