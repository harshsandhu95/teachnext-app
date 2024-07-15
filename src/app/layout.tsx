import type { Metadata } from "next";
import RootProvider from "@/components/RootProvider";
import { sans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.variable}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
