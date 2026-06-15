import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { useLang, useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const lang = useLang();
  const t = useT();
  const nav = useNavigate();
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    try { localStorage.setItem("ogensys.lang", lang); } catch {}
  }, [lang]);

  const switchLang = (to: "fr" | "en") => {
    const rest = loc.pathname.replace(/^\/(fr|en)/, "");
    nav({ to: `/${to}${rest || ""}` as any });
    setOpen(false);
  };

  const items: { to: any; label: string; exact?: boolean }[] = [
    { to: "/$lang", label: t.nav.home, exact: true },
    { to: "/$lang/expertises", label: t.nav.expertises },
    { to: "/$lang/collaboration", label: t.nav.collaboration },
    { to: "/$lang/realisations", label: t.nav.work },
    { to: "/$lang/about", label: t.nav.about },
  ];

  const isHome = /^\/(fr|en)\/?$/.test(loc.pathname);
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/75 backdrop-blur border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo light={transparent} large={transparent} />
        <nav className="hidden lg:flex items-center gap-7">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              params={{ lang } as any}
              activeOptions={{ exact: it.exact }}
              activeProps={{ className: transparent ? "text-white" : "text-accent" }}
              inactiveProps={{
                className: transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-primary",
              }}
              className="text-sm font-medium transition-colors"
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className={`hidden md:flex items-center text-xs font-semibold rounded-md border overflow-hidden ${transparent ? "border-white/30" : "border-border"}`}>
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`px-2.5 py-1 transition-colors ${
                  lang === l
                    ? transparent
                      ? "bg-white text-primary"
                      : "bg-primary text-primary-foreground"
                    : transparent
                    ? "text-white/80 hover:bg-white/10"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/$lang/contact" params={{ lang }} className="hidden sm:block">
            <Button
              className={
                transparent
                  ? "bg-white text-primary hover:bg-white/90 shadow-sm"
                  : "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
              }
            >
              {t.cta.quote}
            </Button>
          </Link>
          <button
            className={`lg:hidden p-2 ${transparent ? "text-white" : "text-primary"}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                params={{ lang } as any}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primary py-1.5"
              >
                {it.label}
              </Link>
            ))}
            <Link to="/$lang/contact" params={{ lang }} onClick={() => setOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground">{t.cta.quote}</Button>
            </Link>
            <div className="flex items-center gap-2 pt-2">
              {(["fr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-3 py-1 text-xs font-semibold rounded border ${
                    lang === l ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}