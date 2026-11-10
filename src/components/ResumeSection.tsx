import React from 'react';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white border border-slate-800 shadow-md relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest block mb-2">
            Collaboration & Opportunities
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-xl mx-auto text-balance">
            Interested in working together?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mt-3 leading-relaxed">
            Open to opportunities in Data Analytics, Business Intelligence, and related roles.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-teal-700" />
              <span>Download Resume / CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Full-time / Contract
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Hybrid & Remote Friendly
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Immediate Availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
