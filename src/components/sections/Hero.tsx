import Image from "next/image";

import { Container } from "@/components/ui-kit/Container";
import { Button } from "@/components/ui-kit/Button";
import { Heading } from "@/components/ui-kit/Heading";
import { hero } from "@/mock/data";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Heading
              eyebrow={hero.eyebrow}
              title={hero.title}
              subtitle={hero.subtitle}
              as="h1"
              size="xl"
            />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" asChildHref={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button variant="secondary" size="lg" asChildHref={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              No credit card required · 14-day free trial
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-accent to-transparent blur-2xl"
              />
              <Image
                src={heroImage}
                alt="Northwind analytics dashboard preview"
                width={1280}
                height={960}
                priority
                className="relative w-full h-auto rounded-xl border border-border shadow-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
