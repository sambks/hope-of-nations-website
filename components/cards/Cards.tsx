import Link from "next/link";

export function ServiceCard({
  name,
  day,
  time,
  note,
}: {
  name: string;
  day: string;
  time: string;
  note?: string;
}) {
  return (
    <article className="border-t border-navy/10 pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{day}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{name}</h3>
      <p className="mt-2 text-lg font-semibold text-navy">{time}</p>
      {note ? <p className="mt-3 text-sm leading-7 text-muted">{note}</p> : null}
    </article>
  );
}

export function MinistryCard({
  name,
  tagline,
  href,
  summary,
}: {
  name: string;
  tagline: string;
  href: string;
  summary?: string;
}) {
  return (
    <Link href={href} className="group block border-t border-navy/10 pt-6">
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-navy">{name}</h3>
      <p className="mt-2 text-sm font-medium text-globe">{tagline}</p>
      {summary ? <p className="mt-3 text-sm leading-7 text-muted">{summary}</p> : null}
      <span className="mt-4 inline-block text-sm font-semibold text-globe">Learn More →</span>
    </Link>
  );
}

export function LeadershipCard({
  name,
  role,
  children,
}: {
  name: string;
  role: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-t border-navy/10 pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{role}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-navy">{name}</h3>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">{children}</div>
    </article>
  );
}

export function EventCard({
  title,
  meta,
  body,
}: {
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <article className="border-t border-navy/10 pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-globe">{meta}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </article>
  );
}

export function TestimonialCard({
  quote,
  name,
}: {
  quote: string;
  name: string;
}) {
  return (
    <blockquote className="border-t border-navy/10 pt-6">
      <p className="text-base leading-7 text-navy">“{quote}”</p>
      <footer className="mt-4 text-sm text-muted">{name}</footer>
    </blockquote>
  );
}
