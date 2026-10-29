import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type PrayerStatus = "NEW" | "PRAYING" | "FOLLOW_UP" | "RESOLVED";

export type PrayerRequest = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  request: string;
  isAnonymous: boolean;
  wantsContact: boolean;
  status: PrayerStatus;
  createdAt: string;
};

export type VisitPlan = {
  id: string;
  name: string;
  contact: string;
  partySize: number;
  note: string | null;
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  contact: string;
  message: string;
  createdAt: string;
};

export type DeliveranceSignup = {
  id: string;
  name: string;
  contact: string;
  note: string | null;
  createdAt: string;
};

export type BaptismSignup = {
  id: string;
  name: string;
  contact: string;
  dateOfBirth: string;
  note: string | null;
  createdAt: string;
};

type StoreFile<T> = { items: T[] };

const dataDir = path.join(process.cwd(), "data");

async function readStore<T>(file: string): Promise<T[]> {
  const full = path.join(dataDir, file);
  try {
    const raw = await readFile(full, "utf8");
    const parsed = JSON.parse(raw) as StoreFile<T>;
    return parsed.items ?? [];
  } catch {
    return [];
  }
}

async function writeStore<T>(file: string, items: T[]) {
  await mkdir(dataDir, { recursive: true });
  const full = path.join(dataDir, file);
  await writeFile(full, JSON.stringify({ items }, null, 2), "utf8");
}

export async function createPrayerRequest(
  input: Omit<PrayerRequest, "id" | "status" | "createdAt">,
): Promise<PrayerRequest> {
  const item: PrayerRequest = {
    ...input,
    id: randomUUID(),
    status: "NEW",
    createdAt: new Date().toISOString(),
  };
  const items = await readStore<PrayerRequest>("prayer-requests.json");
  items.unshift(item);
  await writeStore("prayer-requests.json", items);
  return item;
}

export async function createVisitPlan(
  input: Omit<VisitPlan, "id" | "createdAt">,
): Promise<VisitPlan> {
  const item: VisitPlan = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const items = await readStore<VisitPlan>("visit-plans.json");
  items.unshift(item);
  await writeStore("visit-plans.json", items);
  return item;
}

export async function createContactMessage(
  input: Omit<ContactMessage, "id" | "createdAt">,
): Promise<ContactMessage> {
  const item: ContactMessage = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const items = await readStore<ContactMessage>("contact-messages.json");
  items.unshift(item);
  await writeStore("contact-messages.json", items);
  return item;
}

export async function createDeliveranceSignup(
  input: Omit<DeliveranceSignup, "id" | "createdAt">,
): Promise<DeliveranceSignup> {
  const item: DeliveranceSignup = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const items = await readStore<DeliveranceSignup>("deliverance-signups.json");
  items.unshift(item);
  await writeStore("deliverance-signups.json", items);
  return item;
}

export async function createBaptismSignup(
  input: Omit<BaptismSignup, "id" | "createdAt">,
): Promise<BaptismSignup> {
  const item: BaptismSignup = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const items = await readStore<BaptismSignup>("baptism-signups.json");
  items.unshift(item);
  await writeStore("baptism-signups.json", items);
  return item;
}
