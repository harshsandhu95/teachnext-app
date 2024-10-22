import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Menu from "./Menu";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Skeleton } from "../ui/Skeleton";

export default function Header() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
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
          <SignedOut>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/sign-up">Sign up</Link>
              </Button>
            </div>
          </SignedOut>

          <ClerkLoading>
            <Skeleton className="size-7" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <div className="flex items-center gap-4">
                <UserButton />

                <Button asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
            </SignedIn>
          </ClerkLoaded>
        </div>

        <div className="md:hidden place-self-end self-center">
          <Menu navlinks={navlinks} />
        </div>
      </div>
    </header>
  );
}
