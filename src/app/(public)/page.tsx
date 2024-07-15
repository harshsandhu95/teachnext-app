import { SendHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function Page() {
  return (
    <section className="py-16 container max-w-5xl flex flex-col items-center justify-center gap-y-4 text-center">
      <h1 className="text-4xl md:text-7xl font-bold">
        Your <span className="text-primary">AI-powered teaching assistant</span>{" "}
        to help you in your everyday tasks.
      </h1>

      <p>Join the waiting list to get early access.</p>

      <form className="w-full max-w-sm flex items-center gap-2">
        <Label htmlFor="waiting-list" className="sr-only">
          Join the waiting list
        </Label>
        <Input
          name="waiting-list"
          type="email"
          placeholder="johndoe@example.com"
          className="flex-1"
        />
        <Button size="icon">
          <SendHorizontalIcon size={16} />
        </Button>
      </form>
    </section>
  );
}
