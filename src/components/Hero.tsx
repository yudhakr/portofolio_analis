import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroMiniDashboard } from './HeroMiniDashboard';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split Hero: Left Column Typography & Symmetrical Profile + Right Column Mini Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Symmetrical Minimalist Profile Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-1">
              {/* Symmetrical Square Minimalist Photo Frame */}
              <div className="relative shrink-0 group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 aspect-square rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 ring-4 ring-slate-50">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-[center_32%] transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                {/* Minimalist Verified Status Dot */}
                <span
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-teal-500 border-2 border-white shadow-xs"
                  title="Ready for Data Analyst Opportunities"
                />
              </div>

              {/* Identity & Campus Badge */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-teal-800 bg-teal-50/90 border border-teal-200/70 px-2.5 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>{PERSONAL_INFO.title}</span>
                  <span className="text-teal-400">·</span>
                  <span className="text-slate-600 font-normal">Junior Level</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                  {PERSONAL_INFO.name}
                </h2>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Teknik Informatika</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-700 font-semibold">{PERSONAL_INFO.campus}</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.18] text-balance">
                Turning Data Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-sky-600">
                  Actionable Insights.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.description}
            </p>

            {/* Location & Status Note */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                Terbuka untuk Magang & Junior Data Analyst
              </span>
            </div>

            {/* Action Buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <span>Lihat Studi Kasus Project</span>
                <ArrowDown className="w-4 h-4 text-teal-400" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-700" />
                <span>Download CV</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-1.5 pl-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
                  aria-label="Email Address"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Analytics Dashboard (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroMiniDashboard />
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Key Statistics Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-teal-300 transition-colors group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
