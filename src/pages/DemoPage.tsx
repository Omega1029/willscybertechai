import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Send,
  X,
  Lock,
  Sparkles,
  ShieldCheck,
  Cpu,
  Loader2,
} from 'lucide-react';
import { DEMO_DOCS, getDoc } from '../demo-corpus';
import { DEMO_ANSWERS, REFUSAL, matchAnswer, DemoCitation } from '../demo-qa';
import { loadEmbedder, search, RELEVANCE_FLOOR } from '../demo-search';

const QUERY_LIMIT = 5;
const STORAGE_KEY = 'ni-demo-queries-used';

interface Msg {
  role: 'user' | 'assistant';
  text: string;
  citations?: DemoCitation[];
  refused?: boolean;
  /** Verbatim passage pulled by retrieval rather than a written answer. */
  quoted?: boolean;
}

/** Wraps the cited phrase in a highlight without trusting the text as markup. */
function Highlighted({ text, anchor }: { text: string; anchor: string }) {
  const i = text.toLowerCase().indexOf(anchor.toLowerCase());
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-emerald-500/25 text-emerald-100 rounded px-0.5">
        {text.slice(i, i + anchor.length)}
      </mark>
      {text.slice(i + anchor.length)}
    </>
  );
}

export const DemoPage: React.FC = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [source, setSource] = useState<DemoCitation | null>(null);
  const [used, setUsed] = useState(0);
  const [modelState, setModelState] = useState<'idle' | 'loading' | 'ready' | 'failed'>('idle');
  const [modelPct, setModelPct] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);

  // Warm the in-browser model up front so the first question is not the slow one.
  useEffect(() => {
    let cancelled = false;
    setModelState('loading');
    loadEmbedder((pct) => !cancelled && setModelPct(pct))
      .then(() => !cancelled && setModelState('ready'))
      .catch(() => !cancelled && setModelState('failed'));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    try {
      const v = parseInt(window.localStorage.getItem(STORAGE_KEY) ?? '0', 10);
      if (!Number.isNaN(v)) setUsed(v);
    } catch {
      /* private browsing — start fresh, the cap still holds for this session */
    }
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, thinking]);

  const remaining = Math.max(0, QUERY_LIMIT - used);
  const exhausted = remaining === 0;

  const ask = async (q: string) => {
    const question = q.trim();
    if (!question || thinking || exhausted) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    setThinking(true);

    const next = used + 1;
    setUsed(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      /* nothing to persist to — the in-memory count still applies */
    }

    const canned = matchAnswer(question);
    let reply: Msg;

    try {
      const hits = await search(question);
      const top = hits[0];

      if (canned) {
        // A written answer exists; keep its prose and its verified citation.
        reply = { role: 'assistant', text: canned.answer, citations: canned.citations };
      } else if (top && top.score >= RELEVANCE_FLOOR) {
        // No written answer, but retrieval found a relevant passage — quote it
        // rather than generate prose we cannot stand behind.
        reply = {
          role: 'assistant',
          text: top.sentence,
          quoted: true,
          citations: [{ docId: top.docId, page: top.page, anchor: top.sentence.slice(0, 90) }],
        };
      } else {
        reply = { role: 'assistant', text: REFUSAL, refused: true };
      }
    } catch {
      // Model unavailable — fall back to the keyword match alone.
      reply = canned
        ? { role: 'assistant', text: canned.answer, citations: canned.citations }
        : { role: 'assistant', text: REFUSAL, refused: true };
    }

    setMessages((prev) => [...prev, reply]);
    setThinking(false);
  };

  const sourceDoc = source ? getDoc(source.docId) : null;

  return (
    <div className="bg-[#0a0a0a] text-slate-100 min-h-screen" style={{ marginTop: '-5rem' }}>
      {/* Header */}
      <section className="border-b border-zinc-900 pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Demo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ask the tax code <span className="text-gradient-bright">anything.</span>
          </h1>
          <p className="text-zinc-400 leading-relaxed max-w-3xl">
            A working slice of the real interface, loaded with genuine federal rules on
            tax, accounting and investing. A small language model loads into this page
            and does the searching right here &mdash; nothing you type is sent to a
            server. Ask a question and you get an answer with citations you can open and
            read.
          </p>
        </div>
      </section>

      {/* Workspace */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-6">
            {/* Document rail */}
            <aside className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 h-fit">
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500 font-semibold mb-4">
                Sample workspace
              </p>
              <ul className="space-y-2">
                {DEMO_DOCS.map((d) => (
                  <li key={d.id}>
                    <button
                      onClick={() => setSource({ docId: d.id, page: 1, anchor: '' })}
                      className="w-full text-left rounded-lg border border-zinc-800 bg-zinc-950 hover:border-emerald-500/40 transition-colors p-3"
                    >
                      <span className="flex items-start gap-2">
                        <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <span className="block text-sm text-zinc-200 leading-snug">{d.name}</span>
                          <span className="block text-[11px] text-zinc-500 mt-1">
                            {d.citation} · {d.pages.length} pages
                          </span>
                          <span className="inline-block mt-2 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-900/30 border border-emerald-700/25 text-emerald-400">
                            {d.topic}
                          </span>
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-zinc-600 leading-relaxed mt-5">
                Public rule text from eCFR, reproduced verbatim.
              </p>
            </aside>

            {/* Chat */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 flex flex-col min-h-[32rem]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-white">Chat</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-950 text-zinc-400">
                    {modelState === 'ready' && (
                      <>
                        <Cpu className="w-3 h-3 text-emerald-400" />
                        Model running in this browser
                      </>
                    )}
                    {modelState === 'loading' && (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin text-emerald-400" />
                        Loading local model{modelPct > 0 ? ` ${Math.round(modelPct * 100)}%` : '…'}
                      </>
                    )}
                    {modelState === 'failed' && <>Local model unavailable</>}
                    {modelState === 'idle' && <>Starting…</>}
                  </span>
                </div>
                <span
                  className={`text-[11px] px-2.5 py-1 rounded-full border ${
                    exhausted
                      ? 'border-amber-700/40 bg-amber-950/30 text-amber-400'
                      : 'border-zinc-700 bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {remaining} of {QUERY_LIMIT} questions left
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-5 max-h-[30rem]">
                {messages.length === 0 && (
                  <div>
                    <p className="text-sm text-zinc-400 mb-4">
                      Try one of these, or type your own question below.
                    </p>
                    <div className="flex flex-col gap-2">
                      {DEMO_ANSWERS.slice(0, 5).map((a) => (
                        <button
                          key={a.id}
                          onClick={() => ask(a.question)}
                          disabled={exhausted}
                          className="text-left text-sm rounded-lg border border-zinc-800 bg-zinc-950 hover:border-emerald-500/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors px-4 py-2.5 text-zinc-300"
                        >
                          {a.question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((m, i) =>
                  m.role === 'user' ? (
                    <div key={i} className="flex justify-end">
                      <p className="max-w-[85%] rounded-xl rounded-br-sm bg-emerald-500 text-black text-sm font-medium px-4 py-2.5">
                        {m.text}
                      </p>
                    </div>
                  ) : (
                    <div key={i} className="max-w-[92%]">
                      <div
                        className={`rounded-xl rounded-bl-sm border px-4 py-3 ${
                          m.refused
                            ? 'border-zinc-700 bg-zinc-950 text-zinc-400'
                            : 'border-emerald-700/25 bg-emerald-900/10 text-zinc-200'
                        }`}
                      >
                        {m.quoted && (
                          <p className="text-[11px] uppercase tracking-wider text-emerald-400/80 mb-2">
                            Closest passage in these documents
                          </p>
                        )}
                        <p className={`text-sm leading-relaxed ${m.quoted ? 'font-serif italic text-zinc-300' : ''}`}>
                          {m.quoted ? `“${m.text}”` : m.text}
                        </p>
                        {m.refused && (
                          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                            The demo workspace only holds the four rules listed on the
                            left. Rather than guess, it says so — which is what it does in
                            the product too.
                          </p>
                        )}
                      </div>
                      {m.citations && m.citations.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2.5">
                          {m.citations.map((c, j) => {
                            const d = getDoc(c.docId);
                            return (
                              <button
                                key={j}
                                onClick={() => setSource(c)}
                                className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
                              >
                                <FileText className="w-3 h-3" />
                                {d?.name} · p.{c.page}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ),
                )}

                {thinking && (
                  <p className="text-sm text-zinc-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Searching the documents…
                  </p>
                )}
                <div ref={endRef} />
              </div>

              {/* Composer */}
              <div className="border-t border-zinc-800 p-4">
                {exhausted ? (
                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-700/40 bg-amber-950/20 px-4 py-3.5">
                    <p className="text-sm text-zinc-300 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                      That is all {QUERY_LIMIT} demo questions. The real thing has no limit.
                    </p>
                    <Link
                      to="/contact"
                      className="btn-cyber text-sm font-semibold py-2.5 px-5 rounded-lg inline-flex items-center gap-2 shrink-0"
                    >
                      Book a Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      ask(input);
                    }}
                    className="flex items-center gap-3"
                  >
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about deductions, audits, or best interest…"
                      className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || thinking}
                      className="btn-cyber font-semibold p-3 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Send question"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Source viewer */}
          {sourceDoc && source && (
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
              <div className="flex items-start justify-between gap-4 border-b border-zinc-800 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-white">{sourceDoc.name}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {sourceDoc.citation} · page {source.page} of {sourceDoc.pages.length}
                  </p>
                </div>
                <button
                  onClick={() => setSource(null)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors shrink-0"
                  aria-label="Close source"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                <p className="text-sm text-zinc-300 leading-[1.8] font-serif">
                  <Highlighted
                    text={sourceDoc.pages[source.page - 1] ?? ''}
                    anchor={source.anchor}
                  />
                </p>
              </div>
              <div className="border-t border-zinc-800 px-5 py-3">
                <p className="text-[11px] text-zinc-600">
                  Verbatim text as published in the Electronic Code of Federal
                  Regulations. Nothing here is legal advice.
                </p>
              </div>
            </div>
          )}

          {/* Honest framing */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              <span className="font-semibold text-white">What is real here, and what is not.</span>{' '}
              The search is real: a language model loads into this page and finds the
              relevant passage locally, so your questions never leave your browser. What
              is scaled down is the rest &mdash; a fixed set of public documents, and
              written answers for the common questions rather than generated prose. The
              installed product runs a far larger model on your own machine, over your own
              private files.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Now picture it on your own documents.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-9">
            Same interface, same citations, running on your compliance manual and your
            client files — on your hardware, with nothing leaving your network.
          </p>
          <Link
            to="/contact"
            className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2"
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
