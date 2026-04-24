import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";
import { Heading } from "@/components/ui-kit/Heading";
import { steps } from "@/mock/data";

export const HowItWorks = () => (
  <SectionWrapper id="how" tone="muted">
    <Container>
      <Heading
        eyebrow="How it works"
        title="From zero to enterprise in three steps."
        subtitle="A guided onboarding that gets your first workflow live in days, not quarters."
        align="center"
      />
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.step} className="relative">
            <div className="rounded-xl border border-border bg-card p-7 h-full">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-semibold text-primary">
                  {s.step}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-border"
              />
            )}
          </li>
        ))}
      </ol>
    </Container>
  </SectionWrapper>
);
