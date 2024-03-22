import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/component/provider/theme-provider";
import { PageWrapper } from "@/component/layout/page-wrapper";
import { Container } from "@/component/layout/container";
import { Toaster } from "@/component/ui/toaster";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageWrapper>
            <main className="flex flex-1">
              <Container>{children}</Container>
            </main>
            <Toaster />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
