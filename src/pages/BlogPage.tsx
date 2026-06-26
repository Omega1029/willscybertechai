import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

const blogPosts = [
  {
    id: 1,
    title: 'Beyond Pixels and Predictions: How VLMs Will Make Self-Driving Cars Truly Smart',
    excerpt: 'Autonomous vehicles promise to reduce traffic fatalities, increase mobility, and reshape how cities function. Yet despite billions in investment and millions of autonomous miles driven, full autonomy remains elusive. Recent incidents involving self-driving systems highlight a hard truth: seeing the world is not the same as understanding it.',
    image: 'https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'WCT Team',
    date: 'January 26, 2026',
    readTime: '12 min read',
    tag: 'Research',
  },
  {
    id: 2,
    title: 'The Future of AI Engineering: Building Production-Ready Systems',
    excerpt: 'Discover how modern AI engineering is transforming businesses by building production-ready systems that deliver measurable results and real operational value.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'WCT Team',
    date: 'January 26, 2026',
    readTime: '7 min read',
    tag: 'Engineering',
  },
];

const BlogPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }
    setIsSubmitting(true);
    setMessage(null);
    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email: email.trim().toLowerCase() }]);
      if (error) {
        if (error.code === '23505') {
          setMessage({ type: 'error', text: 'This email is already subscribed!' });
        } else {
          setMessage({ type: 'error', text: 'Failed to subscribe. Please try again.' });
        }
      } else {
        setMessage({ type: 'success', text: 'Successfully subscribed! Thank you.' });
        setEmail('');
      }
    } catch {
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
            Insights &amp; Research
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Insights on AI engineering, industry trends, and case studies
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-blue-400 bg-blue-900/30 border border-blue-700/20 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-widest">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-4 leading-snug">{post.title}</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>
                      {post.author}
                      <span>·</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                      {post.date}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-sm font-bold text-blue-400 hover:gap-2 hover:text-blue-300 transition-all"
                    >
                      Read More
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-lg text-zinc-400 mb-10">
            Get the latest insights on AI engineering and industry trends delivered to your inbox.
          </p>

          {message && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'error'
                ? 'bg-red-900/30 text-red-300 border border-red-500/30'
                : 'bg-blue-900/30 text-blue-400 border border-blue-700/20'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleEmailSubmit} className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              required
              className="flex-1 bg-zinc-900 border border-zinc-800 text-xs font-sans p-4 text-slate-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-400 text-black px-6 font-bold text-xs uppercase tracking-widest disabled:opacity-50 flex items-center gap-2 transition-colors"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Subscribe
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>send</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
