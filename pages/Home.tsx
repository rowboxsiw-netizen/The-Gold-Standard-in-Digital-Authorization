import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES, PRIMARY_KEYWORD } from '../constants';

const Home: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Authorize",
    "url": "https://authorize.qzz.io",
    "logo": "https://authorize.qzz.io/logo.png",
    "description": "Enterprise-grade digital authorization and identity verification services."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Secure Digital Authorization & Identity Verification" 
        description={`Scale your enterprise with ${PRIMARY_KEYWORD}. We provide real-time identity verification and compliance automation for the modern web.`} 
        schema={schema}
      />

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Zero Trust Security
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                The Gold Standard in <span className="text-indigo-600">Digital Authorization</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                Authorize helps global enterprises verify identities, secure transactions, and automate compliance with a single, unified API.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition transform hover:-translate-y-1">
                  Start Verification Free
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition transform hover:-translate-y-1">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 relative">
              <img 
                src="https://picsum.photos/seed/security/800/600" 
                alt="Secure digital infrastructure" 
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">10k+ Verifications</p>
                    <p className="text-xs text-slate-500">Completed this hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise-Ready Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our platform is built to handle the rigorous demands of modern digital compliance and high-volume authorization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-8 border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-xl transition group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-indigo-600 font-semibold hover:underline">Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to secure your platform?</h2>
          <p className="text-indigo-100 mb-10 text-lg max-w-xl mx-auto">
            Join thousands of teams who trust Authorize for their digital identity needs. Integration takes minutes, not weeks.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition shadow-lg">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;