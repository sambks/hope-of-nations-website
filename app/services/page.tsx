import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceCard, EventCard } from "@/components/cards/Cards";
import { Button } from "@/components/ui/Button";
import { photos, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services & Events",
  description:
    "Sunday worship 10:00–12:00 and Friday 18:00–19:00 at Hope of Nations Church, 387 Main Road, Wynberg, Cape Town.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={photos.hero}
        eyebrow="Gather with us"
        title="Service times"
        description="Two weekly gatherings, plus Wednesday online prayer. Mark the time. Come hungry."
        primary={{ href: "/im-new", label: "Plan Your Visit" }}
      />
      <section className="py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {site.services.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </Container>
        <Container className="mt-8">
          <EventCard
            title={site.onlinePrayer.label}
            meta={`${site.onlinePrayer.day} · ${site.onlinePrayer.time}`}
            body="Join us online for an hour of prayer. A WhatsApp link will connect you to the community [church to supply]."
          />
        </Container>
        <Container className="mt-8">
          <p className="text-muted">{site.address.display}</p>
          <p className="mt-3 text-sm text-muted">
            Dates for the coming week are on the{" "}
            <Link href="/news" className="font-semibold text-navy underline underline-offset-2">
              news page
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={site.maps.directions} variant="navy">
              Get Directions
            </Button>
            <Button href="/im-new" variant="outlineNavy">
              What to Expect
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
