import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";
import { logos } from "@/mock/data";

export const Logos = () => (
  <SectionWrapper tone="muted" size="sm" aria-label="Trusted by">
    <Container>
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by operations teams at
      </p>
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6">
        {logos.map((name) => (
          <li
            key={name}
            className="flex items-center justify-center text-base sm:text-lg font-semibold tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors"
          >
            {name}
          </li>
        ))}
      </ul>
    </Container>
  </SectionWrapper>
);
