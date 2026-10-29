import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ChurchRequestForm } from "@/components/care/ChurchRequestForm";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Baptism",
  description:
    "Learn about baptism at Hope of Nations Church and sign up. Baptism is for people 14 years and older.",
  path: "/baptism",
});

export default function BaptismPage() {
  return (
    <>
      <PageHero
        image={photos.baptism}
        eyebrow="A public step of faith"
        title="Baptism"
        description="Baptism is a public step of following Jesus. It is a picture of leaving the old life behind and rising with Christ into new life."
      />
      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-navy">About baptism</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              At Hope of Nations Church, baptism is for those who have chosen to follow Jesus and want to make that
              decision visible. It is an act of obedience and a celebration with the church family.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              You must be 14 years or older to be baptised. If you are ready, sign up and the church will be in touch
              about the next baptism.
            </p>
          </div>
          <ChurchRequestForm
            defaultType="Baptism"
            title="Sign up for baptism"
            intro="Baptism is for people 14 years and older. WhatsApp opens with your signup ready to send."
          />
        </Container>
      </section>
    </>
  );
}
