import React from 'react';
import { Settings, Workflow, Zap, Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Navbar from '../components/Navbar';

const AIAutomationPage = () => {
  const isDark = useDarkMode();
  // Force dark theme for consistency
  const forceDark = true;

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Multi-Channel Communication Automation',
      description: 'WhatsApp automation, Instagram automation, Phone number automation responses'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Analytics & Dashboards',
      description: 'Analytics/Dashboards to view Metrics'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Email & Lead Generation Automation',
      description: 'Email or Lead Gen Automation'
    }
  ];

  const benefits = [
    'Less manual work',
    'Faster turnaround times',
    'Fewer errors',
    'Consistent processes',
    'Better use of team time'
  ];

  const steps = [
    {
      number: '1',
      title: 'Review your current workflows',
      description: 'We analyze how your team currently handles routine tasks'
    },
    {
      number: '2',
      title: 'Identify automation opportunities',
      description: 'Find the best processes to automate for maximum impact'
    },
    {
      number: '3',
      title: 'Build and test AI automation',
      description: 'Create custom automation solutions tailored to your needs'
    },
    {
      number: '4',
      title: 'Deploy and monitor',
      description: 'Launch your automation and track performance over time'
    }
  ];

  const targetAudience = [
    'Small and medium-sized businesses',
    'Operations teams',
    'Admin-heavy businesses',
    'Growing companies looking to scale efficiently'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              AI Automation That Reduces Manual Work
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              'text-gray-300'
            }`}>
              We help businesses automate repetitive tasks and workflows using AI — so teams can focus on higher-value work instead of busywork.
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

      {/* What AI Automation Is */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">What AI Automation Is</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              AI automation helps businesses handle routine tasks automatically, such as data entry, follow-ups, internal requests, and basic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What We Automate</h2>
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
            <h2 className="text-4xl font-bold mb-4 text-white">Choose Your AI Automation Plan</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Select the perfect AI automation solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Phone/WhatsApp/IG Automation */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gray-800 border-gray-600 hover:border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Communication Automation</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Automate responses across your communication channels
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Phone number automation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    WhatsApp automation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Instagram automation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Basic response templates
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Setup & training included
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

            {/* Package Two */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gray-800 border-gray-600 hover:border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Package Two</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$149</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Enhanced automation with additional features
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Everything in Package One
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Advanced response logic
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
                    Custom workflows
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Priority support
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

            {/* Package Three */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gray-800 border-gray-600 hover:border-blue-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Package Three</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-lg text-gray-400">.99/month</span>
                </div>
                <p className="text-gray-300">
                  Premium automation with comprehensive features
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Everything in Package Two
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Advanced AI responses
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Custom integrations
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Performance optimization
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Dedicated support
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

            {/* Dashboard + Analytics */}
            <div className="relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Dashboard + Analytics</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$299</span>
                  <span className="text-lg text-gray-400">/month extra</span>
                </div>
                <p className="text-gray-300">
                  Comprehensive analytics and reporting dashboard
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Real-time metrics dashboard
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Performance analytics
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Custom reporting
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Data visualization
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Export capabilities
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
          </div>
          
          {/* Additional Services */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Automation */}
            <div className="rounded-2xl p-8 border-2 bg-gray-800 border-gray-600">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Email Automation</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$99</span>
                  <span className="text-lg text-gray-400">/1000 emails</span>
                </div>
                <p className="text-gray-300">
                  Automated email communication and follow-ups
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Automated email sequences
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Personalized messaging
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Delivery tracking
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

            {/* Lead Generation */}
            <div className="rounded-2xl p-8 border-2 bg-gray-800 border-gray-600">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Lead Generation</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$99</span>
                  <span className="text-lg text-gray-400">/500 leads</span>
                </div>
                <p className="text-gray-300">
                  Targeted lead generation and qualification
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Targeted lead research
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Lead qualification
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    CRM integration
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
              All packages include setup assistance and training
            </p>
            <p className="text-sm text-gray-400">
              Need a custom package? <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">Contact us</Link> for custom pricing
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
            Ready to reduce manual work and streamline your processes?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss how we can help you automate repetitive tasks and improve efficiency across your business.
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

export default AIAutomationPage;