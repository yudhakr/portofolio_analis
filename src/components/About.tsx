import React from 'react';
import { Database, LineChart, Cpu, CheckCircle2, Lightbulb, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const approaches = [
    {
      number: '01',
      title: 'Pemahaman Masalah Bisnis Nyata',
      desc: 'Mendengarkan kendala pemilik warung & ritel: mulai dari stok barang yang menumpuk, jam sepi pembeli, hingga komplain ulasan pelanggan.',
      icon: Lightbulb,
    },
    {
      number: '02',
      title: 'Digitalisasi & Pembersihan Data',
      desc: 'Mengubah catatan manual buku kas atau ekspor struk POS ke format Excel/SQL yang bersih, menangani duplikasi dan standarisasi nama barang.',
      icon: Database,
    },
    {
      number: '03',
      title: 'Eksplorasi Pola Penjualan (EDA)',
      desc: 'Mencari tahu 5 produk paling laris, jam belanja terpadat, kebiasaan beli bersamaan (kopi + roti), serta proporsi pembayaran QRIS vs Tunai.',
      icon: Cpu,
    },
    {
      number: '04',
      title: 'Visualisasi & Solusi Praktis',
      desc: 'Merancang grafik dan dashboard yang mudah dipahami pemilik usaha untuk menentukan jadwal pemesanan stok dan paket promo hemat.',
      icon: LineChart,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
            Tentang Saya
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Menghubungkan Data Transaksi Sederhana Menjadi Keputusan Cerdas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Sebagai mahasiswa Teknik Informatika di STMIK Widya Cipta Dharma, saya fokus pada analisis data praktis yang relevan dengan ekosistem bisnis sehari-hari seperti warung kelontong, minimarket ritel, dan UMKM lokal.
          </p>
        </div>

        {/* Narrative & Symmetrical Portrait Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Halo! Saya <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>, mahasiswa aktif Jurusan <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.major}</strong> di <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.campus}</strong>, Samarinda.
            </p>
            <p>
              Ketertarikan saya pada dunia data bermula dari pertanyaan sederhana: <em>"Bagaimana pemilik warung kelontong seperti Warung Baim bisa tahu kapan harus memesan beras sebelum kehabisan?"</em> atau <em>"Mengapa gerai Indomaret selalu meletakkan roti manis di dekat kulkas kopi dingin?"</em>. Pertanyaan-pertanyaan inilah yang mendorong saya mendalami <span className="text-teal-800 font-medium">Microsoft Excel, SQL, Python, dan Power BI</span>.
            </p>
            <p>
              Bagi saya, analisis data tingkat pemula tidak harus menggunakan algoritma yang rumit. Justru kekuatan terbesar seorang data analyst adalah kemampuan menerjemahkan catatan kas yang berantakan menjadi grafik yang jelas, menemukan produk terlaris, dan memberikan rekomendasi nyata yang langsung meningkatkan efisiensi operasional.
            </p>

            {/* Checklist Highlights */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Analisis data penjualan & stok barang UMKM</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Pembersihan data kotor & standarisasi format</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Visualisasi grafik informatif & mudah dibaca</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Tekun, teliti, dan komunikatif dalam tim</span>
              </div>
            </div>
          </div>

          {/* Symmetrical Minimalist Photo & Campus Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
              {/* Symmetrical Portrait Photo in 1:1 or 4:5 Frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/90 bg-slate-200 shadow-xs mb-4 group">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-[center_32%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-[11px] font-mono text-teal-300 block uppercase tracking-wider">
                      Profil Analis
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5 font-normal">
                      {PERSONAL_INFO.campus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Mini Card */}
              <div className="space-y-2 pt-1 border-t border-slate-200/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-teal-600" />
                    S1 Teknik Informatika
                  </span>
                  <span className="font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-semibold">
                    IPK: 3.75
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{PERSONAL_INFO.campus}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    Samarinda, Kaltim
                  </span>
                </div>
              </div>
            </div>

            {/* Approach Framework */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                Metodologi Analisis Sederhana
              </span>
              {approaches.map((item) => (
                <div
                  key={item.number}
                  className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-teal-700 bg-white border border-teal-200/60 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 group-hover:text-teal-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
