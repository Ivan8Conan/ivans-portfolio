export function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-l border-border pl-4">
      <span className="font-mono text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}