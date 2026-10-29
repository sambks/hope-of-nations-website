import Link from "next/link";
import { UpcomingEvents } from "@/components/news/UpcomingEvents";
import { Container } from "@/components/ui/Container";
import { formatPostDate, getPosts } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "News",
  description:
    "Church news and upcoming gatherings at Hope of Nations Church in Wynberg, Cape Town. Sunday worship, Friday fellowship, Wednesday prayer, and Saturday outreach.",
  path: "/news",
});

export default function NewsPage() {
  const posts = getPosts();

  return (
    <section className="bg-white pt-28 pb-20 lg:pt-16">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">News</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl">
          What is happening at Hope of Nations
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          Upcoming gatherings update as the week turns. Church news sits underneath, so you can see what is next and
          what we have been sharing.
        </p>

        <div className="mt-14">
          <UpcomingEvents />
        </div>

        <h2 className="mt-16 text-2xl font-semibold tracking-[-0.03em] text-navy">Updates</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-navy/10 pt-6">
              <time dateTime={post.date} className="text-sm font-medium text-globe">
                {formatPostDate(post.date)}
              </time>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-navy">
                <Link href={`/news/${post.slug}`} className="hover:text-globe">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
              <Link href={`/news/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-globe">
                Read update →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
