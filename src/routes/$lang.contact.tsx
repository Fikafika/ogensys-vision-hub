import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Linkedin, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => ({
    meta: [
      { title: params.lang === "fr" ? "Demander un devis — Ogensys" : "Request a quote — Ogensys" },
      { name: "description", content: params.lang === "fr"
        ? "Décrivez votre projet. Un consultant Ogensys vous répond sous 48h. Échange gratuit et sans engagement."
        : "Tell us about your project. An Ogensys consultant replies within 48 hours. Free, no-commitment conversation." },
      { property: "og:url", content: `/${params.lang}/contact` },
    ],
    links: [{ rel: "canonical", href: `/${params.lang}/contact` }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(150),
  project: z.string().min(1),
  model: z.string().min(1),
  desc: z.string().trim().min(10).max(2000),
  deadline: z.string().trim().max(120).optional(),
});

function ContactPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [project, setProject] = useState("");
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      project,
      model,
      desc: String(fd.get("desc") || ""),
      deadline: String(fd.get("deadline") || ""),
    };
    const r = schema.safeParse(payload);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Invalid form");
      return;
    }
    setLoading(true);
    await new Promise((res) => setTimeout(res, 700));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <section className="hero-gradient text-white">
        <div className="container-page py-20 md:py-24 max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-foreground/90 mb-4">Contact</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">{t.contact.title}</h1>
          <p className="mt-5 text-lg text-white/75">{t.contact.sub}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 bg-white/10 border border-white/20 rounded-full px-4 py-2">
            <Clock size={14} /> {t.contact.reassure}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="p-10 rounded-2xl bg-card border border-border text-center">
                <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-primary">{t.contact.success_t}</h2>
                <p className="mt-3 text-muted-foreground">{t.contact.success_d}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-card space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t.contact.name}</Label>
                    <Input id="name" name="name" required maxLength={100} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t.contact.email}</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">{t.contact.company}</Label>
                  <Input id="company" name="company" required maxLength={150} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label>{t.contact.project}</Label>
                    <Select value={project} onValueChange={setProject}>
                      <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                      <SelectContent>
                        {t.contact.project_options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>{t.contact.model}</Label>
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger><SelectValue placeholder="—" /></SelectTrigger>
                      <SelectContent>
                        {t.contact.model_options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="desc">{t.contact.desc}</Label>
                  <Textarea id="desc" name="desc" required rows={5} maxLength={2000} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="deadline">{t.contact.deadline}</Label>
                  <Input id="deadline" name="deadline" maxLength={120} placeholder="Q1 2026, ASAP…" />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-accent">
                  {loading ? "…" : t.contact.send}
                </Button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-xl bg-primary text-white">
              <h3 className="text-lg font-semibold mb-4">{t.contact.coordinates}</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5" /> contact@ogensys.com</li>
                <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5" /> +33 1 23 45 67 89</li>
                <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5" /> {t.contact.address}</li>
                <li className="flex items-start gap-3"><Linkedin size={16} className="mt-0.5" /> <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white underline-offset-2 hover:underline">linkedin.com/company/ogensys</a></li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden border border-border h-64 bg-secondary">
              <iframe
                title="Ogensys office"
                src="https://www.openstreetmap.org/export/embed.html?bbox=47.50%2C-18.92%2C47.55%2C-18.88&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}