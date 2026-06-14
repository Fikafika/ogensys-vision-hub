import { useParams } from "@tanstack/react-router";
import { translations, type Lang, type Dict } from "./translations";

export function useLang(): Lang {
  const { lang } = useParams({ strict: false }) as { lang?: string };
  return lang === "en" ? "en" : "fr";
}

export function useT(): Dict {
  return translations[useLang()] as Dict;
}

export function otherLang(l: Lang): Lang {
  return l === "fr" ? "en" : "fr";
}