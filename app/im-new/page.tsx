import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VisitForm } from "@/components/visit/VisitForm";
import { photos, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "I'm New",
  description:
    "First time at Hope of Nations Church in Wynberg? Here’s what to expect, where to find us, and how to plan your visit.",
  path: "/im-new",
});

const expect = [
  {
    title: "What to expect",
    body: "Sunday Praise & Worship includes praise, worship, teaching, fellowship and encouragement. Everyone is welcome. You will not be singled out. Stay afterwards, or slip out quietly. Both are okay.",
  },
  {
    title: "What to wear",
    body: "[church to confirm] Come comfortable. You will see a mix of styles. There is no dress code that decides whether you belong.",
  },
  {
    title: "Children / Sunday School",
    body: "Sunday School is for children ages 2–15. It runs during the service so they can learn in an age-appropriate space while you worship.",
  },
  {
    title: "Location",
    body: `${site.address.display}. Look for us on Main Road. If you get a little lost, someone will help you find the door.`,
  },
  {
    title: "Parking",
    body: "[church to confirm parking instructions].",
  },
  {
    title: "Arrival time",
    body: "[church to confirm] We suggest arriving 10–15 minutes before 10:00 so you can find a seat without rushing.",
  },
  {
    title: "Am I expected to participate?",
    body: "No. You can sing or sit quietly. You can take notes or simply listen. You are a guest, not a performer. Participation is an invitation, never a test.",
  },
];

export default function ImNewPage() {
  return (
    <>
      <PageHero
        image={photos.hero}
        eyebrow="I'm new here"
        title="Come as you are, we’ll take it from there"
        description="Sunday Praise & Worship, 10:00–12:00 at 387 Main Road, Wynberg. You do not need to have everything figured out before you come."
        primary={{ href: "#plan", label: "Plan Your Visit" }}
        secondary={{ href: site.maps.directions, label: "Get Directions" }}
      />
      <section className="bg-white py-20">
        <Container>
          <SectionHeader title="What you need to know" description="A few honest answers so you can walk in with peace." />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {expect.map((item) => (
              <article key={item.title} className="border-t border-navy/10 pt-5">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-surface py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden border border-navy/10 bg-white">
            <iframe title="Church map" src={site.maps.embed} className="h-full min-h-80 w-full" loading="lazy" />
          </div>
          <div id="plan">
            <VisitForm />
          </div>
        </Container>
      </section>
    </>
  );
}
