import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/cards/Cards";
import { CTASection } from "@/components/ui/CTASection";
import { evangelismSteps, photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Evangelism",
  description:
    "Every Saturday, Hope of Nations Church goes into surrounding communities in Cape Town to encourage people, share the Word of God, and bring hope beyond the walls.",
  path: "/evangelism",
});

export default function EvangelismPage() {
  return (
    <>
      <PageHero
        image={photos.evangelism}
        eyebrow="Evangelism"
        title="Hope doesn’t stay inside these walls"
        description="Faith should be lived out beyond the church building. Every Saturday a team goes into surrounding communities to bring hope where people already are."
        primary={{ href: "/contact", label: "Join Saturday Evangelism" }}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Why evangelism matters"
              title="We go to people, rather than waiting for everyone to come to us"
              description="There are people who may never walk through the doors of a church unless someone first reaches out. Evangelism is not simply another church activity. It is part of who we are."
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy">Every Saturday</h2>
            <p className="mt-4 leading-7 text-muted">
              A group from the church goes into surrounding communities to engage with people, share encouragement, and
              share the Word of God with both believers and those who do not yet know Christ. Meeting point and start
              time [church to confirm]. Come once to see what it feels like.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-surface py-20">
        <Container>
          <SectionHeader
            title="What we do"
            description="The purpose is not simply to preach at people. We seek to meet people with care, encouragement, and Christian love."
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {evangelismSteps.map((step) => (
              <article key={step.title}>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <SectionHeader
            title="Who we reach"
            description="Neighbours, passers-by, people going through a hard season, believers who need strengthening, and people who may never attend a Sunday service first."
          />
          <h2 className="mt-14 text-3xl font-semibold tracking-[-0.03em] text-navy">Stories</h2>
          <p className="mt-2 text-sm text-muted">Real outreach stories will be added here when the church supplies them.</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <TestimonialCard
              quote="Placeholder story: a conversation, an encouragement, a prayer in the community."
              name="Story coming soon · [church to confirm]"
            />
            <TestimonialCard
              quote="Placeholder story: someone who may never have walked into church first."
              name="Story coming soon · [church to confirm]"
            />
          </div>
          <Button href="/contact" className="mt-10" variant="navy">
            Join Saturday Evangelism
          </Button>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
