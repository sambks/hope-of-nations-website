import { site } from "@/lib/content";

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.1C12.2 3 11 4.4 11 6.6v1.9H9V11h2v10h3.5V11h2.3l.4-2.5h-2.7Z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.4 20.6l4.4-1.2A8.7 8.7 0 1 0 12.1 3.2Zm4.9 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.6.7 2 .7 2.1.1.2 0 .3-.1.5l-.3.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.1 2.3 1.3.3.1.4.1.6-.1l.5-.6c.2-.2.3-.2.5-.1.2.1 1.5.7 1.8.8.2.1.4.2.4.3.1.2.1.8-.1 1.4Z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none">
      <path
        d="M8.2 4.8h2.1l1.2 3-1.5 1a12 12 0 0 0 5.2 5.2l1-1.5 3 1.2v2.1c0 .7-.5 1.3-1.2 1.4A14.2 14.2 0 0 1 6.8 6c.1-.7.7-1.2 1.4-1.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors";

export function ReachOut({ tone = "light" }: { tone?: "light" | "dark" }) {
  const icon =
    tone === "light"
      ? "border-white/25 text-white hover:bg-white hover:text-navy"
      : "border-navy/15 text-navy hover:bg-navy hover:text-white";
  const text = tone === "light" ? "text-white/80" : "text-navy";
  const muted = tone === "light" ? "text-white/45" : "text-muted";

  return (
    <div>
      <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${muted}`}>Call or WhatsApp</p>
      <ul className="mt-4 space-y-3">
        {site.phones.map((phone) => (
          <li key={phone.display} className="flex items-center gap-2">
            <a href={phone.tel} className={`${iconClass} ${icon}`} aria-label={`Call ${phone.display}`}>
              <IconPhone />
            </a>
            <a
              href={phone.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`${iconClass} ${icon}`}
              aria-label={`WhatsApp ${phone.display}`}
            >
              <IconWhatsApp />
            </a>
            <a href={phone.tel} className={`text-sm font-medium ${text}`}>
              {phone.display}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-2">
        <a
          href={site.socials.facebook}
          target="_blank"
          rel="noreferrer"
          className={`${iconClass} ${icon}`}
          aria-label="Facebook"
        >
          <IconFacebook />
        </a>
        <a
          href={site.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className={`${iconClass} ${icon}`}
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
      </div>
    </div>
  );
}
