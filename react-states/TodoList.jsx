import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const uppercase1 = () => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      text: todo.text.toUpperCase(),
    }));
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  const addTodo = () => {
    const t = text.trim();
    if (!t) return;
    const newTodo = { id: uuidv4(), text: t, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setText("");
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <button onClick={addTodo}>Add Todo</button>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}{" "}
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
            <button onClick={uppercase1}>Upper Case</button>
          </li>
        ))}
      </ul>
      <button onClick={uppercase1}>Upper Case</button>
    </div>
  );
}
