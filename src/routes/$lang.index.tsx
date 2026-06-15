import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import {
  ArrowRight,
  Compass,
  Wallet,
  Users,
  ShieldCheck,
  Code2,
  Smartphone,
  Database,
  BarChart3,
  Wrench,
  Boxes,
  Globe2,
  ChevronRight,
  Quote,
  Linkedin,
} from "lucide-react";
import teamAmine from "@/assets/team-amine.jpg";
import teamHery from "@/assets/team-hery.jpg";
import teamClaire from "@/assets/team-claire.jpg";
import teamYann from "@/assets/team-yann.jpg";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const fr = params.lang === "fr";
    return {
      meta: [
        { title: fr ? "Ogensys — Conseil & développement offshore" : "Ogensys — Consulting & offshore development" },
        { name: "description", content: fr
          ? "Cabinet de conseil en transformation digitale et développement offshore. Expertise technique, équipes dédiées, coûts maîtrisés."
          : "Consulting firm for digital transformation and offshore development. Technical expertise, dedicated teams, controlled costs." },
        { property: "og:title", content: "Ogensys" },
        { property: "og:description", content: fr ? "La vision des systèmes." : "The vision behind your systems." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/${params.lang}` },
      ],
      links: [{ rel: "canonical", href: `/${params.lang}` }],
    };
  },
  component: Home,
});

const PILLAR_ICONS = [Compass, Wallet, Users, ShieldCheck];
const EXP_ICONS = [Compass, Boxes, Code2, Database, Smartphone, BarChart3, Wrench];
const MODEL_ICONS = [Globe2, ShieldCheck, Users, Wrench];

const TECHS = ["Java", "PHP", ".Net", "React", "Vue", "Angular", "Odoo", "Android", "iOS", "ERP", "Business Intelligence"];

const TEAM_PORTRAITS = [teamAmine, teamHery, teamClaire, teamYann];

function Home() {
  const lang = useLang();
  const t = useT();

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Animated blobs */}
        <div aria-hidden className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent/30 blob" />
        <div aria-hidden className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blob" style={{ animationDelay: "3s" }} />
        <div aria-hidden className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-sky-400/15 blob" style={{ animationDelay: "6s" }} />
        <div className="container-page relative pt-32 md:pt-40 pb-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-6 fade-up">
              <span className="h-px w-8 bg-white/40" /> {t.home.tagline}
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-balance fade-up delay-100">
              <span className="shimmer-text">{t.home.hero_title}</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed fade-up delay-200">{t.home.hero_sub}</p>
            <div className="mt-10 flex flex-wrap gap-3 fade-up delay-300">
              <Link to="/$lang/contact" params={{ lang } as any}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                  {t.cta.quote} <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
              <Link to="/$lang/expertises" params={{ lang } as any}>
                <Button size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  {t.cta.expertises}
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block fade-up delay-400">
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/20 rounded-3xl blur-2xl float-slow" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 shadow-elegant float-slow">
                <div className="grid grid-cols-2 gap-4">
                  {t.home.stats.map((s) => (
                    <div key={s.l} className="p-4 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-3xl font-semibold text-white">{s.v}</div>
                      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>Banque</span><span>Industrie</span><span>Retail</span><span>Énergie</span><span>Télécom</span><span>Assurance</span><span>Public</span>
        </div>
      </section>

      {/* Why */}
      <section className="section-y">
        <div className="container-page">
          <SectionTitle eyebrow="Ogensys" title={t.home.why_title} subtitle={t.home.why_sub} />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <div key={p.title} className="group p-7 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all">
                  <div className="h-11 w-11 rounded-md bg-primary/5 text-accent grid place-items-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-primary text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertises preview */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionTitle eyebrow="Expertise" title={t.home.expertises_title} subtitle={t.home.expertises_sub} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.expertises.list.map((e, i) => {
              const Icon = EXP_ICONS[i] || Boxes;
              return (
                <Link
                  key={e.t}
                  to="/$lang/expertises"
                  params={{ lang } as any}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-card transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-10 w-10 rounded-md bg-accent/10 text-accent grid place-items-center">
                      <Icon size={18} />
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{e.t}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{e.d}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section-y">
        <div className="container-page">
          <SectionTitle eyebrow="Stack" title={t.home.tech_title} subtitle={t.home.tech_sub} />
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TECHS.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-md bg-card border border-border text-sm font-medium text-primary shadow-sm hover:border-accent hover:text-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Models preview */}
      <section className="section-y bg-primary text-primary-foreground">
        <div className="container-page">
          <SectionTitle eyebrow="Collaboration" title={t.home.models_title} subtitle={t.home.models_sub} light />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.collab.list.map((m, i) => {
              const Icon = MODEL_ICONS[i];
              return (
                <Link
                  key={m.t}
                  to="/$lang/collaboration"
                  params={{ lang } as any}
                  className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/25 transition-all"
                >
                  <div className="h-10 w-10 rounded-md bg-white/10 grid place-items-center mb-4 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{m.t}</h3>
                  <p className="text-sm text-white/70 line-clamp-3 leading-relaxed">{m.d}</p>
                  <div className="mt-4 text-xs text-accent-foreground/80 inline-flex items-center gap-1 font-semibold">
                    {t.cta.discuss} <ChevronRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y">
        <div className="container-page">
          <SectionTitle eyebrow="Méthodologie" title={t.home.process_title} subtitle={t.home.process_sub} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {t.home.process_steps.map((s) => (
              <div key={s.n} className="relative p-6 rounded-xl bg-card border border-border">
                <div className="text-5xl font-semibold text-accent/20 leading-none">{s.n}</div>
                <h3 className="mt-4 font-semibold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionTitle eyebrow="Performance" title={t.home.stats_title} />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.stats.map((s) => (
              <div key={s.l} className="text-center p-8 rounded-xl bg-card border border-border">
                <div className="text-5xl font-semibold text-accent">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-page">
          <SectionTitle eyebrow="Témoignages" title={t.home.testi_title} />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.home.testimonials.map((ti) => (
              <figure key={ti.q} className="p-7 rounded-xl bg-card border border-border relative">
                <Quote className="absolute top-5 right-5 text-accent/15" size={36} />
                <blockquote className="text-base text-primary leading-relaxed">{ti.q}</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground border-t border-border pt-4">{ti.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionTitle eyebrow={lang === "fr" ? "Équipe" : "Team"} title={t.home.team_title} subtitle={t.home.team_sub} />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.team.map((m, i) => (
              <div
                key={m.n}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={TEAM_PORTRAITS[i]}
                    alt={`${m.n} — ${m.r}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a
                    href="#"
                    aria-label={`LinkedIn ${m.n}`}
                    className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/90 backdrop-blur text-primary hover:bg-accent hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    <Linkedin size={15} />
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-primary">{m.n}</h3>
                  <div className="text-xs uppercase tracking-wider text-accent mt-1 font-semibold">{m.r}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-page">
          <div className="rounded-2xl hero-gradient text-white px-8 md:px-16 py-16 text-center shadow-elegant relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-semibold text-balance max-w-3xl mx-auto">{t.home.final_cta_title}</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">{t.home.final_cta_sub}</p>
            <div className="mt-8">
              <Link to="/$lang/contact" params={{ lang } as any}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t.cta.quote} <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}