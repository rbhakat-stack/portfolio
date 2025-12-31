import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Licenses & Certifications</h2>
          <p className="mt-4 text-lg text-slate-500">Professional credentials and continuous learning achievements.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Award size={24} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{cert.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{cert.issuer}</p>
                  <p className="text-xs text-slate-400 mt-2">{cert.date}</p>
                  {cert.credentialId && (
                    <p className="text-xs text-slate-400 mt-1 font-mono bg-slate-50 inline-block px-1.5 py-0.5 rounded">
                      {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};