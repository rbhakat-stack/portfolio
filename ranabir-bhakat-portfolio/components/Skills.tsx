import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-brand-900 text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-8">Core Competencies & Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill) => (
            <span 
              key={skill} 
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base font-medium backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div>
       </div>
    </section>
  );
};