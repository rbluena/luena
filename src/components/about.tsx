import { Section, SectionHeader, Reveal } from "@/components/section";
import { site } from "@/lib/site-data";

const facts = [
  `Based in ${site.location}`,
  "Remote-friendly",
  "Open to frontend / full-stack opportunities",
];

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
        <SectionHeader eyebrow="Profile" title="About" />

        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a product-minded software engineer who enjoys working at the
              intersection of interface design, frontend architecture, and emerging
              technology.
            </p>
            <p>
              I've built products from the ground up, worked across the stack, and spent
              much of my recent work exploring how AI can become part of everyday software
              workflows rather than simply another feature.
            </p>
            <p>
              I care about building software that is useful, understandable, performant,
              and maintainable.
            </p>
          </div>

          <ul className="mt-8 space-y-2">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-3 text-sm text-foreground">
                <span
                  className="size-1 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {fact}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
