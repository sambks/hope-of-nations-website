"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { gatherings, upcomingGatherings } from "@/lib/schedule";

type Item = {
  id: string;
  title: string;
  place: string;
  href: string;
  label: string;
};

const initial: Item[] = gatherings.map((gathering) => ({
  id: gathering.id,
  title: gathering.title,
  place: gathering.place,
  href: gathering.href,
  label: gathering.fallback,
}));

export function UpcomingEvents() {
  const [items, setItems] = useState<Item[]>(initial);

  useEffect(() => {
    const tick = () =>
      setItems(
        upcomingGatherings().map((gathering) => ({
          id: gathering.id,
          title: gathering.title,
          place: gathering.place,
          href: gathering.href,
          label: gathering.label,
        })),
      );
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const next = items[0];

  return (
    <div>
      <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-globe opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-globe" />
        </span>
        Live · next up {next ? `· ${next.label}` : ""}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <Link key={item.id} href={item.href} className="block border-t border-navy/10 pt-5">
            <p className="text-sm font-medium text-globe">{item.label}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.place}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
