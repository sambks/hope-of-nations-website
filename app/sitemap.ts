import { site } from "@/lib/content";
import { getPosts } from "@/lib/news";

export default function sitemap() {
  const paths = [
    "/",
    "/about",
    "/about/our-story",
    "/about/leadership",
    "/about/declaration",
    "/im-new",
    "/ministries",
    "/ministries/womens",
    "/ministries/mens",
    "/ministries/youth",
    "/ministries/sunday-school",
    "/evangelism",
    "/prayer",
    "/deliverance",
    "/baptism",
    "/services",
    "/contact",
    "/news",
    "/privacy",
    ...getPosts().map((post) => `/news/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
