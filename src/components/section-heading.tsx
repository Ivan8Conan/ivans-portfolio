import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-t border-border pt-6">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {index} / {title}
      </span>
      {description ? (
        <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
          {description}
        </h2>
      ) : null}
    </div>
  );
}