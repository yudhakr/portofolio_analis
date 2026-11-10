import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, BarChart3, Database } from 'lucide-react';
import { PROJECTS, ProjectDetail } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business Intelligence', 'Python & Analytics'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold tracking-wider text-teal-700 uppercase block mb-1">
              Featured Case Studies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Project Data Analysis & Business Intelligence
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Studi kasus end-to-end mulai dari perumusan problem bisnis, ekstraksi SQL, data cleaning, visualisasi dashboard, hingga rekomendasi tindakan strategis.
            </p>
          </div>

          {/* Category Filter Controls (Zero-pill button group) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Header & Category */}
              <div className="p-5 pb-3">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded font-medium">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.datasetSize.split('·')[0]}
                  </span>
                </div>

                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer leading-snug"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* KPI Strip Inside Card */}
              <div className="px-5 py-2.5 bg-slate-50/80 border-y border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {project.kpis[0].label}
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {project.kpis[0].value}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {project.kpis[1].label}
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {project.kpis[1].value}
                  </span>
                </div>
              </div>

              {/* Key Insight Highlight */}
              <div className="p-5 pt-3 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block">
                    Key Insight:
                  </span>
                  <p className="text-xs text-slate-700 bg-teal-50/40 p-2.5 rounded-lg border border-teal-100/60 line-clamp-3">
                    {project.keyFindings[0]}
                  </p>
                </div>

                {/* Tools & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-slate-900 hover:text-teal-700 inline-flex items-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                          title="View GitHub Repository"
                          aria-label="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
