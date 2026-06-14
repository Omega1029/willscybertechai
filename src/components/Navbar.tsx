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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Demos', href: '/demos' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const headerClass = scrolled
    ? 'bg-slate-400 backdrop-blur-xl border-b border-slate-300/60 shadow-lg'
    : 'bg-slate-400 border-b border-slate-300/40';

  const linkClass = (href: string) =>
    isActive(href)
      ? 'text-white font-bold border-b-2 border-white pb-1'
      : 'text-white/80 hover:text-white';

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
            className="hidden md:block px-5 py-2 text-sm font-semibold transition-colors text-white/80 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="btn-cyber hidden md:block px-6 py-2 rounded-lg font-sans text-sm font-semibold tracking-tight"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-colors text-white/80 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-400 border-t border-slate-300/40">
          <div className="px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2.5 text-sm font-sans tracking-tight transition-colors ${
                  isActive(link.href) ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-cyber block w-full text-center px-6 py-3 rounded-lg font-sans text-sm font-semibold mt-3"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
