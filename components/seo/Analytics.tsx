"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hnc-cookie-consent";

function measurementId() {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
  return /^G-[A-Z0-9]+$/.test(id) ? id : "";
}

export function Analytics() {
  const id = measurementId();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const read = () => setAllowed(localStorage.getItem(STORAGE_KEY) === "accepted");
    read();
    window.addEventListener("hnc-consent", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("hnc-consent", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  if (!id || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="hnc-ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
