import { storyTimeline } from "@/lib/content";

export function Timeline({ compact = false }: { compact?: boolean }) {
  const items = compact ? storyTimeline.slice(0, 6) : storyTimeline;

  return (
    <ol className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.year} className="border-t border-navy/10 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{item.year}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{item.title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
