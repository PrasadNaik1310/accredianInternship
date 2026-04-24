import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Providers } from "./providers";

import "../src/index.css";

export const metadata: Metadata = {
  title: "Northwind",
  applicationName: "accredianInternship",
  description: "accredianInternship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}