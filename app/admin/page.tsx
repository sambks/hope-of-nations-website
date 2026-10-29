import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Prayer Team Admin",
    description: "Phase 2 dashboard for prayer request follow-up.",
    path: "/admin",
  }),
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <Container className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">Phase 2</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-navy">Prayer dashboard</h1>
        <p className="mt-4 text-muted">
          The data model is ready: each request is stored with status values NEW, PRAYING, FOLLOW_UP, and RESOLVED.
          An authenticated admin UI to list and update requests will be built next.
        </p>
        <p className="mt-4 text-sm text-muted">
          Local submissions currently save to <code className="rounded bg-white px-1">data/prayer-requests.json</code>.
          Connect PostgreSQL with Prisma when you are ready to go live.
        </p>
      </Container>
    </section>
  );
}
