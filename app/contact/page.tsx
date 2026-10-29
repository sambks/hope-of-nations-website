import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ReachOut } from "@/components/contact/ReachOut";
import { photos, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call or WhatsApp Hope of Nations Church on +27 74 648 8039 or +27 65 386 5090. We are at 387 Main Road, Wynberg, Cape Town.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={photos.story}
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Questions about visiting, serving, or faith: send a note. A person, not a mailbox robot, will read it."
      />
      <section className="bg-white py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Find us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-navy">Visit or write</h2>
            <p className="mt-4 text-muted">{site.address.display}</p>
            <p className="mt-2 text-sm text-muted">Sunday praise & worship · 10:00–12:00</p>
            <div className="mt-8">
              <ReachOut tone="dark" />
            </div>
            <div className="mt-8 overflow-hidden border border-navy/10">
              <iframe title="Map" src={site.maps.embed} className="h-80 w-full" loading="lazy" />
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
