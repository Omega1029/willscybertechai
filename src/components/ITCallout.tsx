import { Link } from 'react-router-dom';
import { ArrowRight, Server } from 'lucide-react';

/** "Handing this to IT?" band — routes technical evaluators to the /it rundown. */
export const ITCallout: React.FC = () => (
  <section className="py-20 border-t border-zinc-900 bg-zinc-950">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
        <Server className="w-3.5 h-3.5" /> For the tech folks
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
        Handing this to your IT team?
      </h2>
      <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-9">
        There is a whole page written in their language: where it runs, how deployment
        works, what a security review will ask, and the limitations we would rather they
        hear from us than find on their own.
      </p>
      <Link
        to="/it"
        className="btn-cyber font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2"
      >
        Open the IT Rundown <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);

export default ITCallout;
