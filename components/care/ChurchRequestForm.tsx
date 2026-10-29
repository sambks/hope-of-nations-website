"use client";

import { useState } from "react";
import { FieldError, FormErrorSummary, inputClass } from "@/components/forms/FormState";
import { Button } from "@/components/ui/Button";

const requestTypes = ["Prayer Request", "Deliverance", "Baptism"] as const;

export type ChurchRequestType = (typeof requestTypes)[number];

function coordinatorNumber() {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_COORDINATOR_NUMBER ?? "";
  const digits = fromEnv.replace(/\D/g, "");
  return digits || "27768593718";
}

export function ChurchRequestForm({
  defaultType = "Prayer Request",
  title = "Send a request",
  intro = "This opens WhatsApp with your message ready. Tap send there to reach the church.",
}: {
  defaultType?: ChurchRequestType;
  title?: string;
  intro?: string;
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState<ChurchRequestType>(defaultType);
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) nextErrors.name = "Please tell us your full name.";
    if (phone.replace(/\D/g, "").length < 9) nextErrors.phone = "Add a phone number we can reach you on.";
    setErrors(nextErrors);
    setOpened(false);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "*New Church Request*",
      `*Type:* ${type}`,
      `*Name:* ${name.trim()}`,
      `*Contact:* ${phone.trim()}`,
      `*Details:* ${details.trim() || "—"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${coordinatorNumber()}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setOpened(true);
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5 border border-navy/10 bg-white p-6 md:p-8">
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="text-sm leading-6 text-muted">{intro}</p>
      <FormErrorSummary errors={errors} />
      <label className="block text-sm font-medium text-navy">
        Full name
        <input
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "request-name-error" : undefined}
          className={inputClass(Boolean(errors.name))}
        />
        <FieldError id="request-name-error" message={errors.name} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Request type
        <select
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value as ChurchRequestType)}
          className={inputClass(false)}
        >
          {requestTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-navy">
        Contact phone number
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          autoComplete="tel"
          aria-required="true"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "request-phone-error" : undefined}
          className={inputClass(Boolean(errors.phone))}
        />
        <FieldError id="request-phone-error" message={errors.phone} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Details / notes
        <textarea
          name="details"
          rows={5}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className={inputClass(false)}
          placeholder="Share as much as you are comfortable writing."
        />
      </label>
      <Button type="submit" variant="navy" className="w-full sm:w-auto">
        Send on WhatsApp
      </Button>
      {opened ? (
        <p className="text-sm leading-6 text-navy" role="status">
          WhatsApp should be open with your message. Tap send there so it reaches the church.
        </p>
      ) : null}
    </form>
  );
}
