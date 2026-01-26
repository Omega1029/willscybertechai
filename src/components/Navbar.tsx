import React, { useState, useEffect } from 'react';
import { CircuitBoard, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';


const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToService = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsServicesOpen(false);
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const servicesSection = document.getElementById('solutions');
        if (servicesSection) {
          const navHeight = 80;
          const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById('solutions');
      if (servicesSection) {
        const navHeight = 80;
        const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
      isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="w-8 h-8 text-purple-600" />
            <span className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>wct</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Home</Link>
            <a href="#solutions" onClick={handleServicesClick} className={`${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Solutions</a>
            <Link to="/ai-agent" className={`${
              isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
            } font-medium`}>AI Agent</Link>
            <Link to="/about" className={`${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>About</Link>
            <Link to="/contact" className={`${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hidden sm:block"
            >
              Get Started
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
            <div className="py-4 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                Home
              </Link>
              <a 
                href="#solutions" 
                onClick={(e) => { handleServicesClick(e); setIsMobileMenuOpen(false); }}
                className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                Solutions
              </a>
              <Link 
                to="/ai-agent" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 font-medium ${isDark ? 'text-purple-400 hover:text-purple-300 hover:bg-gray-800' : 'text-purple-600 hover:text-purple-700 hover:bg-gray-100'}`}
              >
                AI Agent
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold text-center sm:hidden"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;