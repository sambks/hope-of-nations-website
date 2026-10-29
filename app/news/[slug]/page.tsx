import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { formatPostDate, getPost, getPosts } from "@/lib/news";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return pageMetadata({
      title: "News",
      description: "Church news from Hope of Nations Church in Wynberg, Cape Town.",
      path: "/news",
    });
  }
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${post.slug}`,
  });
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-white pt-28 pb-20 lg:pt-16">
      <Container className="max-w-3xl">
        <Link href="/news" className="text-sm font-semibold text-globe">
          ← News
        </Link>
        <time dateTime={post.date} className="mt-6 block text-sm font-medium text-globe">
          {formatPostDate(post.date)}
        </time>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em] leading-[1.1] text-navy sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-ink/80">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
