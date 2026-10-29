import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ChurchRequestForm } from "@/components/care/ChurchRequestForm";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Deliverance",
  description:
    "Sign up for spiritual deliverance at Hope of Nations Church. Pastor Claudine walks people through a pastoral process of prayer and ministry.",
  path: "/deliverance",
});

export default function DeliverancePage() {
  return (
    <>
      <PageHero
        image={photos.deliverance}
        eyebrow="Spiritual care"
        title="Spiritual deliverance"
        description="Pastor Claudine walks with people through a process of spiritual deliverance. This is pastoral prayer and ministry, taken one step at a time, with care."
      />
      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-navy">How this works</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              If you are seeking freedom, healing, or help in a spiritual struggle, you can sign up here. The pastor
              will be in touch to walk you through the process. You do not need to have the right words. Just take the
              first step.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              What you share is treated with care by the pastoral team.
            </p>
          </div>
          <ChurchRequestForm
            defaultType="Deliverance"
            title="Sign up for deliverance"
            intro="Share your name and number. WhatsApp opens with the message ready for Pastor Claudine’s team."
          />
        </Container>
      </section>
    </>
  );
}
