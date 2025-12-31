import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-slate-500">A track record of driving value across global organizations.</p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-hover:bg-brand-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:border-brand-200 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="font-bold text-xl text-slate-900">{job.company}</h3>
                  <span className="text-sm text-brand-600 font-semibold bg-brand-50 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">{job.period}</span>
                </div>
                <div className="text-lg font-medium text-slate-700 mb-1">{job.role}</div>
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};