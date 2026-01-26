
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Blog & Insights" 
        description="Stay updated with the latest trends in digital identity, cybersecurity, and enterprise authorization solutions." 
        slug="blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Security Insights</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thought leadership and technical guides on the evolving landscape of digital authorization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </Link>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">{post.category}</span>
                <span className="text-sm text-slate-400 font-medium">{post.date}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition">{post.title}</h2>
              </Link>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.slug}`} className="text-indigo-600 font-bold hover:underline flex items-center">
                Read Article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
