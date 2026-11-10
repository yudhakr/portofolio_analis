import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-800 shrink-0 bg-teal-900 text-teal-200 font-bold text-xs flex items-center justify-center">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-white font-bold text-base tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Data Analyst | Teknik Informatika {PERSONAL_INFO.campus}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">/</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">/</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors cursor-pointer group"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            STMIK Widya Cipta Dharma · Samarinda, Kalimantan Timur
          </p>
        </div>
      </div>
    </footer>
  );
};
