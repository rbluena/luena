import { useEffect, useState } from "react";
import { Github, Linkedin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/lib/site-data";

export function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto grid max-w-310 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 md:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-2">
          <img
            src="/favicon-32x32.png"
            alt={site.name}
            width={28}
            height={28}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-7 w-7 shrink-0"
          />
          <span className="min-w-0 truncate text-sm font-semibold tracking-tight text-foregroun hidden md:inline-block">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden justify-center md:flex">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground aria-[current]:font-medium aria-[current]:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="GitHub profile"
            className="hidden size-9 rounded-md border border-border sm:inline-flex"
          >
            <a href={site.links.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="LinkedIn profile"
            className="hidden size-9 rounded-md border border-border sm:inline-flex"
          >
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="size-9 rounded-md border border-border md:hidden"
              >
                <Menu className="size-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-sm">{site.name}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="flex flex-col">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block border-b border-border py-3 text-base text-foreground"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                  <li>
                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block border-b border-border py-3 text-base text-muted-foreground"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block border-b border-border py-3 text-base text-muted-foreground"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
