import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    let pref: string | null = null;
    try {
      pref = typeof window !== "undefined" ? localStorage.getItem("ogensys.lang") : null;
    } catch {}
    const lang = pref === "en" ? "en" : "fr";
    throw redirect({ to: "/$lang", params: { lang } });
  },
});