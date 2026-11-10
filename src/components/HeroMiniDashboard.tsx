import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, BarChart2, Store } from 'lucide-react';

interface MetricTimeline {
  period: 'Harian' | 'Mingguan' | 'Bulanan';
  revenue: string;
  revenueChange: string;
  transactions: string;
  trxChange: string;
  qrisShare: string;
  qrisChange: string;
  trend: number[];
  labels: string[];
}

const RETAIL_PULSE: Record<string, MetricTimeline> = {
  'Harian': {
    period: 'Harian',
    revenue: 'Rp 680.000',
    revenueChange: '+14.2%',
    transactions: '42 Trx',
    trxChange: '+8 Trx',
    qrisShare: '22%',
    qrisChange: '+4%',
    trend: [18, 58, 45, 22, 28, 19, 36, 64, 32],
    labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  },
  'Mingguan': {
    period: 'Mingguan',
    revenue: 'Rp 4.550.000',
    revenueChange: '+9.8%',
    transactions: '294 Trx',
    trxChange: '+32 Trx',
    qrisShare: '24%',
    qrisChange: '+6%',
    trend: [34, 38, 42, 40, 48, 62, 58],
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  },
  'Bulanan': {
    period: 'Bulanan',
    revenue: 'Rp 18.420.000',
    revenueChange: '+12.5%',
    transactions: '1.250 Trx',
    trxChange: '+110 Trx',
    qrisShare: '22%',
    qrisChange: '+5%',
    trend: [38, 42, 46, 52, 58, 64, 70, 78, 85, 92, 98],
    labels: ['Mgg 1', 'Mgg 2', 'Mgg 3', 'Mgg 4'],
  },
};

export const HeroMiniDashboard: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<'Harian' | 'Mingguan' | 'Bulanan'>('Harian');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const current = RETAIL_PULSE[selectedRange];
  const maxTrend = Math.max(...current.trend) * 1.15;
  const minTrend = Math.min(...current.trend) * 0.85;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 md:p-6 transition-all hover:border-slate-300">
      {/* Top Bar of the Dashboard Card */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
            <Store className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 leading-tight">
              Retail & Warung Analytics Pulse
            </h3>
            <p className="text-xs text-slate-500">Studi Kasus Penjualan Warung Baim & Indomaret</p>
          </div>
        </div>

        {/* Timeframe Filter Buttons */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg shrink-0">
          {(['Harian', 'Mingguan', 'Bulanan'] as const).map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => {
                setSelectedRange(range);
                setHoveredPoint(null);
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                selectedRange === range
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-3 gap-2.5 my-4">
        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-[11px] text-slate-500 block truncate">Total Omzet</span>
          <div className="text-sm sm:text-base font-mono font-bold text-slate-900 mt-0.5 truncate">
            {current.revenue}
          </div>
          <span className="text-[10px] font-mono text-teal-700 flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="w-3 h-3 inline" />
            {current.revenueChange}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-[11px] text-slate-500 block truncate">Total Belanja</span>
          <div className="text-sm sm:text-base font-mono font-bold text-slate-900 mt-0.5">
            {current.transactions}
          </div>
          <span className="text-[10px] font-mono text-teal-700 flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="w-3 h-3 inline" />
            {current.trxChange}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-[11px] text-slate-500 block truncate">Bayar QRIS</span>
          <div className="text-sm sm:text-base font-mono font-bold text-slate-900 mt-0.5">
            {current.qrisShare}
          </div>
          <span className="text-[10px] font-mono text-teal-700 flex items-center gap-0.5 mt-0.5">
            <ArrowUpRight className="w-3 h-3 inline" />
            {current.qrisChange}
          </span>
        </div>
      </div>

      {/* Visual Chart: Kepadatan Belanja per Jam */}
      <div className="pt-2">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-600 font-medium flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
            Kepadatan Transaksi Belanja
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {hoveredPoint !== null
              ? `Titik ${hoveredPoint + 1}: ${current.trend[hoveredPoint]} transaksi`
              : 'Puncak 07:00 & 18:00'}
          </span>
        </div>

        {/* Mini SVG Curve */}
        <div className="relative h-28 w-full bg-gradient-to-b from-teal-50/30 to-transparent rounded-lg p-2 border border-slate-100">
          <svg viewBox="0 0 300 90" className="w-full h-full overflow-visible select-none">
            <defs>
              <linearGradient id="retailGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {(() => {
              const pts = current.trend.map((val, idx) => {
                const x = (idx / (current.trend.length - 1)) * 280 + 10;
                const y = 80 - ((val - minTrend) / (maxTrend - minTrend)) * 65;
                return { x, y, val };
              });

              const d = pts.reduce((acc, curr, idx) => {
                if (idx === 0) return `M ${curr.x} ${curr.y}`;
                const prev = pts[idx - 1];
                const cpx = prev.x + (curr.x - prev.x) / 2;
                return `${acc} C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
              }, '');

              const area = `${d} L ${pts[pts.length - 1].x} 85 L ${pts[0].x} 85 Z`;

              return (
                <>
                  <path d={area} fill="url(#retailGradient)" />
                  <path
                    d={d}
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  {pts.map((pt, i) => (
                    <circle
                      key={i}
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredPoint === i ? 4.5 : 2.5}
                      fill={hoveredPoint === i ? '#0f766e' : '#ffffff'}
                      stroke="#0d9488"
                      strokeWidth={hoveredPoint === i ? 2 : 1.5}
                      className="cursor-pointer transition-all"
                      onMouseEnter={() => setHoveredPoint(i)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  ))}
                </>
              );
            })()}
          </svg>
        </div>
      </div>

      {/* Top Produk Warung & Ritel */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>Produk Cepat Laku (Fast-Moving)</span>
          <span className="font-mono text-[10px]">Stok Kritis Warung</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-700 font-medium">Beras 5kg & Minyak Goreng 1L</span>
            <span className="font-mono text-slate-600">64.2% Omzet</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-teal-600 h-full rounded-full" style={{ width: '64.2%' }} />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-slate-700 font-medium">Mie Instan & Telur Ayam</span>
            <span className="font-mono text-slate-600">22.8% Omzet</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div className="bg-sky-600 h-full rounded-full" style={{ width: '22.8%' }} />
          </div>
        </div>
      </div>

      {/* Status Footer */}
      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          Data Kasir POS & Buku Kas Tervalidasi
        </span>
        <span className="font-mono">Excel & SQL Pipeline</span>
      </div>
    </div>
  );
};
