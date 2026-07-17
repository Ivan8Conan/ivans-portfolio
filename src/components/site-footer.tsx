export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} Ivan Conanta · Tegal, Indonesia
        </p>
        <div className="flex items-center gap-4 font-mono">
          <a
            href="mailto:ivanconanta360@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            ivanconanta360@gmail.com
          </a>
          <a
            href="https://github.com/Ivan8Conan"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            github/Ivan8Conan
          </a>
        </div>
      </div>
    </footer>
  );
}