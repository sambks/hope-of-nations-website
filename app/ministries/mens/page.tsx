import { MinistryDetail } from "@/components/ministries/MinistryDetail";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Men's Ministry",
  description:
    "Men's ministry at Hope of Nations Church: build relationships, grow in faith, and develop as men of faith and service.",
  path: "/ministries/mens",
});

export default function Page() {
  return (
    <MinistryDetail
      title="Men's Ministry"
      tagline="Faith. Friendship. Service."
      description="Opportunities for men to build relationships, grow in faith, encourage one another, and develop as men of faith and service."
      image={photos.ministries.mens}
    />
  );
}
