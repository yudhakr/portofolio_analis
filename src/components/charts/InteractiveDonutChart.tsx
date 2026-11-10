import React, { useState } from 'react';

interface DonutSlice {
  label: string;
  value: number;
  color?: string;
}

interface InteractiveDonutChartProps {
  data: DonutSlice[];
  title?: string;
  subtitle?: string;
  valueSuffix?: string;
  size?: number;
}

export const InteractiveDonutChart: React.FC<InteractiveDonutChartProps> = ({
  data,
  title,
  subtitle,
  valueSuffix = '%',
  size = 180,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const defaultColors = ['#0d9488', '#0284c7', '#4f46e5', '#f59e0b', '#e11d48', '#64748b'];

  const center = size / 2;
  const radius = size * 0.4;
  const strokeWidth = size * 0.18;

  let cumulativeAngle = 0;
  const slices = data.map((item, index) => {
    const fraction = item.value / total;
    const strokeDasharray = `${fraction * 2 * Math.PI * radius} ${2 * Math.PI * radius}`;
    const strokeDashoffset = -cumulativeAngle * 2 * Math.PI * radius;
    cumulativeAngle += fraction;
    const color = item.color || defaultColors[index % defaultColors.length];
    return {
      ...item,
      fraction,
      strokeDasharray,
      strokeDashoffset,
      color,
    };
  });

  const activeSlice = hoveredIndex !== null ? slices[hoveredIndex] : slices[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-4 transition-all">
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h4 className="text-sm font-semibold text-slate-900">{title}</h4>}
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
        {/* SVG Donut */}
        <div className="relative shrink-0" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
            {slices.map((slice, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <circle
                  key={idx}
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="transparent"
                  stroke={slice.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={slice.strokeDasharray}
                  strokeDashoffset={slice.strokeDashoffset}
                  className="transition-all duration-200 cursor-pointer origin-center"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
            <span className="text-lg font-mono font-bold text-slate-900 leading-tight">
              {activeSlice.value}{valueSuffix}
            </span>
            <span className="text-[11px] text-slate-500 line-clamp-1 max-w-[90px]">
              {activeSlice.label}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2 w-full max-w-xs">
          {slices.map((slice, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className={`flex items-center justify-between text-xs py-1 px-2 rounded cursor-pointer transition-colors ${
                  isHovered ? 'bg-slate-50 font-medium' : 'hover:bg-slate-50/50'
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: slice.color }}
                  />
                  <span className="text-slate-700 truncate">{slice.label}</span>
                </div>
                <span className="font-mono text-slate-600 shrink-0">
                  {slice.value}{valueSuffix}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
