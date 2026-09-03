import { Section, SectionHeader, Reveal, Tag } from "@/components/section";
import { expertise } from "@/lib/site-data";

export function Expertise() {
  return (
    <Section className="bg-surface">
      <SectionHeader eyebrow="Capabilities" title="Engineering expertise" />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {expertise.map((group, i) => (
          <Reveal key={group.domain} delay={i * 60} className="bg-card p-6 sm:p-8">
            <h3 className="text-base font-medium text-foreground">{group.domain}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {group.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
