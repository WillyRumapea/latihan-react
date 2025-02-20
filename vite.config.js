import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      index: "index.html",
      form_name: "form_name.html",
      task_app: "task_app.html",
      todo_list: "todo_list.html",
      todo_list_continues: "todo_list_continues.html",
    },
  },
});
