import { Section, SectionHeader, Reveal, Tag } from "@/components/section";
import { experience } from "@/lib/site-data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Career" title="Experience" />

      <ol className="mt-12 border-l border-border">
        {experience.map((role, i) => (
          <li key={role.company}>
            <Reveal delay={i * 60} className="relative pb-10 pl-6 sm:pl-8">
              <span
                className="absolute -left-[4.5px] top-2 size-2 rounded-full bg-border-strong"
                aria-hidden="true"
              />
              <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                <h3 className="text-lg font-medium text-foreground">{role.company}</h3>
                <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
              </div>
              <p className="mt-1 text-sm text-primary">{role.title}</p>
              {role.description ? (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
