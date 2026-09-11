import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Server,
  ShieldCheck,
  Ban,
  FileCheck,
  AlertTriangle,
  Check,
} from 'lucide-react';

const environments = [
  { env: 'Single workstation', path: 'Guided install', needs: 'A machine you already own', status: 'Verified' },
  { env: 'Several machines', path: 'Same install, per machine', needs: 'No server, no console', status: 'Verified' },
  { env: 'Air-gapped site', path: 'Locally stored models', needs: 'Zero connectivity', status: 'Verified' },
  { env: 'Restricted network', path: 'Outbound fully blocked', needs: 'Nothing allowlisted', status: 'Verified' },
  { env: 'Shared firm-wide index', path: 'Per-machine today', needs: '—', status: 'Roadmap' },
  { env: 'Directory login', path: 'Not integrated today', needs: '—', status: 'Roadmap' },
];

const inTheBox = [
  'Desktop application',
  'Local document index',
  'Locally run language model',
  'Local document storage',
  'Cited-answer engine',
  'Signed installer',
];

const deploymentSteps = [
  { n: 'Scoping', body: 'A short call with your IT about the machines it will run on and what documents go in.' },
  { n: 'Install', body: 'The signed installer runs on each machine. Nothing leaves your network.' },
  { n: 'Handoff', body: 'Your team gets a walkthrough, and the keys. There is nothing for us to retain access to.' },
];

const procurement = [
  {
    icon: FileCheck,
    title: 'Documents in, nothing out',
    body:
      'The corpus is whatever your firm puts in it. The guarantee does not rest on what goes in: nothing connects out, so the document set can grow without the exposure growing with it.',
  },
  {
    icon: Ban,
    title: 'No connections out',
    body:
      'No cloud accounts, no telemetry, no callbacks, no vendor-side processing. It runs air-gapped, so the data-flow diagram for your security review has exactly one box on it: yours.',
  },
  {
    icon: ShieldCheck,
    title: 'Nothing to breach remotely',
    body:
      'There is no server to expose, no tenant to isolate, and no vendor database holding your documents. The blast radius of a vendor compromise is zero, because we hold nothing.',
  },
];

const posture = [
  {
    title: 'No inbound attack surface',
    body: 'The application accepts no external connections and is unreachable from any other machine on the network. No firewall exception is required to run it.',
  },
  {
    title: 'Signed and notarised',
    body: 'The installer is code-signed and notarised, so it validates on install without a network round trip. Installed files are integrity-checked before they are trusted.',
  },
  {
    title: 'No telemetry',
    body: 'There is no analytics, crash reporting, or usage beacon in the application. There is no setting to switch off, because there is nothing collecting.',
  },
  {
    title: 'Removal is complete',
    body: 'Everything lives under one application data directory. Remove the application and delete that directory and nothing remains — there is no cloud account still holding a copy.',
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
            It meets your network <span className="text-gradient-bright">where it is.</span>
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
            An analyst&rsquo;s laptop, a handful of machines in one office, or a hardened
            room with no route out &mdash; the same install, and the same guarantee.
            Nothing leaves the building.
          </p>
        </div>
      </section>

      {/* Where it runs */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-4">
            Where it runs
          </p>
          <h2 className="text-3xl font-bold mb-10">Environments</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">
            <table className="w-full min-w-[44rem] text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-left">
                  <th className="p-4 text-xs uppercase tracking-wider font-semibold text-zinc-500">Environment</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-semibold text-zinc-500">Path</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-semibold text-zinc-500">Needs</th>
                  <th className="p-4 text-xs uppercase tracking-wider font-semibold text-zinc-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {environments.map((e, i) => (
                  <tr key={e.env} className={i % 2 ? 'bg-zinc-950/40' : undefined}>
                    <td className="p-4 text-white font-medium">{e.env}</td>
                    <td className="p-4 text-zinc-300">{e.path}</td>
                    <td className="p-4 text-zinc-400">{e.needs}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                          e.status === 'Verified'
                            ? 'border-emerald-700/40 bg-emerald-900/20 text-emerald-400'
                            : 'border-zinc-700 bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The stack */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-4">
            The shape of it
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A deliberately <span className="text-gradient-bright">boring</span> install.
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            No cloud accounts, no telemetry, no exotic infrastructure to stand up. It is
            an application, a local index of your documents, and a language model that
            runs on hardware your IT already knows how to manage.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="text-xl font-semibold text-white mb-2">What&rsquo;s in the box</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Every piece runs locally and can be inspected, patched and backed up by
                your own team.
              </p>
              <div className="flex flex-wrap gap-2">
                {inTheBox.map((c) => (
                  <span
                    key={c}
                    className="text-sm px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="text-xl font-semibold text-white mb-6">How deployment works</h3>
              <ol className="space-y-5">
                {deploymentSteps.map((s, i) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      <span className="font-semibold text-white">{s.n}.</span> {s.body}
                    </p>
                  </li>
                ))}
              </ol>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-7 text-sm"
              >
                Request a walkthrough <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-4">
            Procurement &amp; vetting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built to be <span className="text-gradient-bright">easy to approve.</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Before a firm can use a vendor, the purchase usually clears two internal
            reviews: a business review of the company, and a technology review of what
            data the product touches and where that data goes. This is designed so those
            questionnaires have short answers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procurement.map((p) => (
              <div key={p.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="bg-emerald-900/30 border border-emerald-700/20 p-2.5 rounded-lg inline-flex mb-5">
                  <p.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posture */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-emerald-400" /> Security posture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posture.map((s) => (
              <div key={s.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-700/30 bg-emerald-900/10 p-5">
            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white">Air-gapped operation is supported.</span>{' '}
              Once set up, the application needs no network route at all. Documents,
              questions and generated answers never leave the machine under any
              configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-700/40 bg-amber-950/20 p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-400" /> Current limitations
            </h2>
            <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <li>
                <span className="font-semibold text-white">macOS on Apple Silicon only.</span>{' '}
                There is no Windows or Linux build today. If your firm is standardised on
                Windows, this is a blocker right now &mdash; talk to us about timelines
                before you spend time evaluating.
              </li>
              <li>
                <span className="font-semibold text-white">Per-machine deployment.</span>{' '}
                Each machine keeps its own index, so a document set is prepared on each
                machine that needs it. There is no shared firm-wide index yet.
              </li>
              <li>
                <span className="font-semibold text-white">No central management console.</span>{' '}
                No fleet dashboard and no directory-integrated policy layer today.
                Configuration is per machine.
              </li>
              <li>
                <span className="font-semibold text-white">No built-in query audit log.</span>{' '}
                Questions and answers are not retained in a queryable record. If your
                retention obligations require one, raise it with us before deployment
                rather than assuming it.
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
            Send them over. Technical questions get a technical answer, not a sales reply.
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
