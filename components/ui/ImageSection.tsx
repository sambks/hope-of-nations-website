import { BlendPhoto } from "@/components/ui/BlendPhoto";
import { Container } from "@/components/ui/Container";

export function ImageSection({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
      >
        <BlendPhoto src={image.src} alt={image.alt} className="mx-auto aspect-[4/3] w-full max-w-[440px] min-h-[220px] lg:mx-0" />
        <div>
          {eyebrow ? (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">{title}</h2>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">{children}</div>
        </div>
      </Container>
    </section>
  );
}
