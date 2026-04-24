"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";
import { Heading } from "@/components/ui-kit/Heading";
import { Button } from "@/components/ui-kit/Button";
import { submitLead, leadSchema } from "@/lib/leads";
import { toast } from "@/hooks/use-toast";

export const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({ name, email });
    if (!parsed.success) {
      toast({
        title: "Check your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    try {
      setLoading(true);
      await submitLead(parsed.data);
      setDone(true);
      toast({ title: "You're on the list", description: "We'll be in touch shortly." });
      setName("");
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="cta" tone="default" size="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Heading
            eyebrow="Get started"
            title="Want to learn more ?"
            subtitle="Talk to our team "
            inverse
            size="lg"
          />
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-xl border border-blue-700 bg-blue-600 p-6 text-white shadow-2xl"
          >
            <div
              aria-hidden
              className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/20"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-white/10"
            />
            <div
              aria-hidden
              className="absolute right-0 top-0 h-56 w-28 rounded-l-full bg-white/45"
            />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-white/80">Full name</span>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block text-sm">
                <span className="text-white/80">Work email</span>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-white/10 bg-white/5 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="jane@company.com"
                />
              </label>
            </div>
            <div className="relative mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60">
                By submitting you agree to our terms and privacy policy.
              </p>
              <Button
                type="submit"
                variant="inverse"
                size="md"
                disabled={loading}
              >
                {loading ? "Submitting…" : done ? "Submitted ✓" : "Request access"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </SectionWrapper>
  );
};
