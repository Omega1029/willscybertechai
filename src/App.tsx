import React, { useEffect } from 'react';
import { Bot, Brain, ChevronRight, Code, LineChart, MessageSquare, Rocket, Zap, Cpu, Eye, Shield, Settings, Monitor, FileText, Lock, Star, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import Contact from './components/Contact';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const isDark = useDarkMode();

  useEffect(() => {
    // Create animated circles
    const createCircles = () => {
      const container = document.querySelector('.animated-circles');
      if (!container) return;

      for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.width = Math.random() * 300 + 100 + 'px';
        circle.style.height = circle.style.width;
        circle.style.left = Math.random() * 100 + '%';
        circle.style.top = Math.random() * 100 + '%';
        circle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(circle);
      }
    };

    createCircles();
  }, []);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Latest integration just arrived
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  AI Engineering
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    That Works
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
                  We build production-ready AI systems that automate operations, process data, and deliver measurable business value.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                    Start for free
                  </button>
                  <Link 
                    to="/contact"
                    className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                  >
                    Get Started <ChevronRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>

              {/* Right Content - Dashboard Preview */}
              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Site Overview</h3>
                      <p className="text-sm text-gray-400">Real-time performance</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>Jun 24 → Today</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <Settings className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-900/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Visibility</span>
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">10.15%</div>
                      <div className="text-xs text-green-400">+2.4%</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Organic Keywords</span>
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">35.6K</div>
                      <div className="text-xs text-purple-400">+5.2%</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-gray-900/30 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">Performance Trend</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                    </div>
                    {/* Simplified chart representation */}
                    <div className="h-24 flex items-end space-x-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-purple-600/50 to-purple-400/30 rounded-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Metric */}
                  <div className="bg-gray-900/50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">59.8K</div>
                        <div className="text-sm text-gray-400">Total Impressions</div>
                      </div>
                      <div className="text-xs text-green-400">+12.3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Harness the power of AI, making
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                search engine optimization intuitive
              </span>
              <br />
              and effective for all skill levels.
            </h2>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">AI Solutions We Build</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Production-ready AI systems designed for real business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              id="ai-automation"
              icon={<Settings />}
              title="AI Automation/Analytics"
              description="Automate responses and inquiries while performing intelligent actions across your business. We help businesses handle customer interactions and analyze data automatically through various communication channels."
              examples={["WhatsApp automation, Instagram automation, Phone number automation responses", "Analytics/Dashboards to view Metrics", "Email or Lead Gen Automation"]}
              isDark={true}
            />
            <ServiceCard 
              id="ai-assistants"
              icon={<MessageSquare />}
              title="AI Assistants & Chatbots"
              description="AI that supports your team and customers 24/7. We build AI assistants that answer questions, handle requests, and support customers — freeing your team to focus on higher-value work."
              examples={["Customer support chatbots", "Internal knowledge assistants", "Website and helpdesk AI"]}
              isDark={true}
            />
            <ServiceCard 
              id="custom-ai-solutions"
              icon={<Brain />}
              title="Custom AI Solutions"
              description="AI built specifically for your business needs. We design custom AI solutions tailored to your workflows, data, and goals — without forcing you into generic software."
              examples={["Website Creation", "Appointment Booking", "AI Workflow Automation"]}
              isDark={true}
            />
            {/* <ServiceCard 
              id="data-document-intelligence"
              icon={<FileText />}
              title="Data & Document Intelligence"
              description="Turn documents and data into useful insights. We help businesses use AI to read, organize, and extract information from documents, emails, PDFs, and images."
              examples={["Document processing", "Invoice and form automation", "Data extraction and analysis"]}
              isDark={true}
            /> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="WCT successfully upgraded our MuthaGoose system with AWS integration, implementing secure pub-private key authentication and enabling web access to our hardware and sales data. Their expertise in Python and cloud integration has transformed our operations."
              author="James Beck"
              position="RKS Systems Inc."
              isDark={true}
            />
            <TestimonialCard 
              quote="Their thorough testing and debugging of our gaming application significantly improved the product quality and user experience. Their attention to detail and commitment to excellence helped us deliver a better product to our customers."
              author="Mike Boodram"
              position="Tournament Games Inc."
              isDark={true}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;