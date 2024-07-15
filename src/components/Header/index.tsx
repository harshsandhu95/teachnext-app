import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <div className="h-16 container grid grid-cols-2 md:grid-cols-3 items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">TeachNext</span>
        </div>

        <div className="hidden md:block place-self-center">
          <nav className="flex items-center gap-4">
            {navlinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="text-sm font-medium">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block place-self-end self-center">
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden place-self-end self-center">
          <Sheet>
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
                  <SheetDescription className="sr-only">
                    Mobile menu
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-4">
                  {navlinks.map((link, idx) => (
                    <Link key={idx} href={link.href} className="font-medium">
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
        </div>
      </div>
    </header>
  );
}
