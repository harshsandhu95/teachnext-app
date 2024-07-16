"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LeafIcon, Settings2Icon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { cn } from "@/lib/utils";
import { dashboardlinks } from "@/lib/navigations";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <LeafIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">TeachNext</span>
        </Link>
        {dashboardlinks.map((link) => (
          <Tooltip key={link.label}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                className={cn([
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === link.href ? "text-foreground" : "",
                ])}
              >
                <link.icon className="size-5" />
                <span className="sr-only">{link.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{link.label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ThemeSwitch />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/settings"
              className={cn([
                "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                pathname === "/settings" ? "text-foreground" : "",
              ])}
            >
              <Settings2Icon className="size-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
