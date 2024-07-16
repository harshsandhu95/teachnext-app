import { Button } from "@/components/ui/Button";

export default function TodoList() {
  return (
    <div className="py-12 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">You have no todos</h3>
        <p className="text-sm text-muted-foreground">
          Start tracking your todos today!
        </p>
        <Button className="mt-4">Add a Todo</Button>
      </div>
    </div>
  );
}
