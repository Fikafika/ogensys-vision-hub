import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Compass, Boxes, Code2, Database, Smartphone, BarChart3, Wrench } from "lucide-react";

export const Route = createFileRoute("/$lang/expertises")({
  head: ({ params }) => ({
    meta: [
      { title: params.lang === "fr" ? "Nos expertises — Ogensys" : "Our expertise — Ogensys" },
      { name: "description", content: params.lang === "fr"
        ? "Transformation digitale, développement web, mobile, ERP, BI, maintenance. Six domaines de compétence Ogensys."
        : "Digital transformation, web & mobile development, ERP, BI, maintenance. Six Ogensys areas of expertise." },
      { property: "og:url", content: `/${params.lang}/expertises` },
    ],
    links: [{ rel: "canonical", href: `/${params.lang}/expertises` }],
  }),
  component: ExpertisesPage,
});

const ICONS = [Compass, Boxes, Code2, Smartphone, BarChart3, Wrench];

function ExpertisesPage() {
  const lang = useLang();
  const t = useT();

  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-4">Expertise</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">{t.expertises.title}</h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">{t.expertises.sub}</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-20">
          {t.expertises.list.map((e, i) => {
            const Icon = ICONS[i] || Boxes;
            const reverse = i % 2 === 1;
            return (
              <article key={e.t} className="grid lg:grid-cols-12 gap-10 items-start">
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="sticky top-24">
                    <div className="h-14 w-14 rounded-lg bg-accent/10 text-accent grid place-items-center mb-5">
                      <Icon size={24} />
                    </div>
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">
                      {String(i + 1).padStart(2, "0")} / {String(t.expertises.list.length).padStart(2, "0")}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary text-balance">{e.t}</h2>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-7">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{e.d}</p>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">{t.expertises.benefits}</h3>
                    <ul className="space-y-2">
                      {e.b.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-primary/80">
                          <Check size={16} className="text-accent mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">{t.expertises.tech}</h3>
                    <div className="flex flex-wrap gap-2">
                      {e.k.map((k) => (
                        <span key={k} className="text-xs font-medium px-3 py-1.5 rounded-md bg-secondary border border-border text-primary">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link to="/$lang/contact" params={{ lang } as any}>
                    <Button className="bg-primary text-primary-foreground hover:bg-accent">
                      {t.cta.discuss} <ArrowRight size={14} className="ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}