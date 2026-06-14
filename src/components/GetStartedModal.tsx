import React, { useEffect } from 'react';

interface Props {
  onClose: () => void;
}

const GetStartedModal = ({ onClose }: Props) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-start justify-center z-50 overflow-y-auto py-8 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white border border-blue-100 rounded-2xl w-full max-w-3xl shadow-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Get Started</h2>
            <p className="text-sm text-slate-500 mt-0.5">Book a strategy call or fill out the form below</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>close</span>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Calendly */}
          <div className="border border-blue-100 rounded-xl overflow-hidden bg-slate-50/50">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-800">Book a Strategy Call</h3>
              <p className="text-xs text-slate-500 mt-0.5">Schedule a 30-minute consultation to discuss your AI needs</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://calendly.com/willscybertech/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a Strategy Call"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Airtable */}
          <div className="border border-blue-100 rounded-xl overflow-hidden bg-slate-50/50">
            <div className="px-6 py-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-800">Or Send Us a Message</h3>
              <p className="text-xs text-slate-500 mt-0.5">Fill out the form and we'll be in touch shortly</p>
            </div>
            <div className="p-4">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appRwTy67k4QiQOS5/shrO3rnrbK5Ux83oO"
                frameBorder="0"
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                title="Contact Form"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
