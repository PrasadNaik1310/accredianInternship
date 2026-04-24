// Mock lead capture handler. In a real backend this would POST to /api/leads.
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
});

export type Lead = z.infer<typeof leadSchema>;

export async function submitLead(input: Lead): Promise<{ ok: true; id: string }> {
  // Validate
  const parsed = leadSchema.parse(input);
  // Simulate network latency
  await new Promise((r) => setTimeout(r, 600));
  // In production this would be a real fetch:
  // const res = await fetch("/api/leads", { method: "POST", body: JSON.stringify(parsed) });
  return { ok: true, id: crypto.randomUUID() };
}
