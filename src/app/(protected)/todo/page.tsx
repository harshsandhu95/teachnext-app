import TodoList from "./_components/TodoList";
import CreateTodo from "./_components/CreateTodo";

export default function Todo() {
  return (
    <section className="mx-auto h-full w-full max-w-2xl grid grid-cols-1 gap-4">
      <CreateTodo />
      <TodoList />
    </section>
  );
}
