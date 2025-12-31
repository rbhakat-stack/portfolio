import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Let's Connect</h2>
        <p className="text-lg text-slate-500 mb-10">
          Interested in discussing digital strategy, AI innovation, or Life Sciences technology leadership?
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:contact@example.com" // Placeholder email
            className="flex items-center justify-center px-8 py-4 border border-slate-200 rounded-lg text-lg font-medium text-slate-700 hover:border-brand-500 hover:text-brand-600 transition-all group bg-white hover:shadow-md"
          >
            <Mail className="w-6 h-6 mr-3 text-slate-400 group-hover:text-brand-600" />
            Send an Email
          </a>
          <a 
            href="https://linkedin.com/in/ranabirbhakat" // Assuming standard URL structure, placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 border border-transparent rounded-lg text-lg font-medium text-white bg-[#0077b5] hover:bg-[#006396] transition-all shadow-md"
          >
            <Linkedin className="w-6 h-6 mr-3" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};