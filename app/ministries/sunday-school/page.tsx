import { MinistryDetail } from "@/components/ministries/MinistryDetail";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sunday School",
  description:
    "Sunday School at Hope of Nations Church is for children ages 2–15. They learn about God in an age-appropriate environment and grow in God’s Word.",
  path: "/ministries/sunday-school",
});

export default function Page() {
  return (
    <MinistryDetail
      title="Sunday School"
      tagline="Learn. Belong. Grow."
      description="Sunday School is for children ages 2–15. They learn about God and develop their understanding of the Christian faith in an age-appropriate environment, while building a positive and meaningful relationship with the church."
      image={photos.ministries.sundaySchool}
      extra="Children from age 2 through 15 are welcome. Parents are welcome to stay for a first visit."
    />
  );
}
