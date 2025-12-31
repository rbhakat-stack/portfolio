import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Ranabir Bhakat. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm">
            <span>Life Sciences</span>
            <span>•</span>
            <span>Digital Transformation</span>
            <span>•</span>
            <span>AI Strategy</span>
        </div>
      </div>
    </footer>
  );
};