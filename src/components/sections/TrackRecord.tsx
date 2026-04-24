import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";

const stats = [
  {
    value: "10K+",
    text: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    text: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    text: "Active Learners Engaged In Dynamic Courses",
  },
];

export const TrackRecord = () => (
  <SectionWrapper tone="muted" size="md" aria-label="Track record">
    <Container>
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="mt-3 text-lg text-foreground/80">
            The Numbers Behind <span className="text-blue-600">Our Success</span>
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-0">
          {stats.map((item, index) => (
            <article
              key={item.value}
              className="px-4 text-center md:px-10 md:py-1 md:[&:not(:first-child)]:border-l md:border-border/90"
            >
              <div className="mx-auto inline-flex h-14 min-w-[96px] items-center justify-center rounded-full bg-blue-100 px-6 text-4xl font-bold text-blue-600">
                {item.value}
              </div>
              <p className="mx-auto mt-6 max-w-[18ch] text-2xl font-medium leading-relaxed text-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  </SectionWrapper>
);