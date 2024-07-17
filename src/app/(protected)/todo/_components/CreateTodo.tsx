"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createTodo } from "@/app/actions";
import { useAppDispatch } from "@/lib/hooks/useRedux";
import { addTodo } from "@/lib/features/todo/todoSlice";

export default function CreateTodo() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = inputRef.current?.value || "";

    if (text.trim() !== "") {
      const createdTodo = await createTodo(text.trim());

      if (createdTodo) dispatch(addTodo(createdTodo));
    }

    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <form onSubmit={onSubmit} className="flex justify-center items-center">
      <Input ref={inputRef} name="text" type="text" placeholder="Add todo" />
      <Button type="submit" className="ml-2">
        Add
      </Button>
    </form>
  );
}
