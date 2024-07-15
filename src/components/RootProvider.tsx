"use client";

import { ClerkProvider } from "@clerk/nextjs";

interface Props extends React.PropsWithChildren {}

export default function RootProvider({ children }: Props) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
