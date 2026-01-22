import React from 'react';
import { MessageSquare, Users, HelpCircle, Clock, CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Navbar from '../components/Navbar';

const AIAssistantsPage = () => {
  const isDark = useDarkMode();
  // Force dark theme for consistency
  const forceDark = true;

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Customer Support Chatbots',
      description: 'Handle common customer questions and reduce support ticket volume.'
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Internal Knowledge Assistants',
      description: 'Help employees quickly find answers from internal documents, policies, and FAQs.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Website & Helpdesk AI',
      description: 'Guide visitors, route requests, and provide instant support directly on your website or helpdesk.'
    }
  ];

  const benefits = [
    'Faster response times',
    'Reduced manual workload',
    'Consistent answers',
    '24/7 availability',
    'Easy to integrate into existing workflows'
  ];

  const steps = [
    {
      number: '1',
      title: 'Understand your needs',
      description: 'We learn about your business and support challenges'
    },
    {
      number: '2',
      title: 'Design the AI assistant',
      description: 'Create a solution tailored to your specific requirements'
    },
    {
      number: '3',
      title: 'Train it on your content',
      description: 'Use your existing knowledge base and documentation'
    },
    {
      number: '4',
      title: 'Deploy and improve over time',
      description: 'Launch your assistant and continuously optimize performance'
    }
  ];

  const targetAudience = [
    'Small and medium-sized businesses',
    'Customer support teams',
    'Operations teams',
    'Growing companies looking to scale support'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              AI Assistants That Support Your Team and Customers 24/7
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              'text-gray-300'
            }`}>
              We build AI assistants that answer questions, handle requests, and support customers — freeing your team to focus on higher-value work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('how-it-works');
                  if (section) {
                    const navHeight = 80;
                    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`px-8 py-4 rounded-lg font-semibold ${
                  'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What AI Assistants Do */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">What AI Assistants Do</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              AI assistants help businesses respond faster, stay consistent, and reduce repetitive work by handling common questions and requests automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">How We Can Help</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl p-8 text-center bg-gray-800 border border-gray-700">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto bg-purple-500/20">
                  <div className="text-purple-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
                
                {/* Demo button for Customer Support Chatbots */}
                {service.title === 'Customer Support Chatbots' && (
                  <div className="mt-4">
                    <p className="text-sm mt-2 text-gray-400">
                      Try our main chatbot in the bottom right corner!
                    </p>
                  </div>
                )}
                
                {/* Demo button for Website & Helpdesk AI */}
                {service.title === 'Website & Helpdesk AI' && (
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        const modal = document.createElement('div');
                        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
                        modal.innerHTML = `
                          <div class="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
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
                        
                        modal.addEventListener('click', (e) => {
                          if (e.target === modal) {
                            modal.remove();
                          }
                        });
                      }}
                      className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      <span>See Demo</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Benefits for Your Business</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Choose Your AI Assistant Plan</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Select the perfect AI assistant solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gray-800 border-gray-600 hover:border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Perfect for small businesses getting started with AI customer support
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    AI Chatbot for customer questions
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Basic knowledge base integration
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    24/7 availability
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Email support
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Basic analytics dashboard
                  </span>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Intermediary Plan - Most Popular */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Intermediary</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$149</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Ideal for growing businesses that need advanced customer handling
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Everything in Basic
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Advanced customer inquiry handling
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Appointment scheduling system
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    CRM integration
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Priority support
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Advanced analytics & reporting
                  </span>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Advanced Plan */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gray-800 border-gray-600 hover:border-purple-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Advanced</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Complete AI solution with voice capabilities and advanced features
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Everything in Intermediary
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    AI Phone Caller/Voice Agent
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Advanced appointment scheduling
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Multi-channel integration
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    White-label solution
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Dedicated account manager
                  </span>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-lg mb-4 text-gray-300">
              All plans include setup assistance and training
            </p>
            <p className="text-sm text-gray-400">
              Need a custom solution? <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact us</Link> for enterprise pricing
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto bg-purple-500/20 text-purple-400 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Who This Is For</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600/20 to-blue-800/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to see how an AI assistant can support your business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss your specific needs and how we can help you build the right AI assistant for your team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="mailto:contact@willscybertech.com"
              className="flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              contact@willscybertech.com
            </a>
            <a 
              href="tel:+1234567890"
              className="flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              (123) 456-7890
            </a>
          </div>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-gray-900 border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-white">Will's Cyber Tech</span>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@willscybertech.com" className="text-gray-400 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAssistantsPage;