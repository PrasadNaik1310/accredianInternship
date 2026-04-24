import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";
import { Heading } from "@/components/ui-kit/Heading";
import { Card } from "@/components/ui-kit/Card";
import { testimonials } from "@/mock/data";

export const Testimonials = () => (
  <SectionWrapper id="testimonials">
    <Container>
      <Heading
        eyebrow="Customers"
        title="Loved by operators at the world's most demanding companies."
        align="center"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.author} className="flex flex-col">
            <p className="text-base leading-relaxed text-foreground">
              “{t.quote}”
            </p>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-sm font-semibold text-foreground">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </SectionWrapper>
);
