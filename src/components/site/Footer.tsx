import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { useLang, useT } from "@/i18n/use-i18n";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const lang = useLang();
  const t = useT();
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">{t.footer.tagline}</p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-md bg-white/10 hover:bg-white/20 transition" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">{t.footer.nav_t}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/$lang" params={{ lang }} className="hover:text-white">{t.nav.home}</Link></li>
            <li><Link to="/$lang/expertises" params={{ lang }} className="hover:text-white">{t.nav.expertises}</Link></li>
            <li><Link to="/$lang/collaboration" params={{ lang }} className="hover:text-white">{t.nav.collaboration}</Link></li>
            <li><Link to="/$lang/realisations" params={{ lang }} className="hover:text-white">{t.nav.work}</Link></li>
            <li><Link to="/$lang/about" params={{ lang }} className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link to="/$lang/contact" params={{ lang }} className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">{t.footer.expert_t}</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {t.expertises.list.slice(0, 6).map((e) => (
              <li key={e.t}>
                <Link to="/$lang/expertises" params={{ lang }} className="hover:text-white">{e.t}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">{t.footer.news_t}</h4>
          <p className="text-sm text-white/70 mb-3">{t.footer.news_p}</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" required placeholder="email@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
            <Button type="submit" className="bg-accent hover:bg-accent/90">{t.footer.news_btn}</Button>
          </form>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2"><Mail size={14} /> contact@ogensys.com</p>
            <p className="flex items-center gap-2"><Phone size={14} /> +33 1 23 45 67 89</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Antananarivo · Paris</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Ogensys. {t.footer.rights}</p>
          <ul className="flex flex-wrap gap-5">
            {t.footer.legal_links.map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}