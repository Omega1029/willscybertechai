/**
 * Semantic search for the demo, running entirely in the visitor's browser.
 *
 * Page vectors are precomputed at build time (`demo-embeddings.json`); only the
 * visitor's question is embedded at runtime, by a ~23MB MiniLM model fetched
 * once and then cached by the browser. Nothing is sent to a server — which is
 * the same property the desktop product has, at a much smaller scale.
 */
import embeddingData from './demo-embeddings.json';
import { getDoc } from './demo-corpus';

type Extractor = (
  text: string,
  opts: { pooling: 'mean'; normalize: boolean },
) => Promise<{ data: Float32Array | number[] }>;

const { scale, entries } = embeddingData as {
  dim: number;
  scale: number;
  entries: { docId: string; page: number; v: number[] }[];
};

let extractorPromise: Promise<Extractor> | null = null;

/** Loads the embedding model once. `onProgress` receives 0–1 while it downloads. */
export function loadEmbedder(onProgress?: (pct: number) => void): Promise<Extractor> {
  if (!extractorPromise) {
    extractorPromise = (async () => {
      const { pipeline } = await import('@huggingface/transformers');
      return (await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
        dtype: 'fp32',
        progress_callback: (p: { status: string; progress?: number }) => {
          if (p.status === 'progress' && typeof p.progress === 'number') {
            onProgress?.(Math.min(1, p.progress / 100));
          }
        },
      })) as unknown as Extractor;
    })();
  }
  return extractorPromise;
}

export interface Hit {
  docId: string;
  page: number;
  score: number;
  /** The single sentence on that page closest to the question. */
  sentence: string;
}

/** Picks the sentence on a page with the most overlap with the question. */
function bestSentence(text: string, query: string): string {
  const qWords = new Set(
    query.toLowerCase().split(/\W+/).filter((w) => w.length > 3),
  );
  const sentences = text.split(/(?<=\.)\s+(?=[A-Z(])/).filter((s) => s.length > 40);
  let best = sentences[0] ?? text;
  let bestScore = -1;
  for (const s of sentences) {
    const words = new Set(s.toLowerCase().split(/\W+/));
    let hits = 0;
    qWords.forEach((w) => {
      if (words.has(w)) hits++;
    });
    const score = hits / Math.sqrt(s.length);
    if (score > bestScore) {
      best = s;
      bestScore = score;
    }
  }
  return best.trim();
}

/** Embeds the question in-browser and ranks the precomputed page vectors. */
export async function search(query: string, topK = 3): Promise<Hit[]> {
  const extract = await loadEmbedder();
  const out = await extract(query, { pooling: 'mean', normalize: true });
  const q = Array.from(out.data as ArrayLike<number>);

  const scored = entries.map((e) => {
    // Both sides are unit vectors, so the dot product is the cosine similarity.
    let dot = 0;
    for (let i = 0; i < q.length; i++) dot += q[i] * (e.v[i] / scale);
    return { docId: e.docId, page: e.page, score: dot };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((h) => ({
    ...h,
    sentence: bestSentence(getDoc(h.docId)?.pages[h.page - 1] ?? '', query),
  }));
}

/**
 * Below this cosine similarity the corpus is treated as not covering the question.
 *
 * Calibrated against the shipped corpus. Off-topic questions peak at 0.36
 * ("can I write off a hotel room" — nothing here covers lodging), while loosely
 * phrased but genuinely on-topic ones bottom out at 0.41 ("what are my
 * obligations to clients"). 0.385 sits in that gap.
 */
export const RELEVANCE_FLOOR = 0.385;

/**
 * Questions about the assistant itself rather than the documents. Retrieval can
 * never answer these, so they get a direct reply instead of a refusal.
 */
export function isMetaQuestion(q: string): boolean {
  const s = q.toLowerCase().trim();
  return [
    'what do you know',
    'what can you do',
    'what can you help',
    'what do you have',
    'what is this',
    "what's this",
    'who are you',
    'what are you',
    'how does this work',
    'what documents',
    'what can i ask',
    'help',
  ].some((p) => s.includes(p));
}

/**
 * Last-resort routing for short or vaguely worded questions that name a subject
 * the corpus clearly covers ("investing rules", "what about brokers"). Their
 * similarity can fall under the floor purely because the phrasing is thin, and
 * refusing an obviously on-topic question reads worse than showing the passage.
 */
const TOPIC_HINTS: { docId: string; terms: string[] }[] = [
  { docId: 'inv-15l-1', terms: ['invest', 'broker', 'dealer', 'securit', 'best interest', 'recommend', 'retail customer', 'client obligation'] },
  { docId: 'acct-2-02', terms: ['audit', 'accountant', 'accounting', 'financial statement', 'opinion', 'report'] },
  { docId: 'tax-274-12', terms: ['meal', 'food', 'beverage', 'entertain', 'restaurant', 'lunch', 'dinner'] },
  { docId: 'tax-162-1', terms: ['tax', 'deduct', 'expense', 'write off', 'business expense'] },
];

export function topicHint(q: string): string | null {
  const s = q.toLowerCase();
  for (const t of TOPIC_HINTS) {
    if (t.terms.some((term) => s.includes(term))) return t.docId;
  }
  return null;
}
