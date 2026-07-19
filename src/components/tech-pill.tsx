export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] leading-5 text-foreground transition-colors duration-200 hover:border-accent hover:bg-accent/10">
      {children}
    </span>
  );
}
