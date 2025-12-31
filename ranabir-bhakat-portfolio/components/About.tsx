
import React from 'react';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Leadership Profile</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Driving Tangible Business Outcomes through Technology
            </p>
            <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-900">{PROFILE.about[0]}</p>
              <p>{PROFILE.about[1]}</p>
              <p>{PROFILE.about[2]}</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
               <p className="text-lg text-slate-600 leading-relaxed mb-6">{PROFILE.about[3]}</p>
               <p className="text-lg text-slate-600 leading-relaxed">{PROFILE.about[4]}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-brand-50 rounded-xl border border-brand-100">
                <div className="text-sm font-bold text-brand-700 uppercase tracking-widest mb-1">Industry Focus</div>
                <div className="text-slate-900 font-semibold">Pharmaceutical & Healthcare</div>
              </div>
              <div className="p-6 bg-slate-900 rounded-xl text-white">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Pedigree</div>
                <div className="font-semibold text-white">Columbia MBA | IIT B.Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
