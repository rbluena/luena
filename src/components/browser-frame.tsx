import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-200",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </span>
        <span className="ml-2 min-w-0 flex-1 truncate rounded border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

/** Abstract placeholder shown until a real screenshot is provided. */
export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="tech-grid relative aspect-16/10 w-full bg-background">
      <div className="absolute inset-0 grid place-items-center p-6">
        <div className="w-full max-w-md rounded-md border border-border bg-card/95 p-4 shadow-sm">
          <p className="label-eyebrow">{label}</p>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-4/5 rounded-full bg-muted" />
            <div className="h-2 w-3/5 rounded-full bg-muted" />
            <div className="h-2 w-2/3 rounded-full bg-muted" />
          </div>
          <div className="mt-5 flex items-center gap-2">
            <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
              Screenshot placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
