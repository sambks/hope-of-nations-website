import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BlendPhoto } from "@/components/ui/BlendPhoto";

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-16 lg:pb-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.035em] leading-[1.1] text-navy sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-lg text-base leading-7 text-muted">{description}</p>
          ) : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary ? (
                <Button href={primary.href} variant="navy">
                  {primary.label} →
                </Button>
              ) : null}
              {secondary ? (
                <Button href={secondary.href} variant="ghost">
                  {secondary.label} →
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        <BlendPhoto
          src={image.src}
          alt={image.alt}
          className="mx-auto aspect-[4/5] w-full max-w-[400px] min-h-[260px] sm:aspect-[5/4] lg:ml-auto lg:min-h-[340px]"
        />
      </Container>
    </section>
  );
}
