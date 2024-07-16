"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboardIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { Button, buttonVariants } from "@/components/ui/Button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

interface Props {
  navlinks: { name: string; href: string }[];
}

export default function Menu({ navlinks }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div className={buttonVariants({ size: "icon" })}>
          <MenuIcon size={16} />
        </div>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="h-full grid grid-rows-[auto_1fr_auto] space-y-8">
          <SheetHeader>
            <SheetTitle>
              <span className="text-lg font-bold">TeachNext</span>
            </SheetTitle>
            <SheetDescription className="sr-only">Mobile menu</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4">
            {navlinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <SheetFooter>
            <SignedIn>
              <div className="flex flex-col gap-y-4">
                <Button asChild>
                  <Link href="/dashboard">
                    <LayoutDashboardIcon size={16} />
                    Dashboard
                  </Link>
                </Button>
                <SignOutButton>
                  <Button variant="secondary">
                    <LogOutIcon size={16} />
                    Sign out
                  </Button>
                </SignOutButton>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex flex-col gap-y-4">
                <Button asChild>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </div>
            </SignedOut>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
