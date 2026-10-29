"use client";

import { useEffect } from "react";

export function inputClass(invalid?: boolean) {
  return [
    "mt-2 w-full rounded-sm border bg-white px-4 py-3 text-base text-ink outline-none transition-colors",
    invalid ? "border-red-600 bg-red-50 focus:border-red-700" : "border-navy/15 focus:border-globe",
  ].join(" ");
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} role="alert" className="mt-1.5 block text-sm font-medium text-red-700">
      {message}
    </span>
  );
}

export function FormErrorSummary({ errors }: { errors?: Record<string, string> }) {
  const messages = errors ? Object.values(errors) : [];

  useEffect(() => {
    if (messages.length === 0) return;
    document.getElementById("form-error-summary")?.focus();
  }, [messages.length]);

  if (messages.length === 0) return null;

  return (
    <div
      id="form-error-summary"
      tabIndex={-1}
      role="alert"
      className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 outline-none"
    >
      <p className="font-semibold">Please fix the highlighted fields.</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
