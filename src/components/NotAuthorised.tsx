import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotAuthorised() {
  return (
    <div className="container flex-1 flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">
        You are not authorised to view this page
      </h1>
      <p>Please sign in to view the dashboard.</p>
      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </div>
  );
}
