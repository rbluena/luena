import { ArrowUpRight } from "lucide-react";
import { BrowserFrame, ScreenshotPlaceholder } from "@/components/browser-frame";
import { Reveal, Tag } from "@/components/section";
import type { Project } from "@/lib/site-data";

export function ProjectShowcase({
  project,
  reversed = false,
}: {
  project: Project;
  reversed?: boolean;
}) {
  return (
    <Reveal>
      <article className="group grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <div className={reversed ? "lg:order-2" : undefined}>
          <BrowserFrame
            url={`${project.name.toLowerCase().replace(/\s+/g, "")}.app`}
            className="group-hover:border-border-strong group-hover:shadow-md"
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-200 ease-out group-hover:scale-[1.02]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/10 w-full object-cover"
                  />
                ) : (
                  <ScreenshotPlaceholder label={project.name} />
                )}
              </div>
            </div>
          </BrowserFrame>
        </div>

        <div className={reversed ? "lg:order-1" : undefined}>
          <p className="label-eyebrow">
            {project.index} · {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <dl className="mt-7 space-y-4 border-l border-border pl-5">
            {project.highlights.map((h) => (
              <div key={h.title}>
                <dt className="text-sm font-medium text-foreground">{h.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.body}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 transition-colors duration-200 hover:underline"
                >
                  {link.label}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
