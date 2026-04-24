import { Container } from "@/components/ui-kit/Container";
import { footer } from "@/mock/data";
import { brand } from "@/mock/data";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-14">
    <Container>
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-sm">
              N
            </span>
            <span className="text-foreground">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {brand.tagline}.
          </p>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}, Inc. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">SOC 2 · HIPAA · GDPR</p>
      </div>
    </Container>
  </footer>
);
