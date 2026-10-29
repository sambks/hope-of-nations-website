import { MinistryDetail } from "@/components/ministries/MinistryDetail";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Women's Ministry",
  description:
    "Women's ministry at Hope of Nations Church: connect, encourage one another, and grow spiritually through every season of life.",
  path: "/ministries/womens",
});

export default function Page() {
  return (
    <MinistryDetail
      title="Women's Ministry"
      tagline="Connect. Encourage. Grow."
      description="A place for women to connect, encourage one another, grow spiritually, and support one another through different seasons of life."
      image={photos.ministries.womens}
    />
  );
}
