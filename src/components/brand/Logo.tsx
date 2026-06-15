import { useLang } from "@/i18n/use-i18n";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  const lang = useLang();
  const color = light ? "text-white" : "text-primary";
  return (
    <Link
      to="/$lang"
      params={{ lang }}
      className={`group flex items-center gap-2.5 font-semibold tracking-tight ${color} transition-all duration-500 ease-out ${large ? "scale-110" : "scale-100"}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:rotate-[8deg]"
      >
        <ellipse cx="16" cy="16" rx="14" ry="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4.5" fill="currentColor" />
        <circle cx="17.5" cy="14.5" r="1.2" fill={light ? "#0A1F44" : "white"} />
      </svg>
      <span className={`transition-all duration-500 ease-out ${large ? "text-2xl tracking-wide" : "text-xl tracking-tight"}`}>
        Ogensys
      </span>
    </Link>
  );
}