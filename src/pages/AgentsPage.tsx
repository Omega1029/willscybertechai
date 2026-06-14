import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft, Bot, ExternalLink, Sparkles, Search, BarChart3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function AIAgentPage() {
  const agentUrl = 'https://my-retail-agent-496311446948.us-east1.run.app/dev-ui';

  const handleLaunch = () => {
    window.open(agentUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-6">
              <Bot className="text-cyan-300" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Retail AI Location Strategy</h1>
            <p className="text-xl text-slate-400 mb-2">Powered by Google ADK + Gemini | Multi-Agent Pipeline</p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tell me where you want to open your business, and I'll run a comprehensive analysis using
              live market data, competitor mapping, and AI-powered strategy recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-left hover:border-cyan-400/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-4">
                <MapPin className="text-cyan-300" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Competitor Mapping</h3>
              <p className="text-slate-400">Google Maps API for real competitor locations and density analysis</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-left hover:border-cyan-400/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-4">
                <Search className="text-cyan-300" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Market Research</h3>
              <p className="text-slate-400">Live web search for market trends, demographics, and insights</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-left hover:border-cyan-400/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-4">
                <BarChart3 className="text-cyan-300" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Strategic Reports</h3>
              <p className="text-slate-400">AI-generated executive reports with viability scores and infographics</p>
            </div>
          </div>

          <button
            onClick={handleLaunch}
            className="inline-flex items-center gap-3 px-8 py-4 btn-cyber rounded-xl font-semibold text-lg hover:-translate-y-0.5 transition-transform mt-10"
          >
            <Sparkles size={24} />
            Launch AI Agent
            <ExternalLink size={20} />
          </button>

          <div className="mt-8 p-6 glass-dark rounded-2xl glow-ring">
            <h3 className="font-semibold text-white mb-4">Try these examples:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-xl border border-white/10 bg-slate-900/40 text-slate-400 text-sm">"I want to open a coffee shop in downtown Seattle"</span>
              <span className="px-4 py-2 rounded-xl border border-white/10 bg-slate-900/40 text-slate-400 text-sm">"Analyze Austin, Texas for a fitness studio"</span>
              <span className="px-4 py-2 rounded-xl border border-white/10 bg-slate-900/40 text-slate-400 text-sm">"Where should I open a bakery in Dubai Marina?"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentPage;
