"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

export function MobileCtaBar() {
  const [sheet, setSheet] = useState<"call" | "whatsapp" | null>(null);

  function toggle(next: "call" | "whatsapp") {
    setSheet((current) => (current === next ? null : next));
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      {sheet ? (
        <div className="border-t border-navy/10 bg-white px-4 py-3 shadow-[0_-8px_24px_rgba(10,22,40,0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {sheet === "call" ? "Call the church" : "WhatsApp the church"}
          </p>
          <div className="mt-2 grid gap-2">
            {site.phones.map((phone) => (
              <a
                key={phone.display}
                href={sheet === "call" ? phone.tel : phone.whatsapp}
                target={sheet === "whatsapp" ? "_blank" : undefined}
                rel={sheet === "whatsapp" ? "noreferrer" : undefined}
                className="flex min-h-11 items-center text-sm font-semibold text-navy"
              >
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-3 border-t border-navy/10 bg-white pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={() => toggle("call")}
          className="flex min-h-12 items-center justify-center text-[10px] font-semibold uppercase tracking-[0.12em] text-navy"
        >
          Call
        </button>
        <button
          type="button"
          onClick={() => toggle("whatsapp")}
          className="flex min-h-12 items-center justify-center text-[10px] font-semibold uppercase tracking-[0.12em] text-navy"
        >
          WhatsApp
        </button>
        <Link
          href="/im-new"
          className="flex min-h-12 items-center justify-center text-[10px] font-semibold uppercase tracking-[0.12em] text-muted"
        >
          Plan Visit
        </Link>
      </div>
    </div>
  );
}
