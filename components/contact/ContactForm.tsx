"use client";

import { useActionState } from "react";
import { submitContactMessage } from "@/lib/actions/contact";
import { emptyActionState } from "@/lib/validation";
import { FieldError, FormErrorSummary, inputClass } from "@/components/forms/FormState";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactMessage, emptyActionState);

  if (state.ok) {
    return (
      <div className="border-t border-navy/10 bg-white py-8">
        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-navy">Thank you</h3>
        <p className="mt-3 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5 border border-navy/10 bg-white p-6 md:p-8">
      <FormErrorSummary errors={state.errors} />
      <label className="block text-sm font-medium text-navy">
        Name
        <input
          name="name"
          autoComplete="name"
          aria-required="true"
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "contact-name-error" : undefined}
          className={inputClass(Boolean(state.errors?.name))}
        />
        <FieldError id="contact-name-error" message={state.errors?.name} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Email or WhatsApp
        <input
          name="contact"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={Boolean(state.errors?.contact)}
          aria-describedby={state.errors?.contact ? "contact-contact-error" : undefined}
          className={inputClass(Boolean(state.errors?.contact))}
        />
        <FieldError id="contact-contact-error" message={state.errors?.contact} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Message
        <textarea
          name="message"
          rows={5}
          aria-required="true"
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "contact-message-error" : undefined}
          className={inputClass(Boolean(state.errors?.message))}
        />
        <FieldError id="contact-message-error" message={state.errors?.message} />
      </label>
      <Button type="submit" variant="navy">
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
