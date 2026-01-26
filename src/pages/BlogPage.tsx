import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  published_at: string;
  cover_image?: string;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, author, published_at, cover_image')
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-400">
              Insights on AI engineering, industry trends, and case studies
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-400">
              <p>Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-12 text-center">
              <p className="text-gray-500">
                No blog posts yet. Check back soon for insights on AI engineering!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  author={post.author}
                  publishedAt={post.published_at}
                  coverImage={post.cover_image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
