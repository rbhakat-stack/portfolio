import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Recommendations</h2>
          <p className="mt-4 text-slate-500">What colleagues and clients say about working with Ranabir.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow flex flex-col h-full">
              <Quote className="absolute top-6 right-6 text-brand-100 w-8 h-8" />
              <p className="text-slate-600 italic mb-6 relative z-10 text-sm flex-grow">"{t.text}"</p>
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-slate-900 line-clamp-1">{t.name}</p>
                  <p className="text-xs text-slate-500 line-clamp-1">{t.role}</p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-500 mt-0.5 font-semibold">{t.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};