import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeader, Reveal } from "@/components/section";
import { principleDetails, principles } from "@/lib/site-data";

export function Principles() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16">
        <div>
          <SectionHeader eyebrow="Principles" title="How I think about engineering" />
          <Reveal delay={60}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {principles.map((p) => (
                <li
                  key={p}
                  className="rounded border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              I try to treat these as design constraints rather than things to add at the
              end.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {principleDetails.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
