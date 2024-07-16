"use client";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
import { removeTodo, toggleTodo } from "@/lib/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { cn } from "@/lib/utils";
import { Trash2Icon } from "lucide-react";
import React from "react";
import TodoContextMenu from "./TodoContextMenu";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const isTodosEmpty = React.useMemo(() => todos.length === 0, [todos]);

  function handleCheckedChange(id: string) {
    dispatch(toggleTodo(id));
  }

  function handleRemove(id: string) {
    dispatch(removeTodo(id));
  }

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
                    onCheckedChange={() => handleCheckedChange(todo.id)}
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
                    onClick={() => handleRemove(todo.id)}
                    className="invisible group-hover:visible"
                  >
                    <Trash2Icon size={16} />
                  </Button>
                </div>
              </ContextMenuTrigger>

              <TodoContextMenu id={todo.id} handleRemove={handleRemove} />
            </ContextMenu>
          ))}
        </div>
      )}
    </div>
  );
}
