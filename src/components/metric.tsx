export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="group flex flex-col gap-1 border-l border-border pl-4 transition-colors duration-300 hover:border-accent">
      <span className="font-mono text-2xl font-medium tracking-tight text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-3xl">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
}
