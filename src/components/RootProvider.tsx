"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { AppStore, makeStore } from "@/lib/store";
import { TooltipProvider } from "@/components/ui/Tooltip";

interface Props extends React.PropsWithChildren {}

export default function RootProvider({ children }: Props) {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ReduxProvider store={storeRef.current}>
      <ClerkProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </ClerkProvider>
    </ReduxProvider>
  );
}
