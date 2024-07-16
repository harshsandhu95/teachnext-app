"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { PanelLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/Breadcrumb";
import { capitalise } from "@/lib/utils";
import Navbar from "./Navbar";

export default function Topbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeftIcon className="size-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Navigate through the dashboard using this menu
          </SheetDescription>
          <Navbar setOpen={setOpen} />
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={pathname}>{capitalise(pathname.slice(1))}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <div className="relative ml-auto flex-1 md:grow-0"> */}
      {/*   <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
      {/*   <Input */}
      {/*     type="search" */}
      {/*     placeholder="Search..." */}
      {/*     className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" */}
      {/*   /> */}
      {/* </div> */}
      <div className="ml-auto">
        <UserButton />
      </div>
    </header>
  );
}
