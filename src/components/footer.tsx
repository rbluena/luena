import { site } from "@/lib/site-data";

const footerLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: site.links.email },
  { label: "Portfolio", href: site.links.portfolio },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-[1240px] px-5 sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
