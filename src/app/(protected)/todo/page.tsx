import { Input } from "@/components/ui/Input";
import TodoList from "./_components/TodoList";
import { Button } from "@/components/ui/Button";

export default function Todo() {
  return (
    <section className="mx-auto h-full w-full max-w-2xl grid grid-cols-1 gap-4">
      <TodoList />

      <form className="flex justify-center items-center">
        <Input type="text" placeholder="Add todo" />
        <Button className="ml-2">Add</Button>
      </form>
    </section>
  );
}
