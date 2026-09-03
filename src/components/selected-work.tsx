import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader, Reveal, Tag } from "@/components/section";
import { ProjectShowcase } from "@/components/project-showcase";
import { otherProjects, projects } from "@/lib/site-data";

export function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Work"
        title="Selected work"
        description="A selection of products I've designed and built."
      />

      <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-28">
        {projects.map((project, i) => (
          <ProjectShowcase key={project.name} project={project} reversed={i % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-20 sm:mt-28">
        <h3 className="label-eyebrow">Other projects</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                className="group block h-full rounded-lg border border-border bg-card p-5 transition-colors duration-200 hover:border-border-strong"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-base font-medium text-foreground">
                    {project.name}
                  </h4>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
