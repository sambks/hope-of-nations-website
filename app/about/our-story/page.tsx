import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { Timeline } from "@/components/story/Timeline";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Story",
  description:
    "The story of Hope of Nations Church: founded in 2004 in Plumstead, now a multicultural family in Wynberg, Cape Town.",
  path: "/about/our-story",
});

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        image={photos.story}
        eyebrow="2004 → today"
        title="A small beginning, a wide-open future"
        description="What started as a small gathering of three in 2004 has become a growing multinational church community. The same hope. A continuing mission."
      />
      <section className="py-20">
        <Container>
          <Timeline />
          <Button href="/about/leadership" className="mt-12" variant="navy">
            Meet today’s leadership
          </Button>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
