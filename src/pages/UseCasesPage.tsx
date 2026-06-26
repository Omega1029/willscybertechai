import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  FileText,
  Search,
  BarChart2,
  DollarSign,
  Calculator,
  Building2,
  Briefcase,
  Home,
  ShieldCheck,
  Users,
  BookOpen,
} from 'lucide-react';

const practiceAreas = [
  {
    icon: Calculator,
    title: 'Public Accounting / CPA Firms',
    bullets: [
      'Analyze client financial statements for audit risk indicators',
      'Summarize prior-year workpapers for continuity',
      'Extract trial balance data from multiple client files',
      'Cross-reference transactions against GAAP standards',
      'Draft management letter comments from audit findings',
    ],
  },
  {
    icon: FileText,
    title: 'Tax Preparation & Planning',
    bullets: [
      'Extract data from W-2s, 1099s, K-1s, and prior returns',
      'Identify deduction opportunities from expense records',
      'Summarize tax code changes relevant to client situations',
      'Generate draft client letters explaining tax positions',
      'Compare year-over-year tax metrics for planning',
    ],
  },
  {
    icon: Search,
    title: 'Audit & Assurance',
    bullets: [
      'Summarize large populations of transactions for sample selection',
      'Flag discrepancies between financial statements and supporting docs',
      'Generate audit program steps from engagement risk assessments',
      'Cross-reference client responses to confirmation requests',
      'Draft audit opinions from finalized workpapers',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Corporate Finance / CFO Offices',
    bullets: [
      'Query monthly financials for variance explanations',
      'Summarize board packages and management reports',
      'Extract budget vs. actual comparisons across departments',
      'Analyze vendor contracts for payment terms and obligations',
      'Draft financial commentary for investor reports',
    ],
  },
  {
    icon: BarChart2,
    title: 'Financial Planning & Advisory',
    bullets: [
      'Analyze client investment portfolios against stated objectives',
      'Summarize financial plan documents for client review meetings',
      'Extract data from estate documents for planning purposes',
      'Compare client spending patterns to financial goals',
      'Generate draft financial plan summaries',
    ],
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping & Payroll',
    bullets: [
      'Extract and categorize transactions from bank statements',
      'Identify payroll discrepancies across pay periods',
      'Summarize benefits documents for open enrollment',
      'Cross-reference invoices against purchase orders',
      'Generate reconciliation summaries for review',
    ],
  },
  {
    icon: Briefcase,
    title: 'Mergers & Acquisitions',
    bullets: [
      'Analyze target company financials for due diligence',
      'Extract key terms from LOIs, purchase agreements, and NDAs',
      'Summarize quality of earnings reports',
      'Compare financial projections to historical performance',
      'Generate deal summary memos from transaction documents',
    ],
  },
  {
    icon: Building2,
    title: 'Real Estate Finance',
    bullets: [
      'Analyze property financial statements and rent rolls',
      'Extract loan terms and covenant requirements from agreements',
      'Summarize appraisal reports and environmental assessments',
      'Compare NOI performance across property portfolio',
      'Draft investor update letters from property reports',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Insurance & Risk',
    bullets: [
      'Analyze policy documents for coverage gaps and exclusions',
      'Extract claims data from adjuster reports',
      'Summarize actuarial reports for management review',
      'Cross-reference risk assessments against policy limits',
      'Generate risk summary reports for executive review',
    ],
  },
];

const UseCasesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Use Cases
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
            AI Built for Every Finance Practice
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            See how a private, on-premise AI assistant transforms the way your firm handles work across accounting and finance disciplines.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-3">
            {practiceAreas.map(({ icon: Icon, title, bullets }, i) => (
              <div
                key={title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left group hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex shrink-0">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-lg font-semibold text-white">{title}</span>
                  </div>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0 group-hover:text-zinc-200 transition-colors" />
                  )}
                </button>

                {openIndex === i && (
                  <div className="px-8 pb-8 border-t border-zinc-800">
                    <ul className="mt-6 space-y-3">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-400">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let's show you how Neural Index handles your firm's specific documents and workflows — entirely on your own infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 px-12 rounded-xl transition-colors"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default UseCasesPage;
