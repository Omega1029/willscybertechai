import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-zinc-900">
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-400">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 space-y-10">

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-400 leading-relaxed">
                By accessing or using Neural Index ("the Service"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these terms. If you do not agree to these terms, do not use the Service.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-zinc-400 leading-relaxed">
                Neural Index provides on-premise AI document intelligence software designed for accounting, finance, and related professional services firms. The Service enables users to query, analyze, and extract insights from financial documents using large language models deployed within the customer's own infrastructure. Neural Index does not transmit customer document data to external servers unless explicitly configured to do so.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Account Registration</h2>
              <p className="text-zinc-400 leading-relaxed">
                To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account credentials confidential. You are responsible for all activity that occurs under your account. Neural Index is not liable for losses arising from unauthorized account access resulting from your failure to protect your credentials.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. Permitted Use</h2>
              <p className="text-zinc-400 leading-relaxed">
                You may use Neural Index solely for lawful business purposes consistent with its intended function as a financial document intelligence platform. You agree not to: (a) reverse engineer, decompile, or disassemble any component of the Service; (b) use the Service to process data in violation of applicable laws or regulations; (c) attempt to gain unauthorized access to any system or network; (d) resell or sublicense the Service without prior written consent from Neural Index; or (e) use the Service to generate outputs that are fraudulent, defamatory, or in violation of any third-party rights.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-zinc-400 leading-relaxed">
                All software, interfaces, documentation, and content comprising the Neural Index platform are the exclusive intellectual property of Wills Cyber Tech and are protected by applicable copyright, trademark, and trade secret laws. These Terms do not grant you any ownership interest in the Service. You retain all rights to documents and data you upload to the platform — Neural Index claims no intellectual property rights over your content.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">6. Fees and Payment</h2>
              <p className="text-zinc-400 leading-relaxed">
                Subscription fees are charged in advance on a monthly or annual basis as specified in your chosen plan. All payments are processed securely through Stripe. Fees are non-refundable except as expressly required by applicable law. Neural Index reserves the right to modify pricing with 30 days' advance notice. Failure to pay may result in suspension or termination of your access to the Service.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">7. Data and Privacy</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your use of the Service is also governed by our{' '}
                <a href="/privacy" className="text-emerald-400 hover:underline font-medium">Privacy Policy</a>
                , which is incorporated into these Terms by reference. For on-premise deployments, your documents and outputs remain entirely within your designated infrastructure. Neural Index personnel do not access your document data except as necessary to resolve a specific support request you have initiated, and with your explicit consent.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">8. Disclaimers</h2>
              <p className="text-zinc-400 leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. Neural Index does not warrant that outputs generated by the AI are accurate, complete, or free from errors. You are solely responsible for verifying any information, analysis, or documents generated by the Service before relying on them for business, tax, audit, legal, or regulatory purposes.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-zinc-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEURAL INDEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE. OUR TOTAL CUMULATIVE LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE FEES YOU PAID TO NEURAL INDEX IN THE TWELVE MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="text-zinc-400 leading-relaxed">
                Either party may terminate these Terms at any time with reasonable notice. Neural Index may immediately suspend or terminate your account if you breach these Terms, engage in fraudulent activity, or fail to pay fees when due. Upon termination, your right to access the Service ceases immediately. Provisions that by their nature should survive termination (including intellectual property, disclaimers, and limitation of liability) shall survive.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p className="text-zinc-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration, except that either party may seek injunctive relief in a court of competent jurisdiction to protect intellectual property rights or confidential information.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">12. Contact</h2>
              <p className="text-zinc-400 leading-relaxed">
                For questions about these Terms, please contact us at{' '}
                <a href="mailto:willscybertech@gmail.com" className="text-emerald-400 hover:underline font-medium">
                  willscybertech@gmail.com
                </a>
                . Neural Index is operated by Wills Cyber Tech.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
