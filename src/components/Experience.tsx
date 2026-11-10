import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
            Pengalaman & Pendidikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Perjalanan Belajar & Pengalaman Praktis
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Pengalaman akademik di kampus STMIK Widya Cipta Dharma dan penyelesaian studi kasus analisis data nyata pada sektor ritel dan UMKM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work / Academic Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-teal-600" />
              <span>Aktivitas & Proyek Analisis Data</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Timeline Node */}
                  <div className="w-7 h-7 rounded-full bg-white border-2 border-teal-600 flex items-center justify-center shrink-0 z-10 shadow-xs mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-white rounded-xl border border-slate-200/80 p-5 shadow-2xs hover:border-slate-300 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-teal-700 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Core Focus (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-teal-600" />
              <span>Pendidikan Formal</span>
            </h3>

            <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 font-semibold">
                  {EDUCATION.period}
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  IPK: {EDUCATION.gpa}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900">
                {EDUCATION.degree}
              </h4>
              <p className="text-sm text-slate-600 mt-0.5 font-medium">
                {EDUCATION.university}
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {EDUCATION.location}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">
                  Fokus Akademik:
                </span>
                {EDUCATION.highlights.map((h, idx) => (
                  <p key={idx} className="text-xs text-slate-600 leading-relaxed">
                    {h}
                  </p>
                ))}
              </div>
            </div>

            {/* Recruiter Quick Reference Card */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider font-semibold block">
                Catatan untuk Recruiter / HR
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Terbuka untuk posisi Junior Data Analyst, Business Intelligence Intern, atau Data Entry / Reporting Analyst. Siap mengikuti tes teknis Excel, query SQL, maupun pemaparan studi kasus data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
