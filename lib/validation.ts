import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .optional()
  .transform((v) => (v ? v : undefined));

export const prayerSchema = z
  .object({
    name: optionalText,
    email: optionalText,
    phone: optionalText,
    request: z.string().trim().min(8, "Please share a little more so we can pray with you."),
    isAnonymous: z.boolean(),
    wantsContact: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.wantsContact && !data.email && !data.phone) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Add an email or WhatsApp number so someone can reach you.",
      });
    }
  });

export const visitSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  contact: z.string().trim().min(5, "Add an email or WhatsApp number."),
  partySize: z.number().int().min(1).max(30),
  note: optionalText,
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  contact: z.string().trim().min(5, "Add an email or WhatsApp number."),
  message: z.string().trim().min(8, "Please write a short message."),
});

export const deliveranceSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name."),
  contact: z.string().trim().min(5, "Add an email or WhatsApp number."),
  note: optionalText,
});

function ageFromDob(value: string): number | null {
  const dob = new Date(`${value}T00:00:00`);
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age -= 1;
  }
  return age;
}

export const baptismSchema = z
  .object({
    name: z.string().trim().min(2, "Please tell us your name."),
    contact: z.string().trim().min(5, "Add an email or WhatsApp number."),
    dateOfBirth: z.string().trim().min(1, "Please add your date of birth."),
    note: optionalText,
  })
  .superRefine((data, ctx) => {
    const age = ageFromDob(data.dateOfBirth);
    if (age === null) {
      ctx.addIssue({
        code: "custom",
        path: ["dateOfBirth"],
        message: "Please enter a valid date of birth.",
      });
      return;
    }
    if (age < 14) {
      ctx.addIssue({
        code: "custom",
        path: ["dateOfBirth"],
        message: "Baptism is for people 14 years and older.",
      });
    }
  });

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

export type ActionState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export const emptyActionState: ActionState = { ok: false };
