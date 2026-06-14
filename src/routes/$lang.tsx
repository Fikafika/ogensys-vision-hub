import { createFileRoute, Outlet, notFound, useLocation } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "fr" && params.lang !== "en") throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const loc = useLocation();
  const isHome = /^\/(fr|en)\/?$/.test(loc.pathname);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className={`flex-1 ${isHome ? "" : "pt-16"}`}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}