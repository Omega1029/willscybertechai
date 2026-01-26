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
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          
          <div className="mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-purple-600/20 rounded-2xl mb-6">
              <Bot className="text-purple-400" size={48} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail AI Location Strategy</h1>
            <p className="text-xl text-gray-400 mb-2">Powered by Google ADK + Gemini | Multi-Agent Pipeline</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tell me where you want to open your business, and I'll run a comprehensive analysis using 
              live market data, competitor mapping, and AI-powered strategy recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-left">
              <div className="p-3 bg-red-500/20 rounded-lg inline-block mb-4">
                <MapPin className="text-red-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitor Mapping</h3>
              <p className="text-gray-400">Google Maps API for real competitor locations and density analysis</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-left">
              <div className="p-3 bg-green-500/20 rounded-lg inline-block mb-4">
                <Search className="text-green-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Market Research</h3>
              <p className="text-gray-400">Live web search for market trends, demographics, and insights</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-left">
              <div className="p-3 bg-blue-500/20 rounded-lg inline-block mb-4">
                <BarChart3 className="text-blue-400" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Strategic Reports</h3>
              <p className="text-gray-400">AI-generated executive reports with viability scores and infographics</p>
            </div>
          </div>

          <button
            onClick={handleLaunch}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 mt-10"
          >
            <Sparkles size={24} />
            Launch AI Agent
            <ExternalLink size={20} />
          </button>

          <div className="mt-8 p-6 bg-gray-800/30 border border-gray-700 rounded-xl">
            <h3 className="font-semibold mb-4">Try these examples:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm">"I want to open a coffee shop in downtown Seattle"</span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm">"Analyze Austin, Texas for a fitness studio"</span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 text-sm">"Where should I open a bakery in Dubai Marina?"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAgentPage;
