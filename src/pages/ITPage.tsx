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
  { n: 'Scoping', body: 'A short call with your IT covering which machines it goes on and which files it should read.' },
  { n: 'Install', body: 'The installer runs on each machine. Nothing crosses your network boundary.' },
  { n: 'Handoff', body: 'We walk your team through it and hand over control. We keep no access of any kind.' },
];

const procurement = [
  {
    icon: FileCheck,
    title: 'Your files stay yours',
    body:
      'You decide what goes in, and that decision carries no downstream risk. Because nothing is transmitted anywhere, adding another thousand documents adds nothing to your exposure.',
  },
  {
    icon: Ban,
    title: 'Nothing phones home',
    body:
      'No accounts to create, no usage pings, no background sync, no processing on our side. Sketch the data flow for your security reviewer and it is a single box with your name on it.',
  },
  {
    icon: ShieldCheck,
    title: 'We are not a breach vector',
    body:
      'No exposed service, no shared tenancy, no database on our side with your files in it. If we were compromised tomorrow, your documents would be unaffected, because we never held them.',
  },
];

const posture = [
  {
    title: 'Nothing listening',
    body: 'The application takes no connections from outside and cannot be reached from another machine on your network. Your firewall needs no new rule to let it work.',
  },
  {
    title: 'Verified before it installs',
    body: 'The installer carries a verified publisher signature that the operating system checks on its own, with no call out to us. Files are validated for tampering before anything will load them.',
  },
  {
    title: 'Nothing is measured',
    body: 'No analytics, no crash reports, no usage counters. You will not find a privacy toggle in the settings, because there is nothing for one to turn off.',
  },
  {
    title: 'Uninstalling leaves nothing',
    body: 'Everything the application creates sits in a single folder. Delete the application and that folder and it is genuinely gone, with no account elsewhere quietly holding a copy.',
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
            Runs where your firm <span className="text-gradient-bright">already runs.</span>
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
            One analyst&rsquo;s laptop, a few machines in a single office, or a locked room with
            no way out to the internet. Same install each time, same promise each time:
            your files stay on your hardware.
          </p>
        </div>
      </section>

      {/* Where it runs */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-400 font-semibold mb-4">
            Deployment targets
          </p>
          <h2 className="text-3xl font-bold mb-10">Where it can run today</h2>
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
            What you are installing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nothing exotic to <span className="text-gradient-bright">stand up.</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            There is no tenant to provision, no account to federate, and no new platform for
            your team to learn. It is an application, a searchable index of your own
            files, and a model that answers from them &mdash; all on hardware you already
            support.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="text-xl font-semibold text-white mb-2">What gets installed</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Each piece sits on the machine itself, where your team can inspect it, patch it
                and fold it into an existing backup routine.
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
              <h3 className="text-xl font-semibold text-white mb-6">Getting it running</h3>
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
            Vendor review
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Short answers to the <span className="text-gradient-bright">hard questions.</span>
          </h2>
          <p className="text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Most firms put a new vendor through two gates: someone checks the company, and
            someone else checks what the software touches and where that data ends up.
            Both reviews tend to stall on the same handful of questions. Here they are,
            answered up front.
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
              After setup it needs no route to the internet whatsoever. Your files, the
              questions your staff ask, and every answer produced all stay on the machine,
              in every configuration we ship.
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
            Still have questions?
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-9">
            Send them over. A technical question gets a technical answer from someone who
            works on the product, not a sales reply.
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
