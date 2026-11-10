import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Database, Code2, AlertCircle, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ProjectDetail } from '../data/portfolioData';
import { InteractiveLineChart } from './charts/InteractiveLineChart';
import { InteractiveBarChart } from './charts/InteractiveBarChart';
import { InteractiveDonutChart } from './charts/InteractiveDonutChart';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl my-auto z-10 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="text-xs font-mono text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded shrink-0">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-10 overflow-y-auto text-slate-700 text-sm leading-relaxed">
          {/* Summary & Tools Bar */}
          <div>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {project.shortDescription}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
              <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* KPI Metrics Summary Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
              >
                <span className="text-[11px] text-slate-500 block truncate">{kpi.label}</span>
                <span className="text-lg font-mono font-bold text-slate-900 block mt-0.5">
                  {kpi.value}
                </span>
                {kpi.change && (
                  <span className="text-[10px] font-mono text-teal-700 block mt-0.5 font-medium">
                    {kpi.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 1. Problem Statement */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <h4>1. Problem Statement</h4>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 text-slate-700">
              {project.problemStatement}
            </div>
          </div>

          {/* 2. Dataset Overview */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Database className="w-4 h-4 text-teal-600" />
              <h4>2. Dataset & Scope</h4>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/60 text-xs">
                <span className="font-semibold text-slate-800">{project.datasetName}</span>
                <span className="font-mono text-slate-500">{project.datasetSize}</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">
                {project.datasetOverview}
              </p>
            </div>
          </div>

          {/* 3. Data Cleaning & Preprocessing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Code2 className="w-4 h-4 text-sky-600" />
              <h4>3. Data Cleaning & Query Pipeline</h4>
            </div>

            <ul className="space-y-2">
              {project.dataCleaningSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            {/* Code Snippet Box */}
            {project.codeSnippet && (
              <div className="mt-3 rounded-xl bg-slate-950 p-4 border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <span>{project.codeSnippet.title}</span>
                  <span className="uppercase text-teal-400 font-semibold">{project.codeSnippet.language}</span>
                </div>
                <pre className="text-xs font-mono text-teal-200/90 overflow-x-auto leading-relaxed max-h-60">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>

          {/* 4. Exploratory Data Analysis (EDA) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <TrendingUp className="w-4 h-4 text-teal-600" />
              <h4>4. Exploratory Data Analysis (EDA)</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {project.exploratoryAnalysis.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed"
                >
                  <span className="font-mono text-teal-700 font-semibold block mb-1">
                    Finding 0{idx + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Interactive Visualizations */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-slate-900 font-bold text-base">
                5. Visualisasi Data & Interactive Charts
              </h4>
              <span className="text-xs font-mono text-slate-400">
                Hover to inspect data points
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.visualizations.map((chart, idx) => {
                if (chart.type === 'line') {
                  return (
                    <div key={idx} className="md:col-span-2">
                      <InteractiveLineChart
                        data={chart.data}
                        title={chart.title}
                        subtitle={chart.subtitle}
                        height={190}
                      />
                    </div>
                  );
                }
                if (chart.type === 'donut') {
                  return (
                    <div key={idx} className="w-full">
                      <InteractiveDonutChart
                        data={chart.data}
                        title={chart.title}
                        subtitle={chart.subtitle}
                      />
                    </div>
                  );
                }
                return (
                  <div key={idx} className="w-full">
                    <InteractiveBarChart
                      data={chart.data}
                      title={chart.title}
                      subtitle={chart.subtitle}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6. Key Findings */}
          <div className="space-y-2">
            <h4 className="text-slate-900 font-bold text-base">
              6. Key Findings (Insight Kunci)
            </h4>
            <div className="space-y-2">
              {project.keyFindings.map((finding, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-teal-50/50 border border-teal-100 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Business Recommendations */}
          <div className="space-y-2 pb-2">
            <h4 className="text-slate-900 font-bold text-base">
              7. Business Recommendations & Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.businessRecommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 text-white space-y-1.5"
                >
                  <span className="text-[10px] font-mono text-teal-400 font-semibold uppercase tracking-wider block">
                    Action Plan 0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-200 leading-normal">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-mono">
            {project.title} · Case Study
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Code Repository</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
