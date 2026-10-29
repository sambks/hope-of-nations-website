"use server";

import { createDeliveranceSignup } from "@/lib/store";
import {
  deliveranceSchema,
  fieldErrors,
  type ActionState,
} from "@/lib/validation";

export async function submitDeliveranceSignup(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = deliveranceSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    contact: String(formData.get("contact") ?? ""),
    note: String(formData.get("note") ?? ""),
  });

  if (!parsed.success) {
    return { ok: false, errors: fieldErrors(parsed.error) };
  }

  await createDeliveranceSignup({
    name: parsed.data.name,
    contact: parsed.data.contact,
    note: parsed.data.note ?? null,
  });

  return {
    ok: true,
    message: "Thank you. Pastor Claudine will be in touch about next steps for deliverance.",
  };
}
