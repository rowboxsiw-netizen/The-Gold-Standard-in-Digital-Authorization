
import React from 'react';
import SEO from '../components/SEO';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <SEO 
        title="Enterprise Authorization Solutions" 
        description="Explore our suite of digital authorization services including Identity Verification, Secure Authentication, and Compliance Automation." 
        slug="services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Solutions</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools designed to solve the most complex security and verification challenges in digital business today.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 rounded-3xl bg-white shadow-sm border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description} With our enterprise-grade {service.title.toLowerCase()} service, you can reduce fraud by up to 95% while maintaining a seamless user experience.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span className="text-slate-700 font-medium">Global compliance standards (GDPR, SOC2, HIPAA)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span className="text-slate-700 font-medium">Sub-second API response times</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span className="text-slate-700 font-medium">Automated risk-scoring and fraud detection</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src={`https://picsum.photos/seed/${service.slug}/800/600`} alt={service.title} className="rounded-2xl shadow-lg w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
