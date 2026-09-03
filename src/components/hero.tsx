import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/section";

function HeroVisual() {
  return (
    <div
      className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <p className="label-eyebrow">AI Workflow</p>
        <span className="font-mono text-[10px] text-muted-foreground">v1</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-foreground">
        <span className="rounded border border-border bg-surface px-2 py-1">Prompt</span>
        <ArrowRight className="size-3.5 text-muted-foreground" />
        <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 text-primary">
          Model
        </span>
        <ArrowRight className="size-3.5 text-muted-foreground" />
        <span className="rounded border border-border bg-surface px-2 py-1">Response</span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-surface p-3">
          <p className="font-mono text-[11px] text-muted-foreground">Browser</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-3/4 rounded-full bg-muted" />
          </div>
        </div>
        <div className="rounded-md border border-border bg-surface p-3">
          <p className="font-mono text-[11px] text-muted-foreground">AI Pipeline</p>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-2/3 rounded-full bg-primary/40" />
            <div className="h-1.5 w-full rounded-full bg-muted" />
          </div>
        </div>
      </div>

      <div className="tech-grid mt-4 h-16 rounded-md border border-border" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <p className="label-eyebrow">Frontend Engineer · Product Builder</p>
            <h1 className="mt-5 max-w-[16ch] text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl">
              I build AI-native products
              <br className="hidden sm:block" /> with thoughtful interfaces.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I design and build polished web applications, browser experiences, and
              AI-powered workflows — with a focus on usability, architecture, and product
              impact.
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

          <Reveal delay={100}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
