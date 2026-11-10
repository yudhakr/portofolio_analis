import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showCodePreview, setShowCodePreview] = useState<boolean>(true);

  const sampleSQL = `-- Query SQL Pemula & Praktis: Menghitung Omzet Harian & Barang Paling Laris di Warung Baim
SELECT 
  DATE(tgl_transaksi) AS tanggal_belanja,
  nama_barang,
  kategori_barang,
  COUNT(id_transaksi) AS total_transaksi,
  SUM(jumlah_beli) AS total_unit_terjual,
  SUM(total_bayar) AS total_omzet,
  ROUND(AVG(total_bayar), 0) AS rata_rata_belanja
FROM transaksi_warung_baim
WHERE status_transaksi = 'Selesai'
GROUP BY 
  DATE(tgl_transaksi), 
  nama_barang, 
  kategori_barang
HAVING SUM(jumlah_beli) >= 10
ORDER BY total_omzet DESC
LIMIT 10;`;

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
              Skills & Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Tools Analisis & Pengolahan Data
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Keahlian praktis yang dikuasai untuk mengolah data toko, mulai dari rumus Microsoft Excel, query database SQL, script pembersihan data Python, hingga dashboard visualisasi Power BI.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill button group) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {['All', 'Data Analysis', 'Data Visualization', 'Database', 'Tools & Workflow'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{group.category}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{group.description}</p>
                </div>
                <span className="text-[11px] font-mono text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                  {group.skills.length} Tools
                </span>
              </div>

              {/* Skills List without fake percentage bars */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-slate-50/60 border border-slate-100/80 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-800">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-slate-500">
                          ({skill.experience})
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-teal-700 bg-white border border-teal-200/80 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      {skill.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real SQL Snippet Proof Panel */}
        <div className="bg-slate-900 rounded-2xl text-slate-200 p-5 md:p-6 shadow-md border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Contoh Penulisan Query SQL: Agregasi Omzet & Produk Terlaris
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  SELECT, WHERE, GROUP BY, HAVING, Aggregate Functions (SUM, AVG, COUNT)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowCodePreview(!showCodePreview)}
              className="text-xs font-mono text-teal-400 hover:text-teal-300 self-start sm:self-auto cursor-pointer flex items-center gap-1.5"
            >
              <span>{showCodePreview ? 'Sembunyikan Query' : 'Tampilkan Query SQL'}</span>
            </button>
          </div>

          {showCodePreview && (
            <div className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 border border-slate-800/80">
              <pre className="text-xs font-mono text-teal-200/90 leading-relaxed selection:bg-teal-900">
                <code>{sampleSQL}</code>
              </pre>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400" />
              Praktik Basis Data Relasional Terstruktur · STMIK WiCiDa
            </span>
            <span className="font-mono text-[11px] text-slate-500">
              Clean Query Standards · Mudah Dimengerti
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
