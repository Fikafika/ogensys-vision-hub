import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Eye, Globe2, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => ({
    meta: [
      { title: params.lang === "fr" ? "À propos — Ogensys" : "About — Ogensys" },
      { name: "description", content: params.lang === "fr"
        ? "Ogensys, cabinet de conseil et de développement offshore. Notre histoire, mission, valeurs et ancrage à Madagascar."
        : "Ogensys, consulting and offshore development firm. Our story, mission, values and Madagascar delivery center." },
      { property: "og:url", content: `/${params.lang}/about` },
    ],
    links: [{ rel: "canonical", href: `/${params.lang}/about` }],
  }),
  component: AboutPage,
});

const VICONS = [ShieldCheck, Eye, Sparkles];

function AboutPage() {
  const lang = useLang();
  const t = useT();
  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-page py-20 md:py-28 max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-4">{t.home.tagline}</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">{t.about.title}</h1>
          <p className="mt-5 text-lg text-white/75">{t.about.sub}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">Story</div>
            <h2 className="text-3xl font-semibold text-primary">{t.about.story_t}</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>{t.about.story_d}</p>
            <div className="p-6 bg-secondary/60 border-l-4 border-accent rounded-r-md italic text-primary text-lg">
              « {t.home.tagline} »
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h2 className="text-2xl font-semibold text-primary mb-3">{t.about.mission_t}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.about.mission_d}</p>
          </div>
          <div className="p-8 rounded-xl bg-primary text-white">
            <div className="flex items-center gap-3 mb-3">
              <Globe2 size={22} className="text-accent-foreground" />
              <h2 className="text-2xl font-semibold">{t.about.offshore_t}</h2>
            </div>
            <p className="text-white/75 leading-relaxed">{t.about.offshore_d}</p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-3">Values</div>
            <h2 className="text-3xl font-semibold text-primary">{t.about.values_t}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => {
              const Icon = VICONS[i];
              return (
                <div key={v.t} className="p-8 rounded-xl bg-card border border-border">
                  <div className="h-11 w-11 rounded-md bg-accent/10 text-accent grid place-items-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="rounded-2xl hero-gradient text-white p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-balance max-w-2xl mx-auto">{t.home.final_cta_title}</h2>
            <div className="mt-8">
              <Link to="/$lang/contact" params={{ lang } as any}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">{t.cta.quote}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}