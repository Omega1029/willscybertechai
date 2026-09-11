import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Server,
  Network,
  Database,
  ShieldCheck,
  Cpu,
  HardDrive,
  AlertTriangle,
  Check,
  Terminal,
} from 'lucide-react';

const atAGlance = [
  { k: 'Deployment model', v: 'Desktop application. No server, no admin console, no agent to manage.' },
  { k: 'Operating system', v: 'macOS 12.0 or later, Apple Silicon only (see limitations).' },
  { k: 'Inbound ports', v: 'None. Nothing listens on an external interface.' },
  { k: 'Outbound egress', v: 'Three hosts, all optional after setup. Runs fully air-gapped.' },
  { k: 'Data location', v: "The user's machine. Documents and answers never transit your network." },
  { k: 'Telemetry', v: 'None. No analytics SDK, crash reporter or usage beacon is compiled in.' },
];

const layers = [
  {
    icon: Terminal,
    title: 'Interface layer',
    body: 'A Tauri desktop shell rendering a React interface. It holds no credentials and talks only to the local core over Tauri’s IPC bridge.',
  },
  {
    icon: Server,
    title: 'Rust core',
    body: 'Document parsing, chunking, retrieval and citation assembly run in a compiled Rust binary inside the app bundle. PDFs are parsed locally; nothing is uploaded for processing.',
  },
  {
    icon: Cpu,
    title: 'Local inference sidecars',
    body: 'Two llama.cpp processes the app starts and supervises — one for chat generation, one for embeddings. Both bind to loopback and exit with the app.',
  },
];

const ports = [
  { port: '127.0.0.1:8081', role: 'Chat generation', detail: '8192-token context' },
  { port: '127.0.0.1:8082', role: 'Embeddings', detail: '2048-token context' },
];

const egress = [
  {
    host: 'huggingface.co',
    why: 'One-time model download',
    detail:
      'Contacted only when a user installs a model from the built-in catalog. Once the file is on disk the host is never contacted again. Models can also be placed on the machine by hand for air-gapped installs.',
  },
  {
    host: 'api.keygen.sh',
    why: 'Licence activation',
    detail:
      'Validates the licence key on activation. Offline activation via a signed machine file is supported for machines with no route to the internet.',
  },
  {
    host: 'api.lemonsqueezy.com',
    why: 'Purchase only',
    detail:
      'Touched during checkout, not by the installed application. Irrelevant on a managed deployment where licences are bought centrally.',
  },
];

const models = [
  { name: 'Qwen2.5 7B Instruct', quant: 'Q4_K_M', size: '4.7 GB', note: 'Default. Best answer quality.' },
  { name: 'Qwen2.5 3B Instruct', quant: 'Q4_K_M', size: '1.9 GB', note: 'For lower-spec machines.' },
  { name: 'Microsoft Phi-4', quant: 'Q4_K_M', size: '9.1 GB', note: 'Alternative reasoning profile.' },
  { name: 'Nomic Embed Text v1.5', quant: 'Q8_0', size: '139 MB', note: 'Embeddings. Always installed.' },
];

const security = [
  {
    title: 'Signed, notarised and stapled',
    body: 'The installer is code-signed with an Apple Developer ID, submitted to Apple for notarisation, and the ticket is stapled to the disk image. Gatekeeper validates it without a network round trip.',
  },
  {
    title: 'Cryptographic integrity checks',
    body: 'Downloaded model files are verified by SHA-256 checksum. Licence machine files are verified by ed25519 signature before they are trusted.',
  },
  {
    title: 'No inbound attack surface',
    body: 'The application accepts no external connections. The two inference sidecars bind to 127.0.0.1 and are unreachable from any other host on the network.',
  },
  {
    title: 'No telemetry compiled in',
    body: 'There is no analytics SDK, crash reporter, or usage beacon in the binary. There is no setting to disable because there is nothing to disable.',
  },
];

export const ITPage: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-slate-100" style={{ marginTop: '-5rem' }}>
      {/* Hero */}
      <section className="relative border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-7">
            <Server className="w-3.5 h-3.5" /> For IT &amp; Security Teams
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            The <span className="text-gradient-bright">IT rundown.</span>
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
            Someone handed you this to review. Here is where it runs, what is in the
            stack, what it talks to, and what it stores &mdash; without the marketing
            language. If something here is a blocker, it is better you find it now.
          </p>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">At a glance</h2>
          <dl className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
            {atAGlance.map((r) => (
              <div key={r.k} className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-5">
                <dt className="text-sm font-semibold text-emerald-400">{r.k}</dt>
                <dd className="sm:col-span-2 text-sm text-zinc-300 leading-relaxed">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3">What actually runs on the machine</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Three layers, all inside one application bundle, all on the endpoint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {layers.map((l) => (
              <div key={l.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-5">
                  <l.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{l.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white mb-4">
              <Network className="w-4 h-4 text-emerald-400" /> Local listeners
            </h3>
            <div className="space-y-3">
              {ports.map((p) => (
                <div key={p.port} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
                  <code className="font-mono text-emerald-400">{p.port}</code>
                  <span className="text-zinc-300">{p.role}</span>
                  <span className="text-zinc-500">{p.detail}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
              Both are bound to the loopback interface. They are not reachable from
              another machine, and no firewall exception is required.
            </p>
          </div>
        </div>
      </section>

      {/* Egress */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3">Everything it talks to</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            The complete outbound list. If you allowlist by host, this is the whole
            allowlist &mdash; and the product still works with all three blocked, once
            models are installed.
          </p>
          <div className="space-y-4">
            {egress.map((e) => (
              <div key={e.host} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <code className="font-mono text-emerald-400">{e.host}</code>
                  <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400">
                    {e.why}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-700/30 bg-emerald-900/10 p-5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white">Air-gapped operation is supported.</span>{' '}
              With models installed and a licence resolved offline, the application
              needs no network route at all. Questions, documents and generated answers
              never leave the endpoint under any configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Storage */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Database className="w-7 h-7 text-emerald-400" /> What it stores, and where
          </h2>
          <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
            <p>
              Indexed text and its embedding vectors are written to a{' '}
              <span className="text-white font-semibold">SQLite database</span> inside the
              application&rsquo;s data directory, using the{' '}
              <code className="font-mono text-emerald-400">sqlite-vec</code> extension for
              similarity search. SQLite is compiled into the binary &mdash; there is no
              database service to install, secure or back up separately.
            </p>
            <p>
              Model weights live alongside it in a{' '}
              <code className="font-mono text-emerald-400">models/</code> directory. Source
              documents stay wherever the user already keeps them; the application reads
              them, indexes the text, and does not relocate or copy the originals.
            </p>
            <p>
              Because everything is file-backed under one directory, removal is complete
              and verifiable: drag the application to the Trash and delete the data
              directory. Nothing is left in a cloud account, because nothing was ever put
              in one.
            </p>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <HardDrive className="w-7 h-7 text-emerald-400" /> Models and disk
          </h2>
          <p className="text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Open-weight GGUF models, selected per machine. The installer itself is about
            30 MB &mdash; the weights are fetched separately, so plan disk accordingly.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">
            <table className="w-full min-w-[36rem] text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-left">
                  <th className="p-4 font-semibold text-zinc-400">Model</th>
                  <th className="p-4 font-semibold text-zinc-400">Quantisation</th>
                  <th className="p-4 font-semibold text-zinc-400">Size</th>
                  <th className="p-4 font-semibold text-zinc-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m, i) => (
                  <tr key={m.name} className={i % 2 ? 'bg-zinc-950/50' : undefined}>
                    <td className="p-4 text-white font-medium">{m.name}</td>
                    <td className="p-4 font-mono text-emerald-400">{m.quant}</td>
                    <td className="p-4 text-zinc-300">{m.size}</td>
                    <td className="p-4 text-zinc-400">{m.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
            Weights are held in memory while the model is loaded, so the model you deploy
            should fit comfortably in available RAM. 16 GB is a sensible floor for the 7B
            default; the 3B model is provided for machines below that.
          </p>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-400" /> Security posture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {security.map((s) => (
              <div key={s.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations — stated plainly */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400" /> Current limitations
            </h2>
            <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <li>
                <span className="font-semibold text-white">macOS on Apple Silicon only.</span>{' '}
                The shipping build targets <code className="font-mono text-amber-400">aarch64</code>{' '}
                and requires macOS 12.0 or later. There is no Intel Mac, Windows or Linux
                build today. If your estate is standardised on Windows, this is a blocker
                right now &mdash; talk to us about timelines before you evaluate further.
              </li>
              <li>
                <span className="font-semibold text-white">Per-machine deployment.</span>{' '}
                Each workstation runs its own index. There is no shared server index, so a
                document set must be indexed on each machine that needs it.
              </li>
              <li>
                <span className="font-semibold text-white">No central management console.</span>{' '}
                There is currently no MDM-integrated policy layer or fleet dashboard.
                Licensing supports offline activation, but configuration is per-machine.
              </li>
              <li>
                <span className="font-semibold text-white">No built-in query audit log.</span>{' '}
                The application does not currently retain a queryable record of questions
                and answers. If your retention obligations require one, raise it with us
                before deployment rather than assuming it.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Questions this page did not answer?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-9">
            Send them over. Technical questions get a technical answer from someone who
            has read the source, not a sales reply.
          </p>
          <Link
            to="/contact"
            className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2"
          >
            Talk to Engineering <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITPage;
