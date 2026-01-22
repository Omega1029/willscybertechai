import React from 'react';
import { Settings, Monitor, FileText, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Navbar from '../components/Navbar';

const UseCasesPage = () => {
  const isDark = useDarkMode();

  const useCases = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Operations Automation',
      description: 'Streamline complex business processes with intelligent automation systems.',
      examples: [
        'Invoice processing and approval workflows',
        'Customer service ticket routing',
        'Inventory management and reordering',
        'Quality assurance automation'
      ],
      metrics: '60-80% reduction in manual work',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Intelligent Monitoring',
      description: 'Deploy AI systems that continuously monitor operations and detect anomalies.',
      examples: [
        'Equipment health monitoring',
        'Network security threat detection',
        'Performance anomaly identification',
        'Predictive maintenance alerts'
      ],
      metrics: '90% faster issue detection',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Document & Image Processing',
      description: 'Extract insights from documents, images, and unstructured data at scale.',
      examples: [
        'Contract analysis and extraction',
        'Medical image analysis',
        'Receipt and form processing',
        'Content moderation systems'
      ],
      metrics: '95% accuracy in data extraction',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              AI Use Cases
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Real-world AI applications that deliver measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800/50' : 'bg-white/50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                    isDark ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    <div className="text-blue-500">
                      {useCase.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{useCase.title}</h3>
                  
                  <p className={`text-lg mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{useCase.description}</p>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Common Applications</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className={`${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`inline-flex items-center px-4 py-2 rounded-lg ${
                    isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    <span className="font-semibold">{useCase.metrics}</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={useCase.image}
                    alt={useCase.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            See Your Use Case Here?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss how AI can solve your specific business challenges.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            Discuss Your Use Case
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;