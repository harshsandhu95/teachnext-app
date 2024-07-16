"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { addTodo } from "@/lib/features/todo/todoSlice";
import { useAppDispatch } from "@/lib/hooks/useRedux";
import React from "react";

export default function CreateTodo() {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  function createTodo(formData: FormData) {
    const text = formData.get("text") as string;
    if (text.trim() !== "") dispatch(addTodo(text.trim()));

    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <form action={createTodo} className="flex justify-center items-center">
      <Input ref={inputRef} name="text" type="text" placeholder="Add todo" />
      <Button type="submit" className="ml-2">
        Add
      </Button>
    </form>
  );
}
