import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Linkedin, Github, FileText, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl my-auto z-10 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Header Controls (Hidden on Print) */}
        <div className="no-print sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-600" />
            <h3 className="text-base font-bold text-slate-900">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Simpan PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Friendly Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-800 font-sans print:p-0 print:m-0">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Resume Header with Symmetrical Photo */}
            <div className="border-b-2 border-slate-900 pb-4 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-bold text-teal-800 tracking-wider uppercase mt-1">
                  Junior Data Analyst | Mahasiswa Teknik Informatika STMIK Widya Cipta Dharma
                </p>

                <div className="mt-3 flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-600 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                    linkedin.com/in/ayudha-kusuma
                  </span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-slate-400" />
                    github.com/yudhadeux
                  </span>
                </div>
              </div>

              {/* Symmetrical Minimalist Photo in CV */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 aspect-square rounded-xl overflow-hidden border border-slate-300 shadow-2xs shrink-0 bg-slate-100 self-start sm:self-auto">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-[center_32%]"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Profil & Ringkasan Profesional
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                Mahasiswa Teknik Informatika STMIK Widya Cipta Dharma (IPK 3.75) dengan kompetensi pengolahan dan visualisasi data praktis menggunakan Microsoft Excel, SQL (MySQL/PostgreSQL), Python (Pandas, NumPy, Matplotlib), serta Power BI. Telah menyelesaikan studi kasus riil analitik penjualan UMKM (Warung Baim, gerai Indomaret, dan kedai kopi), mencakup pembersihan data kotor, analisis jam belanja tersibuk, produk paling laku, dan perancangan rekomendasi stok barang.
              </p>
            </div>

            {/* Core Skills & Tools */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Keahlian Teknis & Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <strong className="text-slate-900">Pengolahan Data & Bahasa:</strong>{' '}
                  <span className="text-slate-700">Microsoft Excel (Pivot Table, XLOOKUP), SQL (SELECT, JOIN, GROUP BY, Aggregate), Python (Pandas, NumPy).</span>
                </div>
                <div>
                  <strong className="text-slate-900">Visualisasi & Dashboard:</strong>{' '}
                  <span className="text-slate-700">Power BI, Tableau, Matplotlib, Seaborn, Pembuatan Kartu KPI & Chart Interaktif.</span>
                </div>
                <div>
                  <strong className="text-slate-900">Database & Lingkungan:</strong>{' '}
                  <span className="text-slate-700">MySQL, PostgreSQL, Google Colab, Jupyter Notebook, Git & GitHub.</span>
                </div>
                <div>
                  <strong className="text-slate-900">Metode Analisis Bisnis:</strong>{' '}
                  <span className="text-slate-700">Exploratory Data Analysis (EDA), Market Basket Analysis Sederhana, Analisis Pareto Penjualan, Tren Waktu Belanja.</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Proyek Analisis Data Utama
              </h2>

              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <strong className="text-slate-950 font-bold">{proj.title}</strong>
                    <span className="font-mono text-xs text-slate-500">
                      {proj.tools.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {proj.shortDescription}
                  </p>
                  <p className="text-[11px] text-teal-800 font-medium">
                    Insight Utama: {proj.keyFindings[0]}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Pendidikan Formal
              </h2>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-950 font-bold">{EDUCATION.degree}</strong>{' '}
                  <span className="text-slate-700">— {EDUCATION.university}</span>
                </div>
                <span className="font-mono text-xs text-slate-500 whitespace-nowrap">
                  {EDUCATION.period}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                IPK: {EDUCATION.gpa} · Samarinda, Kalimantan Timur · Fokus: Database Management, Data Analysis & Python Programming
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Sertifikasi & Pelatihan
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex justify-between items-baseline">
                    <span>
                      <strong className="text-slate-900">{cert.name}</strong> — {cert.issuer}
                    </span>
                    <span className="font-mono text-slate-500 shrink-0 text-[11px]">
                      {cert.year} ({cert.credentialId})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
