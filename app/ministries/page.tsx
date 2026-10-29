import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlendPhoto } from "@/components/ui/BlendPhoto";
import { ministries, photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Ministries",
  description:
    "Women, men, youth, Sunday school, and evangelism at Hope of Nations Church in Wynberg, Cape Town.",
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHero
        image={photos.youthGathering}
        eyebrow="Ministries"
        title="Find your people, find your place"
        description="These are not clubs for insiders. They are open doors for belonging, growing, and serving."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-12 sm:grid-cols-2">
          {ministries.map((m) => (
            <Link key={m.slug} href={m.href} className="group block">
              <BlendPhoto src={m.image} alt={m.name} className="aspect-[16/9] w-full max-h-[200px]" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{m.tagline}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-navy">{m.name}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{m.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-globe">Learn More →</span>
            </Link>
          ))}
        </Container>
        <Container className="mt-14">
          <Button href="/im-new" variant="navy">
            Start by visiting on Sunday
          </Button>
        </Container>
      </section>
    </>
  );
}
