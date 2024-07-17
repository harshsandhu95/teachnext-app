"use client";

import React from "react";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/ContextMenu";
import { cn } from "@/lib/utils";
import TodoContextMenu from "./TodoContextMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { deleteTodoById, fetchTodos, updateTodo } from "@/app/actions";
import {
  removeTodo,
  setTodos,
  toggleTodo,
} from "@/lib/features/todo/todoSlice";
import { Prisma } from "@prisma/client";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const isTodosEmpty = React.useMemo(() => todos.length === 0, [todos]);

  async function handleCheckedChange(todo: Prisma.todoUpdateInput) {
    const updatedTodo = { ...todo, completed: !todo.completed };

    const response = await updateTodo(updatedTodo);

    if (response) {
      dispatch(toggleTodo(todo.id as string));
    }
  }

  async function handleRemove(id: string) {
    const response = await deleteTodoById(id);

    if (response) {
      dispatch(removeTodo(id));
    }
  }

  React.useEffect(() => {
    async function fetch() {
      const data = await fetchTodos();
      dispatch(setTodos(data));
    }

    return () => {
      fetch();
    };
  }, [dispatch]);

  return (
    <div className="py-4 px-8 h-full max-h-96 flex flex-1 items-center justify-center bg-muted rounded-lg border border-dashed shadow-sm overflow-y-auto">
      {isTodosEmpty ? (
        <div className="py-12 flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no todos
          </h3>
          <p className="text-sm text-muted-foreground">
            Start tracking your todos today!
          </p>
        </div>
      ) : (
        <div className="py-2 flex-1 flex flex-col gap-1">
          {todos.map((todo) => (
            <ContextMenu key={todo.id}>
              <ContextMenuTrigger>
                <div className="group px-4 py-2 flex-1 flex items-center gap-4 hover:bg-background rounded-lg">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => handleCheckedChange(todo)}
                  />
                  <p
                    className={cn([
                      "flex-1",
                      todo.completed ? "line-through" : "",
                    ])}
                  >
                    {todo.text}
                  </p>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleRemove(todo.id as string)}
                    className="invisible group-hover:visible"
                  >
                    <Trash2Icon size={16} />
                  </Button>
                </div>
              </ContextMenuTrigger>

              <TodoContextMenu
                id={todo.id as string}
                handleRemove={handleRemove}
              />
            </ContextMenu>
          ))}
        </div>
      )}
    </div>
  );
}
