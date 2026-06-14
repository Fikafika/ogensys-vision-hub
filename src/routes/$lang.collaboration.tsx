import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe2, ShieldCheck, Users, Wrench } from "lucide-react";

export const Route = createFileRoute("/$lang/collaboration")({
  head: ({ params }) => ({
    meta: [
      { title: params.lang === "fr" ? "Modèles de collaboration — Ogensys" : "Engagement models — Ogensys" },
      { name: "description", content: params.lang === "fr"
        ? "Régie, forfait, équipe dédiée ou centre de service : choisissez le modèle de collaboration adapté à votre projet."
        : "Time & Material, fixed-price, dedicated team or service center: pick the engagement model that fits your project." },
      { property: "og:url", content: `/${params.lang}/collaboration` },
    ],
    links: [{ rel: "canonical", href: `/${params.lang}/collaboration` }],
  }),
  component: CollabPage,
});

const ICONS = [Globe2, ShieldCheck, Users, Wrench];

function CollabPage() {
  const lang = useLang();
  const t = useT();
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-page py-20 md:py-28 max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-4">Collaboration</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">{t.collab.title}</h1>
          <p className="mt-5 text-lg text-white/75">{t.collab.sub}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {t.collab.list.map((m, i) => {
            const Icon = ICONS[i];
            return (
              <div key={m.t} className="p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 w-12 rounded-lg bg-primary text-white grid place-items-center">
                    <Icon size={20} />
                  </div>
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-primary">{m.t}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.d}</p>

                <div className="mt-6 p-4 rounded-md bg-secondary/60 border border-border">
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">{t.collab.ideal}</div>
                  <p className="text-sm text-primary/80">{m.i}</p>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{t.collab.advantages}</div>
                  <ul className="space-y-2">
                    {m.a.map((adv) => (
                      <li key={adv} className="flex items-start gap-2 text-sm text-primary/80">
                        <Check size={15} className="text-accent mt-0.5 shrink-0" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container-page mt-16">
          <div className="rounded-2xl bg-primary text-white p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance max-w-2xl mx-auto">{t.cta.find_model}</h2>
            <div className="mt-8">
              <Link to="/$lang/contact" params={{ lang } as any}>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  {t.cta.quote} <ArrowRight size={16} className="ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}