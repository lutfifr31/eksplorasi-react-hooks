import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Baca dokumentasi React useEffect", done: true },
    { id: 2, text: "Bikin komponen To-Do List", done: false },
  ]);
  const [input, setInput] = useState("");

  const tambahTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const itemBaru = {
      id: Date.now(),
      text: input,
      done: false,
    };

    // Pakai spread operator [...todos, itemBaru], BUKAN todos.push()
    setTodos([...todos, itemBaru]);
    setInput("");
  };

  const toggleSelesai = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const hapusTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
      <h2>2. To-Do List (useState Array)</h2>

      <form onSubmit={tambahTodo} style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Ketik tugas baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button type="submit">Tambah</button>
      </form>

      {todos.length === 0 ? (
        <p style={{ color: "gray" }}>Belum ada tugas.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              <span
                onClick={() => toggleSelesai(todo.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: todo.done ? "line-through" : "none",
                  color: todo.done ? "gray" : "inherit",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => hapusTodo(todo.id)} style={{ color: "red" }}>
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}