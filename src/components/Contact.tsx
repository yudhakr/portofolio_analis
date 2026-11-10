import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Mohon lengkapi seluruh field sebelum mengirim pesan.');
      return;
    }

    setError(null);
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Hubungi Saya untuk Diskusi Peluang & Proyek
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Saya terbuka untuk kesempatan magang (internship), posisi Junior Data Analyst, kolaborasi riset data UMKM, atau sekadar berdiskusi seputar visualisasi dan pengolahan data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 truncate">
                  <span className="text-xs text-slate-400 font-mono block">Direct Email</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Respon biasanya dalam 1x24 jam
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 truncate">
                  <span className="text-xs text-slate-400 font-mono block">Professional Network</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-1">
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block font-mono">
                    linkedin.com/in/ayudha-kusuma
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-white transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 truncate">
                  <span className="text-xs text-slate-400 font-mono block">Open-Source Code & Notebooks</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors flex items-center gap-1">
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block font-mono">
                    github.com/yudhadeux
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Current Location</span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium mt-0.5 block">
                    Available for onsite, hybrid, and remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFAFA] rounded-2xl border border-slate-200/90 p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Kirim Pesan Langsung
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Silakan tinggalkan pesan terkait lowongan, feedback portofolio, atau pertanyaan analitik.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Pesan Anda Berhasil Terkirim!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih sudah menghubungi saya, {formData.name}. Saya akan meninjau pesan Anda dan membalas ke{' '}
                  <span className="font-mono text-teal-800 font-semibold">{formData.email}</span> sesegera mungkin.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-teal-800 bg-white border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-slate-800 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-slate-800 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Pesan / Deskripsi Peluang
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan tentang posisi atau proyek data analysis yang ingin didiskusikan..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-teal-400" />
                    <span>{submitting ? 'Mengirim...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
