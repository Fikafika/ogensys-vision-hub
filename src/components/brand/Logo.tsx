import { useLang } from "@/i18n/use-i18n";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  const lang = useLang();
  const textColor = light ? "text-white" : "text-primary";
  const accentColor = light ? "#60A5FA" : "#2563EB";
  const strokeColor = light ? "#FFFFFF" : "#0A1F44";
  const irisFrom = light ? "#60A5FA" : "#2563EB";
  const irisTo = light ? "#2563EB" : "#0A1F44";
  const gradId = light ? "ogensys-iris-light" : "ogensys-iris-dark";
  return (
    <Link
      to="/$lang"
      params={{ lang }}
      className={`group flex items-center gap-2.5 font-bold tracking-tight ${textColor} transition-all duration-500 ease-out ${large ? "scale-110" : "scale-100"}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="-72 -40 144 80"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:rotate-[8deg]"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={irisFrom} />
            <stop offset="1" stopColor={irisTo} />
          </linearGradient>
        </defs>
        <path
          d="M -58 0 C -34 -34, 34 -34, 58 0 C 34 34, -34 34, -58 0 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="0" cy="0" r="26" fill={`url(#${gradId})`} />
        <g stroke="#FFFFFF" strokeWidth="2.2" opacity="0.98">
          <line x1="0" y1="0" x2="0" y2="-17" />
          <line x1="0" y1="0" x2="15" y2="8" />
          <line x1="0" y1="0" x2="-15" y2="8" />
        </g>
        <g fill="#FFFFFF">
          <circle cx="0" cy="0" r="5.5" />
          <circle cx="0" cy="-17" r="3.6" />
          <circle cx="15" cy="8" r="3.6" />
          <circle cx="-15" cy="8" r="3.6" />
        </g>
      </svg>
      <span className={`transition-all duration-500 ease-out ${large ? "text-2xl" : "text-xl"} tracking-tight`}>
        Ogen<span style={{ color: accentColor }}>sys</span>
      </span>
    </Link>
  );
}