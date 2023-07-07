import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "잠자기", status: "active" },
    { id: 2, text: "멍 때리기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => {
    console.log(deleted);
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
