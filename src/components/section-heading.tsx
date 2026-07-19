import type { ReactNode, HTMLAttributes } from "react";

// Ekstensikan HTMLAttributes agar komponen mendukung id, aria-*, dan atribut standar DOM lainnya.
export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  index: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({
  index,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    // ...props di-spread ke container root (mendukung prop id dari parent)
    <div
      className={`mb-10 flex flex-col gap-3 border-t border-border pt-6 ${className || ""}`.trim()}
      {...props}
    >
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
