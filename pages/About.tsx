
import React from 'react';
import SEO from '../components/SEO';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Our Mission" 
        description="Learn about the team behind Authorize and our mission to secure the digital world through advanced authorization technologies." 
        slug="about"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Building the Trust Layer of the Internet</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2020, Authorize was born out of a simple observation: digital trust is fragmented. Our mission is to provide a unified, secure, and privacy-first authorization protocol that works for everyone.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We believe that identity should be portable, secure, and entirely under the user's control. By leveraging advanced cryptography and decentralized principles, we're making that a reality.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">99.99%</p>
                <p className="text-slate-500 font-medium">Uptime Guarantee</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">5M+</p>
                <p className="text-slate-500 font-medium">Users Protected</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
             <img src="https://picsum.photos/seed/teamwork/800/800" alt="Authorize team at work" className="rounded-3xl shadow-2xl" />
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet the Visionaries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl text-center flex flex-col items-center">
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-white shadow-md" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
