import { CTASection } from "@/components/ui/CTASection";
import {
  DeclarationBand,
  EvangelismBand,
  Hero,
  MinistriesGrid,
  OurCommunity,
  OurMessage,
  PastorSection,
  PlanVisitBand,
  PrayerBand,
  StatsStrip,
  StoryTeaser,
  WhereAreYou,
} from "@/components/home/HomeSections";
import { NewsPreview } from "@/components/news/NewsPreview";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata = pageMetadata({
  title: `${site.name} | Wynberg, Cape Town`,
  description: site.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhereAreYou />
      <OurMessage />
      <EvangelismBand />
      <StoryTeaser />
      <OurCommunity />
      <MinistriesGrid />
      <PrayerBand />
      <PastorSection />
      <DeclarationBand />
      <NewsPreview />
      <PlanVisitBand />
      <CTASection />
    </>
  );
}
