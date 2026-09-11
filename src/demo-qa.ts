/**
 * Canned answers for the demo, covering tax, accounting and investing. Every
 * answer is grounded in the verbatim text in `demo-corpus.ts`; each citation
 * carries the phrase it was drawn from so the viewer can highlight the exact
 * passage, and so a build-time check can confirm the phrase really is on the
 * cited page.
 */

export interface DemoCitation {
  docId: string;
  page: number;
  /** Verbatim phrase on that page. Used for highlighting and verification. */
  anchor: string;
}

export interface DemoAnswer {
  id: string;
  /** Shown as a suggested question. */
  question: string;
  topic: 'Tax' | 'Accounting' | 'Investing';
  /** Lower-cased keywords; a free-text question matches if every group hits. */
  keywords: string[][];
  answer: string;
  citations: DemoCitation[];
}

export const DEMO_ANSWERS: DemoAnswer[] = [
  {
    id: 'meals-50',
    question: 'How much of a client meal can we actually deduct?',
    topic: 'Tax',
    keywords: [['meal', 'food', 'beverage', 'dinner', 'lunch', 'entertain'], ['deduct', 'write off', 'how much', 'percent', 'claim']],
    answer:
      'Generally 50 percent. The amount allowable as a deduction for a qualifying food or beverage expense may not exceed 50 percent of what would otherwise be allowable, unless one of the exceptions in the section applies.',
    citations: [
      { docId: 'tax-274-12', page: 1, anchor: 'may not exceed 50 percent of the amount of the expense' },
    ],
  },
  {
    id: 'meals-conditions',
    question: 'What conditions must a business meal meet to be deductible at all?',
    topic: 'Tax',
    keywords: [['meal', 'food', 'beverage'], ['condition', 'qualify', 'requirement', 'rule', 'deductible', 'lavish', 'present']],
    answer:
      'Three conditions must all hold: the expense is not lavish or extravagant under the circumstances, the taxpayer or an employee is present when the food or beverages are furnished, and the food or beverages are provided to the taxpayer or a business associate. Fail any one and no deduction is allowed.',
    citations: [
      { docId: 'tax-274-12', page: 1, anchor: 'lavish or extravagant under the circumstances' },
    ],
  },
  {
    id: 'ordinary-necessary',
    question: 'What counts as a deductible business expense?',
    topic: 'Tax',
    keywords: [['business expense', 'expense', 'deduction', 'deductible'], ['what count', 'what qualif', 'ordinary', 'necessary', 'definition', 'which', 'what is']],
    answer:
      'Business expenses deductible from gross income are the ordinary and necessary expenditures directly connected with, or pertaining to, the taxpayer’s trade or business — excluding items used as the basis for a deduction or credit under some other provision of law. Management expenses and commissions are among the items named.',
    citations: [
      { docId: 'tax-162-1', page: 1, anchor: 'ordinary and necessary expenditures directly connected' },
    ],
  },
  {
    id: 'report-technical',
    question: "What has to appear on the face of an accountant's report?",
    topic: 'Accounting',
    keywords: [['accountant', 'audit', 'auditor'], ['report', 'opinion'], ['require', 'must', 'include', 'appear', 'contain', 'technical']],
    answer:
      "The report must be dated, signed manually, indicate the city and State where it was issued, and identify — without detailed enumeration — the financial statements it covers.",
    citations: [{ docId: 'acct-2-02', page: 1, anchor: 'Shall be dated' }],
  },
  {
    id: 'audit-standards',
    question: 'Does the audit report have to state which standards were used?',
    topic: 'Accounting',
    keywords: [['audit', 'accountant', 'auditor'], ['standard', 'gaas', 'pcaob', 'professional']],
    answer:
      'Yes. The report must state the applicable professional standards under which the audit was conducted, and must designate any auditing procedures the accountant deemed necessary but omitted, together with the reasons for the omission.',
    citations: [
      { docId: 'acct-2-02', page: 1, anchor: 'applicable professional standards under which the audit was conducted' },
    ],
  },
  {
    id: 'audit-omitted',
    question: 'Can an accountant leave out audit procedures they thought were necessary?',
    topic: 'Accounting',
    keywords: [['omit', 'leave out', 'skip', 'exclude'], ['audit', 'procedure', 'accountant']],
    answer:
      'Only with disclosure. The report must designate any auditing procedures deemed necessary by the accountant that were omitted, and state the reasons for omitting them.',
    citations: [
      { docId: 'acct-2-02', page: 1, anchor: 'which have been omitted, and the reasons for their omission' },
    ],
  },
  {
    id: 'reg-bi',
    question: 'What does Regulation Best Interest actually require?',
    topic: 'Investing',
    keywords: [['best interest', 'reg bi', 'regulation best'], ['require', 'what', 'obligation', 'mean', 'rule']],
    answer:
      'When recommending a securities transaction or investment strategy — including account recommendations — to a retail customer, a broker-dealer or associated person must act in the retail customer’s best interest at the time the recommendation is made, and must not place their own financial or other interest ahead of the customer’s.',
    citations: [
      { docId: 'inv-15l-1', page: 1, anchor: 'shall act in the best interest of the retail customer' },
    ],
  },
  {
    id: 'reg-bi-conflicts',
    question: 'What does Reg BI say about conflicts of interest?',
    topic: 'Investing',
    keywords: [['conflict'], ['interest', 'reg bi', 'best interest', 'broker', 'disclos']],
    answer:
      'It imposes a conflict of interest obligation: the broker or dealer must establish, maintain and enforce written policies and procedures reasonably designed to address conflicts of interest associated with its recommendations to retail customers.',
    citations: [
      { docId: 'inv-15l-1', page: 3, anchor: 'Conflict of interest obligation' },
    ],
  },
];

/** Mirrors the application’s wording when the documents do not answer a question. */
export const REFUSAL = "I don't know based on the provided documents.";

/**
 * Match a free-text question against the canned set. A group matches if any of
 * its terms appear; an answer is returned only when every group matches, which
 * keeps unrelated questions falling through to the refusal path.
 */
export function matchAnswer(q: string): DemoAnswer | null {
  const s = q.toLowerCase();
  let best: DemoAnswer | null = null;
  let bestScore = 0;
  for (const a of DEMO_ANSWERS) {
    const groupsHit = a.keywords.filter((g) => g.some((k) => s.includes(k))).length;
    if (groupsHit === a.keywords.length && groupsHit > bestScore) {
      best = a;
      bestScore = groupsHit;
    }
  }
  return best;
}
