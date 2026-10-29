import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { BlendPhoto } from "@/components/ui/BlendPhoto";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "Meet Pastor Claudine Bukasa of Hope of Nations Church, Wynberg, Cape Town, and honour founder Rev. Jean Paul Bukasa.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        image={photos.pastor}
        eyebrow="Leadership"
        title="Pastor Claudine Bukasa"
        description="Present leadership. Future vision. A pastor’s heart for a church that still has room for you."
      />
      <section className="bg-white py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <BlendPhoto
            src={photos.welcome.src}
            alt={photos.welcome.alt}
            className="mx-auto aspect-[4/5] w-full max-w-[360px] min-h-[280px] lg:mx-0"
          />
          <div className="space-y-5 text-base leading-7 text-muted">
            <SectionHeader
              title="Guiding the church into its next chapter"
              description="Pastor Claudine Bukasa is the current leader of Hope of Nations Church. Her focus is continuing the foundation that was established while looking toward the future: reaching more people, strengthening the church community, and expanding the church’s impact."
            />
            <p>
              She is a qualified nurse by profession. That life of caring for people and serving others is also part of
              how she leads: people first, hope first, and a church that remains a welcoming home for many nations.
            </p>
            <p>
              A new chapter. The same hope. A continuing mission. Under her leadership the church keeps gathering for
              worship, going out in evangelism, and inviting anyone who is searching to find a place here.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">
            Honouring our foundation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy">Rev. Jean Paul Bukasa</h2>
          <p className="mt-1 text-sm text-globe">Founder and visionary · 2004–2023</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Hope of Nations Church was founded under the leadership of Rev. Jean Paul Bukasa. After his passing on
            4 October 2023, Pastor Claudine took responsibility for leading the church and carrying the work forward.
            We honour the foundation he established. This page is a thank you, and a commitment to continue the mission.
          </p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
