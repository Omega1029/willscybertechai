import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400 mb-8">Coming soon...</p>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-12">
            <p className="text-gray-500">
              Stay tuned for insights on AI engineering, industry trends, and case studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
