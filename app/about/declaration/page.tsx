import { declarationFull, photos } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlendPhoto } from "@/components/ui/BlendPhoto";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "I Arise and Shine",
  description:
    "The Sunday declaration of Hope of Nations Church: I Arise and Shine. Identity, hope, and God’s glory.",
  path: "/about/declaration",
});

export default function DeclarationPage() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pt-16">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Sunday declaration</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-6xl">
            {declarationFull.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{declarationFull.intro}</p>
          <div className="mt-10 space-y-4">
            {declarationFull.lines.map((line, i) => (
              <p key={`${line}-${i}`} className="text-xl leading-8 text-navy sm:text-2xl">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/im-new" variant="navy">
              Plan Your Visit →
            </Button>
            <Button href="/prayer" variant="ghost">
              Request Prayer →
            </Button>
          </div>
        </div>
        <BlendPhoto
          src={photos.worship.src}
          alt={photos.worship.alt}
          className="sticky top-28 hidden aspect-[4/5] w-full max-w-[360px] min-h-[320px] lg:block"
        />
      </Container>
    </section>
  );
}
