import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GetStartedModal from '../components/GetStartedModal';

const highlights = [
  {
    icon: 'school',
    title: 'PhD in Cyber Physical Systems',
    description: 'Specializing in AI and robotics with focus on real-world deployment',
  },
  {
    icon: 'code',
    title: 'Systems Integration Expert',
    description: 'Background in machine learning, automation, and reliable system design',
  },
  {
    icon: 'lightbulb',
    title: 'Practical AI Solutions',
    description: 'Builds AI that reduces workload and improves operational efficiency',
  },
];

const principles = [
  'Reliability over complexity',
  'Data privacy and security',
  'Long-term maintainability',
  'Seamless workflow integration',
  'Clear business outcomes',
  'Invisible, background operation',
];

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Founder</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Meet Justin Williams, the AI engineer behind Neural Index
          </p>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <img
                src="/52A104B0-6CDA-4CFD-B328-2F63FDC47D2A_1_105_c.jpeg"
                alt="Justin Williams"
                className="w-full h-96 object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Justin Williams</h2>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Justin Williams is an AI Engineer and Systems Architect who transforms theoretical machine learning into high-performance operational standards. With a specialized focus on Edge AI and Real-Time Intelligence, Justin builds systems designed for high-stakes environments where reliability and low-latency performance are the primary metrics of success. His work moves beyond simple automation, focusing on deep-tech integration that reduces cognitive load and maximizes system efficiency.
              </p>
              <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                Drawing from his doctoral research in Cyber-Physical Systems, Justin is at the forefront of Vision-Language-Action (VLA) modeling. He specializes in the optimization of large-scale models for deployment on edge hardware, achieving sub-200ms inference speeds for autonomous navigation and decision-making. Through his agency, Wills Cyber Tech, he applies this same technical rigor to the commercial sector, leveraging AI to manage complex advertising ecosystems and scale business operations with mathematical precision.
              </p>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Justin's approach is anchored in the philosophy of "Physical AI"—the belief that artificial intelligence should not just generate content, but actively interact with and improve the physical and digital worlds. By bridging the gap between academic innovation and commercial deployment, he ensures that the solutions he builds are both future-proof and grounded in practical utility. Whether he is fine-tuning a multimodal model for robotics or architecting an AI-driven growth engine for a brand, Justin remains dedicated to the discipline of building AI that works in the real world.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="https://arxiv.org/abs/2511.05642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-blue-500/30 transition-colors group"
                >
                  <div className="bg-blue-900/30 border border-blue-700/20 p-3 rounded-lg shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '22px' }}>article</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">arXiv Publication</p>
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Lite VLA: Efficient Vision-Language-Action Control on CPU-Bound Edge Robots</p>
                    <p className="text-xs text-zinc-400 mt-1">arXiv:2511.05642 · cs.RO, cs.AR, cs.CV, eess.SY</p>
                  </div>
                </a>
                <a
                  href="https://niceworkshop.org/nice-2026/nice-2026-tutorials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-blue-500/30 transition-colors group"
                >
                  <div className="bg-blue-900/30 border border-blue-700/20 p-3 rounded-lg shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '22px' }}>school</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">NICE 2026 — Tutorial Presenter</p>
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">LiteVLA at the Edge: CPU-Only Vision–Language–Action Control as a Testbed for Neuro-Inspired Robotics</p>
                    <p className="text-xs text-zinc-400 mt-1">Clark Atlanta University · March 27, 2026</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/justin-williams-a35581138/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-sm font-bold text-slate-100 hover:border-blue-500/30 hover:text-blue-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=5&gmla=AIqSsVtbNlLPkjyBjKc4KueMITxLVcfIP7fd-c8qYpKwrsnvOGmpBi9o8NLZaB-QlHlBA-PePXukhkt1HeSXOw&user=hIi_qHUAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 text-sm font-bold text-slate-100 hover:border-blue-500/30 hover:text-blue-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838.4V22h14.324V9.9L24 9.5 12 0z"/>
                  </svg>
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Expertise */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Education &amp; Expertise</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item) => (
              <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
                <div className="bg-blue-900/30 border border-blue-700/20 p-2.5 rounded-lg inline-flex mb-6">
                  <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '28px' }}>{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-10">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Justin is currently pursuing a PhD in Cyber Physical Systems with a specialization in AI and robotics. His research centers on deploying intelligent systems in real-world and resource-constrained environments. These principles directly shape how he designs solutions for small and mid-sized businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Approach &amp; Philosophy</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">Custom Solutions</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Rather than offering generic software, Justin works closely with organizations to understand their existing workflows and operational pain points. He then designs custom AI systems that integrate seamlessly into how teams already operate.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                These solutions often automate customer communication, internal processes, and data handling — allowing organizations to focus on higher-value work.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-5">Core Principles</h3>
              <div className="space-y-3">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-400" style={{ fontSize: '18px' }}>check_circle</span>
                    <span className="text-zinc-400">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-10 border-l-4 border-l-blue-500">
            <blockquote className="text-lg text-zinc-400 italic text-center">
              "The most valuable AI is invisible. It works quietly in the background, saves time, prevents missed opportunities, and delivers clear business outcomes."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Beyond Business */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Beyond Business</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            When he is not building or deploying AI systems, Justin remains active in research and mentorship, exploring how emerging AI technologies can be applied responsibly to everyday business operations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Justin?</h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how custom AI solutions can transform your business operations.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-black font-semibold py-4 px-12 rounded-xl transition-colors"
          >
            Get Started
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
