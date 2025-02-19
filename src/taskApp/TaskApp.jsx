import { useState } from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    const newTask = {
      id: task.length + 1,
      text: task,
      completed: false,
    };
    setTasks((tasksBef) => [...tasksBef, newTask]);
    console.log(tasks);
  }

  function handleToggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div>
      <FormTask onAddTask={handleAddTask} />
      <TaskList items={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}
