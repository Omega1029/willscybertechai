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
 * Below this cosine similarity the corpus is treated as not covering the question,
 * and the demo refuses rather than quoting a loosely-related passage.
 *
 * Calibrated against the shipped corpus: questions the documents genuinely answer
 * score 0.57 and above, while off-topic ones peak at 0.36. 0.47 sits in that gap.
 */
export const RELEVANCE_FLOOR = 0.47;
