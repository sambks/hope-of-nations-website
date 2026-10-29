import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { churchFor, coreInvites, photos, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Hope of Nations Church, a multicultural Christian family in Wynberg, Cape Town. Our welcome, our story, and who the church is for.",
  path: "/about",
});

const chapters = [
  {
    href: "/about/our-story",
    title: "Our Story",
    body: "From three people in Plumstead in 2004 to a multinational family in Wynberg, including the journey from African Revival Church.",
  },
  {
    href: "/about/leadership",
    title: "Leadership",
    body: "Meet Pastor Claudine Bukasa and honour founder and visionary Rev. Jean Paul Bukasa.",
  },
  {
    href: "/about/declaration",
    title: "I Arise and Shine",
    body: "The Sunday declaration we speak together: identity, hope, and God’s glory.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={photos.story}
        eyebrow="About Hope of Nations"
        title="This could be your church"
        description={site.longDescription}
        primary={{ href: "/im-new", label: "Plan Your Visit" }}
        secondary={{ href: "/about/our-story", label: "Read our story" }}
      />
      <section className="bg-surface py-20">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Our vision</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy">{site.vision}</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            We seek to bring hope to people facing difficult circumstances, encourage those who feel discouraged,
            strengthen believers, and introduce people to Jesus Christ. Hope is meant to reach people wherever they are,
            in families, communities, workplaces, and everyday life.
          </p>
        </Container>
        <Container className="mt-14 grid gap-10 md:grid-cols-3">
          {chapters.map((item) => (
            <Link key={item.href} href={item.href} className="block">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-globe">Learn More →</span>
            </Link>
          ))}
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy">Who is this church for?</h2>
            <ul className="mt-5 space-y-2 text-muted">
              {churchFor.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              You do not need to have everything figured out before coming. Everyone is welcome.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy">A place where you can</h2>
            <ul className="mt-5 grid gap-px bg-navy/10 sm:grid-cols-2">
              {coreInvites.map((item) => (
                <li key={item} className="bg-white px-4 py-3 text-sm text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8" variant="navy">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
