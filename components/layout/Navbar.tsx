"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

type Item = { href: string; label: string };

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const items = nav as unknown as Item[];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 ${open ? "is-open" : ""}`}>
      <div className="nav-hotspot" aria-hidden />
      <div className="nav-panel border-b border-navy/8 bg-white">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="nav-item flex min-w-0 items-center" onClick={() => setOpen(false)}>
            <Image
              src="/brand/logo.png"
              alt={site.name}
              width={440}
              height={140}
              priority
              className="h-12 w-auto max-w-[168px] object-contain object-left mix-blend-multiply sm:h-14 sm:max-w-[220px]"
            />
          </Link>

          <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(pathname, item.href) ? "true" : undefined}
                className={`nav-item nav-link text-[12px] font-medium transition-colors xl:text-[13px] ${
                  isActive(pathname, item.href) ? "text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-item hidden lg:block">
            <Button href="/im-new" variant="navy">
              Plan Your Visit
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-navy transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-navy transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {open ? (
          <div className="border-t border-navy/8 bg-white lg:hidden">
            <div className="flex flex-col px-5 py-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-navy/6 py-3.5 text-sm font-medium text-navy"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/im-new" className="mt-5 w-full" variant="navy">
                Plan Your Visit
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
