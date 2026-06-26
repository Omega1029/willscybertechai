import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 w-full py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="text-lg font-black text-white tracking-tighter uppercase">NEURAL INDEX</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              On-premise AI that reads, reasons, and retrieves across your financial documents — without sending data outside your walls.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Product</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/features" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Features</Link></li>
              <li><Link to="/security" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Security</Link></li>
              <li><Link to="/pricing" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link to="/use-cases" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Company</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/features" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Local AI Details</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
              <li><a href="mailto:willscybertech@gmail.com" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">willscybertech@gmail.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Legal</h5>
            <ul className="flex flex-col gap-3">
              <li><Link to="/privacy" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">© 2026 Neural Index. All Rights Reserved.</p>
          <p className="text-xs text-zinc-600">Built for accounting & finance professionals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
