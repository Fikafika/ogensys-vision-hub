import { useLang } from "@/i18n/use-i18n";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  const lang = useLang();
  const color = light ? "text-white" : "text-primary";
  return (
    <Link
      to="/$lang"
      params={{ lang }}
      className={`flex items-center gap-2.5 font-semibold tracking-tight ${color}`}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="14" ry="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4.5" fill="currentColor" />
        <circle cx="17.5" cy="14.5" r="1.2" fill={light ? "#0A1F44" : "white"} />
      </svg>
      <span className="text-xl">Ogensys</span>
    </Link>
  );
}