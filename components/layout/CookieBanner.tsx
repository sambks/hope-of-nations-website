"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hnc-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(STORAGE_KEY));
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event("hnc-consent"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-[calc(3.25rem+env(safe-area-inset-bottom))] z-40 border-t border-navy/10 bg-white px-5 py-4 shadow-[0_-8px_30px_rgba(10,22,40,0.08)] lg:bottom-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-ink">
          We use optional analytics cookies to see which pages help people find the church. No advertising cookies.{" "}
          <Link href="/privacy" className="font-semibold text-navy underline underline-offset-2">
            Privacy
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="inline-flex min-h-11 items-center justify-center border border-navy/20 px-4 text-sm font-semibold text-navy"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="inline-flex min-h-11 items-center justify-center bg-navy px-4 text-sm font-semibold text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
