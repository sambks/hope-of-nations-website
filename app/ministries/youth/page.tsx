import { MinistryDetail } from "@/components/ministries/MinistryDetail";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Youth Ministry",
  description:
    "Youth ministry at Hope of Nations Church: a space to belong, ask questions, learn about Christ, and grow spiritually.",
  path: "/ministries/youth",
});

export default function Page() {
  return (
    <MinistryDetail
      title="Youth Ministry"
      tagline="Belong. Ask. Grow."
      description="Young people can build relationships, learn about Christ, ask questions, grow spiritually, and develop their identity within this church family."
      image={photos.ministries.youth}
      gallery={[photos.youth, photos.youthGathering]}
    />
  );
}
