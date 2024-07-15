"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LeafIcon, PanelLeftIcon, Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/Breadcrumb";
import { dashboardlinks } from "@/lib/navigations";
import { capitalise, cn } from "@/lib/utils";

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <LeafIcon className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">TeachNext</span>
            </Link>
            {dashboardlinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn([
                  "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
                  pathname === link.href ? "text-foreground" : "",
                ])}
              >
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            ))}
            <Link
              href="/settings"
              className={cn([
                "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
                pathname === "/settings" ? "text-foreground" : "",
              ])}
            >
              <Settings2Icon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
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
