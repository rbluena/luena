import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/section";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <p className="label-eyebrow">Frontend Developer</p>
            <h1 className="mt-5 max-w-[16ch] text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
              I build products people
              <br className="hidden sm:block" /> actually use.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and build polished web applications, browser experiences, and AI-powered
              products — with a focus on usability, architecture, and product impact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md">
                <a href="#work">View selected work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Open to mid-level &amp; senior opportunities
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
