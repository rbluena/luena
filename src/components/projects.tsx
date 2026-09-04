import { FOUNDED_PROJECTS, PROFESSIONAL_PROJECTS } from "../lib/site-data";
import { Reveal } from "./section";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsSectionProps {
  isStandAlonePage?: boolean;
}

export function ProjectsSection({ isStandAlonePage = false }: ProjectsSectionProps) {
  return (
    <Reveal className="py-14 md:py-20">
      <div className="w-full">
        {/* Section Header with Elegant Dark subtle divider line */}
        <div className="flex items-center gap-3 mb-8">
          {isStandAlonePage ? (
            <h1 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-white">
              Projects
            </h1>
          ) : (
            <h2 className="text-[12px] font-mono uppercase tracking-widest text-white/40 font-medium">
              Projects
            </h2>
          )}
          <div className="h-px flex-1bg-white/8" />
        </div>

        {/* Tier 1: Founded */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-[15px] font-medium text-white/90 tracking-tight">Founded</h3>
            <span className="text-[11px] font-mono text-white/40 border border-white/[0.08] px-2 py-0.5 rounded-[6px]">
              2 products
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FOUNDED_PROJECTS.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="p-6 rounded-[10px] border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top bar: Name + Status */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-[18px] font-medium text-white tracking-tight">
                      {project.name}
                    </h4>
                    {/* Status indicator: teal (#1D9E75) for live/shipped */}
                    <div className="inline-flex items-center gap-1.5 text-[#1D9E75] text-[11px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
                      <span>{project.statusLabel}</span>
                    </div>
                  </div>

                  {/* One-line tagline */}
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{project.tagline}</p>

                  {/* 3-bullet "what I built" list */}
                  {project.bullets && (
                    <div className="mb-5 border-t border-white/[0.06] pt-3.5">
                      <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2.5">
                        What I built
                      </div>
                      <ul className="text-[12px] text-white/50 space-y-2">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed flex items-start gap-2">
                            <span className="text-white/30 select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom: Tech stack chips + Links */}
                <div className="pt-3.5 border-t border-white/[0.06] mt-3">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono text-white/70 bg-white/5 border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded-sm py-1"
                        aria-label={`Visit live site for ${project.name}`}
                      >
                        <span>Live site</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/50" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded-sm py-1"
                        aria-label={`View source code on GitHub for ${project.name}`}
                      >
                        <Github className="w-3.5 h-3.5 text-white/50" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2: Professional & other */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-[15px] font-medium text-white/90 tracking-tight">
              Professional & other
            </h3>
            <span className="text-[11px] font-mono text-white/40 border border-white/[0.08] px-2 py-0.5 rounded-[6px]">
              3 projects
            </span>
          </div>

          <div className="space-y-3">
            {PROFESSIONAL_PROJECTS.map((project) => (
              <div
                key={project.id}
                id={`project-row-${project.id}`}
                className="p-5 rounded-[10px] border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h4 className="text-[15px] font-medium text-white tracking-tight">
                        {project.name}
                      </h4>
                      {/* Status indicator: teal (#1D9E75) for shipped */}
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1D9E75]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
                        <span>{project.statusLabel}</span>
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-white/60 font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 justify-between lg:justify-end shrink-0">
                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[6px] text-[10px] font-mono text-white/70 bg-white/5 border border-white/[0.05]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2.5 pl-3 border-l border-white/[0.06]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-white/50 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded-sm"
                          aria-label={`Visit live site for ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-white/50 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded-sm"
                          aria-label={`View GitHub repository for ${project.name}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
