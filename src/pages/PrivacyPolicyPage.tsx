import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-20">
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">
            Effective Date: January 1, 2026 &nbsp;·&nbsp; Last Updated: May 22, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 space-y-10">

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-zinc-400 leading-relaxed">
                Neural Index collects information you provide directly when you create an account, subscribe to a plan, or contact us — including your name, email address, billing details, and any content or documents you upload to our platform. We also automatically collect certain technical data when you use our services, such as your IP address, browser type, device identifiers, pages visited, and interaction timestamps. This technical data is gathered through cookies, log files, and similar tracking technologies to ensure the security and performance of our platform. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                The information we collect is used solely to deliver, improve, and support the Neural Index platform. Specifically, we use your data to provision your account and subscription, process payments securely through Stripe, respond to support requests, send service-related communications (such as receipts and security alerts), and improve the accuracy and relevance of our AI document intelligence features. We may use aggregated, anonymized usage data to analyze platform trends and guide product development. We will never use your uploaded documents to train third-party AI models, and all document processing occurs within the scope of your explicit service agreement with us.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Data Storage and Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your data is stored on infrastructure provided by Supabase, which is hosted on industry-standard cloud environments with SOC 2 Type II compliance. All data in transit is encrypted using TLS 1.2 or higher, and all data at rest is encrypted using AES-256. Access to your personal data is restricted to authorized Neural Index personnel who require it to perform their job functions, and all access is logged and audited. We implement row-level security controls to ensure that no user can access another user's data. While we take every reasonable precaution to protect your information, no system is completely immune to breaches, and we encourage users to maintain strong, unique passwords and enable any available multi-factor authentication.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services and Disclosure</h2>
              <p className="text-zinc-400 leading-relaxed">
                Neural Index integrates with select third-party service providers to operate our platform. These include Stripe for payment processing, Supabase for database and authentication infrastructure, and OpenAI for AI inference capabilities. Each of these providers has its own privacy policy and data handling practices, and we encourage you to review them. We share only the minimum necessary data with each provider to perform the contracted service. We may be required to disclose personal information if compelled by law, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect the safety of our users or the public, prevent fraud, or enforce our terms of service.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights and Contact</h2>
              <p className="text-zinc-400 leading-relaxed">
                You have the right to access, correct, export, or delete the personal data we hold about you at any time. To exercise any of these rights, or if you have questions or concerns about this Privacy Policy, please contact us at{' '}
                <a href="mailto:willscybertech@gmail.com" className="text-emerald-400 hover:underline font-medium">
                  willscybertech@gmail.com
                </a>
                . We will respond to all verifiable requests within 30 days. If you are located in the European Economic Area or the United Kingdom, you may also have the right to lodge a complaint with your local data protection authority. We reserve the right to update this Privacy Policy from time to time; material changes will be communicated via email or a prominent notice on our platform, and the updated effective date will always appear at the top of this page.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
