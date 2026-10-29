import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ChurchRequestForm } from "@/components/care/ChurchRequestForm";
import { WhatsAppPrayer } from "@/components/prayer/WhatsAppPrayer";
import { photos } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prayer",
  description:
    "Send a prayer request to Hope of Nations Church on WhatsApp. You do not need to be a member.",
  path: "/prayer",
});

export default function PrayerPage() {
  return (
    <>
      <PageHero
        image={photos.prayer}
        eyebrow="Prayer"
        title="Need someone to pray with you?"
        description="You do not have to face difficult situations alone. Send a request on WhatsApp. You do not need to be a member."
      />
      <section className="bg-surface py-16 lg:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <ChurchRequestForm defaultType="Prayer Request" title="Send a prayer request" />
          <div className="space-y-10">
            <WhatsAppPrayer />
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-navy">How this works</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                <li>Your message opens in WhatsApp, ready to send.</li>
                <li>A small pastoral team reads each request.</li>
                <li>Someone can reach you on the number you share.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
