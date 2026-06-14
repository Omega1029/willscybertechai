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
    <div className="min-h-screen bg-background text-on-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full border border-primary-container/20 bg-primary-container/5 text-primary-container text-label-caps mb-6">
            Insights &amp; Research
          </span>
          <h1 className="text-headline-xl text-on-surface mb-6">Blog</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Insights on AI engineering, industry trends, and case studies
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="glass-card rounded-xl overflow-hidden group hover:border-primary-container/40 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-label-caps text-primary-container bg-primary-container/10 border border-primary-container/20 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-on-surface-variant uppercase tracking-widest">{post.readTime}</span>
                  </div>
                  <h2 className="text-headline-sm text-on-surface mb-4 leading-snug">{post.title}</h2>
                  <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>
                      {post.author}
                      <span className="text-outline-variant">·</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
                      {post.date}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-sm font-bold text-primary-container hover:gap-2 transition-all"
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
      <section className="py-24 bg-surface-container">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-headline-md text-on-surface mb-4">Stay Updated</h2>
          <p className="text-body-lg text-on-surface-variant mb-10">
            Get the latest insights on AI engineering and industry trends delivered to your inbox.
          </p>

          {message && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'error'
                ? 'bg-error-container/30 text-on-error-container border border-error/30'
                : 'bg-primary-container/10 text-primary-container border border-primary-container/30'
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
              className="flex-1 bg-white border border-slate-200 text-xs font-sans p-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
