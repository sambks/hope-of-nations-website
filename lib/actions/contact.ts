"use server";

import { createContactMessage } from "@/lib/store";
import {
  contactSchema,
  fieldErrors,
  type ActionState,
} from "@/lib/validation";

export async function submitContactMessage(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = contactSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    message: String(formData.get("message") ?? ""),
  });

  if (!parsed.success) {
    return { ok: false, errors: fieldErrors(parsed.error) };
  }

  await createContactMessage({
    name: parsed.data.name,
    contact: parsed.data.contact,
    message: parsed.data.message,
  });

  return {
    ok: true,
    message: "Message received. We will be in touch as soon as we can.",
  };
}
