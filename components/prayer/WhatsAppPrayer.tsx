import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function WhatsAppPrayer() {
  const pending = site.onlinePrayer.whatsappUrl.includes("CHURCH_TO_SUPPLY");

  return (
    <aside className="border-t border-navy/10 pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">
        Join us for online prayer
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-navy">
        Wednesday, {site.onlinePrayer.time}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">
        You do not have to wait until Sunday. Every Wednesday we gather online via WhatsApp for prayer, from wherever you are. Everyone is welcome.
      </p>
      {pending ? (
        <p className="mt-4 text-xs text-muted">WhatsApp group link [church to supply]</p>
      ) : null}
      <Button href={site.onlinePrayer.whatsappUrl} className="mt-6" variant="navy">
        Join WhatsApp →
      </Button>
    </aside>
  );
}
