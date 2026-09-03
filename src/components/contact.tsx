import { Button } from "@/components/ui/button";
import { Section, Reveal } from "@/components/section";
import { site } from "@/lib/site-data";

export function Contact() {
  return (
    <Section id="contact" className="bg-surface">
      <Reveal className="max-w-2xl">
        <p className="label-eyebrow">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let's build something useful.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I'm interested in working on products where frontend engineering, AI, and
          thoughtful product design intersect.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-md">
            <a href={site.links.email}>Get in touch</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-md">
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener">
              View LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-md">
            <a href={site.links.github} target="_blank" rel="noreferrer noopener">
              View GitHub
            </a>
          </Button>
        </div>

        <p className="mt-8 font-mono text-sm">
          <a
            href={site.links.email}
            className="text-primary underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
