import { Prisma } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Prisma.todoCreateInput[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Prisma.todoCreateInput[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Prisma.todoCreateInput>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
