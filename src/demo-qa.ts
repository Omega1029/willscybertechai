/**
 * Canned answers for the demo. Every answer is grounded in the verbatim text in
 * `demo-corpus.ts`; each citation carries the phrase it was drawn from so the
 * viewer can highlight the exact passage, and so a build-time check can confirm
 * the phrase really is on the cited page.
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
  /** Lower-cased keywords; a free-text question matches if it contains enough of them. */
  keywords: string[][];
  answer: string;
  citations: DemoCitation[];
}

export const DEMO_ANSWERS: DemoAnswer[] = [
  {
    id: 'annual-review',
    question: 'How often do we have to review our compliance policies?',
    keywords: [['review', 'annual', 'annually'], ['polic', 'procedure', 'compliance']],
    answer:
      'No less frequently than annually. The rule requires you to review the adequacy of your written policies and procedures and the effectiveness of their implementation at least once a year.',
    citations: [
      { docId: 'reg-206-4-7', page: 1, anchor: 'no less frequently than annually' },
    ],
  },
  {
    id: 'cco',
    question: 'Do we need to designate a chief compliance officer?',
    keywords: [['chief compliance', 'cco', 'compliance officer', 'designate']],
    answer:
      'Yes. You must designate an individual — who must be a supervised person — responsible for administering the written policies and procedures you adopt.',
    citations: [{ docId: 'reg-206-4-7', page: 1, anchor: 'Designate an individual' }],
  },
  {
    id: 'safeguards',
    question: 'What must our written information security policies cover?',
    keywords: [['safeguard', 'security', 'information security'], ['polic', 'procedure', 'written']],
    answer:
      'They must address administrative, technical and physical safeguards for the protection of customer information, and be reasonably designed to ensure its security and confidentiality, protect against anticipated threats, and protect against unauthorised access or use that could cause substantial harm or inconvenience to a customer.',
    citations: [
      { docId: 'reg-s-p-248-30', page: 1, anchor: 'administrative, technical, and physical safeguards' },
    ],
  },
  {
    id: 'response-program',
    question: 'What has to be in our incident response program?',
    keywords: [['incident', 'response program', 'breach', 'unauthorized', 'unauthorised']],
    answer:
      'A program reasonably designed to detect, respond to and recover from unauthorised access to or use of customer information. It must include procedures to assess the nature and scope of the incident, contain and control it to prevent further unauthorised access, and notify affected individuals.',
    citations: [
      { docId: 'reg-s-p-248-30', page: 2, anchor: 'detect, respond to, and recover from' },
    ],
  },
  {
    id: 'breach-notice',
    question: 'How quickly must we notify customers after a breach?',
    keywords: [['notify', 'notice', 'notification'], ['breach', 'customer', 'days', 'quick', 'deadline', 'soon']],
    answer:
      'As soon as practicable, and not later than 30 days after becoming aware that unauthorised access to or use of customer information has occurred or is reasonably likely to have occurred. The deadline can be delayed only if the Attorney General determines the notice poses a substantial risk and notifies the Commission in writing.',
    citations: [
      { docId: 'reg-s-p-248-30', page: 6, anchor: 'as soon as practicable, but not later than 30 days' },
    ],
  },
  {
    id: 'coe-minimum',
    question: 'What must our code of ethics include at a minimum?',
    keywords: [['code of ethics', 'ethics'], ['minimum', 'include', 'require', 'must']],
    answer:
      'At a minimum: a standard of business conduct reflecting your fiduciary obligations, provisions requiring supervised persons to comply with applicable Federal securities laws, provisions requiring access persons to report their personal securities transactions and holdings for your review, and provisions requiring prompt reporting of code violations to your chief compliance officer.',
    citations: [
      { docId: 'reg-204a-1', page: 1, anchor: 'written code of ethics that, at a minimum' },
    ],
  },
  {
    id: 'access-persons',
    question: 'When must access persons file their transaction reports?',
    keywords: [['access person', 'transaction report', 'personal securities', 'holdings']],
    answer:
      'Each access person must submit a transaction report no later than 30 days after the end of each calendar quarter, covering at a minimum all transactions during that quarter.',
    citations: [
      { docId: 'reg-204a-1', page: 4, anchor: 'no later than 30 days after the end of each calendar quarter' },
    ],
  },
  {
    id: 'ad-prohibitions',
    question: 'What are we prohibited from saying in an advertisement?',
    keywords: [['advertis', 'marketing', 'ad '], ['prohibit', 'cannot', "can't", 'not say', 'rules']],
    answer:
      'An advertisement may not include an untrue statement of a material fact, or omit a material fact needed to keep the statement from being misleading. It also may not include a material statement of fact the adviser lacks a reasonable basis for believing it can substantiate on demand by the Commission.',
    citations: [
      { docId: 'reg-206-4-1', page: 1, anchor: 'untrue statement of a material fact' },
    ],
  },
  {
    id: 'testimonials',
    question: 'Are testimonials allowed in our marketing?',
    keywords: [['testimonial', 'endorsement', 'review', 'referral']],
    answer:
      'The marketing rule addresses testimonials and endorsements directly, setting conditions on their use — including required disclosures and oversight — rather than banning them outright. Open the citation to read the conditions in full.',
    citations: [
      { docId: 'reg-206-4-1', page: 2, anchor: 'Testimonials and endorsements' },
    ],
  },
];

/** Mirrors the application's wording when the documents do not answer a question. */
export const REFUSAL =
  "I don't know based on the provided documents.";

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
