import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) setInView(false);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return { ref, inView };
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
      {children}
    </span>
  );
}

export function CaseSection({
  id,
  index,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  index: string;
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 border-t border-border py-14 sm:py-20", className)}
      aria-label={title}
    >
      <div className="mb-8 flex flex-col gap-3 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
            {index}
          </span>
          <span aria-hidden className="h-px w-8 bg-accent/60" />
          <Eyebrow>{title}</Eyebrow>
        </div>
        {lead ? (
          <h2 className="max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-[2rem]">
            {lead}
          </h2>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** Count-up metric card. Falls back to the literal string when the value isn't numeric. */
export function MetricCard({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>();
  const match = value.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : NaN;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const grouped = match ? match[2].includes(",") : false;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(target) || reduced) return;
    let raf = 0;
    const start = performance.now() + delay;
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / dur));
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduced, delay]);

  const shown =
    Number.isNaN(target) || reduced
      ? value
      : `${match![1]}${(grouped ? Math.round(n).toLocaleString("en-US") : n.toFixed(decimals))}${match![3]}`;

  return (
    <div
      ref={ref}
      className="lift group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/50 sm:p-6"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <p className="font-mono text-3xl font-medium tabular-nums tracking-tight text-foreground sm:text-4xl">
        {shown}
      </p>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatChip({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1 rounded-xl border border-border bg-card/50 px-3 py-2">
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        {k}
      </span>
      <span className="truncate font-mono text-sm text-foreground">{v}</span>
    </div>
  );
}
