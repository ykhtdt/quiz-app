import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { PageWrapper } from "@/components/layouts/page-wrapper";
import { Toaster } from "@/components/ui/toaster";

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
        <PageWrapper>
          <main className="flex flex-1">{children}</main>
          <Toaster />
        </PageWrapper>
      </body>
    </html>
  );
}
