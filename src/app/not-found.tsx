"use client";

import Link from "next/link";

import { Button } from "@/component/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline underline-offset-4">
        Return Home
      </Link>
    </div>
  );
}
