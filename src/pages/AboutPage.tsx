import React from 'react';
import { Target, Users, Award, ArrowRight, GraduationCap, Code, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const isDark = useDarkMode();

  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'PhD in Cyber Physical Systems',
      description: 'Specializing in AI and robotics with focus on real-world deployment'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Systems Integration Expert',
      description: 'Background in machine learning, automation, and reliable system design'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Practical AI Solutions',
      description: 'Builds AI that reduces workload and improves operational efficiency'
    }
  ];

  const principles = [
    'Reliability over complexity',
    'Data privacy and security',
    'Long-term maintainability',
    'Seamless workflow integration',
    'Clear business outcomes',
    'Invisible, background operation'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              About Our Founder
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Meet Justin Williams, the AI engineer behind Will's Cyber Tech
            </p>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800/50' : 'bg-white/50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/image copy.png"
                alt="Justin Williams"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Justin Williams</h2>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Justin Williams is an AI engineer and systems builder focused on helping businesses use artificial intelligence in practical and measurable ways.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With a background spanning machine learning, automation, and real world system integration, Justin has worked across industries where reliability and accuracy matter. He builds AI solutions that do not just look impressive but actually reduce workload, improve response times, and increase operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Expertise */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Education & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className={`rounded-xl p-8 text-center ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto ${
                  isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <div className="text-purple-500">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{highlight.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <p className={`text-lg mb-6 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Justin is currently pursuing a PhD in Cyber Physical Systems with a specialization in AI and robotics. His research centers on deploying intelligent systems in real world and resource constrained environments. This work emphasizes building AI that functions reliably without constant human oversight, excessive infrastructure, or unnecessary complexity. These principles directly shape how he designs solutions for small and mid sized businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800/50' : 'bg-white/50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Approach & Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Custom Solutions</h3>
                <p className={`text-lg mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Rather than offering generic software, Justin works closely with organizations to understand their existing workflows and operational pain points. He then designs custom AI systems that integrate seamlessly into how teams already operate.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  These solutions often automate customer communication, internal processes, and data handling, allowing organizations to focus on higher value work instead of repetitive tasks.
                </p>
              </div>

              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Core Principles</h3>
                <div className="space-y-3">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className={`${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`rounded-2xl p-8 ${
              isDark ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'
            }`}>
              <blockquote className={`text-xl italic text-center ${
                isDark ? 'text-purple-300' : 'text-purple-800'
              }`}>
                "Justin believes the most valuable AI is invisible. It works quietly in the background, saves time, prevents missed opportunities, and delivers clear business outcomes. His approach prioritizes reliability, data privacy, and long term maintainability over trends or shortcuts."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Mentorship */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Beyond Business</h2>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When he is not building or deploying AI systems, Justin remains active in research and mentorship, while exploring how emerging AI technologies can be applied responsibly to everyday business operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20' : 'bg-gradient-to-r from-red-50 to-orange-50'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Work with Justin?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss how custom AI solutions can transform your business operations.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;