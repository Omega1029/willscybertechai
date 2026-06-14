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
  // The home page uses a dark gradient theme, so the navbar adopts a dark
  // treatment there; every other (light) page keeps the white navbar.
  const dark = location.pathname === '/';

  const headerClass = dark
    ? scrolled
      ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
      : 'bg-transparent border-b border-transparent'
    : scrolled
      ? 'bg-white/90 backdrop-blur-xl border-b border-blue-100 shadow-sm'
      : 'bg-white/70 backdrop-blur-md border-b border-blue-50';

  const linkClass = (href: string) =>
    dark
      ? isActive(href)
        ? 'text-cyan-300 border-b-2 border-cyan-400 pb-1'
        : 'text-slate-300 hover:text-white'
      : isActive(href)
        ? 'text-blue-600 border-b-2 border-blue-500 pb-1'
        : 'text-slate-600 hover:text-blue-600';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="flex items-center gap-3">
<span
            className={`text-xl font-bold tracking-tighter uppercase ${dark ? 'text-white' : 'text-blue-700'}`}
          >
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
            className={`hidden md:block px-5 py-2 text-sm font-semibold transition-colors ${
              dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className={
              dark
                ? 'btn-cyber hidden md:block px-6 py-2 rounded-lg font-sans text-sm font-semibold tracking-tight'
                : 'hidden md:block px-6 py-2 rounded-lg font-sans text-sm font-semibold tracking-tight text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all'
            }
          >
            Contact
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              dark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={
            dark
              ? 'md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10'
              : 'md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100'
          }
        >
          <div className="px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2.5 text-sm font-sans tracking-tight transition-colors ${
                  dark
                    ? isActive(link.href)
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                    : isActive(link.href)
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={
                dark
                  ? 'btn-cyber block w-full text-center px-6 py-3 rounded-lg font-sans text-sm font-semibold mt-3'
                  : 'block w-full text-center px-6 py-3 rounded-lg font-sans text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all mt-3'
              }
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
