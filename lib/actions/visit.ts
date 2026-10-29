"use server";

import { createVisitPlan } from "@/lib/store";
import {
  fieldErrors,
  visitSchema,
  type ActionState,
} from "@/lib/validation";

export async function submitVisitPlan(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = visitSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    partySize: Number(formData.get("partySize") ?? 1),
    note: String(formData.get("note") ?? ""),
  });

  if (!parsed.success) {
    return { ok: false, errors: fieldErrors(parsed.error) };
  }

  await createVisitPlan({
    name: parsed.data.name,
    contact: parsed.data.contact,
    partySize: parsed.data.partySize,
    note: parsed.data.note ?? null,
  });

  return {
    ok: true,
    message: "Thank you. We look forward to welcoming you. Save the address and come as you are.",
  };
}
