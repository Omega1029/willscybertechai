import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
<div className="text-lg font-black text-white">NEURAL INDEX</div>
          </div>
          <p className="text-slate-400 font-sans text-xs uppercase tracking-widest leading-relaxed">
            The future of secure document intelligence for the modern enterprise.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Solutions</h5>
          <ul className="flex flex-col gap-2">
            <li><Link to="/services" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/demos" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">Demos</Link></li>
            <li><Link to="/about" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h5>
          <ul className="flex flex-col gap-2">
            <li><Link to="/privacy" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><a href="#" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">Security Compliance</a></li>
            <li><a href="mailto:willscybertech@gmail.com" className="font-sans text-xs uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Newsletter</h5>
          <div className="flex">
            <input
              className="bg-slate-800 border border-slate-700 text-xs font-sans p-3 w-full text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="ENTER EMAIL"
              type="email"
            />
            <button className="bg-blue-600 text-white p-3 hover:bg-blue-500 transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-slate-500">© 2026 Neural Index. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
