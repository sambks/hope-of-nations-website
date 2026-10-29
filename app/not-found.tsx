import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${site.name}` },
  description: "This page is not on the Hope of Nations Church website. Head home or plan a visit.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-white pt-28 pb-24 lg:pt-16">
      <Container className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-5 text-base leading-7 text-muted">
          The link may be old, or the address may have been typed wrong. You can go back home, read the latest church
          news, or plan a Sunday visit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="navy">
            Back home
          </Button>
          <Button href="/news" variant="outlineNavy">
            Church news
          </Button>
          <Button href="/im-new" variant="ghost">
            Plan your visit →
          </Button>
        </div>
      </Container>
    </section>
  );
}
