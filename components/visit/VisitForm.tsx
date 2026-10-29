"use client";

import { useActionState } from "react";
import { submitVisitPlan } from "@/lib/actions/visit";
import { emptyActionState } from "@/lib/validation";
import { FieldError, FormErrorSummary, inputClass } from "@/components/forms/FormState";
import { Button } from "@/components/ui/Button";

export function VisitForm() {
  const [state, action, pending] = useActionState(submitVisitPlan, emptyActionState);

  if (state.ok) {
    return (
      <div className="border-t border-navy/10 bg-white py-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-globe">See you soon</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-navy">We cannot wait to meet you</h3>
        <p className="mt-3 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-5 border border-navy/10 bg-white p-6 md:p-8">
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-navy">Plan your visit</h3>
      <p className="text-sm text-muted">
        Tell us you are coming so we can watch for you. Come as you are, no need to have it all figured out.
      </p>
      <FormErrorSummary errors={state.errors} />
      <label className="block text-sm font-medium text-navy">
        Name
        <input
          name="name"
          autoComplete="name"
          aria-required="true"
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "visit-name-error" : undefined}
          className={inputClass(Boolean(state.errors?.name))}
        />
        <FieldError id="visit-name-error" message={state.errors?.name} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Email or WhatsApp
        <input
          name="contact"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={Boolean(state.errors?.contact)}
          aria-describedby={state.errors?.contact ? "visit-contact-error" : undefined}
          className={inputClass(Boolean(state.errors?.contact))}
        />
        <FieldError id="visit-contact-error" message={state.errors?.contact} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Number of people attending
        <input
          name="partySize"
          type="number"
          min={1}
          max={30}
          defaultValue={1}
          inputMode="numeric"
          aria-invalid={Boolean(state.errors?.partySize)}
          aria-describedby={state.errors?.partySize ? "visit-party-error" : undefined}
          className={inputClass(Boolean(state.errors?.partySize))}
        />
        <FieldError id="visit-party-error" message={state.errors?.partySize} />
      </label>
      <label className="block text-sm font-medium text-navy">
        Optional note
        <textarea name="note" rows={4} className={inputClass(false)} placeholder="First time, visiting with children, questions…" />
      </label>
      <Button type="submit" variant="navy">
        {pending ? "Sending…" : "I’m coming"}
      </Button>
    </form>
  );
}
