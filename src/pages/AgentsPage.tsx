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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <div className="mb-12">
            <div className="bg-emerald-900/30 border border-emerald-700/20 p-4 rounded-xl inline-flex mb-6">
              <Bot className="text-emerald-400" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Retail AI Location Strategy</h1>
            <p className="text-xl text-zinc-400 mb-2">Powered by Google ADK + Gemini | Multi-Agent Pipeline</p>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Tell me where you want to open your business, and I'll run a comprehensive analysis using
              live market data, competitor mapping, and AI-powered strategy recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-left hover:border-emerald-500/30 transition-colors">
              <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-4">
                <MapPin className="text-emerald-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Competitor Mapping</h3>
              <p className="text-zinc-400">Google Maps API for real competitor locations and density analysis</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-left hover:border-emerald-500/30 transition-colors">
              <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-4">
                <Search className="text-emerald-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Market Research</h3>
              <p className="text-zinc-400">Live web search for market trends, demographics, and insights</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-left hover:border-emerald-500/30 transition-colors">
              <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-4">
                <BarChart3 className="text-emerald-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">Strategic Reports</h3>
              <p className="text-zinc-400">AI-generated executive reports with viability scores and infographics</p>
            </div>
          </div>

          <button
            onClick={handleLaunch}
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl font-semibold text-lg transition-colors mt-10"
          >
            <Sparkles size={24} />
            Launch AI Agent
            <ExternalLink size={20} />
          </button>

          <div className="mt-8 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="font-semibold text-white mb-4">Try these examples:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-400 text-sm">"I want to open a coffee shop in downtown Seattle"</span>
              <span className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-400 text-sm">"Analyze Austin, Texas for a fitness studio"</span>
              <span className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-400 text-sm">"Where should I open a bakery in Dubai Marina?"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentPage;
