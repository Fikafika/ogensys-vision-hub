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
  Coffee,
  Atom,
  Triangle,
  Shield,
  Package,
  Apple,
  Hash,
  Globe,
  ShoppingBag,
  Music,
} from "lucide-react";
import teamAmine from "@/assets/team-amine.jpg";
import teamHery from "@/assets/team-hery.jpg";
import teamClaire from "@/assets/team-claire.jpg";
import teamYann from "@/assets/team-yann.jpg";
import expertiseIllustration from "@/assets/expertise-illustration.jpg";
import expertiseCollaboration from "@/assets/expertise-collaboration.jpg";
import { Reveal } from "@/components/site/Reveal";
import { HeroConstellation } from "@/components/site/HeroConstellation";

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
const EXP_ICONS = [Compass, Boxes, Code2, Smartphone, BarChart3, Wrench];
const MODEL_ICONS = [Globe2, ShieldCheck, Users, Wrench];

const TECHS: { name: string; Icon: typeof Code2 }[] = [
  { name: "Java", Icon: Coffee },
  { name: "PHP", Icon: Code2 },
  { name: ".Net", Icon: Hash },
  { name: "React", Icon: Atom },
  { name: "Vue", Icon: Triangle },
  { name: "Angular", Icon: Shield },
  { name: "Odoo", Icon: Package },
  { name: "Android", Icon: Smartphone },
  { name: "iOS", Icon: Apple },
  { name: "ERP", Icon: Boxes },
  { name: "Business Intelligence", Icon: BarChart3 },
];

const TEAM_PORTRAITS = [teamAmine, teamHery, teamClaire, teamYann];

type ClientLogo = { name: string; color: string; mark: React.ReactNode };
const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "AXIOM Bank",
    color: "#0B5FFF",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <path d="M4 26 L16 6 L28 26 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M10 20 H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "NovaRetail",
    color: "#E11D48",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Helios Energy",
    color: "#F59E0B",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="16" cy="16" r="5" fill="currentColor" stroke="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line
            key={a}
            x1={16 + Math.cos((a * Math.PI) / 180) * 9}
            y1={16 + Math.sin((a * Math.PI) / 180) * 9}
            x2={16 + Math.cos((a * Math.PI) / 180) * 13}
            y2={16 + Math.sin((a * Math.PI) / 180) * 13}
          />
        ))}
      </svg>
    ),
  },
  {
    name: "Velora Telecom",
    color: "#7C3AED",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M6 22 Q11 14 16 22" />
        <path d="M4 26 Q11 12 18 26" opacity="0.6" />
        <circle cx="24" cy="10" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Meridian Group",
    color: "#0F766E",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="16" cy="16" r="11" />
        <path d="M5 16 H27" />
        <path d="M16 5 Q22 16 16 27 Q10 16 16 5" />
      </svg>
    ),
  },
  {
    name: "Altius Insurance",
    color: "#1E3A8A",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M16 4 L26 9 V18 Q26 24 16 28 Q6 24 6 18 V9 Z" />
        <path d="M12 16 L15 19 L21 12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Solaria",
    color: "#EA580C",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M16 4 L19 13 L28 13 L21 19 L24 28 L16 22 L8 28 L11 19 L4 13 L13 13 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Kairos Industries",
    color: "#374151",
    mark: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="20" rx="2" />
        <path d="M6 16 L16 6 L26 16 L16 26 Z" />
      </svg>
    ),
  },
];

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
              <div className="absolute -inset-6 bg-accent/20 rounded-3xl blur-2xl float-slow" aria-hidden />
              <div className="relative aspect-square">
                <HeroConstellation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Ogensys" title={t.home.why_title} subtitle={t.home.why_sub} />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="group p-7 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all h-full">
                    <div className="h-11 w-11 rounded-md bg-primary/5 text-accent grid place-items-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-primary text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertises preview */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Expertise" title={t.home.expertises_title} subtitle={t.home.expertises_sub} />
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
            {/* Left column: compact list */}
            <Reveal as="ul" className="lg:col-span-7 divide-y divide-border rounded-xl border border-border bg-card overflow-hidden">
              {t.expertises.list.map((e, i) => {
                const Icon = EXP_ICONS[i] || Boxes;
                return (
                  <li key={e.t}>
                    <Link
                      to="/$lang/expertises"
                      params={{ lang } as any}
                      className="group flex items-center gap-4 px-5 py-4 hover:bg-secondary/40 transition-colors"
                    >
                      <div className="h-9 w-9 shrink-0 rounded-md bg-accent/10 text-accent grid place-items-center group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <h3 className="flex-1 font-medium text-primary group-hover:text-accent transition-colors text-[15px] truncate">{e.t}</h3>
                      <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </Reveal>

            {/* Right column: collaboration image */}
            <Reveal className="lg:col-span-5" delay={150}>
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-elegant group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
                <img
                  src={expertiseCollaboration}
                  alt={lang === "fr" ? "Équipe en collaboration" : "Team collaborating"}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Stack" title={t.home.tech_title} subtitle={t.home.tech_sub} />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {TECHS.map(({ name, Icon }, i) => (
              <Reveal key={name} delay={i * 50} y={14}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border text-sm font-medium text-primary shadow-sm hover:border-accent hover:text-accent transition-colors">
                  <Icon size={16} className="text-accent" aria-hidden />
                  {name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Models preview */}
      <section className="section-y bg-primary text-primary-foreground">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Collaboration" title={t.home.models_title} subtitle={t.home.models_sub} light />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.collab.list.map((m, i) => {
              const Icon = MODEL_ICONS[i];
              return (
                <Reveal key={m.t} delay={i * 90}>
                  <Link
                    to="/$lang/collaboration"
                    params={{ lang } as any}
                    className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/25 transition-all block h-full"
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Performance" title={t.home.stats_title} />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className="text-center p-8 rounded-xl bg-card border border-border">
                  <div className="text-5xl font-semibold text-accent">{s.v}</div>
                  <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionTitle
              eyebrow={lang === "fr" ? "Clients" : "Clients"}
              title={t.home.clients_title}
              subtitle={t.home.clients_sub}
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {CLIENT_LOGOS.map((c, i) => (
              <Reveal key={c.name} delay={i * 60} y={16}>
                <div
                  title={c.name}
                  className="group bg-card hover:bg-secondary/40 transition-colors flex items-center justify-center px-4 py-10 h-full"
                >
                  <span
                    className="text-muted-foreground transition-colors duration-300 group-hover:[color:var(--brand)] [&>svg]:h-10 [&>svg]:w-10"
                    style={{ ["--brand" as any]: c.color }}
                    aria-label={c.name}
                  >
                    {c.mark}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow="Témoignages" title={t.home.testi_title} />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {t.home.testimonials.map((ti, i) => (
              <Reveal key={ti.q} delay={i * 120}>
                <figure className="p-7 rounded-xl bg-card border border-border relative h-full">
                  <Quote className="absolute top-5 right-5 text-accent/15" size={36} />
                  <blockquote className="text-base text-primary leading-relaxed">{ti.q}</blockquote>
                  <figcaption className="mt-5 text-sm text-muted-foreground border-t border-border pt-4">{ti.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <Reveal>
            <SectionTitle eyebrow={lang === "fr" ? "Équipe" : "Team"} title={t.home.team_title} subtitle={t.home.team_sub} />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.team.map((m, i) => (
              <Reveal key={m.n} delay={i * 90}>
                <div className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent/40 hover:shadow-card transition-all h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-page">
          <Reveal className="rounded-2xl hero-gradient text-white px-8 md:px-16 py-16 text-center shadow-elegant relative overflow-hidden block">
            <h2 className="text-3xl md:text-4xl font-semibold text-balance max-w-3xl mx-auto">{t.home.final_cta_title}</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">{t.home.final_cta_sub}</p>
            <div className="mt-8">
              <Link to="/$lang/contact" params={{ lang } as any}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t.cta.quote} <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}