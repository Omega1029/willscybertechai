import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  examples?: string[];
  isDark?: boolean;
}

const ServiceCard = ({ id, icon, title, description, examples, isDark }: ServiceCardProps) => {
  const handleDemoClick = () => {
    // Create a fancy modal or alert showing the demo number
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl transform animate-pulse">
        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Shipping Expert Demo</h3>
        <p class="text-gray-600 mb-6">Call our AI assistant to see how it handles shipping questions</p>
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 mb-6">
          <div class="text-3xl font-bold text-blue-600 mb-1">+1 (678) 203-2281</div>
          <div class="text-sm text-blue-500">Available 24/7</div>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Close
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Remove modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  };

  return (
    <div id={id} className={`rounded-xl p-6 transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800 hover:bg-gray-700 border-gray-700'
        : 'bg-white hover:shadow-xl border-gray-100'
    } border`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isDark ? 'bg-purple-500/20' : 'bg-purple-100'
      }`}>
        <div className="text-purple-500">
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>{description}</p>
      
      {examples && (
        <div className="mb-6">
          <h4 className={`text-sm font-semibold mb-2 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>Examples</h4>
          <ul className="space-y-1">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-3 h-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Special demo button for Website & Helpdesk AI */}
      {id === 'ai-assistants' ? (
        <Link 
          to="/ai-assistants"
          className={`flex items-center space-x-2 text-purple-500 hover:text-purple-600 font-semibold transition-colors duration-200`}
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </Link>
      ) : id === 'ai-automation' ? (
        <Link 
          to="/ai-automation"
          className={`flex items-center space-x-2 text-purple-500 hover:text-purple-600 font-semibold transition-colors duration-200`}
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </Link>
      ) : id === 'custom-ai-solutions' ? (
        <Link 
          to="/custom-ai"
          className={`flex items-center space-x-2 text-purple-500 hover:text-purple-600 font-semibold transition-colors duration-200`}
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </Link>
      ) : (
        <a 
          href="/contact"
          className={`flex items-center space-x-2 text-purple-500 hover:text-purple-600 font-semibold transition-colors duration-200`}
        >
          <span>Get Started</span>
          <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
};

export default ServiceCard;