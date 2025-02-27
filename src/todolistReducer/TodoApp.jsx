import { useReducer } from "react";
import { v4 } from "uuid";
import TodolistForm from "./TodolistForm";
import TodoList from "./TodoList";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      const newState = [
        ...state,
        { id: v4(), text: action.text, cate: action.cate },
      ];
      console.log(newState);
      return newState;
    }
    case "SWITCH_STATUS":
      return state.map((note) =>
        note.id === action.id ? { ...note, done: !note.done } : note
      );
    case "DELETE_NOTE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <TodolistForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
