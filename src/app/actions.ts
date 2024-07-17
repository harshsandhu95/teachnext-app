"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function fetchTodos() {
  const { userId } = auth();

  if (userId) {
    return await prisma.todo.findMany({
      where: {
        user_id: userId,
      },
      orderBy: [{ created_at: "asc" }],
    });
  } else return [];
}

export async function createTodo(text: string) {
  const { userId } = auth();

  if (userId) {
    const data = {
      text: text,
      user_id: userId,
    };

    return await prisma.todo.create({
      data,
    });
  }
}

export async function updateTodo(
  item: Prisma.XOR<Prisma.todoUpdateInput, Prisma.todoUncheckedUpdateInput>,
) {
  const { userId } = auth();

  if (userId) {
    return await prisma.todo.update({
      data: item,
      where: {
        id: item.id as string,
      },
    });
  }
}

export async function deleteTodoById(id: string) {
  const { userId } = auth();

  if (userId) {
    return await prisma.todo.delete({
      where: {
        id: id,
      },
    });
  }
}
