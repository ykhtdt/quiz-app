import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function Container({ className, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "flex flex-col items-center shrink-0 grow mx-auto px-4 sm:px-8 max-w-desktop",
        className,
      )}
    >
      {children}
    </div>
  );
}
