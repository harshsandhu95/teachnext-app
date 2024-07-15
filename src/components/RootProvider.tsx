"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/Tooltip";

interface Props extends React.PropsWithChildren {}

export default function RootProvider({ children }: Props) {
  return (
    <ClerkProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ClerkProvider>
  );
}
