"use client";

import React from "react";
import { useTheme } from "next-themes";
import { SunMoonIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = React.useMemo(() => theme === "dark", [theme]);

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          onClick={toggleTheme}
        >
          <SunMoonIcon className="size-5" />
          <span suppressHydrationWarning className="sr-only">
            {theme}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent suppressHydrationWarning side="right">
        {theme}
      </TooltipContent>
    </Tooltip>
  );
}
