import { v4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  function handleAddTodo(todo, cate) {
    let newTodo = {
      id: v4(),
      todo: todo,
      status: false,
      categories: cate,
    };
    setTodos((befTodos) => [...befTodos, newTodo]);
    console.log(todos);
  }

  function handleStatChange(id) {
    setTodos((befTodos) =>
      befTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  function handleDelTodo(id) {
    setTodos((befTodo) => befTodo.filter((todo) => todo.id !== id));
  }

  function handleCategories(categories) {
    setFilteredCategory(categories);
  }

  const filteredTodos = filteredCategory
    ? todos.filter((todo) => todo.categories === filteredCategory)
    : todos;

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} addCate={handleAddTodo}></TodoForm>
      <TodoList
        todos={filteredTodos}
        switchStat={handleStatChange}
        markDel={handleDelTodo}
        onFiltered={handleCategories}
      />
    </>
  );
}
