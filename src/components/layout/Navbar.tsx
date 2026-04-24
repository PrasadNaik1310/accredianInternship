"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui-kit/Container";
import { Button } from "@/components/ui-kit/Button";
import { brand, navLinks } from "@/mock/data";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-background/85 backdrop-blur border-b border-border"
          : "bg-background/0"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-sm">
            N
          </span>
          <span className="text-foreground">{brand.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChildHref="#cta" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="primary" size="sm" asChildHref="#cta">
            Start free
          </Button>
        </div>
      </Container>
    </header>
  );
};
