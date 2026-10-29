"use server";

import { createPrayerRequest } from "@/lib/store";
import {
  emptyActionState,
  fieldErrors,
  prayerSchema,
  type ActionState,
} from "@/lib/validation";

function asBool(value: FormDataEntryValue | null) {
  return value === "on" || value === "true" || value === "yes";
}

export async function submitPrayerRequest(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = prayerSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    request: String(formData.get("request") ?? ""),
    isAnonymous: asBool(formData.get("isAnonymous")),
    wantsContact: asBool(formData.get("wantsContact")),
  });

  if (!parsed.success) {
    return { ok: false, errors: fieldErrors(parsed.error) };
  }

  const data = parsed.data;
  await createPrayerRequest({
    name: data.isAnonymous ? null : (data.name ?? null),
    email: data.isAnonymous && !data.wantsContact ? null : (data.email ?? null),
    phone: data.isAnonymous && !data.wantsContact ? null : (data.phone ?? null),
    request: data.request,
    isAnonymous: data.isAnonymous,
    wantsContact: data.wantsContact,
  });

  return {
    ok: true,
    message: "We have received your request. You are not carrying this alone.",
  };
}

export async function getEmptyPrayerState(): Promise<ActionState> {
  return emptyActionState;
}
