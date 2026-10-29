import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { BlendPhoto } from "@/components/ui/BlendPhoto";

export function MinistryDetail({
  title,
  tagline,
  description,
  image,
  extra,
  gallery,
}: {
  title: string;
  tagline: string;
  description: string;
  image: string;
  extra?: string;
  gallery?: { src: string; alt: string }[];
}) {
  return (
    <>
      <PageHero
        image={{ src: image, alt: title }}
        eyebrow={tagline}
        title={title}
        description={description}
        primary={{ href: "/im-new", label: "Plan Your Visit" }}
      />
      {gallery?.length ? (
        <section className="bg-white pb-8">
          <Container className="grid gap-6 sm:grid-cols-2">
            {gallery.map((photo) => (
              <BlendPhoto key={photo.src} src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full" />
            ))}
          </Container>
        </section>
      ) : null}
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-4 text-base leading-7 text-muted">
          <p>{extra ?? "Gathering times, leaders, and upcoming dates [church to confirm]."}</p>
          <p>
            You do not need to know anyone. Come once, come curious, and let us introduce you. This could be the
            community you have been looking for.
          </p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
