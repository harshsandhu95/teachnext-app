import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todo } from "@/app/types";

const initialState: todo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<todo>) => {
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
