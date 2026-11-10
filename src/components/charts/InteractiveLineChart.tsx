import React, { useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

interface InteractiveLineChartProps {
  data: DataPoint[];
  title?: string;
  subtitle?: string;
  valuePrefix?: string;
  valueSuffix?: string;
  height?: number;
}

export const InteractiveLineChart: React.FC<InteractiveLineChartProps> = ({
  data,
  title,
  subtitle,
  valuePrefix = '',
  valueSuffix = '',
  height = 200,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const values = data.map((d) => d.value);
  const minVal = Math.min(...values) * 0.85;
  const maxVal = Math.max(...values) * 1.1;
  const range = maxVal - minVal || 1;

  const paddingX = 40;
  const paddingY = 24;
  const width = 600;

  // Calculate coordinates safely
  const divisor = data.length > 1 ? data.length - 1 : 1;
  const points = data.map((d, i) => {
    const x = paddingX + (i / divisor) * (width - paddingX * 2);
    const y = height - paddingY - ((d.value - minVal) / range) * (height - paddingY * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    const prev = points[idx - 1];
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  const activePoint = hoveredIndex !== null ? points[hoveredIndex] : points[points.length - 1];

  const formatNumber = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
    return val.toLocaleString();
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-4 transition-all">
      {(title || subtitle) && (
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {title && <h4 className="text-sm font-semibold text-slate-900">{title}</h4>}
            {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
          </div>
          {activePoint && (
            <div className="text-right shrink-0">
              <span className="text-xs font-mono text-slate-400 block">{activePoint.label}</span>
              <span className="text-sm font-mono font-semibold text-teal-700">
                {valuePrefix}{formatNumber(activePoint.value)}{valueSuffix}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="relative w-full">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible select-none"
        >
          <defs>
            <linearGradient id="chartGradientTeal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          {/* Horizontal gridlines */}
          {[0.25, 0.5, 0.75, 1].map((pct, idx) => {
            const y = height - paddingY - pct * (height - paddingY * 2);
            return (
              <line
                key={idx}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                stroke="#f1f5f9"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            );
          })}

          {/* Area fill */}
          <path d={areaD} fill="url(#chartGradientTeal)" />

          {/* Line stroke */}
          <path
            d={pathD}
            fill="none"
            stroke="#0d9488"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points & hover triggers */}
          {points.map((pt, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <g
                key={idx}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Invisible hit area */}
                <rect
                  x={pt.x - 14}
                  y={0}
                  width={28}
                  height={height}
                  fill="transparent"
                />

                {/* Vertical guide on hover */}
                {isHovered && (
                  <line
                    x1={pt.x}
                    y1={paddingY}
                    x2={pt.x}
                    y2={height - paddingY}
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                )}

                {/* Point circle */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 5.5 : 3}
                  className="transition-all duration-150"
                  fill={isHovered ? '#0f766e' : '#ffffff'}
                  stroke="#0d9488"
                  strokeWidth={isHovered ? 2.5 : 2}
                />
              </g>
            );
          })}

          {/* X Axis Labels */}
          {points.map((pt, idx) => {
            // Display subset of labels if too many
            const showLabel = points.length <= 8 || idx % Math.ceil(points.length / 6) === 0 || idx === points.length - 1;
            if (!showLabel) return null;
            return (
              <text
                key={idx}
                x={pt.x}
                y={height - 6}
                textAnchor="middle"
                className="text-[11px] font-mono fill-slate-400"
              >
                {pt.label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
