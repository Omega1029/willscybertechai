import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Security', href: '/security' },
    { label: 'Use Cases', href: '/use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const headerClass = scrolled
    ? 'bg-black/95 backdrop-blur-xl border-b border-zinc-800'
    : 'bg-black border-b border-zinc-900';

  const linkClass = (href: string) =>
    isActive(href)
      ? 'text-white font-semibold'
      : 'text-zinc-400 hover:text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tighter uppercase text-white">
            NEURAL INDEX
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-sans text-sm tracking-tight transition-colors ${linkClass(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:block px-5 py-2 text-sm font-semibold transition-colors text-zinc-400 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="hidden md:block bg-blue-500 hover:bg-blue-400 text-black font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Book a Demo
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-zinc-400 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-900">
          <div className="px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2.5 text-sm font-sans tracking-tight transition-colors ${
                  isActive(link.href) ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center bg-blue-500 hover:bg-blue-400 text-black font-semibold px-6 py-3 rounded-lg text-sm mt-3 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
