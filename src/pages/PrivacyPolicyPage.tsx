import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-zinc-900">
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 space-y-10">

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Neural Index ("we," "us," or "our") is an on-premise AI document assistant platform built for organizations that require total data sovereignty. This Privacy Policy describes how we collect, use, and protect information when you access our website, platform, or services. By using Neural Index, you agree to the practices described in this policy. If you do not agree, please discontinue use of our services.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="text-zinc-400 leading-relaxed">
                We collect information you provide directly when you create an account, subscribe to a plan, or contact us. This includes your name, email address, organization name, billing details, and any documents or files you upload to our platform. We also collect information necessary to provision your deployment environment, including configuration preferences and integration settings. We do not collect or access the contents of your documents for any purpose other than delivering the Neural Index service you have subscribed to.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Automatically Collected Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                When you use our platform or visit our website, we automatically collect certain technical data including your IP address, browser type, device identifiers, pages visited, and interaction timestamps. This data is gathered through cookies, server log files, and similar tracking technologies. It is used solely to maintain security, monitor platform performance, and diagnose technical issues. We do not use this data for advertising or behavioral profiling.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed">
                The information we collect is used solely to deliver, improve, and support the Neural Index platform. Specifically, we use your data to provision your account and deployment, process payments securely through Stripe, respond to support requests, send service-related communications (such as receipts and security alerts), and improve the reliability of our document intelligence features. We may use aggregated, anonymized usage data to guide product development. We will never use your uploaded documents to train third-party AI models, and your document data never leaves your designated infrastructure unless you explicitly configure it to do so.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Information Sharing</h2>
              <p className="text-zinc-400 leading-relaxed">
                Neural Index does not sell, rent, or trade your personal information to third parties for marketing purposes. We share data only with the minimum number of trusted service providers needed to operate our platform — including Stripe for payment processing and Supabase for authentication infrastructure. Each provider is subject to strict data processing agreements. We may disclose information if required by law, court order, or governmental authority, or if we believe in good faith that disclosure is necessary to protect user safety, prevent fraud, or enforce our terms of service.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">6. Data Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                Your data is stored on infrastructure with industry-standard security controls. All data in transit is encrypted using TLS 1.2 or higher, and all data at rest is encrypted using AES-256. For on-premise deployments, your data never leaves your own network or server environment. Access to your personal data is restricted to authorized Neural Index personnel who require it to perform their job functions, and all access is logged and audited. We implement row-level security controls to ensure no user can access another user's data. While we take every reasonable precaution, no system is completely immune to breaches — we encourage users to maintain strong, unique passwords and enable multi-factor authentication where available.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="text-zinc-400 leading-relaxed">
                Our website uses essential cookies to maintain your session, remember your preferences, and ensure secure access to your account. We do not use third-party advertising cookies or cross-site tracking technologies. You may disable cookies in your browser settings, though doing so may limit the functionality of the platform. We use server-side analytics only, and do not embed third-party tracking scripts that report your behavior to external ad networks.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">8. Your Rights</h2>
              <p className="text-zinc-400 leading-relaxed">
                You have the right to access, correct, export, or delete the personal data we hold about you at any time. To exercise any of these rights, contact us at{' '}
                <a href="mailto:willscybertech@gmail.com" className="text-emerald-400 hover:underline font-medium">
                  willscybertech@gmail.com
                </a>
                . We will respond to all verifiable requests within 30 days. If you are located in the European Economic Area or the United Kingdom, you may also have the right to lodge a complaint with your local data protection authority (DPA). California residents may exercise rights under the CCPA including the right to know, delete, and opt out of sale (we do not sell personal data).
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We reserve the right to update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable law. Material changes will be communicated via email or a prominent notice on our platform at least 14 days before taking effect. The updated effective date will always appear at the top of this page. Continued use of Neural Index after changes take effect constitutes your acceptance of the revised policy.
              </p>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at{' '}
                <a href="mailto:willscybertech@gmail.com" className="text-emerald-400 hover:underline font-medium">
                  willscybertech@gmail.com
                </a>
                . Neural Index is operated by Wills Cyber Tech. We are committed to resolving privacy concerns promptly and transparently.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;
