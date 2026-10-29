import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Hope of Nations Church uses analytics cookies and the details you send through prayer, visit, and contact forms.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-28 pb-20 lg:pt-16">
      <Container className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Privacy</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl">
          How we handle what you share
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-ink/80">
          <p>
            Hope of Nations Church uses this website to welcome people, share service times, and receive prayer
            requests, visit plans, and messages. We do not sell personal information.
          </p>
          <p>
            Analytics cookies are optional. They load only after you accept the cookie banner, and they help us see
            which pages are useful. If you decline, the site still works and no analytics cookie is set. You can change
            your mind by clearing this site’s saved data in your browser.
          </p>
          <p>
            Forms store the details you choose to send, such as your name, contact number, and message, so the church
            can respond. Prayer requests can be sent without your name. Please do not include information you would not
            want a small pastoral team to read.
          </p>
          <p>
            To ask about something you sent, call or WhatsApp +27 74 648 8039 or +27 65 386 5090.
          </p>
        </div>
      </Container>
    </section>
  );
}
