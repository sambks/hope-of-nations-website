import Link from "next/link";
import { ReachOut } from "@/components/contact/ReachOut";
import { footerLinks, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-sm font-semibold tracking-[-0.02em]">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
            {site.mission} {site.altTagline} A growing multicultural church in Wynberg, and if you are searching, this
            could be your church.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Quick links</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">When & where</p>
          <p className="mt-4 text-sm text-white/75">Sunday praise & worship · 10:00–12:00</p>
          <p className="text-sm text-white/75">Friday evening · 18:00–19:00</p>
          <p className="text-sm text-white/75">Wednesday online prayer · 20:30–21:30</p>
          <p className="mt-3 text-sm text-white/50">{site.address.display}</p>
          <div className="mt-6">
            <ReachOut />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} {site.name}. All rights reserved.{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
