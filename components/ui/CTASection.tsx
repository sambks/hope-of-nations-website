import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title = "You Have a Place Here",
  description = "There is hope for you, there is a place for you, and you are welcome here. Come as you are.",
  dark = true,
}: {
  title?: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section className="bg-navy py-20 text-white">
      <Container className="max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          A next step
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-white/70">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/im-new" variant={dark ? "gold" : "navy"}>
            Plan Your Visit →
          </Button>
          <Button href="/prayer" variant="outline">
            Request Prayer
          </Button>
        </div>
      </Container>
    </section>
  );
}
