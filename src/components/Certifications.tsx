import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
            Certifications & Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Sertifikasi Profesional Terverifikasi
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Standar kompetensi industri yang divalidasi oleh institusi teknologi global dalam bidang data analytics, visualisasi Power BI, dan SQL tingkat lanjut.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.credentialId}
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-teal-800 bg-teal-50/80 border border-teal-200/60 px-2 py-0.5 rounded">
                      {cert.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Issued by {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID and Link */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="truncate pr-2">
                  <span className="text-[10px] text-slate-400 block font-mono">
                    Credential ID:
                  </span>
                  <span className="font-mono text-slate-700 truncate block text-[11px]">
                    {cert.credentialId}
                  </span>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800 transition-colors shrink-0 text-xs"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
