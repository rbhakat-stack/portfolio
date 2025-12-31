
import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { ArrowRight, Linkedin, Mail, User } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase mb-8">
              Executive Leadership & Technology Strategy
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl leading-tight">
              Scaling <span className="text-brand-600">Global Platforms</span> for Fortune 100 Life Sciences
            </h1>
            <p className="mt-6 text-lg text-slate-500 sm:text-xl sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0 leading-relaxed font-light">
              Fusing <span className="font-semibold text-slate-800">Columbia Strategy</span> with <span className="font-semibold text-slate-800">IIT Engineering</span> rigor to drive multi-billion dollar business outcomes through AI and Digital Transformation.
            </p>
            
            <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Executive Consultation
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#experience"
                onClick={(e) => handleScroll(e, '#experience')}
                className="inline-flex items-center justify-center px-10 py-4 border border-slate-300 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all"
              >
                Leadership Track
              </a>
            </div>

            <div className="mt-10 flex items-center gap-8 sm:justify-center lg:justify-start">
                <a href="https://linkedin.com/in/ranabirbhakat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">LinkedIn Profile</span>
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-2 group">
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Direct Channel</span>
                </a>
            </div>
          </div>

          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] rounded-3xl shadow-2xl overflow-hidden bg-slate-100 border-8 border-white group">
              {!imgError ? (
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter grayscale-[20%] hover:grayscale-0"
                  src={PROFILE.avatarUrl}
                  alt={PROFILE.name}
                  onError={() => setImgError(true)}
                />
              ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400">
                    <User size={100} strokeWidth={1} />
                    <span className="text-sm mt-4 font-bold tracking-widest uppercase">Executive Portrait</span>
                 </div>
              )}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                <div className="text-slate-900 font-bold text-lg leading-tight">{PROFILE.name}</div>
                <div className="text-brand-600 text-sm font-medium mt-1">Partner & EVP Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
};
