"use server";

import { createBaptismSignup } from "@/lib/store";
import {
  baptismSchema,
  fieldErrors,
  type ActionState,
} from "@/lib/validation";

export async function submitBaptismSignup(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = baptismSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    dateOfBirth: String(formData.get("dateOfBirth") ?? ""),
    note: String(formData.get("note") ?? ""),
  });

  if (!parsed.success) {
    return { ok: false, errors: fieldErrors(parsed.error) };
  }

  await createBaptismSignup({
    name: parsed.data.name,
    contact: parsed.data.contact,
    dateOfBirth: parsed.data.dateOfBirth,
    note: parsed.data.note ?? null,
  });

  return {
    ok: true,
    message: "Thank you. We have received your baptism signup and will be in touch.",
  };
}
