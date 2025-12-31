import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-brand-600 pl-4">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-600">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 h-14 overflow-hidden">{edu.school}</h3>
              <p className="text-brand-600 font-medium">{edu.degree}</p>
              {edu.details && <p className="text-slate-500 text-sm mt-2">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};