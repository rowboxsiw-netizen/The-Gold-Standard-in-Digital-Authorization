
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-indigo-600 underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.imageUrl],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <article className="bg-white">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        slug={`blog/${post.slug}`}
        schema={schema}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-10 transition">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Insights
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">{post.category}</span>
            <span className="text-sm text-slate-400 font-medium">{post.date} &bull; 5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 mr-4">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-slate-900">{post.author}</p>
              <p className="text-xs text-slate-500 tracking-wide uppercase">Author</p>
            </div>
          </div>
        </header>

        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-96 object-cover rounded-3xl shadow-xl mb-12"
        />

        <div className="prose prose-lg prose-indigo max-w-none text-slate-700 leading-relaxed space-y-8">
          <p className="text-xl font-medium text-slate-900 leading-relaxed italic border-l-4 border-indigo-600 pl-6 py-2">
            "{post.excerpt}"
          </p>
          <p>
            The digital authorization landscape is changing rapidly. As enterprises move towards Zero Trust architectures, the traditional perimeter-based security model is becoming obsolete. Instead, identity is becoming the new perimeter.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Why Authorization Matters More Than Ever</h2>
          <p>
            In today's interconnected ecosystem, every API call, every login attempt, and every data transaction represents a potential security risk. Effective authorization ensures that users can only access what they need, when they need it, and under the right conditions.
          </p>
          <p>
            This article explores the core components of modern authorization systems, including attribute-based access control (ABAC) and context-aware security policies.
          </p>
          {/* More content can be added here */}
          <div className="bg-slate-50 p-8 rounded-2xl mt-16 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Subscribe to our newsletter</h3>
            <p className="text-slate-600 mb-6">Get the latest security insights delivered to your inbox every week.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="email@company.com" className="flex-grow px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
              <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">Join 5,000+ Readers</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
