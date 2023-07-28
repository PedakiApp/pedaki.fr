import React from "react";
import "@pedaki/common/styles/globals.css";
import "~/styles/globals.css";
import { fontClassName } from "@pedaki/common/styles/fonts";
import { cn } from "@pedaki/common/lib/utils";
import seoConfig from "../../seo.config";
import Header from "~/components/header";
import { Providers } from "~/app/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

export const metadata = seoConfig;
