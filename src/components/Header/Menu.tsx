"use client";

import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
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
                legacyBehavior
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
            <div className="flex flex-col gap-y-4">
              <Button asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
