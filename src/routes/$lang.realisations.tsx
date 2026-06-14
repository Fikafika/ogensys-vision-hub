import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/use-i18n";
import { useState } from "react";

export const Route = createFileRoute("/$lang/realisations")({
  head: ({ params }) => ({
    meta: [
      { title: params.lang === "fr" ? "Réalisations — Ogensys" : "Case studies — Ogensys" },
      { name: "description", content: params.lang === "fr"
        ? "Études de cas et références projets : transformation digitale, web, mobile, ERP Odoo, Business Intelligence."
        : "Case studies and references: digital transformation, web, mobile, Odoo ERP, Business Intelligence." },
      { property: "og:url", content: `/${params.lang}/realisations` },
    ],
    links: [{ rel: "canonical", href: `/${params.lang}/realisations` }],
  }),
  component: WorkPage,
});

const CATS = ["all", "digital", "web", "mobile", "erp", "bi"] as const;
type Cat = (typeof CATS)[number];

function WorkPage() {
  const t = useT();
  const [filter, setFilter] = useState<Cat>("all");
  const items = t.work.items.filter((i) => filter === "all" || i.c === filter);

  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-page py-20 md:py-28 max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-4">Portfolio</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">{t.work.title}</h1>
          <p className="mt-5 text-lg text-white/75">{t.work.sub}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {t.work.filters[c]}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <article key={it.t} className="rounded-xl bg-card border border-border overflow-hidden hover:shadow-card hover:border-accent/40 transition-all group">
                <div className="aspect-[16/10] hero-gradient relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="absolute bottom-4 left-5 text-white/80 text-xs uppercase tracking-[0.18em] font-semibold">
                    {t.work.filters[it.c as Cat]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {t.work.sector} · {it.s}
                  </div>
                  <h3 className="font-semibold text-primary text-lg">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground"><span className="font-semibold text-primary">{t.work.result} : </span>{it.r}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.k.map((k) => (
                      <span key={k} className="text-[11px] px-2 py-1 rounded bg-secondary text-primary font-medium border border-border">{k}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}