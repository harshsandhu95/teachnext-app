import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LeafIcon, Settings2Icon, SunMoonIcon } from "lucide-react";
import { dashboardlinks } from "@/lib/navigations";
import { capitalise, cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setOpen }: Props) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isDark = React.useMemo(() => theme === "dark", [theme]);

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link
        href="/"
        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
      >
        <LeafIcon className="size-5 transition-all group-hover:scale-110" />
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
          onClick={() => setOpen(false)}
        >
          <link.icon className="size-5" />
          {link.label}
        </Link>
      ))}

      <div
        onClick={toggleTheme}
        className="flex items-center gap-4 px-2.5 text-muted-foreground"
      >
        <SunMoonIcon className="size-5" />
        {capitalise(theme ?? "")} Mode
      </div>

      <Link
        href="/settings"
        className={cn([
          "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
          pathname === "/settings" ? "text-foreground" : "",
        ])}
        onClick={() => setOpen(false)}
      >
        <Settings2Icon className="size-5" />
        Settings
      </Link>
    </nav>
  );
}
