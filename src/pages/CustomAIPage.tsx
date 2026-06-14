import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';
import AirtableForm from '../components/AirtableForm';
import { supabase } from '../lib/supabase';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const RECEIPT_JSON_PROMPT = `
You are a receipt-processing assistant.

Extract information from the receipt image and return JSON ONLY in the following format:

{
  "merchant_name": null,
  "date": null,
  "total_amount": null,
  "currency": null,
  "tax_amount": null,
  "payment_method": null,
  "line_items": [
    {
      "description": null,
      "amount": null
    }
  ],
  "business_category": null,
  "category_confidence": null,
  "notes": null
}

Rules:
- Do NOT guess or hallucinate information.
- Use null if information is missing or unclear.
- Dates should be in YYYY-MM-DD format if visible.
- Amounts should be strings.
- Choose ONE business_category from common business expense types.
- category_confidence must be one of: High, Medium, Low.
- If line items are not clearly readable, return an empty array.
- Output JSON ONLY.
`;

async function processReceiptWithOpenAI(imageUrl: string) {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your environment variables.');
  }
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: [{ type: 'text', text: RECEIPT_JSON_PROMPT }, { type: 'image_url', image_url: { url: imageUrl } }] }],
      max_tokens: 1000,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`OpenAI API error: ${response.status} - ${(errorData as any).error?.message || 'Unknown error'}`);
  }
  const data = await response.json();
  try {
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return { error: 'Failed to parse AI response as JSON', raw_output: data.choices[0].message.content };
  }
}

const services = [
  { icon: 'psychology', title: 'Custom AI Tools', description: 'AI tools designed around your specific business needs — not generic templates.', hasReceiptDemo: true },
  { icon: 'build', title: 'Business-Specific Automations', description: 'Automation tailored to your workflows, processes, and objectives exactly as they exist.', hasReceiptDemo: false },
  { icon: 'extension', title: 'AI Integrations', description: 'Connect AI with your existing systems, databases, and software infrastructure.', hasReceiptDemo: false },
];

const benefits = ['Better fit for your business', 'More flexibility', 'Improved efficiency', 'Less workarounds', 'Scales as you grow'];

const steps = [
  { number: '01', title: 'Understand your needs', description: 'We learn about your unique workflows and requirements' },
  { number: '02', title: 'Design the solution', description: 'Create a solution tailored to your specific objectives' },
  { number: '03', title: 'Build and test', description: 'Develop and thoroughly test the custom AI solution' },
  { number: '04', title: 'Deploy and refine', description: 'Launch your solution and continuously improve performance' },
];

const CustomAIPage = () => {
  const [showModal, setShowModal] = useState(false);
  const showReceiptDemo = () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto py-8';
    modal.innerHTML = `
      <div class="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-lg mx-4 text-center shadow-2xl w-full">
        <span class="material-symbols-outlined text-purple-500 mb-4 block" style="font-size:48px">receipt_long</span>
        <h3 class="text-2xl font-bold text-white mb-2">Receipt Processing Demo</h3>
        <p class="text-slate-400 mb-6">Upload a receipt image to see our AI extract structured data</p>
        <div class="mb-6">
          <input type="file" id="receiptUpload" accept="image/*" class="hidden"/>
          <label for="receiptUpload" class="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-slate-950 px-6 py-3 rounded-lg font-bold cursor-pointer transition-colors">
            <span class="material-symbols-outlined" style="font-size:20px">upload</span>
            Upload Receipt
          </label>
        </div>
        <div id="processingStatus" class="hidden mb-4 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
          <div class="text-purple-400 font-bold">Processing...</div>
          <div class="text-purple-300 text-sm">Extracting data from your receipt</div>
        </div>
        <div id="errorStatus" class="hidden mb-4 bg-red-900/30 border border-red-500/30 rounded-lg p-3">
          <div class="text-red-400 font-bold">Error</div>
          <div class="text-red-500 text-sm" id="errorMessage">Something went wrong</div>
        </div>
        <div id="results" class="hidden mb-6 text-left"></div>
        <div class="text-xs text-slate-500 mb-4">Upload any receipt image (PNG, JPG, etc.) to see the AI in action</div>
        <button onclick="this.closest('.fixed').remove()" class="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">Close</button>
      </div>
    `;
    document.body.appendChild(modal);

    const fileInput = modal.querySelector('#receiptUpload') as HTMLInputElement;
    const processingStatus = modal.querySelector('#processingStatus') as HTMLElement;
    const errorStatus = modal.querySelector('#errorStatus') as HTMLElement;
    const errorMessage = modal.querySelector('#errorMessage') as HTMLElement;
    const results = modal.querySelector('#results') as HTMLElement;

    fileInput?.addEventListener('change', async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      processingStatus.classList.remove('hidden');
      results.classList.add('hidden');
      errorStatus.classList.add('hidden');
      try {
        const fileName = `receipt_${Date.now()}_${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage.from('Receipts').upload(fileName, file, { cacheControl: '3600', upsert: false });
        if (uploadError) throw new Error(`Upload failed: ${uploadError.message}`);
        const { data: { publicUrl } } = supabase.storage.from('Receipts').getPublicUrl(fileName);
        const result = await processReceiptWithOpenAI(publicUrl);
        const formatAmount = (a: string | null) => !a ? 'N/A' : (a.startsWith('$') ? a : `$${a}`);
        results.innerHTML = `
          <div class="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div class="text-center border-b border-slate-700 pb-3 mb-4">
              <div class="text-lg font-bold text-white">${result.merchant_name || 'Unknown Merchant'}</div>
              <div class="text-sm text-slate-400">${result.date || 'Date not detected'}</div>
              ${result.business_category ? `<span class="inline-block mt-1 px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20">${result.business_category}</span>` : ''}
            </div>
            ${result.line_items?.length ? `<div class="mb-4 space-y-2">${result.line_items.map((item: any) => `<div class="flex justify-between text-sm py-2 px-3 bg-slate-900 rounded border-l-2 border-purple-500"><span class="text-slate-300">${item.description || 'Item'}</span><span class="font-bold text-white">${formatAmount(item.amount)}</span></div>`).join('')}</div>` : ''}
            <div class="border-t border-slate-700 pt-3 flex justify-between text-lg font-bold">
              <span class="text-slate-300">Total</span>
              <span class="text-purple-400">${formatAmount(result.total_amount)}</span>
            </div>
          </div>
        `;
        processingStatus.classList.add('hidden');
        results.classList.remove('hidden');
        await supabase.storage.from('Receipts').remove([fileName]);
      } catch (error: any) {
        processingStatus.classList.add('hidden');
        errorStatus.classList.remove('hidden');
        errorMessage.textContent = error.message || 'Failed to process receipt';
      }
    });

    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 cyber-grid" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Custom AI
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Custom AI Solutions Built for Your Business
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            We design custom AI solutions tailored to your workflows, data, and goals — without forcing you into one-size-fits-all software.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setShowModal(true)} className="btn-cyber font-semibold py-4 px-10 rounded-xl inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
              Get Started
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
            </button>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-white/15 text-slate-100 font-semibold py-4 px-10 rounded-xl hover:bg-white/5 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Custom AI */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Custom AI</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400">
            Off-the-shelf AI tools don't always fit how a business actually works. Custom AI solutions are designed to match your processes, tools, and objectives exactly.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Build</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="gradient-border rounded-2xl p-8 group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mb-6">
                  <span className="material-symbols-outlined text-cyan-300">{s.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 mb-4">{s.description}</p>
                {s.hasReceiptDemo && (
                  <button onClick={showReceiptDemo} className="flex items-center gap-2 text-sm font-bold text-cyan-300 hover:gap-3 transition-all mt-2">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>receipt_long</span>
                    See Receipt Demo
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Demo */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Live Demo: Tax Consultation AI</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">See our custom AI solution in action — an intelligent tax consultation system</p>
          </div>
          <div className="max-w-4xl mx-auto glass-dark rounded-2xl p-8 glow-ring">
            <div className="aspect-video w-full bg-slate-900/60 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10 px-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-cyan-400/20 mx-auto mb-6">
                  <span className="material-symbols-outlined text-cyan-300" style={{ fontSize: '48px' }}>description</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Tax Consultation AI</h3>
                <p className="text-slate-400 mb-8">Interactive AI system for tax consultation and advice</p>
                <a href="https://taxpro.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-cyber font-semibold py-3 px-8 rounded-xl hover:-translate-y-0.5 transition-transform">
                  Launch Demo
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {['Custom AI Logic', 'Interactive Interface', 'Real-time Responses'].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-300" style={{ fontSize: '16px' }}>check_circle</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits for Your Business</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="rounded-xl border border-white/10 bg-slate-900/40 p-5 flex items-center gap-4">
                <span className="material-symbols-outlined text-cyan-300 flex-shrink-0">check_circle</span>
                <span className="text-slate-400">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="rounded-xl border border-white/10 bg-slate-900/40 p-8 text-center">
                <div className="text-3xl font-black text-cyan-300 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Looking for an AI solution that fits your business?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Fill out the form below and we'll be in touch to build a custom AI solution tailored to your needs.
            </p>
          </div>
          <AirtableForm
            src="https://airtable.com/embed/appRwTy67k4QiQOS5/pagjhoBTW2Qjb9LBM/form"
            title="Custom AI Solutions Discovery Form"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAIPage;
