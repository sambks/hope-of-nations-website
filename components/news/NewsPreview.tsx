import Link from "next/link";
import { UpcomingEvents } from "@/components/news/UpcomingEvents";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatPostDate, getPosts } from "@/lib/news";

export function NewsPreview() {
  const latest = getPosts().slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          eyebrow="News"
          title="This week at church"
          description="The next gatherings stay current through the week. Read a short update, or see everything on the news page."
        />
        <div className="mt-12">
          <UpcomingEvents />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {latest.map((post) => (
            <article key={post.slug} className="border-t border-navy/10 pt-5">
              <time dateTime={post.date} className="text-sm font-medium text-globe">
                {formatPostDate(post.date)}
              </time>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">
                <Link href={`/news/${post.slug}`} className="hover:text-globe">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
        <Button href="/news" className="mt-10" variant="outlineNavy">
          All news and events
        </Button>
      </Container>
    </section>
  );
}
