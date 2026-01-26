
import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Authorize HQ",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Security Blvd",
      "addressLocality": "Silicon Valley",
      "addressRegion": "CA",
      "postalCode": "94025",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "email": "security@authorize.example"
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Authorize security team. Schedule a demo or request information about our identity verification services." 
        slug="contact"
        schema={schema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Let's Secure Your Future</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our experts are ready to help you integrate the world's most advanced authorization platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Email Us</h3>
                    <p className="text-slate-600">security@authorize.example</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Call Us</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Visit Us</h3>
                    <p className="text-slate-600 leading-relaxed">
                      123 Security Blvd, Suite 500<br />
                      Palo Alto, CA 94301<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-2xl overflow-hidden grayscale border border-slate-200">
                <img 
                  src="https://picsum.photos/seed/map/600/300" 
                  alt="Location map" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h2>
                  <p className="text-slate-600">Our security team will contact you within the next 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 text-indigo-600 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input required type="text" id="name" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                        <input required type="email" id="email" placeholder="john@company.com" className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                      <input type="text" id="company" placeholder="Acme Inc." className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                      <textarea id="message" rows={4} placeholder="Tell us about your requirements..." className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition transform hover:-translate-y-1 shadow-lg shadow-indigo-100">
                      Send Inquiry
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4 italic">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
