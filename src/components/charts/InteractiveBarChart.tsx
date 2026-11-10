import React, { useState } from 'react';

interface BarDataPoint {
  label: string;
  value: number;
  color?: string;
  secondaryValue?: number;
}

interface InteractiveBarChartProps {
  data: BarDataPoint[];
  title?: string;
  subtitle?: string;
  valuePrefix?: string;
  valueSuffix?: string;
  horizontal?: boolean;
}

export const InteractiveBarChart: React.FC<InteractiveBarChartProps> = ({
  data,
  title,
  subtitle,
  valuePrefix = '',
  valueSuffix = '',
  horizontal = false,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const maxVal = Math.max(...data.map((d) => Math.abs(d.value))) * 1.15 || 1;

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-4 transition-all">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h4 className="text-sm font-semibold text-slate-900">{title}</h4>}
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      )}

      {horizontal ? (
        <div className="space-y-3">
          {data.map((item, idx) => {
            const pct = Math.min(100, (Math.abs(item.value) / maxVal) * 100);
            const isNegative = item.value < 0;
            const isHovered = hoveredIdx === idx;
            const barColor = item.color || (isNegative ? '#e11d48' : '#0d9488');

            return (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className={`font-medium transition-colors ${isHovered ? 'text-slate-950 font-semibold' : 'text-slate-700'}`}>
                    {item.label}
                  </span>
                  <span className="font-mono text-slate-600">
                    {valuePrefix}{item.value.toLocaleString()}{valueSuffix}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: barColor,
                      opacity: hoveredIdx !== null && !isHovered ? 0.6 : 1,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="pt-2">
          <div className="flex items-end justify-between gap-2 h-44 border-b border-slate-200 pb-2 px-1">
            {data.map((item, idx) => {
              const heightPct = Math.max(8, (Math.abs(item.value) / maxVal) * 100);
              const isHovered = hoveredIdx === idx;
              const barColor = item.color || '#0d9488';

              return (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Tooltip on hover */}
                  {isHovered && (
                    <div className="absolute -top-9 z-10 bg-slate-900 text-white text-[11px] font-mono px-2 py-1 rounded shadow-md whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                      {item.label}: {valuePrefix}{item.value.toLocaleString()}{valueSuffix}
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    className="w-full max-w-[42px] rounded-t transition-all duration-200"
                    style={{
                      height: `${heightPct}%`,
                      backgroundColor: barColor,
                      opacity: hoveredIdx !== null && !isHovered ? 0.5 : 1,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Labels */}
          <div className="flex justify-between items-start gap-1 pt-2 px-1">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 text-center truncate"
                title={item.label}
              >
                <span className={`text-[10px] md:text-[11px] truncate block transition-colors ${hoveredIdx === idx ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {valuePrefix}{item.value}{valueSuffix}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
